function renderDriversPage(drivers = []) {
  const container = document.getElementById("drivers-grid");
  if (!container) return;

  const safeDrivers = drivers.length ? drivers : [];

  container.classList.remove("animate-pulse");

  if (!safeDrivers.length) {
    container.innerHTML = `
      <div class="xl:col-span-4 bg-surface-container p-8 rounded-2xl text-center border border-white/5">
        <p class="text-zinc-400 font-headline uppercase tracking-widest text-sm">
          No se han podido cargar los pilotos.
        </p>
      </div>
    `;
    return;
  }

  container.innerHTML = safeDrivers.map(driver => {
    const firstName = driver.first_name || "";
    const lastName = driver.last_name || "";

    const fullName =
      `${firstName} ${lastName}`.trim() ||
      driver.full_name ||
      `Piloto #${driver.driver_number ?? "N/D"}`;

    const teamName = driver.team_name || "Equipo no disponible";
    const teamColor = getTeamColor(teamName);
    const monoLogo = getTeamMonoLogo(teamName);
    const coloredLogo = getTeamColoredLogo(teamName);
    const driverImage = getDriverImage(fullName);
    const numberImage = getDriverNumberImage(fullName);

    const driverFlagUrl = getDriverFlagUrl(fullName);
    const driverNationality = getDriverNationality(fullName) || driver.country_code || driver.nationality || "N/D";

    return `
      <a
        href="driver-detail.php?driver=${encodeURIComponent(fullName)}"
        class="group relative h-[340px] rounded-2xl overflow-hidden border border-white/10 bg-surface-container block transition-all duration-300 hover:scale-[1.015] hover:border-white/25"
        style="background: linear-gradient(135deg, ${teamColor}cc 0%, ${teamColor}99 48%, #111317 130%);"
      >
        <img 
          src="${coloredLogo}" 
          alt="" 
          aria-hidden="true"
          class="absolute -right-4 top-2/3 -translate-y-1/2 size-44 object-contain opacity-20 pointer-events-none select-none transition-all duration-500 group-hover:opacity-25 group-hover:scale-110"
          draggable="false"
        />

        <div class="absolute top-6 right-6 size-16 rounded-full bg-black/25 border border-white/15 flex items-center justify-center backdrop-blur-sm z-20">
          <img 
            src="${monoLogo}" 
            alt="${teamName}" 
            class="max-w-10 max-h-10 object-contain"
            draggable="false"
            onerror="this.src='assets/img/error/img-not-found.svg'"
          />
        </div>

        <div class="relative z-30 p-5 max-w-[52%]">
          <h2 class="text-3xl md:text-4xl font-black italic font-headline text-white leading-[0.9] tracking-tighter drop-shadow">
            ${firstName || fullName}<br>
            ${lastName ? `<span>${lastName}</span>` : ""}
          </h2>

          <p class="text-white/90 font-headline font-bold mt-3 text-sm">
            ${teamName}
          </p>

          <div class="mt-5">
            ${numberImage ? `
              <img
                src="${numberImage}"
                alt="Número ${driver.driver_number || ""}"
                class="h-12 md:h-14 w-auto object-contain drop-shadow"
                draggable="false"
              />
            ` : `
              <p class="text-5xl font-black italic text-white drop-shadow">${driver.driver_number || ""}</p>
            `}
          </div>
        </div>

        <img
          src="${driverImage}"
          alt="${fullName}"
          class="absolute left-1/2 bottom-[-300px] z-20 h-[175%] max-w-none object-contain object-bottom -translate-x-1/2 transition-transform duration-500 group-hover:scale-105 group-hover:z-30"
          draggable="false"
          onerror="this.src='assets/img/error/img-not-found.svg'"
        />

        <div class="absolute left-5 bottom-5 z-30 flex items-center gap-3 px-3 py-2 rounded-full bg-black/25 border border-white/10 backdrop-blur-sm">
          ${driverFlagUrl ? `
            <img
              src="${driverFlagUrl}"
              alt="${driverNationality}"
              class="w-7 h-5 object-cover rounded-sm border border-white/20"
              draggable="false"
            />
          ` : ""}
          <span class="text-[10px] uppercase tracking-[0.18em] text-white/80 font-headline">
            ${driverNationality}
          </span>
        </div>

        <div class="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
      </a>
    `;
  }).join("");
}

async function loadDriversPage() {
  try {
    const sessions = await fetchJSON(`${API_BASE}/sessions?year=${CURRENT_YEAR}`, { retries: 2 });
    await sleep(200);

    const { session: latestRaceSession } = await findLatestRaceSessionWithStandings(sessions);

    if (!latestRaceSession?.session_key) {
      renderDriversPage([]);
      return;
    }

    const drivers = await fetchJSON(
      `${API_BASE}/drivers?session_key=${latestRaceSession.session_key}`,
      { retries: 2, retryDelay: 1500 }
    ).catch(() => []);

    renderDriversPage(drivers);
  } catch (error) {
    console.error("Error cargando pilotos:", error);
    renderDriversPage([]);
  }
}

document.addEventListener("DOMContentLoaded", loadDriversPage);