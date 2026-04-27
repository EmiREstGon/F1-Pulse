<main class="pt-32 px-8 pb-20 max-w-[1800px] mx-auto">
    <!-- TITLE -->
    <section class="mb-12">
        <h1 class="text-5xl font-black italic font-headline uppercase text-white">
            Escuderías de la <span class="text-primary-container">Fórmula 1</span>
        </h1>
        <p class="text-zinc-500 mt-4 font-headline uppercase tracking-widest text-xs">
            Temporada 2026
        </p>
    </section>

    <!-- TEAMS LIST -->
    <section id="teams-grid" class="grid grid-cols-1 xl:grid-cols-2 gap-8 animate-pulse">
        <!-- SKELETON LOOP -->
        <?php for ($i = 0; $i < 11; $i++): ?>
            <div class="relative min-h-[300px] rounded-2xl overflow-hidden border border-white/10 bg-surface-container">
                <div class="absolute inset-0 bg-surface-container"></div>

                <div class="absolute top-6 right-6 size-16 rounded-full bg-white/10 border border-white/10"></div>

                <div class="relative z-20 p-6">
                    <div class="h-10 w-56 bg-white/10 mb-5"></div>

                    <div class="flex flex-wrap gap-4">
                        <div class="flex items-center gap-2">
                            <div class="size-10 rounded-full bg-white/10 border border-white/10"></div>
                            <div class="h-4 w-32 bg-white/10 rounded"></div>
                        </div>

                        <div class="flex items-center gap-2">
                            <div class="size-10 rounded-full bg-white/10 border border-white/10"></div>
                            <div class="h-4 w-32 bg-white/10 rounded"></div>
                        </div>
                    </div>
                </div>

                <div class="absolute bottom-12 left-12 w-[62%] h-16 bg-white/10 rounded-2xl"></div>
            </div>
        <?php endfor; ?>
    </section>
</main>