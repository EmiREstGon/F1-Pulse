function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function normalizeDriverName(name = "") {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeTeamName(name) {
  return (name || "")
    .toLowerCase()
    .replace("f1 team", "")
    .replace("team", "")
    .trim();
}

function getTeamMonoLogo(teamName) {
  const normalized = normalizeTeamName(teamName);

  for (const [key, value] of Object.entries(teamMonoLogos)) {
    if (normalizeTeamName(key) === normalized) {
      return value;
    }
  }

  return "";
}

function getTeamColoredLogo(teamName) {
  const normalized = normalizeTeamName(teamName);

  for (const [key, value] of Object.entries(teamColoredLogos)) {
    if (normalizeTeamName(key) === normalized) {
      return value;
    }
  }

  return getTeamMonoLogo(teamName);  // fallback mono si falla
}

function getTeamColor(teamName) {
  const normalized = normalizeTeamName(teamName);

  for (const [key, value] of Object.entries(teamColors)) {
    if (normalizeTeamName(key) === normalized) {
      return value;
    }
  }

  return "#1f2937";  // fallback color oscuro si falla
}

function getTeamCountry(teamName) {
  const normalized = normalizeTeamName(teamName);

  for (const [key, value] of Object.entries(teamNationality)) {
    if (normalizeTeamName(key) === normalized) {
      return value;
    }
  }

  return "";
}

function getCountryData(input) {
  let countryName = "";

  if (typeof input === "string") {
    countryName = input;
  } else if (input && typeof input === "object") {
    countryName =
      input.country_name ||
      input.country ||
      input.nationality ||
      "";
  }

  if (!countryName) {
    return {
      name: "",
      nameES: "",
      iso: "",
      flagUrl: ""
    };
  }

  const iso = countryToISO[countryName] || "";
  const nameES = iso ? (regionNames.of(iso) || countryName) : countryName;
  const flagUrl = iso
    ? `https://flagicons.lipis.dev/flags/4x3/${iso.toLowerCase()}.svg`
    : "";

  return {
    name: countryName,
    nameES,
    iso,
    flagUrl
  };
}

function getTeamCountryCode(teamName) {
  const country = getTeamCountry(teamName);
  return getCountryData(country).iso;
}

function getTeamCountryNameES(teamName) {
  const country = getTeamCountry(teamName);
  return getCountryData(country).nameES;
}

function getTeamFlagUrl(teamName) {
  const country = getTeamCountry(teamName);
  return getCountryData(country).flagUrl;
}

function getNextMeeting(meetings) {
  const now = new Date();

  const futureMeetings = meetings
    .filter(meeting => new Date(meeting.date_start) >= now)
    .sort((a, b) => new Date(a.date_start) - new Date(b.date_start));

  if (futureMeetings.length) return futureMeetings[0];

  return [...meetings].sort((a, b) => new Date(b.date_start) - new Date(a.date_start))[0];
}

function getMeetingNameES(meeting) {
  const meetingName = meeting?.meeting_name || meeting?.meeting_official_name || "";
  return grandPrixTranslations[meetingName] || meetingName || "Gran Premio";
}

function getCircuitNameES(meeting) {
  const rawCircuit =
    meeting?.circuit_short_name ||
    meeting?.location ||
    "";

  const canonical = circuitAliases[rawCircuit] || rawCircuit;

  return circuitTranslations[canonical] || rawCircuit || "Circuito";
}

function getCircuitExtra(meeting) {
  const candidates = [
    meeting?.circuit_short_name,
    meeting?.location,
    meeting?.meeting_name?.replace(" Grand Prix", "").trim()
  ].filter(Boolean);

  for (const candidate of candidates) {
    const canonical = circuitAliases[candidate] || candidate;
    if (circuitExtraInfo[canonical]) {
      return {
        canonicalName: canonical,
        data: circuitExtraInfo[canonical]
      };
    }
  }

  return {
    canonicalName: meeting?.circuit_short_name || meeting?.location || "Circuito",
    data: {
      length: "N/D",
      laps: "N/D",
      lapRecord: "N/D",
      turns: "N/D"
    }
  };
}

function getCircuitTrackImage(meeting, index = 0) {
  const candidates = [
    meeting?.circuit_short_name,
    meeting?.location,
    meeting?.meeting_name?.replace(" Grand Prix", "").trim()
  ].filter(Boolean);

  for (const candidate of candidates) {
    const canonical = circuitAliases[candidate] || candidate;
    if (circuitTrackImages[canonical]) {
      return circuitTrackImages[canonical];
    }
  }

  return meeting?.circuit_image || circuitImages[index % circuitImages.length];
}

function hasStandingsData(rows) {
  return Array.isArray(rows) && rows.length > 0;
}

function getPositionBadgeClass(position, type = "driver") {
  if (position === 1) {
    return "bg-yellow-500/20 text-yellow-300";
  }

  if (position === 2) {
    return "bg-zinc-500/25 text-zinc-200";
  }

  if (position === 3) {
    return "bg-orange-500/20 text-orange-300";
  }

  return type === "driver"
    ? "bg-primary-container/15 text-white"
    : "bg-zinc-700/60 text-white";
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function round1(value) {
  return Math.round(value * 10) / 10;
}

function getCompletedMeetingsCount(meetings = []) {
  const now = new Date();

  return meetings.filter(meeting => {
    if (!meeting?.date_start) return false;
    return new Date(meeting.date_start) <= now;
  }).length;
}

function getTotalMeetingsCount(meetings = []) {
  return Array.isArray(meetings) ? meetings.length : 0;
}

function calculateProjectedPoints(currentPoints, completedMeetings, totalMeetings) {
  if (!completedMeetings || !totalMeetings) return Number(currentPoints || 0);

  const avgPointsPerRace = Number(currentPoints || 0) / completedMeetings;
  return avgPointsPerRace * totalMeetings;
}

function calculateProjectionIndex({
  position,
  projectedPoints,
  leaderProjectedPoints,
  avgPointsPerRace,
  leaderAvgPointsPerRace,
  nextProjectedPoints
}) {
  const safePosition = Number(position || 99);
  const safeProjected = Number(projectedPoints || 0);
  const safeLeaderProjected = Math.max(Number(leaderProjectedPoints || 0), 1);
  const safeAvg = Number(avgPointsPerRace || 0);
  const safeLeaderAvg = Math.max(Number(leaderAvgPointsPerRace || 0), 1);
  const safeNext = Number(nextProjectedPoints || 0);

  // fuerza relativa respecto al líder
  const projectedRatio = clamp(safeProjected / safeLeaderProjected, 0, 1);

  // ritmo relativo respecto al líder
  const avgRatio = clamp(safeAvg / safeLeaderAvg, 0, 1);

  // margen sobre el perseguidor inmediato
  const gapRatio = clamp((safeProjected - safeNext) / safeLeaderProjected, 0, 0.25) / 0.25;

  // posición actual
  const positionScore = clamp(1 - ((safePosition - 1) * 0.12), 0.15, 1);

  const score =
    projectedRatio * 0.45 +
    avgRatio * 0.25 +
    gapRatio * 0.20 +
    positionScore * 0.10;

  return Math.round(clamp(score * 100, 35, 92));
}

function buildPredictionRows(rows = [], meetings = [], nameField = "full_name") {
  const safeRows = Array.isArray(rows) ? rows : [];
  const completedMeetings = Math.max(getCompletedMeetingsCount(meetings), 1);
  const totalMeetings = Math.max(getTotalMeetingsCount(meetings), completedMeetings);

  const enriched = safeRows
    .filter(row => row.position_current != null)
    .map(row => {
      const currentPoints = Number(row.points_current || 0);
      const avgPointsPerRace = currentPoints / completedMeetings;
      const projectedPoints = calculateProjectedPoints(currentPoints, completedMeetings, totalMeetings);

      return {
        ...row,
        displayName: row[nameField] || row.team_name || "N/D",
        driver_number: row.driver_number ?? null,
        team_name: row.team_name ?? null,
        headshot_url: row.headshot_url ?? null,
        currentPoints,
        avgPointsPerRace,
        projectedPoints
      };
    })
    .sort((a, b) => b.projectedPoints - a.projectedPoints);

  if (!enriched.length) return [];

  const leaderProjectedPoints = enriched[0].projectedPoints;
  const leaderAvgPointsPerRace = enriched[0].avgPointsPerRace;

  return enriched.map((row, index, arr) => {
    const next = arr[index + 1];

    return {
      ...row,
      projectionIndex: calculateProjectionIndex({
        position: row.position_current,
        projectedPoints: row.projectedPoints,
        leaderProjectedPoints,
        avgPointsPerRace: row.avgPointsPerRace,
        leaderAvgPointsPerRace,
        nextProjectedPoints: next?.projectedPoints || 0
      })
    };
  }).slice(0, 3);
}