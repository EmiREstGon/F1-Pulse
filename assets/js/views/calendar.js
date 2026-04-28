function renderCalendar(meetings) {
  const container = document.getElementById("circuit-list");
  if (!container || !meetings?.length) return;

  container.classList.remove("animate-pulse");

  const now = new Date();

  const upcomingMeetings = meetings
    .filter(meeting => meeting.date_start && new Date(meeting.date_start) >= now)
    .sort((a, b) => new Date(a.date_start) - new Date(b.date_start))
    .slice(0, 7);

  if (!upcomingMeetings.length) {
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
    const isPast = meeting.date_start && new Date(meeting.date_start) < now;

    const statusText = getRaceCountdownLabel(meeting.date_start);
    const statusClass = isPast
      ? "bg-zinc-800/80 text-zinc-300 border-zinc-600"
      : "bg-primary-container/20 text-primary border-primary-container/40";

    return `
      <div class="relative overflow-hidden rounded-2xl group m-2 min-h-[230px] bg-surface-container-low border border-white/5 hover:border-primary-container/40 transition-all duration-300">
        <div 
          class="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-50 scale-[0.75] group-hover:scale-[0.8] group-hover:opacity-80 transition-all duration-300"
          style="background-image: url('${bgImage}')"
        ></div>

        <div class="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all"></div>

        <div class="relative p-8 z-10 h-full flex flex-col justify-between">
          <div>
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
          </div>

          <div class="flex flex-wrap items-center justify-between gap-4">
            <div class="flex items-center gap-4">
              <span class="material-symbols-outlined text-primary-container text-sm">
                <i class="fa-solid fa-calendar-days"></i>
              </span>
              <span class="text-xs text-zinc-200 pt-1">
                ${formatDate(meeting.date_start)}
              </span>
            </div>

            <span class="px-3 py-1 rounded-full border text-[10px] font-bold uppercase tracking-widest font-headline ${statusClass}">
              ${statusText}
            </span>
          </div>
        </div>
      </div>
    `;
  }).join("");

  const viewAll = `
    <a 
      href="calendar"
      class="bg-surface-container-low flex flex-col items-center justify-center p-8 group cursor-pointer rounded-2xl m-2 min-h-[230px] border border-white/5 hover:border-primary-container/40 transition-all duration-300"
    >
      <div class="size-12 rounded-full border border-zinc-700 flex items-center justify-center group-hover:bg-primary-container group-hover:border-primary-container transition-all mb-4">
        <i class="fa-solid fa-chevron-right"></i>
      </div>
      <div class="text-center font-headline italic font-bold uppercase text-zinc-400 tracking-tighter group-hover:text-white">
        Ver calendario completo
      </div>
    </a>
  `;

  container.innerHTML = cards + viewAll;
}

function renderFullCalendar(meetings) {
  const container = document.getElementById("full-calendar-list");
  if (!container) return;

  container.classList.remove("animate-pulse");

  if (!Array.isArray(meetings) || !meetings.length) {
    container.innerHTML = `
      <div class="xl:col-span-3 bg-surface-container-low p-8 rounded-2xl text-center">
        <p class="text-zinc-400 font-headline uppercase tracking-widest text-sm">
          No hay carreras disponibles.
        </p>
      </div>
    `;
    return;
  }

  const now = new Date();

  const sortedMeetings = [...meetings].sort(
    (a, b) => new Date(a.date_start) - new Date(b.date_start)
  );

  container.innerHTML = sortedMeetings.map((meeting, index) => {
    const country = getCountryData(meeting);
    const bgImage = getCircuitTrackImage(meeting, index);
    const isPast = meeting.date_start && new Date(meeting.date_start) < now;

    const statusText = getRaceCountdownLabel(meeting.date_start);
    const statusClass = isPast
      ? "bg-zinc-800/80 text-zinc-300 border-zinc-600"
      : "bg-primary-container/20 text-primary border-primary-container/40";

    return `
      <div class="relative overflow-hidden rounded-2xl group min-h-[230px] bg-surface-container-low cursor-pointer m-2 border border-white/5 hover:border-primary-container/40 transition-all duration-300">
        <div class="absolute inset-0 p-8 md:p-10 flex items-center justify-center">
          <div 
            class="w-full h-full bg-contain bg-center bg-no-repeat opacity-50 group-hover:scale-105 group-hover:opacity-80 transition-all duration-300"
            style="background-image: url('${bgImage}')"
          ></div>
        </div>

        <div class="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all"></div>

        <div class="relative p-8 z-10 h-full flex flex-col justify-between">
          <div>
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

            <h2 class="text-2xl font-bold italic font-headline text-white mb-2 uppercase">
              ${getMeetingNameES(meeting)}
            </h2>

            <p class="text-xs text-zinc-300 font-headline uppercase tracking-widest mb-6">
              ${getCircuitNameES(meeting)}
            </p>
          </div>

          <div class="flex flex-wrap items-center justify-between gap-4">
            <div class="flex items-center gap-4">
              <span class="material-symbols-outlined text-primary-container text-sm">
                <i class="fa-solid fa-calendar-days"></i>
              </span>
              <span class="text-xs text-zinc-200 pt-1">
                ${formatDate(meeting.date_start)}
              </span>
            </div>

            <span class="px-3 py-1 rounded-full border text-[10px] font-bold uppercase tracking-widest font-headline ${statusClass}">
              ${statusText}
            </span>
          </div>
        </div>
      </div>
    `;
  }).join("");
}