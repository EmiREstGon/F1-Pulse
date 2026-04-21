async function fetchJSON(url, options = {}) {
  const {
    retries = 3,
    retryDelay = 1200,
    returnNullOn404 = false
  } = options;

  for (let attempt = 0; attempt <= retries; attempt++) {
    const res = await fetch(url);

    if (res.ok) {
      return res.json();
    }

    if (res.status === 404 && returnNullOn404) {
      return null;
    }

    if (res.status === 429 && attempt < retries) {
      const retryAfter = Number(res.headers.get("Retry-After"));
      const waitMs = Number.isFinite(retryAfter) && retryAfter > 0
        ? retryAfter * 1000
        : retryDelay * (attempt + 1);

      await sleep(waitMs);
      continue;
    }

    throw new Error(`Error ${res.status}: ${url}`);
  }
}

function getCompletedRaceSessions(sessions) {
  if (!Array.isArray(sessions)) return [];

  const now = new Date();

  return sessions
    .filter(session => {
      const sessionType = (session.session_type || "").toLowerCase();
      const sessionDate = session?.date_start ? new Date(session.date_start) : null;

      return sessionType === "race" && sessionDate && sessionDate <= now;
    })
    .sort((a, b) => new Date(b.date_start) - new Date(a.date_start));
}

async function findLatestRaceSessionWithStandings(sessions) {
  const candidates = getCompletedRaceSessions(sessions);

  for (const session of candidates) {
    await sleep(250);

    const driverStandings = await fetchJSON(
      `${API_BASE}/championship_drivers?session_key=${session.session_key}`,
      {
        retries: 2,
        retryDelay: 1500,
        returnNullOn404: true
      }
    ).catch(() => null);

    if (!Array.isArray(driverStandings) || driverStandings.length === 0) {
      continue;
    }

    await sleep(250);

    const constructorStandings = await fetchJSON(
      `${API_BASE}/championship_teams?session_key=${session.session_key}`,
      {
        retries: 2,
        retryDelay: 1500,
        returnNullOn404: true
      }
    ).catch(() => null);

    if (!Array.isArray(constructorStandings) || constructorStandings.length === 0) {
      continue;
    }

    return {
      session,
      driverStandings,
      constructorStandings
    };
  }

  return {
    session: null,
    driverStandings: [],
    constructorStandings: []
  };
}