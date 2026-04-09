const API_BASE = "https://api.openf1.org/v1";

const teamLogos = {
  "McLaren": "assets/img/logos/teams/mclaren.png",
  "Ferrari": "assets/img/logos/teams/ferrari.svg",
  "Mercedes": "assets/img/logos/teams/mercedes.svg",
  "Red Bull Racing": "assets/img/logos/teams/red-bull.png",
  "Aston Martin": "assets/img/logos/teams/aston-martin.png",
  "Alpine": "assets/img/logos/teams/alpine.png",
  "Williams": "assets/img/logos/teams/williams.png",
  "RB": "assets/img/logos/teams/rb.png",
  "Cadillac": "assets/img/logos/teams/cadillac.png",
  "Haas F1 Team": "assets/img/logos/teams/haas.png",
  "Audi": "assets/img/logos/teams/audi.png"
};

const circuitExtraInfo = {
  "Melbourne": { length: "5.278", laps: "58", lapRecord: "1:19.813", lapRecordDriver: "Charles Leclerc", lapRecordYear: "2024", turns: "14" },
  "Shanghai": { length: "5.451", laps: "56", lapRecord: "1:32.238", lapRecordDriver: "Michael Schumacher", lapRecordYear: "2004", turns: "16" },
  "Suzuka": { length: "5.807", laps: "53", lapRecord: "1:30.965", lapRecordDriver: "Kimi Antonelli", lapRecordYear: "2025", turns: "18" },
  "Bahrain": { length: "5.412", laps: "57", lapRecord: "1:31.447", lapRecordDriver: "Pedro de la Rosa", lapRecordYear: "2005", turns: "15" },
  "Jeddah": { length: "6.174", laps: "50", lapRecord: "1:30.734", lapRecordDriver: "Lewis Hamilton", lapRecordYear: "2021", turns: "27" },
  "Miami": { length: "5.412", laps: "57", lapRecord: "1:29.708", lapRecordDriver: "Max Verstappen", lapRecordYear: "2023", turns: "19" },
  "Montreal": { length: "4.361", laps: "70", lapRecord: "1:13.078", lapRecordDriver: "Valtteri Bottas", lapRecordYear: "2019", turns: "14" },
  "Monaco": { length: "3.337", laps: "78", lapRecord: "1:12.909", lapRecordDriver: "Lewis Hamilton", lapRecordYear: "2021", turns: "19" },
  "Barcelona-Catalunya": { length: "4.657", laps: "66", lapRecord: "1:15.743", lapRecordDriver: "Oscar Piastri", lapRecordYear: "2025", turns: "14" },
  "Spielberg": { length: "4.326", laps: "71", lapRecord: "1:07.924", lapRecordDriver: "Oscar Piastri", lapRecordYear: "2025", turns: "10" },
  "Silverstone": { length: "5.891", laps: "52", lapRecord: "1:27.097", lapRecordDriver: "Max Verstappen", lapRecordYear: "2020", turns: "18" },
  "Spa": { length: "7.004", laps: "44", lapRecord: "1:44.701", lapRecordDriver: "Sergio Perez", lapRecordYear: "2024", turns: "19" },
  "Budapest": { length: "4.381", laps: "70", lapRecord: "1:16.627", lapRecordDriver: "Lewis Hamilton", lapRecordYear: "2020", turns: "14" },
  "Zandvoort": { length: "4.259", laps: "72", lapRecord: "1:11.097", lapRecordDriver: "Lewis Hamilton", lapRecordYear: "2021", turns: "14" },
  "Monza": { length: "5.793", laps: "53", lapRecord: "1:20.901", lapRecordDriver: "Lando Norris", lapRecordYear: "2025", turns: "11" },
  "Madrid": { length: "5.416", laps: "57", lapRecord: "N/D", lapRecordDriver: "N/D", lapRecordYear: "2026", turns: "22" },
  "Baku": { length: "6.003", laps: "51", lapRecord: "1:43.009", lapRecordDriver: "Charles Leclerc", lapRecordYear: "2019", turns: "20" },
  "Singapore": { length: "4.927", laps: "62", lapRecord: "1:33.808", lapRecordDriver: "Lewis Hamilton", lapRecordYear: "2025", turns: "19" },
  "Austin": { length: "5.513", laps: "56", lapRecord: "1:36.169", lapRecordDriver: "Charles Leclerc", lapRecordYear: "2019", turns: "20" },
  "Mexico City": { length: "4.304", laps: "71", lapRecord: "1:17.774", lapRecordDriver: "Valtteri Bottas", lapRecordYear: "2021", turns: "17" },
  "São Paulo": { length: "4.309", laps: "71", lapRecord: "1:10.540", lapRecordDriver: "Valtteri Bottas", lapRecordYear: "2018", turns: "15" },
  "Las Vegas": { length: "6.201", laps: "50", lapRecord: "1:33.365", lapRecordDriver: "Max Verstappen", lapRecordYear: "2025", turns: "17" },
  "Qatar": { length: "5.419", laps: "57", lapRecord: "1:22.384", lapRecordDriver: "Lando Norris", lapRecordYear: "2024", turns: "16" },
  "Abu Dhabi": { length: "5.281", laps: "58", lapRecord: "1:25.637", lapRecordDriver: "Kevin Magnussen", lapRecordYear: "2024", turns: "16" }
};

