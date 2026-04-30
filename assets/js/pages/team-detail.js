function getSelectedTeamFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const teamSlug = params.get("team") || "";

  return getTeamNameFromSlug(teamSlug);
}

function buildDriverDisplayName(driver = {}) {
  const apiName =
    driver.full_name ||
    `${driver.first_name || ""} ${driver.last_name || ""}`.trim();

  return getDriverAssetKey(apiName || driver.name_acronym || "");
}

function normalizeDriverForDisplay(driver = {}) {
  const fullName = buildDriverDisplayName(driver);

  return {
    ...driver,
    full_name: fullName,
    driver_number: driver.driver_number || driver.number || "N/D",
    team_name: driver.team_name || driver.team || ""
  };
}

function renderDriverCard(driver, teamColor) {
  const safeDriver = normalizeDriverForDisplay(driver);

  const fullName = safeDriver.full_name || "Piloto";
  const driverImage = getDriverImage(fullName);
  const numberImage = getDriverNumberImage(fullName);
  const country = getDriverCountryData(fullName);
  const dorsal = safeDriver.driver_number || "N/D";

  const [firstName = "", ...lastNameParts] = fullName.split(" ");
  const lastName = lastNameParts.join(" ");

  return `
    <article 
      class="relative z-0 min-h-[500px] rounded-[2rem] overflow-hidden border border-white/10 bg-[#0f1117] group shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:border-white/20"
      style="box-shadow: 0 0 0 1px ${teamColor}22, 0 24px 80px ${teamColor}18;"
    >
      <div 
        class="absolute inset-0 opacity-90"
        style="
          background:
            radial-gradient(circle at 80% 20%, ${teamColor}77, transparent 32%),
            radial-gradient(circle at 15% 85%, ${teamColor}33, transparent 28%),
            linear-gradient(135deg, ${teamColor}22 0%, #101217 45%, #05060a 100%);
        "
      ></div>

      <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[1] pointer-events-none">
        ${numberImage ? `
          <img 
            src="${numberImage}" 
            alt="Dorsal ${dorsal}"
            class="w-32 md:w-36 opacity-25 drop-shadow-2xl transition-all duration-500 group-hover:opacity-40 group-hover:scale-105"
            draggable="false"
          />
        ` : `
          <p class="text-8xl md:text-9xl font-black italic text-white/10 font-headline leading-none transition-all duration-500 group-hover:text-white/15 group-hover:scale-105">
            ${dorsal}
          </p>
        `}
      </div>

      <div 
        class="absolute bottom-0 left-1/2 w-[72%] h-[72%] -translate-x-1/2 blur-3xl opacity-30"
        style="background: radial-gradient(circle, ${teamColor} 0%, transparent 65%);"
      ></div>

      <img
        src="${driverImage}"
        alt="${fullName}"
        class="absolute bottom-0 right-[5%] h-[97.5%] max-w-[72%] object-contain object-bottom z-[2] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        draggable="false"
        onerror="this.src='assets/img/error/img-not-found.svg'"
      />

      <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/85 via-black/35 to-transparent z-[3]"></div>

      <div class="relative z-10 p-7 md:p-8 h-full flex flex-col justify-between min-h-[500px]">
        <div class="max-w-[62%]">
          <h3 class="font-headline uppercase tracking-tighter leading-[0.86] mb-5">
            <span class="block text-2xl md:text-3xl font-bold italic text-white/70">
              ${firstName}
            </span>
            <span class="block text-4xl md:text-6xl font-black italic text-white">
              ${lastName || firstName}
            </span>
          </h3>

          <div 
            class="h-1 w-60 rounded-full mb-6"
            style="background: linear-gradient(90deg, ${teamColor}, transparent);"
          ></div>
        </div>

        <div class="relative z-20 grid grid-cols-2 gap-3 max-w-[78%]">
          <div class="rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur-md">
            <div class="flex items-center gap-2 text-white/45 mb-2">
              <p class="text-[10px] uppercase tracking-widest font-bold">Nacionalidad</p>
            </div>

            <div class="flex items-center gap-2 min-w-0">
              ${country.flagUrl ? `
                <img 
                  src="${country.flagUrl}" 
                  alt="${country.nameES || country.name}"
                  class="w-7 h-5 object-cover rounded-sm border border-white/20 shrink-0"
                  draggable="false"
                />
              ` : ""}
              <p class="text-sm text-white font-bold truncate">
                ${country.nameES || "No disponible"}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div 
        class="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style="box-shadow: inset 0 0 0 1px ${teamColor}66, inset 0 0 80px ${teamColor}16;"
      ></div>
    </article>
  `;
}

