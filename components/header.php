<nav class="fixed top-0 w-full z-50 border-b border-white/10 bg-zinc-950/40 backdrop-blur-xl flex justify-between items-center px-8 py-4 max-w-full mx-auto">
    <div class="flex items-center gap-4">
        <a href="home">
            <img alt="F1 Pulse Logo" class="h-12 w-auto" src="assets/img/logos/web/Logo Dark.png" draggable="false" />
        </a>
    </div>

    <div class="hidden md:flex items-center space-x-8">
        <!-- NAVIGATION ELEMENT -->
        <a
            href="classification"
            class="group relative font-headline italic tracking-tighter uppercase text-sm transition-all duration-300
                <?= ($currentPage === 'classification')
                    ? 'text-white'
                    : 'text-zinc-400 hover:text-white'
                ?>"
        >
            Clasificación

            <!-- ANIMATED UNDERLINE -->
            <span
                class="absolute left-0 -bottom-1 h-[2px] w-full bg-primary-container transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100
                    <?= ($currentPage === 'classification') ? 'scale-x-100' : '' ?>">
            </span>
        </a>

        <!-- NAVIGATION ELEMENT -->
        <a
            href="calendar"
            class="group relative font-headline italic tracking-tighter uppercase text-sm transition-all duration-300
                <?= ($currentPage === 'calendar')
                    ? 'text-white'
                    : 'text-zinc-400 hover:text-white'
                ?>"
        >
            Calendario

            <!-- ANIMATED UNDERLINE -->
            <span
                class="absolute left-0 -bottom-1 h-[2px] w-full bg-primary-container transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100
                    <?= ($currentPage === 'calendar') ? 'scale-x-100' : '' ?>">
            </span>
        </a>

        <!-- NAVIGATION ELEMENT -->
        <a
            href="teams"
            class="group relative font-headline italic tracking-tighter uppercase text-sm transition-all duration-300
                <?= ($currentPage === 'teams')
                    ? 'text-white'
                    : 'text-zinc-400 hover:text-white'
                ?>"
        >
            Escuderías

            <!-- ANIMATED UNDERLINE -->
            <span
                class="absolute left-0 -bottom-1 h-[2px] w-full bg-primary-container transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100
                    <?= ($currentPage === 'teams') ? 'scale-x-100' : '' ?>">
            </span>
        </a>

        <!-- NAVIGATION ELEMENT -->
        <a
            href="drivers"
            class="group relative font-headline italic tracking-tighter uppercase text-sm transition-all duration-300
                <?= ($currentPage === 'drivers')
                    ? 'text-white'
                    : 'text-zinc-400 hover:text-white'
                ?>"
        >
            Pilotos

            <!-- ANIMATED UNDERLINE -->
            <span
                class="absolute left-0 -bottom-1 h-[2px] w-full bg-primary-container transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100
                    <?= ($currentPage === 'drivers') ? 'scale-x-100' : '' ?>">
            </span>
        </a>

        <!-- NAVIGATION ELEMENT -->
        <a
            href="wallpaper"
            class="group relative font-headline italic tracking-tighter uppercase text-sm transition-all duration-300
                <?= ($currentPage === 'wallpaper')
                    ? 'text-white'
                    : 'text-zinc-400 hover:text-white'
                ?>"
        >
            Crea tu fondo

            <!-- ANIMATED UNDERLINE -->
            <span
                class="absolute left-0 -bottom-1 h-[2px] w-full bg-primary-container transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100
                    <?= ($currentPage === 'wallpaper') ? 'scale-x-100' : '' ?>">
            </span>
        </a>
    </div>
</nav>