const circuitAliases = {
  "Albert Park": "Melbourne", "Melbourne": "Melbourne",
  "Shanghai": "Shanghai",
  "Suzuka": "Suzuka",
  "Bahrain International Circuit": "Bahrain", "Sakhir": "Bahrain", "Bahrain": "Bahrain",
  "Jeddah Corniche Circuit": "Jeddah", "Jeddah": "Jeddah",
  "Miami International Autodrome": "Miami", "Miami": "Miami",
  "Circuit Gilles Villeneuve": "Montreal", "Montreal": "Montreal",
  "Circuit de Monaco": "Monaco", "Monte-Carlo": "Monaco", "Monaco": "Monaco",
  "Circuit de Barcelona-Catalunya": "Barcelona", "Barcelona-Catalunya": "Barcelona", "Montmeló": "Barcelona", "Barcelona": "Barcelona",
  "Red Bull Ring": "Spielberg", "Spielberg": "Spielberg", "Austria": "Spielberg",
  "Silverstone Circuit": "Silverstone", "Silverstone": "Silverstone",
  "Circuit de Spa-Francorchamps": "Spa", "Spa-Francorchamps": "Spa", "Spa": "Spa",
  "Hungaroring": "Budapest", "Budapest": "Budapest",
  "Circuit Zandvoort": "Zandvoort", "Zandvoort": "Zandvoort",
  "Autodromo Nazionale Monza": "Monza", "Monza": "Monza",
  "Madring": "Madrid", "Madrid": "Madrid",
  "Baku City Circuit": "Baku", "Baku": "Baku",
  "Marina Bay Street Circuit": "Singapore", "Marina Bay": "Singapore", "Singapore": "Singapore",
  "Circuit of the Americas": "Austin", "Austin": "Austin",
  "Autódromo Hermanos Rodríguez": "Mexico City", "Mexico City": "Mexico City",
  "Autódromo José Carlos Pace": "São Paulo", "Interlagos": "São Paulo", "São Paulo": "São Paulo",
  "Las Vegas Strip Street Circuit": "Las Vegas", "Las Vegas": "Las Vegas",
  "Losail International Circuit": "Qatar", "Al Daayen": "Qatar", "Qatar": "Qatar",
  "Yas Marina Circuit": "Abu Dhabi", "Abu Dhabi": "Abu Dhabi"
};

const circuitImages = [
  "assets/img/circuits/circuit-1.jpg",
  "assets/img/circuits/circuit-2.jpg",
  "assets/img/circuits/circuit-3.jpg"
];

