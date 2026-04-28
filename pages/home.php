<main class="pt-16">
    <!-- HERO SECTION -->
    <section class="relative h-[855px] overflow-hidden bg-surface-container-lowest" id="hero-section">
        <!-- HERO SLIDER -->
        <div id="hero-slider" class="absolute inset-0 z-0">
            <img class="hero-slide absolute inset-0 w-full h-full object-cover opacity-100 transition-opacity duration-1000"
                src="assets/img/hero/hero-1.webp" draggable="false" />
            <img class="hero-slide absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-1000"
                src="assets/img/hero/hero-2.webp" draggable="false" />
            <img class="hero-slide absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-1000"
                src="assets/img/hero/hero-3.webp" draggable="false" />
            <img class="hero-slide absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-1000"
                src="assets/img/hero/hero-4.webp" draggable="false" />
            <img class="hero-slide absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-1000"
                src="assets/img/hero/hero-5.webp" draggable="false" />
            <img class="hero-slide absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-1000"
                src="assets/img/hero/hero-6.webp" draggable="false" />
            <img class="hero-slide absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-1000"
                src="assets/img/hero/hero-7.webp" draggable="false" />
        </div>

        <!-- HERO OVERLAY -->
        <div class="absolute inset-0 bg-black/25 z-0"></div>
        <div class="relative h-full flex flex-col justify-center px-12 md:px-24">
            <div class="max-w-4xl z-10">
                <!-- SEASON YEAR -->
                <div class="flex items-center gap-3 mb-6">
                    <div class="h-1 w-12 bg-primary-container"></div>
                    <span class="font-headline uppercase tracking-[0.3em] text-primary text-xs font-bold">Temporada
                        2026</span>
                </div>

                <!-- HERO TITLE -->
                <h1
                    class="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black italic font-headline leading-none tracking-tighter mb-8 uppercase text-white drop-shadow-2xl">
                    VIVE LA <span class="text-primary-container">FÓRMULA 1</span> EN UN SOLO LUGAR
                </h1>

                <!-- HERO DIVIDER -->
                <div
                    class="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary-container to-transparent opacity-30">
                </div>

                <!-- HERO NEXT GP INFORMATION -->
                <div class="flex flex-col md:flex-row gap-8 items-start md:items-center pt-10">
                    <!-- COUNTDOWN CARD -->
                    <div class="bg-surface-container-high border border-white/10 p-6 rounded-2xl">
                        <p class="text-sm uppercase tracking-widest text-primary-container font-bold font-headline mb-3">
                            Cuenta atrás próximo GP
                        </p>

                        <div id="countdown" class="flex gap-6 text-center animate-pulse">
                            <div class="w-12">
                                <p id="cd-days" class="cd-number text-3xl font-headline italic md:text-4xl font-black text-white">--</p>
                                <span class="text-xs uppercase text-zinc-500">Días</span>
                            </div>

                            <div class="w-12">
                                <p id="cd-hours" class="cd-number text-3xl font-headline italic md:text-4xl font-black text-white">--</p>
                                <span class="text-xs uppercase text-zinc-500">Horas</span>
                            </div>

                            <div class="w-12">
                                <p id="cd-minutes" class="cd-number text-3xl font-headline italic md:text-4xl font-black text-white">--</p>
                                <span class="text-xs uppercase text-zinc-500">Min</span>
                            </div>

                            <div class="w-12">
                                <p id="cd-seconds" class="cd-number text-3xl font-headline italic md:text-4xl font-black text-white">--</p>
                                <span class="text-xs uppercase text-zinc-500">Seg</span>
                            </div>
                        </div>
                    </div>

                    <!-- NEXT GP CARD -->
                    <div class="p-6 bg-surface-container-high border border-white/10 rounded-2xl min-w-[280px]"
                        id="next-gp-block">
                        <p class="text-sm font-headline uppercase text-primary-container font-bold tracking-widest mb-3">
                            Próximo Gran Premio
                        </p>

                        <div class="font-headline italic font-bold text-white uppercase flex items-center gap-2 mb-2 animate-pulse"
                            id="next-gp-name">
                            Cargando Gran Premio...
                        </div>

                        <p class="text-sm font-headline uppercase text-primary tracking-wide animate-pulse"
                            id="next-gp-date">
                            Cargando fecha...
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- HERO GRADIENT -->
        <div
            class="absolute inset-0 pointer-events-none bg-gradient-to-t from-background via-transparent to-transparent">
        </div>
    </section>

    <!-- CIRCUIT INFORMATION SECTION -->
    <section class="px-8 md:px-12">
        <!-- CIRCUIT INFORMATION CARD -->
        <div id="circuit-info-block"
            class="relative overflow-hidden bg-surface-container-high border border-white/10 rounded-3xl p-8 bg-gradient-to-r from-primary-container/5 via-transparent to-transparent md:p-10 shadow-[0_0_40px_rgba(0,0,0,0.25)] animate-pulse">

            <div class="relative z-10 flex flex-col gap-8">
                <!-- CIRCUIT INFORMATION HEADER -->
                <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div class="flex items-center gap-6">
                        <i class="fa-solid fa-circle-info text-3xl text-primary-container"></i>

                        <div class="flex flex-col gap-2">
                            <p class="text-white font-headline font-black italic uppercase text-2xl tracking-tight">
                                Información del circuito
                            </p>
                            <p class="text-sm text-zinc-500 uppercase tracking-[0.2em]">
                                Cargando ubicación y datos técnicos...
                            </p>
                        </div>
                    </div>
                </div>

                <!-- STATISTICS -->
                <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
                    <div class="rounded-2xl border border-white/5 bg-background/30 p-5 text-center">
                        <p class="text-zinc-500 text-xs uppercase font-headline tracking-widest mb-2">Longitud</p>
                        <p class="text-white font-bold italic text-2xl">-- KM</p>
                    </div>

                    <div class="rounded-2xl border border-white/5 bg-background/30 p-5 text-center">
                        <p class="text-zinc-500 text-xs uppercase font-headline tracking-widest mb-2">Curvas</p>
                        <p class="text-white font-bold italic text-2xl">--</p>
                    </div>

                    <div class="rounded-2xl border border-white/5 bg-background/30 p-5 text-center">
                        <p class="text-zinc-500 text-xs uppercase font-headline tracking-widest mb-2">Vueltas</p>
                        <p class="text-white font-bold italic text-2xl">--</p>
                    </div>

                    <div class="rounded-2xl border border-white/5 bg-background/30 p-5 text-center">
                        <p class="text-zinc-500 text-xs uppercase font-headline tracking-widest mb-2">Récord</p>
                        <p class="text-white font-bold italic text-2xl">--</p>
                    </div>

                    <div class="rounded-2xl border border-white/5 bg-background/30 p-5 text-center">
                        <p class="text-zinc-500 text-xs uppercase font-headline tracking-widest mb-2">Piloto récord
                        </p>
                        <p class="text-white font-bold italic text-2xl">--</p>
                    </div>

                    <div class="rounded-2xl border border-white/5 bg-background/30 p-5 text-center">
                        <p class="text-zinc-500 text-xs uppercase font-headline tracking-widest mb-2">Año récord</p>
                        <p class="text-white font-bold italic text-2xl">--</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- DATA DASHBOARD SECTION -->
    <section class="py-24 bg-background" id="data-dashboard">
        <div class="max-w-7xl mx-auto px-8 mb-12 flex justify-between items-center">
            <h2 class="text-3xl font-black italic font-headline text-white uppercase">
                PANEL DE <span class="text-primary-container">RESULTADOS</span>
            </h2>
        </div>
        <div class="max-w-7xl mx-auto px-8 space-y-6">
            <!-- GRID TOP ROW -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <!-- CLASSIFICATION DRIVERS CARD -->
                <div
                    class="bg-surface-container relative p-8 border border-primary-container/50 border-primary-container rounded-2xl min-h-[360px]">
                    <!-- CLASSIFICATION DRIVERS HEADER -->
                    <div class="flex items-center gap-3 mb-6">
                        <span class="text-primary-container">
                            <i class="fa-solid fa-ranking-star text-white text-2xl"></i>
                        </span>

                        <span class="font-headline uppercase italic font-bold tracking-widest text-zinc-400">
                            Clasificación de pilotos
                        </span>
                    </div>

                    <!-- DRIVER STANDINGS -->
                    <div id="driver-standings" class="space-y-3 animate-pulse">
                        <!-- SKELETON LOOP -->
                        <?php for ($i = 0; $i < 5; $i++): ?>
                            <div class="flex items-center justify-between gap-4 p-4 bg-white/5 border border-white/5 rounded-2xl h-[92.5px]">
                                <div class="flex items-center gap-4 min-w-0 flex-1">
                                    <div class="size-8 rounded-full bg-white/10 shrink-0"></div>
                                    <div class="size-12 rounded-full bg-white/10 shrink-0"></div>
                                    <div class="size-10 rounded-full bg-white/10 shrink-0"></div>

                                    <div class="min-w-0 flex-1">
                                        <div class="h-4 w-32 bg-white/10 rounded mb-3"></div>
                                        <div class="flex flex-wrap gap-2">
                                            <div class="h-6 w-28 bg-white/10 rounded-full"></div>
                                            <div class="h-6 w-24 bg-white/10 rounded-full"></div>
                                        </div>
                                    </div>
                                </div>

                                <div class="text-center shrink-0 min-w-[56px]">
                                    <div class="h-6 w-10 bg-white/10 rounded mx-auto mb-2"></div>
                                    <div class="h-3 w-8 bg-white/10 rounded mx-auto"></div>
                                </div>
                            </div>
                        <?php endfor; ?>
                    </div>
                </div>

                <!-- CLASSIFICATION TEAMS CARD -->
                <div
                    class="bg-surface-container relative p-8 border border-zinc-700 rounded-2xl min-h-[360px]">
                    <!-- CLASSIFICATION TEAMS HEADER -->
                    <div class="flex items-center gap-3 mb-6">
                        <span class="text-zinc-500">
                            <i class="fa-solid fa-trophy text-primary-container text-2xl"></i>
                        </span>

                        <span class="font-headline uppercase italic font-bold tracking-widest text-zinc-400">
                            Clasificación de escuderías
                        </span>
                    </div>

                    <!-- CONSTRUCTOR STANDINGS -->
                    <div id="constructor-standings" class="space-y-3 animate-pulse">
                        <!-- SKELETON LOOP -->
                        <?php for ($i = 0; $i < 5; $i++): ?>
                            <div class="flex items-center justify-between gap-4 p-4 bg-white/5 border border-white/5 rounded-2xl h-[92.5px]">
                                <div class="flex items-center gap-4 min-w-0 flex-1">
                                    <div class="size-8 rounded-full bg-white/10 shrink-0"></div>
                                    <div class="size-12 rounded-md bg-white/10 shrink-0"></div>

                                    <div class="min-w-0 flex-1">
                                        <div class="h-4 w-32 bg-white/10 rounded mb-3"></div>
                                        <div class="h-6 w-28 bg-white/10 rounded-full"></div>
                                    </div>
                                </div>

                                <div class="text-center shrink-0 min-w-[56px]">
                                    <div class="h-6 w-10 bg-white/10 rounded mx-auto mb-2"></div>
                                    <div class="h-3 w-8 bg-white/10 rounded mx-auto"></div>
                                </div>
                            </div>
                        <?php endfor; ?>
                    </div>
                </div>
            </div>

            <!-- GRID BOTTOM ROW -->
            <!-- SEASON PREDICTION CARD -->
            <div id="season-prediction-card"
                class="bg-primary-container/80 p-6 md:p-8 relative overflow-hidden rounded-2xl border border-white/10">
                <div class="relative">
                    <!-- SEASON PREDICTION HEADER -->
                    <div class="flex items-center justify-between mb-4">
                        <div class="flex items-center gap-3">
                            <i class="fa-solid fa-chart-line text-white text-2xl"></i>
                            <div>
                                <h5
                                    class="text-xl md:text-2xl font-black font-headline text-white italic uppercase tracking-tight">
                                    Análisis de temporada
                                </h5>
                            </div>
                        </div>
                    </div>

                    <!-- SEASON PREDICTION SUMMARY -->
                    <p id="season-prediction-summary" class="text-white/80 text-sm md:text-base font-headline mb-6 leading-relaxed animate-pulse">
                        <span class="inline-block h-4 w-80 max-w-full bg-white/10 rounded"></span>
                    </p>

                    <!-- SEASON PREDICTION METHODOLOGY -->
                    <div class="mb-6 rounded-2xl border border-white/10 bg-white/5 p-4">
                        <div class="flex items-start gap-3">
                            <i class="fa-solid fa-circle-info text-white/80 text-base mt-0.5"></i>
                            <div class="text-white/75 text-sm leading-relaxed">
                                <p class="font-semibold text-white mb-3">¿Cómo se calcula?</p>
                                <ul class="space-y-2">
                                    <li><span class="text-white font-semibold">Pts/carrera:</span> puntos actuales ÷ carreras disputadas.
                                    </li>
                                    <li>
                                        <span class="text-white font-semibold">Puntos proyectados:</span>
                                        pts/carrera × número total de carreras del calendario.
                                    </li>
                                    <li>
                                        <span class="text-white font-semibold">% de conservar posición:</span>
                                        indica lo probable que es que el piloto o equipo mantenga su posición actual.
                                        Aumenta si tiene mejor ritmo, más puntos proyectados y ventaja sobre sus rivales directos,
                                        y disminuye si hay poca diferencia o riesgo de ser adelantado.
                                    </li>
                                </ul>
                                <p class="mt-3 text-xs text-white/50 leading-relaxed">
                                    Este análisis es orientativo y se actualiza en función de los datos disponibles de la temporada.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- SEASON PREDICTION DIVIDER -->
                    <div class="h-[1px] w-full bg-white/10 mb-6 relative">
                        <div class="absolute left-0 top-0 h-[1px] w-12 bg-white/40"></div>
                    </div>

                    <div class="grid grid-cols-1 xl:grid-cols-2 gap-6">
                        <!-- PILOTS PREDICTIONS CARD -->
                        <div class="bg-white/5 p-4 border border-white/5 rounded-2xl">
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fa-solid fa-flag-checkered text-white/80 text-base"></i>
                                <p class="text-sm uppercase tracking-[0.2em] text-white/70 font-headline">
                                    Pilotos
                                </p>
                            </div>

                            <!-- PREDICTED DRIVER PODIUM -->
                            <div id="predicted-driver-podium" class="space-y-3 animate-pulse">
                                <!-- SKELETON LOOP -->
                                <?php for ($i = 0; $i < 3; $i++): ?>
                                    <div class="p-4 rounded-2xl bg-gradient-to-r from-white/10 to-transparent border border-white/10">
                                        <div class="flex items-center justify-between gap-4">
                                            <div class="flex items-center gap-4 min-w-0 flex-1">
                                                <div class="size-8 rounded-full bg-white/10 shrink-0"></div>
                                                <div class="size-12 rounded-full bg-white/10 shrink-0"></div>

                                                <div class="min-w-0 flex-1">
                                                    <div class="h-4 w-32 bg-white/10 rounded mb-3"></div>
                                                    <div class="h-3 w-24 bg-white/10 rounded"></div>
                                                </div>
                                            </div>

                                            <div class="text-right shrink-0 min-w-[72px]">
                                                <div class="h-6 w-14 bg-white/10 rounded ml-auto mb-2"></div>
                                                <div class="h-3 w-20 bg-white/10 rounded ml-auto"></div>
                                            </div>
                                        </div>

                                        <div class="mt-4 w-full h-2 bg-white/10 rounded-full overflow-hidden">
                                            <div class="h-full w-1/2 bg-white/10 rounded-full"></div>
                                        </div>
                                    </div>
                                <?php endfor; ?>
                            </div>
                        </div>

                        <!-- CONSTRUCTORS PREDICTIONS CARD -->
                        <div class="bg-white/5 p-4 border border-white/5 rounded-2xl">
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fa-solid fa-screwdriver-wrench text-white/80 text-base"></i>
                                <p class="text-sm uppercase tracking-[0.2em] text-white/70 font-headline">
                                    Escuderías
                                </p>
                            </div>

                            <!-- PREDICTED CONSTRUCTOR PODIUM -->
                            <div id="predicted-constructor-podium" class="space-y-3 animate-pulse">
                                <!-- SKELETON LOOP -->
                                <?php for ($i = 0; $i < 3; $i++): ?>
                                    <div class="p-4 rounded-2xl bg-gradient-to-r from-white/10 to-transparent border border-white/10">
                                        <div class="flex items-center justify-between gap-4">
                                            <div class="flex items-center gap-4 min-w-0 flex-1">
                                                <div class="size-8 rounded-full bg-white/10 shrink-0"></div>
                                                <div class="size-12 rounded-md bg-white/10 shrink-0"></div>

                                                <div class="min-w-0 flex-1">
                                                    <div class="h-4 w-32 bg-white/10 rounded mb-3"></div>
                                                    <div class="h-3 w-24 bg-white/10 rounded"></div>
                                                </div>
                                            </div>

                                            <div class="text-right shrink-0 min-w-[72px]">
                                                <div class="h-6 w-14 bg-white/10 rounded ml-auto mb-2"></div>
                                                <div class="h-3 w-20 bg-white/10 rounded ml-auto"></div>
                                            </div>
                                        </div>

                                        <div class="mt-4 w-full h-2 bg-white/10 rounded-full overflow-hidden">
                                            <div class="h-full w-1/2 bg-white/10 rounded-full"></div>
                                        </div>
                                    </div>
                                <?php endfor; ?>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- CALENDAR SECTION -->
    <section class="py-24 bg-background relative overflow-hidden" id="season-calendar">
        <!-- CALENDAR SECTION HEADER -->
        <div class="px-12 md:px-24 mb-16 flex justify-between items-end">
            <div>
                <h2
                    class="text-4xl md:text-6xl font-black italic font-headline uppercase tracking-tighter text-white">
                    CALENDARIO DE LA <span class="text-primary-container">TEMPORADA</span></h2>
            </div>

            <!-- CALENDAR SECTION DECORATION -->
            <div class="hidden md:block h-[1px] flex-grow mx-12 bg-zinc-800 relative">
                <div
                    class="absolute right-0 top-[-3px] h-2 w-2 rounded-full bg-primary-container shadow-[0_0_10px_#d31411]">
                </div>
            </div>
        </div>

        <!-- CALENDAR LIST -->
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-white/5 p-2 animate-pulse" id="circuit-list">
            <!-- SKELETON LOOP -->
            <?php for ($i = 0; $i < 7; $i++): ?>
                <div class="bg-surface-container-low p-8 relative overflow-hidden rounded-2xl m-2 min-h-[230px]">
                    <div class="absolute top-0 right-0 p-4 opacity-10">
                        <div class="h-10 w-10 bg-zinc-700 rounded"></div>
                    </div>
                    <div class="flex items-center gap-2 mb-8">
                        <div class="w-6 h-4 bg-zinc-700 rounded"></div>
                        <div class="h-3 w-20 bg-zinc-700 rounded"></div>
                    </div>
                    <div class="h-7 w-40 bg-zinc-700 rounded mb-3"></div>
                    <div class="h-3 w-28 bg-zinc-800 rounded mb-6"></div>
                    <div class="flex items-center gap-4">
                        <div class="h-4 w-4 bg-zinc-700 rounded"></div>
                        <div class="h-3 w-24 bg-zinc-700 rounded"></div>
                    </div>
                </div>
            <?php endfor; ?>

            <div class="bg-surface-container-low flex flex-col items-center justify-center p-8 rounded-2xl m-2 min-h-[230px]">
                <div class="w-12 h-12 rounded-full bg-zinc-700 mb-4"></div>
                <div class="h-4 w-36 bg-zinc-700 rounded"></div>
            </div>
        </div>
    </section>

    <!-- TEAMS SECTION -->
    <section class="py-32 bg-surface-container-lowest relative" id="teams-section">
        <!-- SECTION DIVIDER -->
        <div
            class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-container to-transparent opacity-20">
        </div>

        <div class="max-w-7xl mx-auto px-8">
            <!-- TEAMS SECTION HEADER -->
            <div class="text-center mb-24">
                <span
                    class="text-zinc-500 font-headline italic font-bold uppercase tracking-[0.5em] text-sm block mb-4">Constructores
                    2026</span>
                <h2
                    class="text-5xl md:text-7xl font-black italic font-headline text-white uppercase tracking-tighter">
                    LAS <span class="text-primary-container">ESCUDERÍAS</span></h2>
            </div>

            <!-- TEAMS LIST -->
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 animate-pulse" id="team-list">
                <!-- SKELETON LOOP -->
                <?php for ($i = 0; $i < 11; $i++): ?>
                    <div class="aspect-square max-w-[240px] bg-surface-container-high px-8 py-4 rounded-2xl flex flex-col items-center justify-center">
                        <div class="h-20 w-24 bg-white/10 rounded mb-5"></div>
                        <div class="w-full h-[1px] bg-white/10 mb-6"></div>
                        <div class="h-6 w-32 bg-white/10 rounded mb-3"></div>
                        <div class="h-8 w-24 bg-white/10 rounded-full"></div>
                    </div>
                <?php endfor; ?>
            </div>
        </div>
    </section>

    <!-- NEW TEAMS SECTION -->
    <section class="py-32 bg-background relative overflow-hidden" id="future-era">
        <!-- SECTION DIVIDER -->
        <div
            class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-container to-transparent opacity-20">
        </div>

        <div class="absolute inset-0 racing-grid opacity-10 pointer-events-none"></div>
        <div class="max-w-7xl mx-auto px-8 relative">
            <!-- NEW TEAMS HEADER -->
            <div class="mb-16">
                <span
                    class="text-zinc-500 font-headline italic font-bold uppercase tracking-[0.5em] text-sm block mb-4">Tendencias
                    de Mercado</span>
                <h2
                    class="text-5xl md:text-7xl font-black italic font-headline text-white uppercase tracking-tighter">
                    NUEVAS <span class="text-primary-container">INCORPORACIONES</span></h2>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <!-- AUDI CARD -->
                <div
                    class="group relative bg-zinc-900/50 border border-white/5 p-12 overflow-hidden transform transition-all duration-300 ease-out hover:scale-105 hover:bg-zinc-900 rounded-3xl">
                    <!-- CARD HEADER -->
                    <div class="flex justify-between items-center mb-6">
                        <div class="flex flex-col">
                            <span
                                class="text-white font-headline italic font-black text-5xl tracking-tighter mb-2">AUDI</span>
                            <span class="text-zinc-500 font-headline uppercase tracking-widest text-xs">Nuevo
                                proyecto tras Sauber</span>
                        </div>

                        <!-- LOGO -->
                        <img src="assets/img/logos/brands/colored/audi-colored.svg" alt="Audi Logo"
                            class="h-12 opacity-70 group-hover:opacity-100 transition-all duration-300 pointer-events-none"
                            draggable="false" />
                    </div>

                    <!-- DIVIDER -->
                    <div class="h-px w-full bg-gradient-to-r from-primary-container/30 to-transparent mb-6"></div>

                    <!-- DESCRIPTION -->
                    <p class="text-zinc-400 font-headline leading-relaxed mb-8 italic-slant">La firma alemana
                        entrará oficialmente en la Fórmula 1 en 2026 tras asumir la estructura de Sauber. El
                        desarrollo de su propia unidad de potencia será una de las claves de esta nueva etapa.</p>
                    <div
                        class="flex items-center gap-2 text-white font-headline italic font-bold uppercase text-sm tracking-tighter group-hover:text-primary-container transition-colors">
                        Explorar equipo <span class="text-sm"><i class="fa-solid fa-angle-right"></i></span>
                    </div>
                </div>

                <!-- CADILLAC CARD -->
                <div
                    class="group relative bg-zinc-900/50 border border-white/5 p-12 overflow-hidden transform transition-all duration-300 ease-out hover:scale-105 hover:bg-zinc-900 rounded-3xl">
                    <!-- CARD HEADER -->
                    <div class="flex justify-between items-center mb-6">
                        <div class="flex flex-col">
                            <span
                                class="text-white font-headline italic font-black text-5xl tracking-tighter mb-2">CADILLAC</span>
                            <span class="text-zinc-500 font-headline uppercase tracking-widest text-xs">Nueva
                                incorporación a la parrilla</span>
                        </div>

                        <!-- LOGO -->
                        <img src="assets/img/logos/brands/colored/cadillac-colored.svg" alt="Cadillac Logo"
                            class="h-12 opacity-70 group-hover:opacity-100 transition-all duration-300 pointer-events-none"
                            draggable="false" />
                    </div>

                    <!-- DIVIDER -->
                    <div class="h-px w-full bg-gradient-to-r from-primary-container/30 to-transparent mb-6"></div>

                    <!-- DESCRIPTION -->
                    <p class="text-zinc-400 font-headline leading-relaxed mb-8 italic-slant">Cadillac se incorporará
                        como nuevo equipo, siendo el 11º en la parrilla, reforzando la presencia estadounidense en
                        la competición y
                        abriendo una nueva etapa dentro del campeonato.</p>
                    <div
                        class="flex items-center gap-2 text-white font-headline italic font-bold uppercase text-sm tracking-tighter group-hover:text-primary-container transition-colors">
                        Explorar equipo <span class="text-sm"><i class="fa-solid fa-angle-right"></i></span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>