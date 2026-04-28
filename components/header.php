<nav class="fixed top-0 w-full z-50 border-b border-white/10 bg-zinc-950/40 backdrop-blur-xl px-8 py-4">
    <div class="flex justify-between items-center max-w-full mx-auto">
        <div class="flex items-center gap-4">
            <a href="home">
                <img alt="F1 Pulse Logo" class="h-12 w-auto" src="assets/img/logos/web/logo-dark.png" draggable="false" />
            </a>
        </div>

        <!-- DESKTOP MENU -->
        <div class="hidden md:flex items-center space-x-8">
            <?php
            $navItems = [
                'classification' => 'Clasificación',
                'calendar' => 'Calendario',
                'teams' => 'Escuderías',
                'drivers' => 'Pilotos',
                'wallpaper' => 'Crea tu fondo'
            ];
            ?>

            <?php foreach ($navItems as $page => $label): ?>
                <a
                    href="<?= $page ?>"
                    class="group relative font-headline italic tracking-tighter uppercase text-sm transition-all duration-300
                        <?= ($currentPage === $page) ? 'text-white' : 'text-zinc-400 hover:text-white' ?>"
                >
                    <?= $label ?>
                    <span
                        class="absolute left-0 -bottom-1 h-[2px] w-full bg-primary-container transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100
                            <?= ($currentPage === $page) ? 'scale-x-100' : '' ?>">
                    </span>
                </a>
            <?php endforeach; ?>
        </div>

        <!-- MOBILE HAMBURGER -->
        <button
            id="mobile-menu-toggle"
            class="md:hidden flex items-center justify-center size-11 rounded-2xl border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-colors"
            type="button"
            aria-label="Abrir menú de navegación"
            aria-expanded="false"
            aria-controls="mobile-menu"
        >
            <i id="mobile-menu-icon" class="fa-solid fa-bars text-xl"></i>
        </button>
    </div>

    <!-- MOBILE MENU -->
    <div
        id="mobile-menu"
        class="md:hidden hidden mt-4 rounded-2xl border border-white/10 bg-zinc-950/95 p-4 shadow-2xl"
    >
        <div class="flex flex-col gap-2">
            <?php foreach ($navItems as $page => $label): ?>
                <a
                    href="<?= $page ?>"
                    class="flex items-center justify-between rounded-2xl px-4 py-3 font-headline italic uppercase text-sm tracking-tighter transition-colors
                        <?= ($currentPage === $page) ? 'bg-primary-container/20 text-white' : 'text-zinc-400 hover:bg-white/5 hover:text-white' ?>"
                >
                    <span><?= $label ?></span>
                    <?php if ($currentPage === $page): ?>
                        <span class="size-2 rounded-full bg-primary-container"></span>
                    <?php endif; ?>
                </a>
            <?php endforeach; ?>
        </div>
    </div>
</nav>

<script>
    document.addEventListener("DOMContentLoaded", () => {
        const toggle = document.getElementById("mobile-menu-toggle");
        const menu = document.getElementById("mobile-menu");
        const icon = document.getElementById("mobile-menu-icon");

        if (!toggle || !menu || !icon) return;

        toggle.addEventListener("click", () => {
            const isOpen = !menu.classList.contains("hidden");

            menu.classList.toggle("hidden");
            toggle.setAttribute("aria-expanded", String(!isOpen));

            icon.classList.toggle("fa-bars", isOpen);
            icon.classList.toggle("fa-xmark", !isOpen);
        });
    });
</script>