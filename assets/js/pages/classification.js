async function loadClasification() {
  try {
    const meetings = await fetchJSON(
      `${API_BASE}/meetings?year=${CURRENT_YEAR}`,
      { retries: 2 }
    );
    await sleep(200);

    const sessions = await fetchJSON(
      `${API_BASE}/sessions?year=${CURRENT_YEAR}`,
      { retries: 2 }
    );
    await sleep(200);

    const sortedMeetings = [...meetings].sort(
      (a, b) => new Date(a.date_start) - new Date(b.date_start)
    );

    const {
      session: latestRaceSession,
      driverStandings,
      constructorStandings
    } = await findLatestRaceSessionWithStandings(sessions);

    if (!latestRaceSession?.session_key) {
      renderDriverStandings([], []);
      renderConstructorStandings([]);
      renderSeasonPrediction([], [], [], []);
      return;
    }

    await sleep(250);
    const drivers = await fetchJSON(
      `${API_BASE}/drivers?session_key=${latestRaceSession.session_key}`,
      { retries: 2, retryDelay: 1500 }
    ).catch(() => []);

    renderDriverStandings(driverStandings, drivers, {
      limit: Infinity,
      columns: 2,
      splitAt: 11
    });
    renderConstructorStandings(constructorStandings, {
      limit: Infinity,
      columns: 2,
      splitAt: 6
    });
    renderSeasonPrediction(driverStandings, constructorStandings, sortedMeetings, drivers);

  } catch (error) {
    console.error("Error cargando clasificación:", error);

    renderDriverStandings([], [], {
      limit: Infinity,
      columns: 2,
      splitAt: 11
    });
    renderConstructorStandings([], {
      limit: Infinity,
      columns: 2,
      splitAt: 6
    });
    renderSeasonPrediction([], [], [], []);
  }
}

document.addEventListener("DOMContentLoaded", loadClasification);