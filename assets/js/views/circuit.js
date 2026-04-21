function renderCircuitInfo(meeting) {
  const block = document.getElementById("circuit-info-block");
  if (!block || !meeting) return;

  const country = getCountryData(meeting);
  const { data: extra } = getCircuitExtra(meeting);

  block.classList.remove("animate-pulse");

  block.innerHTML = `
    <div class="absolute inset-0 pointer-events-none bg-gradient-to-r from-primary-container/5 via-transparent to-transparent"></div>

    <div class="relative z-10 flex flex-col gap-8">
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