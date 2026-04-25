<?php
require_once __DIR__ . '/config/bootstrap.php';

$currentPage = 'calendar';
$pageTitle = 'Calendario - F1 Pulse';
$pageScripts = [
    'assets/js/views/calendar.js',
    'assets/js/pages/calendar.js',
];
?>
<!DOCTYPE html>
<html class="dark" lang="es">

<head>
    <?php include __DIR__ . '/components/head.php'; ?>
</head>

<body class="bg-background text-on-surface font-body">
    <?php include __DIR__ . '/components/header.php'; ?>

    <main class="pt-32 px-8 max-w-7xl mx-auto">
        <section class="mb-12">
            <h1 class="text-5xl font-black italic font-headline uppercase text-white">
                CALENDARIO DE LA <span class="text-primary-container">TEMPORADA</span>
            </h1>
            <p class="text-zinc-500 mt-4 font-headline uppercase tracking-widest text-xs">
                Todos los Grandes Premios de la temporada 2026
            </p>
        </section>

        <section>
            <div id="full-calendar-list" class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12 animate-pulse">
                <?php for ($i = 0; $i < 6; $i++): ?>
                    <div class="min-h-[260px] rounded-2xl bg-surface-container border border-white/5 p-8">
                        <div class="h-4 w-24 bg-white/10 rounded mb-8"></div>
                        <div class="h-7 w-48 bg-white/10 rounded mb-4"></div>
                        <div class="h-4 w-32 bg-white/10 rounded mb-8"></div>
                        <div class="h-4 w-40 bg-white/10 rounded"></div>
                    </div>
                <?php endfor; ?>
            </div>
        </section>
    </main>

    <?php include __DIR__ . '/components/footer.php'; ?>
    <?php include __DIR__ . '/components/scripts.php'; ?>
</body>

</html>