function renderTeamDetail(teamName, drivers = []) {
  const root = document.getElementById("team-detail-root");
  if (!root) return;

  if (!teamName) {
    root.classList.remove("animate-pulse");
    root.innerHTML = `
      <div class="rounded-3xl bg-surface-container border border-white/10 p-10 text-center">
        <h1 class="text-3xl font-black italic text-white uppercase mb-4">
          Escudería no encontrada
        </h1>
        <a href="teams" class="text-primary-container font-bold uppercase">
          Volver a escuderías
        </a>
      </div>
    `;
    return;
  }

  const teamColor = getTeamColor(teamName);
  const teamCountry = getCountryData(getTeamCountry(teamName));
  const carImage = getTeamCarImage(teamName);
  const carModel = getTeamCarModel(teamName);
  const logo = getTeamColoredLogo(teamName);
  const monoLogo = getTeamMonoLogo(teamName);

  const teamDrivers = getTeamDrivers(teamName, drivers).slice(0, 2);

  root.classList.remove("animate-pulse");

  root.innerHTML = `
    <section class="relative rounded-3xl overflow-hidden border border-white/10 bg-surface-container mb-10">
      <div 
        class="absolute inset-0"
        style="background: radial-gradient(circle at 75% 30%, ${teamColor}88, transparent 35%), linear-gradient(135deg, ${teamColor}55, #111317 60%);"
      ></div>

      <img
        src="${logo}"
        alt=""
        aria-hidden="true"
        class="absolute right-10 top-12 w-96 opacity-10"
        draggable="false"
      />

      <div class="relative z-10 p-8 md:p-12">
        <a href="teams" class="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm uppercase tracking-widest mb-10">
          <i class="fa-solid fa-arrow-left"></i>
          Volver a escuderías
        </a>

        <div class="grid grid-cols-1 xl:grid-cols-[1fr_1.15fr] gap-10 items-center">
          <div>
            <div class="flex items-center gap-5 mb-8">
              <div class="size-20 rounded-2xl bg-black/30 border border-white/10 flex items-center justify-center backdrop-blur-sm">
                <img
                  src="${monoLogo}"
                  alt="${teamName}"
                  class="max-w-14 max-h-14 object-contain"
                  draggable="false"
                />
              </div>

              <div>
                <p class="text-xs uppercase tracking-[0.35em] text-white/50 font-headline mb-2">
                  Escudería
                </p>
                <h1 class="text-6xl md:text-8xl font-black italic font-headline text-white uppercase tracking-tighter leading-none">
                  ${teamName}
                </h1>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
              <div class="rounded-2xl bg-black/25 border border-white/10 p-5">
                <p class="text-xs uppercase tracking-widest text-white/50 mb-2">Nacionalidad</p>
                <div class="flex items-center gap-3">
                  ${teamCountry.flagUrl ? `
                    <img src="${teamCountry.flagUrl}" alt="${teamCountry.nameES}" class="w-7 h-5 rounded-sm object-cover border border-white/20">
                  ` : ""}
                  <p class="text-white font-bold">${teamCountry.nameES || "No disponible"}</p>
                </div>
              </div>

              <div class="rounded-2xl bg-black/25 border border-white/10 p-5">
                <p class="text-xs uppercase tracking-widest text-white/50 mb-2">Modelo</p>
                <p class="text-white font-bold">${carModel}</p>
              </div>
            </div>
          </div>

          <div class="relative">
            <img
              src="${carImage}"
              alt="Monoplaza ${teamName}"
              class="w-full object-contain drop-shadow-2xl"
              draggable="false"
              onerror="this.src='assets/img/error/img-not-found.svg'"
            />
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="flex items-end justify-between mb-8">
        <div>
          <p class="text-primary-container font-headline italic font-bold uppercase tracking-[0.4em] text-sm mb-3">
            Temporada 2026
          </p>
          <h2 class="text-4xl md:text-5xl font-black italic font-headline uppercase text-white tracking-tighter">
            Pilotos oficiales
          </h2>
        </div>
      </div>

      <div class="grid grid-cols-1 xl:grid-cols-2 gap-8">
        ${teamDrivers.length
          ? teamDrivers.map(driver => renderDriverCard(driver, teamColor)).join("")
          : `
            <div class="xl:col-span-2 rounded-3xl bg-surface-container border border-white/10 p-10 text-center text-zinc-400">
              No hay pilotos disponibles para esta escudería.
            </div>
          `
        }
      </div>
    </section>
  `;
}

async function loadTeamDetailPage() {
  try {
    const teamName = getSelectedTeamFromUrl();

    const sessions = await fetchJSON(`${API_BASE}/sessions?year=${CURRENT_YEAR}`, { retries: 2 });
    await sleep(200);

    const { session: latestRaceSession } = await findLatestRaceSessionWithStandings(sessions);

    if (!latestRaceSession?.session_key) {
      renderTeamDetail(teamName, []);
      return;
    }

    const drivers = await fetchJSON(
      `${API_BASE}/drivers?session_key=${latestRaceSession.session_key}`,
      { retries: 2, retryDelay: 1500 }
    ).catch(() => []);

    renderTeamDetail(teamName, drivers);
  } catch (error) {
    console.error("Error cargando detalle de escudería:", error);
    renderTeamDetail(getSelectedTeamFromUrl(), []);
  }
}

document.addEventListener("DOMContentLoaded", loadTeamDetailPage);