async function fetchJSON(url) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Error ${res.status}: ${url}`);
  }
  return res.json();
}

function formatDate(dateStr) {
  if (!dateStr) return "Fecha no disponible";
  return new Intl.DateTimeFormat("es-ES", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  }).format(new Date(dateStr));
}

function slugSafe(text) {
  return (text || "").trim().toLowerCase();
}

function getTeamLogo(teamName) {
  const normalized = slugSafe(teamName);

  for (const [key, value] of Object.entries(teamLogos)) {
    if (slugSafe(key) === normalized) return value;
  }

  return "assets/img/teams/default-team.png";
}

function getNextMeeting(meetings) {
  const now = new Date();

  const futureMeetings = meetings
    .filter(meeting => new Date(meeting.date_start) >= now)
    .sort((a, b) => new Date(a.date_start) - new Date(b.date_start));

  if (futureMeetings.length) return futureMeetings[0];

  return [...meetings].sort((a, b) => new Date(b.date_start) - new Date(a.date_start))[0];
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

function setNextGp(meeting) {
  const nameEl = document.getElementById("next-gp-name");
  const dateEl = document.getElementById("next-gp-date");

  if (!nameEl || !dateEl || !meeting) return;

  nameEl.textContent = `${meeting.meeting_name || meeting.meeting_official_name || "Gran Premio"} · ${meeting.country_name || ""}`;
  dateEl.textContent = formatDate(meeting.date_start);
}

function renderCircuitHighlights(meetings) {
  const container = document.getElementById("circuit-highlights");
  if (!container || !meetings?.length) return;

  const topMeetings = meetings.slice(0, 3);

  container.innerHTML = topMeetings.map((meeting, index) => `
    <div class="w-32 h-20 bg-zinc-800 relative group cursor-pointer overflow-hidden border border-white/5">
      <img
        alt="${meeting.circuit_short_name || "Circuito"}"
        class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all ${index === 0 ? "" : "opacity-50"}"
        src="${circuitImages[index % circuitImages.length]}"
        draggable="false"
      />
      <div class="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <span class="text-[10px] font-headline font-bold text-white uppercase text-center px-2">
          ${meeting.circuit_short_name || meeting.location || "Circuito"}
        </span>
      </div>
      ${index === 0 ? '<div class="absolute bottom-0 left-0 w-full h-1 bg-primary-container"></div>' : ""}
    </div>
  `).join("");
}

function renderCalendar(meetings) {
  const container = document.getElementById("circuit-list");
  if (!container || !meetings?.length) return;

  const topMeetings = meetings.slice(0, 7);

  const cards = topMeetings.map((meeting, index) => `
    <div class="bg-surface-container-low group hover:bg-surface-container-high transition-all p-8 relative overflow-hidden">
      <div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 group-hover:text-primary-container transition-all">
        <span class="text-4xl font-black italic font-headline">${String(index + 1).padStart(2, "0")}</span>
      </div>
      <div class="flex items-center gap-2 mb-8">
        <div class="w-6 h-4 bg-zinc-700"></div>
        <span class="text-[10px] font-headline uppercase tracking-[0.2em] text-zinc-400">
          ${meeting.country_name || "País"}
        </span>
      </div>
      <h3 class="text-2xl font-bold italic font-headline text-white mb-2 uppercase">
        ${meeting.meeting_name || "Gran Premio"}
      </h3>
      <p class="text-xs text-zinc-500 font-headline uppercase tracking-widest mb-6">
        ${meeting.circuit_short_name || meeting.location || "Circuito"}
      </p>
      <div class="flex items-center gap-4">
        <span class="material-symbols-outlined text-primary-container text-sm">calendar_month</span>
        <span class="text-xs font-mono text-zinc-300">${formatDate(meeting.date_start)}</span>
      </div>
    </div>
  `).join("");

  const viewAll = `
    <div class="bg-surface-container-low flex flex-col items-center justify-center p-8 group cursor-pointer">
      <div class="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center group-hover:bg-primary-container group-hover:border-primary-container transition-all mb-4">
        <span class="material-symbols-outlined text-white">chevron_right</span>
      </div>
      <span class="font-headline italic font-bold uppercase text-zinc-400 tracking-tighter group-hover:text-white">
        Ver Calendario Completo
      </span>
    </div>
  `;

  container.innerHTML = cards + viewAll;
}

function renderTeams(drivers) {
  const container = document.getElementById("team-list");
  if (!container || !drivers?.length) return;

  const uniqueTeams = new Map();

  drivers.forEach(driver => {
    if (driver.team_name && !uniqueTeams.has(driver.team_name)) {
      uniqueTeams.set(driver.team_name, driver);
    }
  });

  const teams = [...uniqueTeams.values()].slice(0, 10);

  container.innerHTML = teams.map(team => `
    <div class="group aspect-video bg-surface-container-high flex flex-col items-center justify-center p-8 border-l-4 border-transparent rounded-2xl hover:border-primary-container transition-all cursor-pointer">
      <div class="h-20 mb-5 flex items-center justify-center transition-all overflow-hidden">
        <img
          alt="${team.team_name}"
          class="max-w-full max-h-full object-contain"
          draggable="false"
          <!-- src="${getTeamLogo(team.team_name)}" -->
          <!-- onerror="this.src='assets/img/teams/default-team.png'" -->
        />
      </div>
      <div class="w-full h-[1px] bg-zinc-800 mb-4"></div>
      <p class="font-black italic text-zinc-300 group-hover:text-white font-headline text-sm text-center uppercase mb-2">
        ${team.team_name}
      </p>
      <p class="text-[10px] font-headline font-bold uppercase text-zinc-500 tracking-widest">
        ${team.country_code || ""}
      </p>
    </div>
  `).join("");
}

function renderDriverStandings(rows, drivers = []) {
  const container = document.getElementById("driver-standings");
  if (!container) return;

  if (!rows?.length) {
    container.innerHTML = `<p class="text-zinc-400 text-sm">No se han podido cargar los datos.</p>`;
    return;
  }

  const driversMap = new Map(
    drivers.map(driver => [Number(driver.driver_number), driver])
  );

  const top = rows
    .sort((a, b) => a.position_current - b.position_current)
    .slice(0, 5);

  container.innerHTML = top.map(row => {
    const driver = driversMap.get(Number(row.driver_number));
    const first_name = driver?.first_name || `Piloto #${row.driver_number}`;
    const last_name = driver?.last_name || "";

    return `
      <div class="flex justify-between items-center py-2 border-b border-white/5">
        <span class="text-white font-bold italic">${row.position_current}. ${first_name} ${last_name}</span>
        <span class="text-primary-container font-mono">${row.points_current} PTS</span>
      </div>
    `;
  }).join("");
}

