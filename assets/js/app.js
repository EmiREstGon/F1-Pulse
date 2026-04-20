const API_BASE = "https://api.openf1.org/v1";
const CURRENT_YEAR = 2026;
const regionNames = new Intl.DisplayNames(['es'], { type: 'region' });

const countryToISO = {
  "Spain": "ES",
  "Italy": "IT",
  "United Kingdom": "GB",
  "USA": "US",
  "United States": "US",
  "France": "FR",
  "Monaco": "MC",
  "Germany": "DE",
  "Netherlands": "NL",
  "Austria": "AT",
  "Belgium": "BE",
  "Hungary": "HU",
  "Canada": "CA",
  "Mexico": "MX",
  "Brazil": "BR",
  "Australia": "AU",
  "Japan": "JP",
  "China": "CN",
  "Singapore": "SG",
  "Qatar": "QA",
  "UAE": "AE",
  "Abu Dhabi": "AE",
  "Saudi Arabia": "SA",
  "Bahrain": "BH",
  "Azerbaijan": "AZ"
};

const fallbackDriverStandings = [
  { position_current: 1, full_name: "Kimi Antonelli", points_current: 72 },
  { position_current: 2, full_name: "George Russell", points_current: 63 },
  { position_current: 3, full_name: "Charles Leclerc", points_current: 49 },
  { position_current: 4, full_name: "Lewis Hamilton", points_current: 41 },
  { position_current: 5, full_name: "Lando Norris", points_current: 25 },
  { position_current: 6, full_name: "Oscar Piastri", points_current: 21 },
  { position_current: 7, full_name: "Oliver Bearman", points_current: 17 },
  { position_current: 8, full_name: "Pierre Gasly", points_current: 15 },
  { position_current: 9, full_name: "Max Verstappen", points_current: 12 },
  { position_current: 10, full_name: "Liam Lawson", points_current: 10 },
  { position_current: 11, full_name: "Arvid Lindblad", points_current: 4 },
  { position_current: 12, full_name: "Isack Hadjar", points_current: 4 },
  { position_current: 13, full_name: "Gabriel Bortoleto", points_current: 2 },
  { position_current: 14, full_name: "Carlos Sainz", points_current: 2 },
  { position_current: 15, full_name: "Esteban Ocon", points_current: 1 },
  { position_current: 16, full_name: "Franco Colapinto", points_current: 1 },
  { position_current: 17, full_name: "Nico Hulkenberg", points_current: 0 },
  { position_current: 18, full_name: "Alexander Albon", points_current: 0 },
  { position_current: 19, full_name: "Valtteri Bottas", points_current: 0 },
  { position_current: 20, full_name: "Sergio Perez", points_current: 0 },
  { position_current: 21, full_name: "Fernando Alonso", points_current: 0 },
  { position_current: 22, full_name: "Lance Stroll", points_current: 0 }
];

const fallbackConstructorStandings = [
  { position_current: 1, team_name: "Mercedes", points_current: 135 },
  { position_current: 2, team_name: "Ferrari", points_current: 90 },
  { position_current: 3, team_name: "McLaren", points_current: 46 },
  { position_current: 4, team_name: "Haas", points_current: 18 },
  { position_current: 5, team_name: "Alpine", points_current: 16 },
  { position_current: 6, team_name: "Red Bull Racing", points_current: 16 },
  { position_current: 7, team_name: "Racing Bulls", points_current: 14 },
  { position_current: 8, team_name: "Audi", points_current: 2 },
  { position_current: 9, team_name: "Williams", points_current: 2 },
  { position_current: 10, team_name: "Cadillac", points_current: 0 },
  { position_current: 11, team_name: "Aston Martin", points_current: 0 }
];

const teamMonoLogos = {
  "McLaren": "assets/img/logos/brands/mono/mclaren.svg",
  "Red Bull Racing": "assets/img/logos/brands/mono/red-bull-racing.svg",
  "Audi": "assets/img/logos/brands/mono/audi.svg",
  "Ferrari": "assets/img/logos/brands/mono/ferrari.svg",
  "Mercedes": "assets/img/logos/brands/mono/mercedes.svg",
  "Aston Martin": "assets/img/logos/brands/mono/aston-martin.svg",
  "Alpine": "assets/img/logos/brands/mono/alpine.svg",
  "Williams": "assets/img/logos/brands/mono/williams.svg",
  "RB": "assets/img/logos/brands/mono/racing-bulls.svg",
  "Racing Bulls": "assets/img/logos/brands/mono/racing-bulls.svg",
  "Cadillac": "assets/img/logos/brands/mono/cadillac.svg",
  "Haas": "assets/img/logos/brands/mono/haas.svg",
  "Haas F1 Team": "assets/img/logos/brands/mono/haas.svg"
};

