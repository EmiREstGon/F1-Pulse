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
          "";

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