function renderConstructorStandings(rows) {
  const container = document.getElementById("constructor-standings");
  if (!container) return;

  if (!rows?.length) {
    container.innerHTML = `<p class="text-zinc-400 text-sm">No se han podido cargar los datos.</p>`;
    return;
  }

  const top = rows
    .sort((a, b) => a.position_current - b.position_current)
    .slice(0, 5);

  container.innerHTML = top.map(row => `
    <div class="flex justify-between items-center py-2 border-b border-white/5">
      <span class="text-white font-bold italic">${row.team_name}</span>
      <span class="text-zinc-300 font-mono">${row.points_current} PTS</span>
    </div>
  `).join("");
}

function renderLastSession(session) {
  if (!session) return;

  const title = document.querySelector("#data-dashboard .bg-primary-container h5");
  const subtitle = document.querySelector("#data-dashboard .bg-primary-container p.text-white\\/80");

  if (title) {
    title.textContent = session.meeting_name || session.session_name || "Sesión reciente";
  }

  if (subtitle) {
    subtitle.textContent = `${session.session_name || "Sesión"} · ${formatDate(session.date_start)}`;
  }
}

function renderCircuitInfo(meeting) {
  const block = document.getElementById("circuit-info-block");
  if (!block || !meeting) return;

  const circuitName = meeting.circuit_short_name || meeting.location || "Circuito";
  const location = `${meeting.location || ""}${meeting.country_name ? " · " + meeting.country_name : ""}`;
  const { data: extra } = getCircuitExtra(meeting);

  block.innerHTML = `
    <div class="flex items-center gap-6">
      <div class="w-16 h-16 flex items-center justify-center">
        <span class="material-symbols-outlined text-4xl text-primary-container">info</span>
      </div>
      <div class="flex flex-col gap-2">
        <p class="text-white font-headline font-bold italic uppercase text-xl">Información del Circuito Actual</p>
        <p class="text-sm text-zinc-500 uppercase tracking-widest">${circuitName} · ${location}</p>
      </div>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-6 gap-12">
      <div class="text-center">
        <p class="text-zinc-500 text-[10px] uppercase font-headline">Longitud</p>
        <p class="text-white font-bold italic">${extra.length} KM</p>
      </div>
      <div class="text-center">
        <p class="text-zinc-500 text-[10px] uppercase font-headline">Vueltas</p>
        <p class="text-white font-bold italic">${extra.laps}</p>
      </div>
      <div class="text-center">
        <p class="text-zinc-500 text-[10px] uppercase font-headline">Récord</p>
        <p class="text-white font-bold italic">${extra.lapRecord}</p>
      </div>
      <div class="text-center">
        <p class="text-zinc-500 text-[10px] uppercase font-headline">Piloto récord</p>
        <p class="text-white font-bold italic">${extra.lapRecordDriver || "N/D"}</p>
      </div>
      <div class="text-center">
        <p class="text-zinc-500 text-[10px] uppercase font-headline">Año récord</p>
        <p class="text-white font-bold italic">${extra.lapRecordYear || "N/D"}</p>
      </div>
      <div class="text-center">
        <p class="text-zinc-500 text-[10px] uppercase font-headline">Curvas</p>
        <p class="text-white font-bold italic">${extra.turns}</p>
      </div>
    </div>
  `;
}