const teamColoredLogos = {
  "McLaren": "assets/img/logos/brands/colored/mclaren-colored.svg",
  "Red Bull Racing": "assets/img/logos/brands/colored/red-bull-racing-colored.svg",
  "Audi": "assets/img/logos/brands/colored/audi-colored.svg",
  "Ferrari": "assets/img/logos/brands/colored/ferrari-colored.svg",
  "Mercedes": "assets/img/logos/brands/colored/mercedes-colored.svg",
  "Aston Martin": "assets/img/logos/brands/colored/aston-martin-colored.svg",
  "Alpine": "assets/img/logos/brands/colored/alpine-colored.svg",
  "Williams": "assets/img/logos/brands/colored/williams-colored.svg",
  "RB": "assets/img/logos/brands/colored/racing-bulls-colored.svg",
  "Racing Bulls": "assets/img/logos/brands/colored/racing-bulls-colored.svg",
  "Cadillac": "assets/img/logos/brands/colored/cadillac-colored.svg",
  "Haas": "assets/img/logos/brands/colored/haas-colored.svg",
  "Haas F1 Team": "assets/img/logos/brands/colored/haas-colored.svg"
};

const teamColors = {
  "McLaren": "#FF8000",
  "Red Bull Racing": "#3671C6",
  "Audi": "#FF2D00",
  "Ferrari": "#E8002D",
  "Mercedes": "#27F4D2",
  "Aston Martin": "#229971",
  "Alpine": "#00A1E8",
  "Williams": "#1868DB",
  "RB": "#6692FF",
  "Racing Bulls": "#6692FF",
  "Cadillac": "#AAAAAD",
  "Haas": "#DEE1E2",
  "Haas F1 Team": "#DEE1E2"
};

