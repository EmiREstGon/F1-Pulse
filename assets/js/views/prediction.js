function renderPredictionList(container, rows, type = "driver", drivers = []) {
  if (!container) return;

  const driversByNumber = type === "driver"
    ? new Map((drivers || []).map(driver => [Number(driver.driver_number), driver]))
    : new Map();

  const driversByName = type === "driver"
    ? new Map((drivers || []).map(driver => [normalizeDriverName(driver.full_name), driver]))
    : new Map();

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

          const firstName =
            row.first_name ||
            driver?.first_name ||
            [driver?.first_name, driver?.last_name].filter(Boolean).join(" ") ||
            `Piloto #${row.driver_number ?? "N/D"}`;

          const lastName =
            row.last_name ||
            driver?.last_name ||
            "";

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