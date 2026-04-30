function getSelectedCircuitFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const circuitSlug = params.get("circuit") || "";

  return getCircuitNameFromSlug(circuitSlug);
}

function findMeetingByCircuitSlug(meetings = [], circuitSlug = "") {
  const selectedCircuit = getCircuitNameFromSlug(circuitSlug);
  const selectedCanonical = getCircuitCanonicalName(selectedCircuit);
  const normalizedSelected = normalizeCircuitName(selectedCanonical);

  return meetings.find(meeting => {
    const candidates = [
      meeting?.circuit_short_name,
      meeting?.location,
      meeting?.meeting_name?.replace(" Grand Prix", "").trim()
    ].filter(Boolean);

    return candidates.some(candidate => {
      const canonical = getCircuitCanonicalName(candidate);
      return normalizeCircuitName(canonical) === normalizedSelected;
    });
  });
}

function getGoogleMapsEmbedUrl(location) {
  if (!location || !GOOGLE_MAPS_API_KEY) return "";

  const query = encodeURIComponent(`${location.lat},${location.lng}`);

  return `https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=${query}&zoom=14`;
}

function getLatestWeatherRow(weatherRows = []) {
  if (!Array.isArray(weatherRows) || !weatherRows.length) return null;

  return [...weatherRows].sort((a, b) => {
    return new Date(b.date || 0) - new Date(a.date || 0);
  })[0];
}

function renderWeatherCard(weather, sessionName = "") {
  if (!weather) {
    return `
      <div class="rounded-3xl h-full bg-surface-container border border-white/10 p-6">
        <div class="flex items-center gap-3 mb-4">
          <div class="size-11 rounded-2xl bg-primary-container/15 text-primary-container flex items-center justify-center">
            <i class="fa-solid fa-cloud-sun"></i>
          </div>
          <div>
            <p class="text-xs uppercase tracking-[0.3em] text-zinc-500 font-bold">Climatología</p>
            <h3 class="text-2xl font-black italic text-white font-headline uppercase">Sin datos disponibles</h3>
          </div>
        </div>

        <p class="text-sm text-zinc-400 leading-relaxed">
          OpenF1 no dispone todavía de datos meteorológicos para este evento, esta información estará disponible una vez se haya completado.
        </p>
      </div>
    `;
  }

  return `
    <div class="rounded-3xl bg-surface-container border border-white/10 p-6">
      <div class="flex items-center gap-3 mb-6">
        <div class="size-11 rounded-2xl bg-primary-container/15 text-primary-container flex items-center justify-center">
          <i class="fa-solid fa-cloud-sun-rain"></i>
        </div>
        <div>
          <p class="text-xs uppercase tracking-[0.3em] text-zinc-500 font-bold">Climatología</p>
          <h3 class="text-2xl font-black italic text-white font-headline uppercase">
            ${sessionName || "Última sesión"}
          </h3>
        </div>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
        <div class="rounded-2xl bg-black/30 border border-white/10 p-4">
          <p class="text-[10px] uppercase tracking-widest text-zinc-500 mb-2">Temperatura aire</p>
          <p class="text-2xl font-black text-white">${formatWeatherValue(weather.air_temperature, " ºC")}</p>
        </div>

        <div class="rounded-2xl bg-black/30 border border-white/10 p-4">
          <p class="text-[10px] uppercase tracking-widest text-zinc-500 mb-2">Temperatura pista</p>
          <p class="text-2xl font-black text-white">${formatWeatherValue(weather.track_temperature, " ºC")}</p>
        </div>

        <div class="rounded-2xl bg-black/30 border border-white/10 p-4">
          <p class="text-[10px] uppercase tracking-widest text-zinc-500 mb-2">Humedad</p>
          <p class="text-2xl font-black text-white">${formatWeatherValue(weather.humidity, " %")}</p>
        </div>

        <div class="rounded-2xl bg-black/30 border border-white/10 p-4">
          <p class="text-[10px] uppercase tracking-widest text-zinc-500 mb-2">Viento</p>
          <p class="text-2xl font-black text-white">${formatWeatherValue(weather.wind_speed, " m/s")}</p>
        </div>

        <div class="rounded-2xl bg-black/30 border border-white/10 p-4">
          <p class="text-[10px] uppercase tracking-widest text-zinc-500 mb-2">Dirección viento</p>
          <p class="text-2xl font-black text-white">${formatWeatherValue(weather.wind_direction, "º")}</p>
        </div>

        <div class="rounded-2xl bg-black/30 border border-white/10 p-4">
          <p class="text-[10px] uppercase tracking-widest text-zinc-500 mb-2">Lluvia</p>
          <p class="text-2xl font-black text-white">${Number(weather.rainfall || 0) > 0 ? "Sí" : "No"}</p>
        </div>
      </div>
    </div>
  `;
}