const teamNationality = {
  "McLaren": "United Kingdom",
  "Red Bull Racing": "Austria",
  "Audi": "Germany",
  "Ferrari": "Italy",
  "Mercedes": "Germany",
  "Aston Martin": "United Kingdom",
  "Alpine": "France",
  "Williams": "United Kingdom",
  "RB": "Italy",
  "Racing Bulls": "Italy",
  "Cadillac": "United States",
  "Haas": "United States",
  "Haas F1 Team": "United States"
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

const grandPrixTranslations = {
  "Australian Grand Prix": "Gran Premio de Australia",
  "Chinese Grand Prix": "Gran Premio de China",
  "Japanese Grand Prix": "Gran Premio de Japón",
  "Bahrain Grand Prix": "Gran Premio de Baréin",
  "Saudi Arabian Grand Prix": "Gran Premio de Arabia Saudí",
  "Miami Grand Prix": "Gran Premio de Miami",
  "Canadian Grand Prix": "Gran Premio de Canadá",
  "Monaco Grand Prix": "Gran Premio de Mónaco",
  "Spanish Grand Prix": "Gran Premio de España",
  "Austrian Grand Prix": "Gran Premio de Austria",
  "British Grand Prix": "Gran Premio de Gran Bretaña",
  "Belgian Grand Prix": "Gran Premio de Bélgica",
  "Hungarian Grand Prix": "Gran Premio de Hungría",
  "Dutch Grand Prix": "Gran Premio de los Países Bajos",
  "Italian Grand Prix": "Gran Premio de Italia",
  "Madrid Grand Prix": "Gran Premio de Madrid",
  "Azerbaijan Grand Prix": "Gran Premio de Azerbaiyán",
  "Singapore Grand Prix": "Gran Premio de Singapur",
  "United States Grand Prix": "Gran Premio de Estados Unidos",
  "Mexico City Grand Prix": "Gran Premio de Ciudad de México",
  "São Paulo Grand Prix": "Gran Premio de São Paulo",
  "Las Vegas Grand Prix": "Gran Premio de Las Vegas",
  "Qatar Grand Prix": "Gran Premio de Qatar",
  "Abu Dhabi Grand Prix": "Gran Premio de Abu Dabi"
};

const circuitTranslations = {
  "Melbourne": "Albert Park",
  "Shanghai": "Shanghái",
  "Suzuka": "Suzuka",
  "Bahrain": "Sakhir",
  "Jeddah": "Yeda",
  "Miami": "Miami",
  "Montreal": "Montreal",
  "Monaco": "Mónaco",
  "Barcelona": "Barcelona-Cataluña",
  "Catalunya": "Barcelona-Cataluña",
  "Barcelona-Catalunya": "Barcelona-Cataluña",
  "Spielberg": "Spielberg",
  "Silverstone": "Silverstone",
  "Spa": "Spa-Francorchamps",
  "Budapest": "Hungaroring",
  "Zandvoort": "Zandvoort",
  "Monza": "Monza",
  "Madrid": "Madring",
  "Baku": "Bakú",
  "Singapore": "Marina Bay",
  "Austin": "Austin",
  "Mexico City": "Ciudad de México",
  "São Paulo": "Interlagos",
  "Las Vegas": "Las Vegas",
  "Qatar": "Losail",
  "Abu Dhabi": "Yas Marina"
};

const circuitTrackImages = {
  "Melbourne": "assets/img/circuits/tracks/albert-park.svg",
  "Shanghai": "assets/img/circuits/tracks/shanghai.svg",
  "Suzuka": "assets/img/circuits/tracks/suzuka.svg",
  "Bahrain": "assets/img/circuits/tracks/sakhir.svg",
  "Jeddah": "assets/img/circuits/tracks/jeddah.svg",
  "Miami": "assets/img/circuits/tracks/miami.svg",
  "Montreal": "assets/img/circuits/tracks/montreal.svg",
  "Monaco": "assets/img/circuits/tracks/monte-carlo.svg",
  "Barcelona": "assets/img/circuits/tracks/catalunya.svg",
  "Spielberg": "assets/img/circuits/tracks/spielberg.svg",
  "Silverstone": "assets/img/circuits/tracks/silverstone.svg",
  "Spa": "assets/img/circuits/tracks/spa-francorchamps.svg",
  "Budapest": "assets/img/circuits/tracks/hungaroring.svg",
  "Zandvoort": "assets/img/circuits/tracks/zandvoort.svg",
  "Monza": "assets/img/circuits/tracks/monza.svg",
  "Madrid": "assets/img/circuits/tracks/madring.svg",
  "Baku": "assets/img/circuits/tracks/baku.svg",
  "Singapore": "assets/img/circuits/tracks/singapore.svg",
  "Austin": "assets/img/circuits/tracks/austin.svg",
  "Mexico City": "assets/img/circuits/tracks/mexico-city.svg",
  "São Paulo": "assets/img/circuits/tracks/interlagos.svg",
  "Las Vegas": "assets/img/circuits/tracks/las-vegas.svg",
  "Qatar": "assets/img/circuits/tracks/lusail.svg",
  "Abu Dhabi": "assets/img/circuits/tracks/yas-marina.svg"
};

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

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

function formatDate(dateStr) {
  if (!dateStr) return "Fecha no disponible";
  return new Intl.DateTimeFormat("es-ES", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  }).format(new Date(dateStr));
}

function normalizeTeamName(name) {
  return name
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

  return getTeamMonoLogo(teamName); // fallback mono si falla
}