async function loadHome() {
  try {
    const CURRENT_YEAR = 2026;
    const meetings = await fetchJSON(`${API_BASE}/meetings?year=${CURRENT_YEAR}`);
    const sessions = await fetchJSON(`${API_BASE}/sessions?year=${CURRENT_YEAR}`);

    const sortedMeetings = [...meetings].sort((a, b) => new Date(a.date_start) - new Date(b.date_start));
    const nextMeeting = getNextMeeting(sortedMeetings);
    const latestSession = [...sessions].sort((a, b) => new Date(b.date_start) - new Date(a.date_start))[0];

    setNextGp(nextMeeting);
    renderCircuitHighlights(sortedMeetings);
    renderCalendar(sortedMeetings);
    renderLastSession(latestSession);
    renderCircuitInfo(nextMeeting);

    if (latestSession?.session_key) {
      const [drivers, driverStandings, constructorStandings] = await Promise.all([
        fetchJSON(`${API_BASE}/drivers?session_key=${latestSession.session_key}`),
        fetchJSON(`${API_BASE}/championship_drivers?session_key=${latestSession.session_key}`).catch(() => []),
        fetchJSON(`${API_BASE}/championship_teams?session_key=${latestSession.session_key}`).catch(() => [])
      ]);

      renderTeams(drivers);
      renderDriverStandings(driverStandings, drivers);
      renderConstructorStandings(constructorStandings);
    }
  } catch (error) {
    console.error("Error cargando F1 Pulse:", error);
  }
}

document.addEventListener("DOMContentLoaded", loadHome);