<main class="pt-32 px-8 pb-20 max-w-[1800px] mx-auto">
    <!-- TITLE -->
    <section class="mb-12">
        <h1 class="text-5xl font-black italic font-headline uppercase text-white">
            Pilotos de la <span class="text-primary-container">Fórmula 1</span>
        </h1>
        <p class="text-zinc-500 mt-4 font-headline uppercase tracking-widest text-xs">
            Temporada 2026
        </p>
    </section>

    <!-- DRIVERS LIST -->
    <section id="drivers-grid" class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 animate-pulse">
        <!-- SKELETON LOOP -->
        <?php for ($i = 0; $i < 22; $i++): ?>
            <div class="relative h-[340px] rounded-2xl overflow-hidden border border-white/10 bg-surface-container">
                <div class="absolute top-6 right-6 size-16 rounded-full bg-white/10 border border-white/10"></div>

                <div class="relative z-30 p-5 max-w-[52%]">
                    <div class="h-8 w-28 bg-white/10 mb-2"></div>
                    <div class="h-8 w-36 bg-white/10 mb-4"></div>
                    <div class="h-4 w-24 bg-white/10 rounded mb-6"></div>
                    <div class="size-14 rounded-2xl bg-white/10"></div>
                </div>

                <div class="absolute left-5 bottom-5 w-32 h-9 z-30 rounded-full bg-white/10"></div>
            </div>
        <?php endfor; ?>
    </section>
</main>