function renderCircuitDetail({ circuitName, meeting, weather, weatherSession }) {
  const root = document.getElementById("circuit-detail-root");
  if (!root) return;

  if (!circuitName || !meeting) {
    root.classList.remove("animate-pulse");
    root.innerHTML = `
      <div class="rounded-3xl bg-surface-container border border-white/10 p-10 text-center">
        <h1 class="text-3xl text-white font-black italic uppercase font-headline mb-4">
          Circuito no encontrado
        </h1>
        <p class="text-zinc-400 mb-6">
          No se ha podido encontrar información para el circuito seleccionado.
        </p>
        <a href="calendar" class="inline-flex items-center gap-2 text-primary-container font-bold uppercase">
          <i class="fa-solid fa-arrow-left"></i>
          Volver al calendario
        </a>
      </div>
    `;
    return;
  }

  const canonicalName = getCircuitCanonicalName(circuitName);
  const extra = circuitExtraInfo[canonicalName] || {};
  const location = getCircuitLocation(canonicalName);
  const country = getCountryData(meeting);
  const sectoredImage = getCircuitSectoredImageByName(canonicalName);
  const ticketUrl = getCircuitTicketUrl(canonicalName);
  const mapsUrl = getGoogleMapsEmbedUrl(location);

  root.classList.remove("animate-pulse");

  root.innerHTML = `
    <section class="relative rounded-3xl overflow-hidden border border-white/10 bg-surface-container mb-10">
      <div 
        class="absolute inset-0 opacity-70"
        style="
          background:
            radial-gradient(circle at 75% 25%, rgba(211,20,17,0.32), transparent 34%),
            linear-gradient(135deg, rgba(211,20,17,0.20), #111317 58%, #05060a 100%);
        "
      ></div>

      <div class="relative z-10 p-8 md:p-12">
        <a href="calendar" class="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm uppercase tracking-widest mb-10">
          <i class="fa-solid fa-arrow-left"></i>
          Volver al calendario
        </a>

        <div class="grid grid-cols-1 xl:grid-cols-[1fr_1.05fr] gap-10 items-center">
          <div>
            <div class="flex items-center gap-2 mb-6">
              ${country.flagUrl ? `
                <img 
                  src="${country.flagUrl}" 
                  alt="${country.nameES || country.name}" 
                  class="w-8 h-5 object-cover rounded-sm border border-white/20"
                  draggable="false"
                />
              ` : ""}
              <span class="text-xs uppercase tracking-[0.3em] text-zinc-400 font-bold">
                ${country.nameES || location?.country || "País no disponible"}
              </span>
            </div>

            <p class="text-primary-container font-headline italic font-bold uppercase tracking-[0.4em] text-xl mb-2">
              ${getMeetingNameES(meeting)}
            </p>

            <h1 class="text-5xl md:text-7xl font-black italic font-headline text-white uppercase tracking-tighter leading-none mb-6">
              ${getCircuitNameES(meeting)}
            </h1>

            <div class="flex flex-wrap items-center gap-3 mb-8">
              <a
                href="${ticketUrl}"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center gap-2 rounded-full bg-primary-container px-6 py-3 text-sm font-black uppercase tracking-widest text-white hover:opacity-90 transition-all hover:scale-[1.02]"
              >
                <i class="fa-solid fa-ticket"></i>
                Comprar entradas
              </a>
            </div>

            <p class="text-xs text-zinc-500 mb-8">
              La compra de entradas se realiza a través de la plataforma oficial de Formula 1.
            </p>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl">
              <div class="rounded-2xl bg-black/30 border border-white/10 p-4">
                <p class="text-[10px] uppercase tracking-widest text-zinc-500 mb-2">Longitud</p>
                <p class="text-xl font-black text-white">${extra.length || "N/D"} km</p>
              </div>

              <div class="rounded-2xl bg-black/30 border border-white/10 p-4">
                <p class="text-[10px] uppercase tracking-widest text-zinc-500 mb-2">Vueltas</p>
                <p class="text-xl font-black text-white">${extra.laps || "N/D"}</p>
              </div>

              <div class="rounded-2xl bg-black/30 border border-white/10 p-4">
                <p class="text-[10px] uppercase tracking-widest text-zinc-500 mb-2">Curvas</p>
                <p class="text-xl font-black text-white">${extra.turns || "N/D"}</p>
              </div>

              <div class="rounded-2xl bg-black/30 border border-white/10 p-4">
                <p class="text-[10px] uppercase tracking-widest text-zinc-500 mb-2">Fecha</p>
                <p class="text-xl font-black text-white">${formatDate(meeting.date_start)}</p>
              </div>
            </div>
          </div>

          <div class="relative rounded-3xl border border-white/10 bg-black/25 p-6 md:p-10 min-h-[360px] flex items-center justify-center overflow-hidden">
            <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(211,20,17,0.18),transparent_60%)]"></div>
            <img
              src="${sectoredImage}"
              alt="Sectores del circuito ${getCircuitNameES(meeting)}"
              class="relative z-10 w-full max-h-[420px] object-contain drop-shadow-2xl"
              draggable="false"
              onerror="this.src='assets/img/error/img-not-found.svg'"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-10">
      <div class="rounded-3xl bg-surface-container border border-white/10 p-6">
        <div class="flex items-center gap-3 mb-6">
          <div class="size-11 rounded-2xl bg-primary-container/15 text-primary-container flex items-center justify-center">
            <i class="fa-solid fa-gauge-high"></i>
          </div>
          <div>
            <p class="text-xs uppercase tracking-[0.3em] text-zinc-500 font-bold">Récord</p>
            <h3 class="text-2xl font-black italic text-white font-headline uppercase">Vuelta rápida</h3>
          </div>
        </div>

        <p class="text-4xl font-black italic text-white font-headline mb-3">
          ${extra.lapRecord || "N/D"}
        </p>
        <p class="text-zinc-400 text-sm">
          ${extra.lapRecordDriver || "Piloto no disponible"} · ${extra.lapRecordYear || "Año no disponible"}
        </p>
      </div>

      <div class="xl:col-span-2">
        ${renderWeatherCard(weather, weatherSession?.session_name)}
      </div>
    </section>

    <section class="rounded-3xl bg-surface-container border border-white/10 overflow-hidden">
      <div class="p-6 md:p-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <p class="text-primary-container font-headline italic font-bold uppercase tracking-[0.4em] text-sm mb-3">
            Geolocalización
          </p>
          <h2 class="text-4xl md:text-5xl font-black italic font-headline uppercase text-white tracking-tighter">
            ${location?.name || getCircuitNameES(meeting)}
          </h2>
          <p class="text-zinc-400 mt-2">
            ${location ? `${location.city}, ${getCountryData(location.country).nameES || location.country}` : "Ubicación no disponible"}
          </p>
        </div>

        ${location ? `
          <a 
            href="https://www.google.com/maps/search/?api=1&query=${location.lat},${location.lng}"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center gap-2 rounded-full bg-primary-container px-5 py-3 text-sm font-bold uppercase tracking-widest text-white hover:opacity-90 transition-opacity"
          >
            Abrir en Google Maps
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        ` : ""}
      </div>

      <div class="h-[420px] border-t border-white/10 bg-black/40">
        ${mapsUrl ? `
          <iframe
            title="Mapa del circuito ${location?.name || getCircuitNameES(meeting)}"
            src="${mapsUrl}"
            width="100%"
            height="100%"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        ` : `
          <div class="h-full flex items-center justify-center text-zinc-400 text-center p-8">
            No se ha podido cargar el mapa. Revisa la clave de Google Maps o la ubicación del circuito.
          </div>
        `}
      </div>
    </section>
  `;
}

