function renderDriverStandings(rows, drivers = [], options = {}) {
  const container = document.getElementById("driver-standings");
  if (!container) return;

  const {
    limit = 5,
    columns = 1,
    splitAt = null
  } = options;

  const safeRows = hasStandingsData(rows) ? rows : fallbackDriverStandings;

  const driversMap = new Map(
    (drivers || []).map(driver => [Number(driver.driver_number), driver])
  );

  let standings = [...safeRows]
    .filter(row => row.position_current != null)
    .sort((a, b) => Number(a.position_current) - Number(b.position_current));

  if (typeof limit === "number" && limit > 0 && limit !== Infinity) {
    standings = standings.slice(0, limit);
  }

  container.classList.remove("animate-pulse");

  const renderCard = (row) => {
    const position = Number(row.position_current);
    const driver = driversMap.get(Number(row.driver_number));

    const firstName = row.first_name || driver?.first_name || "";
    const lastName = row.last_name || driver?.last_name || "";

    const fullName =
      `${firstName} ${lastName}`.trim() ||
      row.full_name ||
      driver?.full_name ||
      `Piloto #${row.driver_number ?? "N/D"}`;

    const driverNumber =
      row.driver_number ||
      driver?.driver_number ||
      "N/D";

    const teamName =
      row.team_name ||
      driver?.team_name ||
      "Equipo no disponible";

    const headshot =
      row.headshot_url ||
      driver?.headshot_url ||
      "assets/img/drivers/default-driver.png";

    const badgeClass = getPositionBadgeClass(position, "driver");
    const teamColor = getTeamColor(teamName);
    const pilotCountryName = getPilotCountryNameES(fullName);
    const pilotFlagUrl = getPilotFlagUrl(fullName);

    return `
      <div class="flex items-center justify-between gap-4 p-4 rounded-2xl bg-gradient-to-r from-primary-container/10 to-transparent border border-white/5 hover:border-primary-container/30 hover:bg-primary-container/10 transition-all duration-300">
        <div class="flex items-center gap-4 min-w-0 flex-1">
          <div class="size-8 rounded-full flex items-center justify-center font-black text-sm shrink-0 ${badgeClass}">
            ${position}
          </div>

          <div
            class="size-12 rounded-full overflow-hidden border border-white/10 shrink-0"
            style="background-color: ${teamColor};"
          >
            <img
              src="${headshot}"
              alt="${fullName}"
              class="w-full h-full object-cover"
              draggable="false"
              onerror="this.src='assets/img/drivers/default-driver.png'"
            />
          </div>

          <div class="size-10 rounded-full flex items-center justify-center font-black text-sm shrink-0 bg-zinc-700/60 text-white">
            #${driverNumber}
          </div>

          <div class="min-w-0 flex-1">
            <p class="text-white font-bold truncate text-base">${fullName}</p>

            <div class="flex flex-wrap items-center gap-2 mt-2 text-[11px] uppercase tracking-[0.08em] text-zinc-300">
              <span class="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/5 border border-white/5 min-w-0">
                ${pilotFlagUrl ? `
                  <img
                    src="${pilotFlagUrl}"
                    alt="${pilotCountryName}"
                    class="w-4 h-auto object-cover rounded-[2px] border border-white/10 shrink-0"
                    draggable="false"
                  />
                ` : ""}
                <span class="truncate">${pilotCountryName || "Nacionalidad no disponible"}</span>
              </span>

              <span class="inline-flex items-center px-2.5 py-1 rounded-full bg-white/5 border border-white/5 min-w-0" style="border-color: ${teamColor}; background-color: ${teamColor}25;">
                <span class="truncate">${teamName}</span>
              </span>
            </div>
          </div>
        </div>

        <div class="text-center shrink-0 min-w-[56px]">
          <p class="text-primary-container font-black text-2xl leading-none">${row.points_current ?? 0}</p>
          <p class="text-xs uppercase tracking-[0.1em] text-zinc-500 mt-1">PTS</p>
        </div>
      </div>
    `;
  };

  if (columns === 2) {
    const splitIndex = splitAt ?? Math.ceil(standings.length / 2);
    const leftColumn = standings.slice(0, splitIndex);
    const rightColumn = standings.slice(splitIndex);

    container.innerHTML = `
      <div class="grid grid-cols-1 xl:grid-cols-2 gap-3 xl:gap-6 items-start">
        <div class="space-y-3">
          ${leftColumn.map(renderCard).join("")}
        </div>
        <div class="space-y-3">
          ${rightColumn.map(renderCard).join("")}
        </div>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div class="space-y-3">
      ${standings.map(renderCard).join("")}
    </div>
  `;
}

function renderConstructorStandings(rows, options = {}) {
  const container = document.getElementById("constructor-standings");
  if (!container) return;

  const {
    limit = 5,
    columns = 1,
    splitAt = null
  } = options;

  const safeRows = hasStandingsData(rows) ? rows : fallbackConstructorStandings;

  let standings = [...safeRows]
    .filter(row => row.position_current != null)
    .sort((a, b) => Number(a.position_current) - Number(b.position_current));

  if (typeof limit === "number" && limit > 0 && limit !== Infinity) {
    standings = standings.slice(0, limit);
  }

  container.classList.remove("animate-pulse");

  const renderCard = (row) => {
    const position = Number(row.position_current);
    const teamName = row.team_name || "Equipo";
    const badgeClass = getPositionBadgeClass(position, "constructor");
    const logo = getTeamColoredLogo(teamName);

    const teamCountryName = getTeamCountryNameES(teamName);
    const teamFlagUrl = getTeamFlagUrl(teamName);

    return `
      <div class="flex items-center justify-between gap-4 p-4 rounded-2xl bg-gradient-to-r from-white/5 to-transparent border border-white/5 hover:border-white/15 hover:bg-white/5 transition-all duration-300">
        <div class="flex items-center gap-4 min-w-0 flex-1">
          <div class="size-8 rounded-full flex items-center justify-center font-black text-sm shrink-0 ${badgeClass}">
            ${position}
          </div>

          <div class="size-12 flex items-center justify-center shrink-0 bg-zinc-300/20 rounded-md p-1">
            <img
              src="${logo}"
              alt="${teamName}"
              class="max-w-full max-h-full object-contain"
              draggable="false"
              onerror="this.src='assets/img/error/img-not-found.svg'"
            />
          </div>

          <div class="min-w-0 flex-1">
            <p class="text-white font-bold truncate text-base">${teamName}</p>

            <div class="flex flex-wrap items-center gap-2 mt-2 text-[11px] uppercase tracking-[0.08em] text-zinc-300">
              <span class="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/5 border border-white/5 min-w-0">
                ${teamFlagUrl ? `
                  <img
                    src="${teamFlagUrl}"
                    alt="${teamCountryName}"
                    class="w-4 h-auto object-cover rounded-[2px] border border-white/10 shrink-0"
                    draggable="false"
                  />
                ` : ""}
                <span class="truncate">${teamCountryName || "Nacionalidad no disponible"}</span>
              </span>
            </div>
          </div>
        </div>

        <div class="text-center shrink-0 min-w-[56px]">
          <p class="text-zinc-100 font-black text-2xl leading-none">${row.points_current ?? 0}</p>
          <p class="text-xs uppercase tracking-[0.1em] text-zinc-500 mt-1">PTS</p>
        </div>
      </div>
    `;
  };

  if (columns === 2) {
    const splitIndex = splitAt ?? Math.ceil(standings.length / 2);
    const leftColumn = standings.slice(0, splitIndex);
    const rightColumn = standings.slice(splitIndex);

    container.innerHTML = `
      <div class="grid grid-cols-1 xl:grid-cols-2 gap-3 xl:gap-6 items-start">
        <div class="space-y-3">
          ${leftColumn.map(renderCard).join("")}
        </div>
        <div class="space-y-3">
          ${rightColumn.map(renderCard).join("")}
        </div>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div class="space-y-3">
      ${standings.map(renderCard).join("")}
    </div>
  `;
}