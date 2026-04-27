function renderTeamsPage(drivers = []) {
  const container = document.getElementById("teams-grid");
  if (!container) return;

  const teamsMap = new Map();

  drivers.forEach(driver => {
    if (!driver.team_name) return;

    const normalized = normalizeTeamName(driver.team_name);

    if (!teamsMap.has(normalized)) {
      teamsMap.set(normalized, {
        name: driver.team_name,
        drivers: []
      });
    }

    teamsMap.get(normalized).drivers.push(driver);
  });

  let teams = [...teamsMap.values()];

  if (!teams.length) {
    teams = fallbackConstructorStandings.map(team => ({
      name: team.team_name,
      drivers: []
    }));
  }

  container.classList.remove("animate-pulse");

  container.innerHTML = teams.map(team => {
    const teamName = team.name;
    const teamColor = getTeamColor(teamName);
    const coloredLogo = getTeamColoredLogo(teamName);
    const monoLogo = getTeamMonoLogo(teamName);
    const car = getTeamCarImage(teamName);
    const teamDrivers = team.drivers.length ? team.drivers : getTeamDrivers(teamName, drivers);

    return `
      <a 
        href="team-detail?team=${encodeURIComponent(teamName)}"
        class="group relative min-h-[300px] rounded-2xl overflow-hidden border border-white/10 bg-surface-container block transform transition-all duration-300 hover:scale-[1.015] hover:border-white/25"
        style="background: linear-gradient(135deg, ${teamColor}cc 45%, ${teamColor}ee 0%, #111317 120%);"
      >
        <img 
          src="${coloredLogo}" 
          alt="" 
          aria-hidden="true"
          class="absolute -right-4 top-2/3 -translate-y-1/2 size-60 object-contain opacity-20 pointer-events-none select-none transition-all duration-500 group-hover:opacity-25 group-hover:scale-110"
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

        <div class="relative z-20 p-6">
          <h2 class="text-4xl font-black italic font-headline text-white tracking-tighter mb-3">
            ${teamName}
          </h2>

          <div class="flex flex-wrap gap-4">
            ${teamDrivers.slice(0, 2).map(driver => `
              <div class="flex items-center gap-2 text-white">
                <div class="size-10 rounded-full overflow-hidden border border-white/20" style="background:${teamColor}">
                  <img
                    src="${driver.headshot_url || 'assets/img/error/img-not-found.svg'}"
                    alt="${driver.full_name || ''}"
                    class="w-full h-full object-cover"
                    draggable="false"
                    onerror="this.src='assets/img/error/img-not-found.svg'"
                  />
                </div>
                <span class="font-headline text-sm font-bold">
                  ${driver.full_name || `${driver.first_name || ''} ${driver.last_name || ''}`.trim() || 'Piloto'}
                </span>
              </div>
            `).join("")}
          </div>
        </div>

        <img 
          src="${car}" 
          alt="Monoplaza ${teamName}"
          class="absolute bottom-4 left-8 z-10 w-[72%] max-h-[160px] object-contain object-left-bottom transition-transform duration-500 group-hover:scale-105"
          draggable="false"
          onerror="this.src='assets/img/error/img-not-found.svg'"
        />

        <div class="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/25 to-transparent"></div>
      </a>
    `;
  }).join("");
}

async function loadTeamsPage() {
  try {
    const sessions = await fetchJSON(`${API_BASE}/sessions?year=${CURRENT_YEAR}`, { retries: 2 });
    await sleep(200);

    const { session: latestRaceSession } = await findLatestRaceSessionWithStandings(sessions);

    if (!latestRaceSession?.session_key) {
      renderTeamsPage([]);
      return;
    }

    const drivers = await fetchJSON(
      `${API_BASE}/drivers?session_key=${latestRaceSession.session_key}`,
      { retries: 2, retryDelay: 1500 }
    ).catch(() => []);

    renderTeamsPage(drivers);
  } catch (error) {
    console.error("Error cargando escuderías:", error);
    renderTeamsPage([]);
  }
}

document.addEventListener("DOMContentLoaded", loadTeamsPage);