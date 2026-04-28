<main class="pt-32 px-8 max-w-7xl mx-auto">
    <!-- TITLE -->
    <section class="mb-12">
        <h1 class="text-5xl font-black italic font-headline uppercase text-white">
            CREA TU <span class="text-primary-container">FONDO</span>
        </h1>

        <p class="text-zinc-500 mt-4 font-headline uppercase tracking-widest text-xs">
            Refresca el fondo de pantalla con tu piloto y escudería favoritos de la Fórmula 1.
        </p>
    </section>

    <section class="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-8 mb-20">
        <!-- CONFIGURATION -->
        <aside class="bg-surface-container border border-white/10 rounded-3xl p-6 h-fit">
            <h2 class="text-xl font-black italic font-headline uppercase text-white mb-6">
                Configuración
            </h2>

            <!-- FORMAT -->
            <div class="mb-8">
                <p class="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-3">
                    Formato
                </p>

                <div class="grid grid-cols-2 gap-3">
                    <button type="button" data-format="desktop"
                        class="wallpaper-format-btn active-format rounded-2xl border border-primary-container bg-primary-container/20 p-4 text-left transition-all">
                        <i class="fa-solid fa-desktop text-2xl text-primary-container mb-3"></i>
                        <p class="font-bold text-white">Ordenador</p>
                        <p class="text-xs text-zinc-400">16:9</p>
                    </button>

                    <button type="button" data-format="mobile"
                        class="wallpaper-format-btn rounded-2xl border border-white/10 bg-white/5 p-4 text-left hover:border-primary-container/40 transition-all">
                        <i class="fa-solid fa-mobile-screen text-2xl text-primary-container mb-3"></i>
                        <p class="font-bold text-white">Móvil</p>
                        <p class="text-xs text-zinc-400">9:16</p>
                    </button>
                </div>
            </div>

            <!-- DRIVER -->
            <div class="mb-6">
                <label for="wallpaper-driver" class="text-xs uppercase tracking-[0.2em] text-zinc-500 block mb-3">
                    Piloto
                </label>
                <select id="wallpaper-driver"
                    class="w-full rounded-2xl bg-background border border-white/10 text-white px-4 py-3 focus:border-primary-container focus:ring-primary-container">
                </select>
            </div>

            <!-- TEAM -->
            <div class="mb-6">
                <label for="wallpaper-team" class="text-xs uppercase tracking-[0.2em] text-zinc-500 block mb-3">
                    Escudería
                </label>
                <select id="wallpaper-team"
                    class="w-full rounded-2xl bg-background border border-white/10 text-white px-4 py-3 focus:border-primary-container focus:ring-primary-container">
                </select>
            </div>

            <!-- COLOR MODE -->
            <div class="mb-6">
                <p class="text-xs uppercase tracking-[0.2em] text-zinc-500 block mb-3">
                    Color de fondo
                </p>

                <div class="grid grid-cols-2 gap-3">
                    <button type="button" data-color-mode="team"
                        class="wallpaper-color-mode-btn rounded-2xl border border-primary-container bg-primary-container/20 p-4 text-left transition-all">
                        <i class="fa-solid fa-flag-checkered text-2xl text-primary-container mb-3"></i>
                        <p class="font-bold text-white">Escudería</p>
                        <p class="text-xs text-zinc-400">Color oficial</p>
                    </button>

                    <button type="button" data-color-mode="custom"
                        class="wallpaper-color-mode-btn rounded-2xl border border-white/10 bg-white/5 p-4 text-left hover:border-primary-container/40 transition-all">
                        <i class="fa-solid fa-palette text-2xl text-primary-container mb-3"></i>
                        <p class="font-bold text-white">Manual</p>
                        <p class="text-xs text-zinc-400">Color personalizado</p>
                    </button>
                </div>
            </div>

            <!-- COLOR PICKER -->
            <div class="mb-8">
                <label for="wallpaper-color" class="text-xs uppercase tracking-[0.2em] text-zinc-500 block mb-3">
                    Color personalizado
                </label>
                <input id="wallpaper-color" type="color" value="#d31411"
                    class="w-full h-12 rounded-2xl bg-background border border-white/10 p-1 cursor-pointer">
            </div>

            <button id="download-wallpaper"
                class="w-full rounded-2xl bg-primary-container hover:bg-red-700 transition-colors py-4 font-headline font-black italic uppercase text-white">
                Descargar fondo
            </button>
        </aside>

        <!-- PREVIEW -->
        <section class="bg-surface-container-lowest border border-white/10 rounded-3xl p-6 overflow-hidden">
            <div class="flex items-center justify-between mb-6">
                <h2 class="text-xl font-black italic font-headline uppercase text-white">
                    Vista previa
                </h2>
                <p id="wallpaper-size-label" class="text-xs uppercase tracking-[0.2em] text-zinc-500">
                    1920 × 1080
                </p>
            </div>

            <div class="w-full flex justify-center">
                <canvas id="wallpaper-canvas"
                    class="max-w-full rounded-2xl border border-white/10 bg-black shadow-2xl">
                </canvas>
            </div>
        </section>
    </section>
</main>