async function getWeatherForMeeting(meetingKey) {
  if (!meetingKey) {
    return {
      weather: null,
      session: null
    };
  }

  const sessions = await fetchJSON(
    `${API_BASE}/sessions?meeting_key=${meetingKey}`,
    { retries: 2 }
  ).catch(() => []);

  if (!Array.isArray(sessions) || !sessions.length) {
    return {
      weather: null,
      session: null
    };
  }

  const preferredSession =
    sessions.find(session => String(session.session_name || "").toLowerCase().includes("race")) ||
    sessions[sessions.length - 1];

  if (!preferredSession?.session_key) {
    return {
      weather: null,
      session: preferredSession
    };
  }

  const weatherRows = await fetchJSON(
    `${API_BASE}/weather?session_key=${preferredSession.session_key}`,
    { retries: 2 }
  ).catch(() => []);

  return {
    weather: getLatestWeatherRow(weatherRows),
    session: preferredSession
  };
}

async function loadCircuitDetailPage() {
  try {
    const params = new URLSearchParams(window.location.search);
    const circuitSlug = params.get("circuit") || "";
    const circuitName = getSelectedCircuitFromUrl();

    const meetings = await fetchJSON(
      `${API_BASE}/meetings?year=${CURRENT_YEAR}`,
      { retries: 2 }
    ).catch(() => []);

    const meeting = findMeetingByCircuitSlug(meetings, circuitSlug);

    const weatherData = await getWeatherForMeeting(meeting?.meeting_key);

    renderCircuitDetail({
      circuitName,
      meeting,
      weather: weatherData.weather,
      weatherSession: weatherData.session
    });
  } catch (error) {
    console.error("Error cargando detalle de circuito:", error);

    renderCircuitDetail({
      circuitName: getSelectedCircuitFromUrl(),
      meeting: null,
      weather: null,
      weatherSession: null
    });
  }
}

document.addEventListener("DOMContentLoaded", loadCircuitDetailPage);