function getTeamColor(teamName) {
  const normalized = normalizeTeamName(teamName);

  for (const [key, value] of Object.entries(teamColors)) {
    if (normalizeTeamName(key) === normalized) {
      return value;
    }
  }

  return "#1f2937"; // fallback color oscuro si falla
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
  const flagUrl = iso ? `https://flagicons.lipis.dev/flags/4x3/${iso.toLowerCase()}.svg` : "";

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

let countdownInterval;

function startCountdown(dateStr) {
  if (!dateStr) return;

  const target = new Date(dateStr);

  clearInterval(countdownInterval);

  function update() {
    const now = new Date();
    const diff = target - now;

    const countdownEl = document.getElementById("countdown");

    if (countdownEl) {
      countdownEl.classList.remove("animate-pulse");
    }

    if (diff <= 0) {
      const countdownEl = document.getElementById("countdown");

      if (countdownEl) {
        countdownEl.classList.remove("animate-pulse");
      }

      countdownEl.innerHTML =
        `<p class="text-white font-bold text-xl">¡En curso!</p>`;

      clearInterval(countdownInterval);
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("cd-days").textContent = days;
    document.getElementById("cd-hours").textContent = hours;
    document.getElementById("cd-minutes").textContent = minutes;
    document.getElementById("cd-seconds").textContent = seconds;
  }

  update();
  countdownInterval = setInterval(update, 1000);
}

function setNextGp(meeting) {
  const nameEl = document.getElementById("next-gp-name");
  const dateEl = document.getElementById("next-gp-date");

  if (!nameEl || !dateEl || !meeting) return;

  const country = getCountryData(meeting);

  nameEl.innerHTML = `
    ${country.flagUrl ? `
      <img 
        src="${country.flagUrl}" 
        alt="${country.nameES || country.name}" 
        class="w-5 h-4 object-cover rounded-sm"
        draggable="false"
      />
    ` : ""}
    <span>
      ${getMeetingNameES(meeting)} · ${getCircuitNameES(meeting)}
    </span>
  `;

  nameEl.classList.remove("animate-pulse");
  dateEl.classList.remove("animate-pulse");
  dateEl.textContent = formatDate(meeting.date_start);
  startCountdown(meeting.date_start);
}

function renderCircuitInfo(meeting) {
  const block = document.getElementById("circuit-info-block");
  if (!block || !meeting) return;

  const country = getCountryData(meeting);
  const { data: extra } = getCircuitExtra(meeting);

  block.classList.remove("animate-pulse");

  block.innerHTML = `
    <div class="absolute inset-0 pointer-events-none bg-gradient-to-r from-primary-container/5 via-transparent to-transparent"></div>

    <div class="relative z-10 flex flex-col gap-8">
      <!-- Header -->
      <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div class="flex items-center gap-6">
          <i class="fa-solid fa-circle-info text-3xl text-primary-container"></i>

          <div class="flex flex-col gap-2">
            <p class="text-white font-headline font-black italic uppercase text-2xl tracking-tight">
              Información del circuito
            </p>

            <div class="flex flex-wrap items-center gap-3">
              ${country.flagUrl ? `
                <img 
                  src="${country.flagUrl}" 
                  alt="${country.nameES || country.name}" 
                  class="w-6 h-4 object-cover rounded-sm border border-white/10"
                  draggable="false"
                />
              ` : ""}

              <span class="text-sm text-zinc-400 uppercase tracking-[0.18em]">
                ${country.nameES || "País"} · ${getCircuitNameES(meeting)}
              </span>
            </div>
          </div>
        </div>

        <div class="px-4 py-2 rounded-full border border-primary-container/20 bg-primary-container/10 text-primary text-xs md:text-sm font-headline uppercase tracking-widest self-start lg:self-center">
          ${getMeetingNameES(meeting)}
        </div>
      </div>

      <!-- Stats -->
      <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
        <div class="rounded-2xl border border-white/5 bg-background/30 p-5 text-center hover:border-primary-container/30 transition-colors">
          <p class="text-zinc-500 text-xs uppercase font-headline tracking-widest mb-2">Longitud</p>
          <p class="text-white font-bold italic text-2xl">${extra.length} KM</p>
        </div>

        <div class="rounded-2xl border border-white/5 bg-background/30 p-5 text-center hover:border-primary-container/30 transition-colors">
          <p class="text-zinc-500 text-xs uppercase font-headline tracking-widest mb-2">Vueltas</p>
          <p class="text-white font-bold italic text-2xl">${extra.laps}</p>
        </div>

        <div class="rounded-2xl border border-white/5 bg-background/30 p-5 text-center hover:border-primary-container/30 transition-colors">
          <p class="text-zinc-500 text-xs uppercase font-headline tracking-widest mb-2">Récord</p>
          <p class="text-white font-bold italic text-2xl">${extra.lapRecord}</p>
        </div>

        <div class="rounded-2xl border border-white/5 bg-background/30 p-5 text-center hover:border-primary-container/30 transition-colors">
          <p class="text-zinc-500 text-xs uppercase font-headline tracking-widest mb-2">Piloto récord</p>
          <p class="text-white font-bold italic text-2xl leading-tight">${extra.lapRecordDriver || "N/D"}</p>
        </div>

        <div class="rounded-2xl border border-white/5 bg-background/30 p-5 text-center hover:border-primary-container/30 transition-colors">
          <p class="text-zinc-500 text-xs uppercase font-headline tracking-widest mb-2">Año récord</p>
          <p class="text-white font-bold italic text-2xl">${extra.lapRecordYear || "N/D"}</p>
        </div>

        <div class="rounded-2xl border border-white/5 bg-background/30 p-5 text-center hover:border-primary-container/30 transition-colors">
          <p class="text-zinc-500 text-xs uppercase font-headline tracking-widest mb-2">Curvas</p>
          <p class="text-white font-bold italic text-2xl">${extra.turns}</p>
        </div>
      </div>
    </div>
  `;
}

function renderCalendar(meetings) {
  const container = document.getElementById("circuit-list");
  if (!container || !meetings?.length) return;

  container.classList.remove("animate-pulse");

  const now = new Date();

  const upcomingMeetings = meetings
    .filter(meeting => {
      if (!meeting.date_start) return false;
      return new Date(meeting.date_start) >= now;
    })
    .sort((a, b) => new Date(a.date_start) - new Date(b.date_start))
    .slice(0, 7);

  if (!upcomingMeetings.length) {
    container.classList.remove("animate-pulse");
    container.innerHTML = `
      <div class="md:col-span-4 bg-surface-container-low p-8 text-center">
        <p class="text-zinc-400 font-headline uppercase tracking-widest text-sm">
          No hay próximas carreras disponibles
        </p>
      </div>
    `;
    return;
  }

  const cards = upcomingMeetings.map((meeting, index) => {
    const bgImage = getCircuitTrackImage(meeting, index);
    const country = getCountryData(meeting);

    return `
    <div class="relative overflow-hidden rounded-2xl group m-2 min-h-[230px] bg-surface-container-low cursor-pointer">
      <div 
        class="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-50 scale-100 group-hover:scale-105 group-hover:opacity-80 transition-all duration-300"
        style="background-image: url('${bgImage}')"
      ></div>

      <div class="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all"></div>

      <div class="relative p-8 z-10">
        <div class="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 text-primary-container transition-all">
          <span class="text-4xl font-black italic font-headline">
            ${String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div class="flex items-center gap-2 mb-8">
          ${country.flagUrl ? `
            <img 
              src="${country.flagUrl}" 
              alt="${country.nameES || country.name}" 
              class="w-6 h-4 object-cover rounded-sm border border-zinc-700"
              draggable="false"
            />
          ` : ""}
          <span class="text-[10px] font-headline uppercase tracking-[0.2em] text-zinc-300">
            ${country.nameES || "País"}
          </span>
        </div>

        <h3 class="text-2xl font-bold italic font-headline text-white mb-2 uppercase">
          ${getMeetingNameES(meeting)}
        </h3>

        <p class="text-xs text-zinc-300 font-headline uppercase tracking-widest mb-6">
          ${getCircuitNameES(meeting)}
        </p>

        <div class="flex items-center gap-4">
          <span class="material-symbols-outlined text-primary-container text-sm"><i class="fa-solid fa-calendar-days"></i></span>
          <span class="text-xs text-zinc-200 pt-1">${formatDate(meeting.date_start)}</span>
        </div>
      </div>
    </div>
  `;
  }).join("");

  const viewAll = `
    <div class="bg-surface-container-low flex flex-col items-center justify-center p-8 group cursor-pointer rounded-2xl m-2 min-h-[230px]">
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

  if (!drivers?.length) {
    container.classList.remove("animate-pulse");
    container.innerHTML = `
      <div class="col-span-2 md:col-span-4 text-center text-zinc-400 font-headline uppercase tracking-widest">
        No se han podido cargar las escuderías
      </div>
    `;
    return;
  }

  const uniqueTeams = new Map();

  drivers.forEach(driver => {
    if (driver.team_name && !uniqueTeams.has(driver.team_name)) {
      uniqueTeams.set(driver.team_name, driver);
    }
  });

  const teams = [...uniqueTeams.values()].slice(0, 11);

  container.classList.remove("animate-pulse");

  container.innerHTML = teams.map(team => {
    const color = typeof getTeamColor === "function"
      ? getTeamColor(team.team_name)
      : "linear-gradient(135deg, rgba(211,20,17,0.35), rgba(255,255,255,0.05))";

    const teamCountry = getCountryData(getTeamCountry(team.team_name));

    return `
      <div 
        class="group aspect-square max-w-[240px] relative flex flex-col items-center justify-center px-8 py-4 rounded-2xl transform transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1 cursor-pointer overflow-hidden"
      >
        <div 
          class="absolute inset-0 opacity-70 group-hover:opacity-80 transition-all"
          style="background:${color}"
        ></div>

        <div class="relative z-10 w-full flex flex-col items-center">
          <div class="h-20 w-full mb-2 flex items-center justify-center overflow-hidden">
            <img
              alt="${team.team_name}"
              class="h-full max-w-[120px] object-contain"
              draggable="false"
              src="${getTeamMonoLogo(team.team_name)}"
              onerror="this.src='assets/img/error/img-not-found.svg'"
            />
          </div>

          <div class="w-full h-[1px] bg-white/10 mb-4"></div>

          <p class="font-black italic text-white font-headline text-2xl text-center uppercase mb-3">
            ${team.team_name}
          </p>

          <p class="text-xs font-headline font-bold uppercase text-white/80 tracking-widest flex items-center gap-2 py-2 px-4 rounded-full bg-zinc-900/75">
            ${teamCountry.nameES || "N/D"}
            ${teamCountry.flagUrl ? `
              <img 
                src="${teamCountry.flagUrl}" 
                alt="${teamCountry.nameES || teamCountry.name}" 
                class="h-4 object-cover rounded-sm border border-zinc-700" 
                draggable="false" 
              />
            ` : ""}
          </p>
        </div>
      </div>
    `;
  }).join("");
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

function hasStandingsData(rows) {
  return Array.isArray(rows) && rows.length > 0;
}

function getPositionBadgeClass(position, type="driver") {
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

function renderDriverStandings(rows, drivers = []) {
  const container = document.getElementById("driver-standings");
  if (!container) return;

  const safeRows = hasStandingsData(rows) ? rows : fallbackDriverStandings;

  const driversMap = new Map(
    (drivers || []).map(driver => [Number(driver.driver_number), driver])
  );

  const top = [...safeRows]
    .filter(row => row.position_current != null)
    .sort((a, b) => Number(a.position_current) - Number(b.position_current))
    .slice(0, 5);

  container.classList.remove("animate-pulse");

  container.innerHTML = `
    <div class="space-y-3">
      ${top.map(row => {
        const position = Number(row.position_current);
        const driver = driversMap.get(Number(row.driver_number));

        const firstName =
          row.first_name ||
          driver?.first_name ||
          [driver?.first_name, driver?.last_name].filter(Boolean).join(" ") ||
          `Piloto #${row.driver_number ?? "N/D"}`;

        const lastName =
          row.last_name ||
          driver?.last_name ||
          [driver?.first_name, driver?.last_name].filter(Boolean).join(" ") ||
          `Piloto #${row.driver_number ?? "N/D"}`;

        const teamName =
          driver?.team_name ||
          row.team_name ||
          "Equipo no disponible";

        const headshot =
          driver?.headshot_url ||
          "assets/img/error/img-not-found.svg";

        const badgeClass = getPositionBadgeClass(position, "driver");
        const teamColor = getTeamColor(teamName);

        return `
          <div class="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-primary-container/10 to-transparent border border-white/5 hover:border-primary-container/30 hover:bg-primary-container/10 transition-all duration-300">
            <div class="flex items-center gap-4 min-w-0">
              <div class="size-8 rounded-full flex items-center justify-center font-black text-sm shrink-0 ${badgeClass}">
                ${position}
              </div>

              <div 
                class="size-12 rounded-full overflow-hidden border border-white/10 shrink-0" 
                style="background-color: ${teamColor};"
                >
                <img
                  src="${headshot}"
                  alt="${firstName} ${lastName}"
                  class="w-full h-full object-cover"
                  draggable="false"
                  onerror="this.src='assets/img/drivers/default-driver.png'"
                />
              </div>

              <div class="min-w-0">
                <p class="text-white font-bold truncate text-base">${firstName} ${lastName}</p>
              </div>
            </div>

            <div class="text-center shrink-0">
              <p class="text-primary-container font-black text-2xl leading-none">${row.points_current ?? 0}</p>
              <p class="text-xs uppercase tracking-[0.1em] text-zinc-500 mt-1">PTS</p>
            </div>
          </div>
        `;
      }).join("")}
    </div>
  `;
}

function renderConstructorStandings(rows) {
  const container = document.getElementById("constructor-standings");
  if (!container) return;

  const safeRows = hasStandingsData(rows) ? rows : fallbackConstructorStandings;

  const top = [...safeRows]
    .filter(row => row.position_current != null)
    .sort((a, b) => Number(a.position_current) - Number(b.position_current))
    .slice(0, 5);

  container.classList.remove("animate-pulse");

  container.innerHTML = `
    <div class="space-y-3">
      ${top.map(row => {
        const position = Number(row.position_current);
        const teamName = row.team_name || "Equipo";
        const badgeClass = getPositionBadgeClass(position, "constructor");
        const logo = getTeamColoredLogo(teamName);

        return `
          <div class="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-white/5 to-transparent border border-white/5 hover:border-white/15 hover:bg-white/5 transition-all duration-300">
            <div class="flex items-center gap-4 min-w-0">
              <div class="size-8 rounded-full flex items-center justify-center font-black text-sm shrink-0 ${badgeClass}">
                ${position}
              </div>

              <div class="size-12 flex items-center justify-center">
                <img
                  src="${logo}"
                  alt="${teamName}"
                  class="max-w-full max-h-full object-contain"
                  draggable="false"
                  onerror="this.src='assets/img/error/img-not-found.svg'"
                />
              </div>

              <div class="min-w-0">
                <p class="text-white font-bold truncate text-base">${teamName}</p>
              </div>
            </div>

            <div class="text-center shrink-0">
              <p class="text-zinc-100 font-black text-2xl leading-none">${row.points_current ?? 0}</p>
              <p class="text-xs uppercase tracking-[0.1em] text-zinc-500 mt-1">PTS</p>
            </div>
          </div>
        `;
      }).join("")}
    </div>
  `;
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

  // 1) fuerza relativa respecto al líder
  const projectedRatio = clamp(safeProjected / safeLeaderProjected, 0, 1);

  // 2) ritmo relativo respecto al líder
  const avgRatio = clamp(safeAvg / safeLeaderAvg, 0, 1);

  // 3) margen sobre el perseguidor inmediato
  const gapRatio = clamp((safeProjected - safeNext) / safeLeaderProjected, 0, 0.25) / 0.25;

  // 4) posición actual
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

function normalizeDriverName(name = "") {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

function renderPredictionList(container, rows, type = "driver", drivers = []) {
  if (!container) return;

  const driversByNumber = type === "driver"
    ? new Map((drivers || []).map(driver => [Number(driver.driver_number), driver]))
    : new Map();

  const driversByName = type === "driver"
    ? new Map((drivers || []).map(driver => [normalizeDriverName(driver.full_name), driver]))
    : new Map();

  if (type === "driver") {
    console.log("Drivers recibidos:", drivers);
  }

  container.innerHTML = `
    <div class="space-y-3">
      ${rows.map((row, index) => {
        const position = index + 1;
        const badgeClass = getPositionBadgeClass(position, type);

        if (type === "driver") {
          const driver =
            (row.driver_number != null
              ? driversByNumber.get(Number(row.driver_number))
              : null) ||
            driversByName.get(normalizeDriverName(row.displayName));

          console.log("Row:", row.displayName, row.driver_number, "->", driver);

          const firstName =
          row.first_name ||
          driver?.first_name ||
          [driver?.first_name, driver?.last_name].filter(Boolean).join(" ") ||
          `Piloto #${row.driver_number ?? "N/D"}`;

        const lastName =
          row.last_name ||
          driver?.last_name ||
          [driver?.first_name, driver?.last_name].filter(Boolean).join(" ") ||
          `Piloto #${row.driver_number ?? "N/D"}`;

          const teamName =
            row.team_name ||
            driver?.team_name ||
            "Equipo no disponible";

          const headshot =
            row.headshot_url ||
            driver?.headshot_url ||
            "assets/img/drivers/default-driver.png";

          const teamColor = getTeamColor(teamName);

          return `
            <div class="p-4 rounded-2xl bg-gradient-to-r from-white/10 to-transparent border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300">
              <div class="flex items-center justify-between gap-4">
                <div class="flex items-center gap-4 min-w-0">
                  <div class="size-8 rounded-full flex items-center justify-center font-black text-sm shrink-0 ${badgeClass}">
                    ${position}
                  </div>

                  <div 
                    class="size-12 rounded-full overflow-hidden border border-white/10 shrink-0"
                    style="background-color: ${teamColor};"
                  >
                    <img
                      src="${headshot}"
                      alt="${row.displayName}"
                      class="w-full h-full object-cover"
                      draggable="false"
                      onerror="this.src='assets/img/drivers/default-driver.png'"
                    />
                  </div>

                  <div class="min-w-0">
                    <p class="text-white font-bold truncate text-base">${firstName} ${lastName}</p>
                    <p class="text-white/80 text-[11px] uppercase tracking-wider mt-1">
                      ${round1(row.avgPointsPerRace)} pts/carrera
                    </p>
                  </div>
                </div>

                <div class="text-right shrink-0">
                  <p class="text-white font-black text-xl leading-none">
                    ${Math.round(row.projectedPoints)} PTS
                  </p>
                  <p class="text-white/80 text-[11px] uppercase tracking-wider mt-1">
                    ${row.projectionIndex}% de conservar posición
                  </p>
                </div>
              </div>

              <div class="mt-4 w-full h-2 bg-white/15 rounded-full overflow-hidden">
                <div 
                  class="h-full bg-white/80 rounded-full transition-all duration-500"
                  style="width:${row.projectionIndex}%"
                ></div>
              </div>
            </div>
          `;
        }

        const teamName = row.displayName || row.team_name || "Equipo";
        const logo = getTeamColoredLogo(teamName);

        return `
          <div class="p-4 rounded-2xl bg-gradient-to-r from-white/10 to-transparent border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300">
            <div class="flex items-center justify-between gap-4">
              <div class="flex items-center gap-4 min-w-0">
                <div class="size-8 rounded-full flex items-center justify-center font-black text-sm shrink-0 ${badgeClass}">
                  ${position}
                </div>

                <div class="size-12 flex items-center justify-center bg-zinc-300/30 p-1 rounded-md">
                  <img
                    src="${logo}"
                    alt="${teamName}"
                    class="max-w-full max-h-full object-contain"
                    draggable="false"
                    onerror="this.src='assets/img/error/img-not-found.svg'"
                  />
                </div>

                <div class="min-w-0">
                  <p class="text-white font-bold truncate text-base">${teamName}</p>
                  <p class="text-white/80 text-[11px] uppercase tracking-wider mt-1">
                    ${round1(row.avgPointsPerRace)} pts/carrera
                  </p>
                </div>
              </div>

              <div class="text-right shrink-0">
                <p class="text-white font-black text-xl leading-none">
                  ${Math.round(row.projectedPoints)} PTS
                </p>
                <p class="text-white/80 text-[11px] uppercase tracking-wider mt-1">
                  ${row.projectionIndex}% de conservar posición
                </p>
              </div>
            </div>

            <div class="mt-4 w-full h-2 bg-white/15 rounded-full overflow-hidden">
              <div 
                class="h-full bg-white/80 rounded-full transition-all duration-500"
                style="width:${row.projectionIndex}%"
              ></div>
            </div>
          </div>
        `;
      }).join("")}
    </div>
  `;
}

function renderSeasonPrediction(driverRows = [], constructorRows = [], meetings = [], drivers = []) {
  const driverContainer = document.getElementById("predicted-driver-podium");
  const constructorContainer = document.getElementById("predicted-constructor-podium");
  const summary = document.getElementById("season-prediction-summary");

  if (!driverContainer || !constructorContainer || !summary) return;

  const safeDrivers = hasStandingsData(driverRows) ? driverRows : fallbackDriverStandings;
  const safeConstructors = hasStandingsData(constructorRows) ? constructorRows : fallbackConstructorStandings;

  const completedMeetings = getCompletedMeetingsCount(meetings);
  const totalMeetings = getTotalMeetingsCount(meetings);

  summary.textContent = `Estimación del final de la temporada a partir del ritmo actual de puntuación en ${completedMeetings} de ${totalMeetings} carreras disputadas.`;

  const predictedDrivers = buildPredictionRows(safeDrivers, meetings, "full_name");
  const predictedConstructors = buildPredictionRows(safeConstructors, meetings, "team_name");

  renderPredictionList(driverContainer, predictedDrivers, "driver", drivers);
  renderPredictionList(constructorContainer, predictedConstructors, "constructor", drivers);
}

let interval;

function initHeroSlider() {
  const slides = document.querySelectorAll(".hero-slide");
  if (!slides.length) return;

  let current = 0;

  function start() {
    interval = setInterval(() => {
      slides[current].classList.replace("opacity-100", "opacity-0");
      current = (current + 1) % slides.length;
      slides[current].classList.replace("opacity-0", "opacity-100");
    }, 10000);
  }

  function stop() {
    clearInterval(interval);
  }

  const hero = document.getElementById("hero-section");
  hero.addEventListener("mouseenter", stop);
  hero.addEventListener("mouseleave", start);

  start();
}

async function loadHome() {
  try {
    const meetings = await fetchJSON(`${API_BASE}/meetings?year=${CURRENT_YEAR}`, { retries: 2 });
    await sleep(200);

    const sessions = await fetchJSON(`${API_BASE}/sessions?year=${CURRENT_YEAR}`, { retries: 2 });
    await sleep(200);

    const sortedMeetings = [...meetings].sort(
      (a, b) => new Date(a.date_start) - new Date(b.date_start)
    );

    const nextMeeting = getNextMeeting(sortedMeetings);

    setNextGp(nextMeeting);
    renderCircuitInfo(nextMeeting);
    renderCalendar(sortedMeetings);

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

    renderDriverStandings(driverStandings, drivers);
    renderConstructorStandings(constructorStandings);
    renderSeasonPrediction(driverStandings, constructorStandings, sortedMeetings, drivers);

    if (drivers.length) {
      renderTeams(drivers);
    }
  } catch (error) {
    console.error("Error cargando F1 Pulse:", error);

    renderDriverStandings([], []);
    renderConstructorStandings([]);
    renderSeasonPrediction([], [], [], []);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initHeroSlider();
  loadHome();
});