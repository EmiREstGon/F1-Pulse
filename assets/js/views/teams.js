function renderTeams(drivers) {
  const container = document.getElementById("team-list");
  if (!container) return;

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
    const color = getTeamColor(team.team_name);
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