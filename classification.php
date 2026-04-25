<?php
require_once __DIR__ . '/config/bootstrap.php';

$currentPage = 'classification';
$pageTitle = 'Clasificación - F1 Pulse';
$pageScripts = [
    'assets/js/views/standings.js',
    'assets/js/views/teams.js',
    'assets/js/views/prediction.js',
    'assets/js/pages/classification.js',
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
        <!-- TITLE -->
        <section class="mb-12">
            <h1 class="text-5xl font-black italic font-headline uppercase text-white">
                CLASIFICACIÓN DE LA <span class="text-primary-container">TEMPORADA</span>
            </h1>
            <p class="text-zinc-500 mt-4 font-headline uppercase tracking-widest text-xs">
                Todos los pilotos y escuderías de la temporada 2026
            </p>
        </section>

        <section class="flex flex-col gap-8">
            <!-- CLASSIFICATION DRIVERS CARD -->
            <div class="bg-surface-container relative p-8 border border-primary-container/50 rounded-2xl min-h-[360px]">
                <!-- CLASSIFICATION DRIVERS HEADER -->
                <div class="flex items-center gap-3 mb-6">
                    <i class="fa-solid fa-ranking-star text-white text-2xl"></i>
                    <h2 class="text-xl font-bold italic text-white uppercase">
                        Clasificación de Pilotos
                    </h2>
                </div>

                <!-- DRIVER STANDINGS -->
                <div id="driver-standings" class="animate-pulse">
                    <div class="grid grid-cols-1 xl:grid-cols-2 gap-3 xl:gap-6 items-start">
                        <!-- LEFT COLUMN -->
                        <div class="space-y-3">
                            <!-- SKELETON LOOP -->
                            <?php for ($i = 0; $i < 3; $i++): ?>
                                <div class="flex items-center justify-between gap-4 p-4 bg-white/5 border border-white/5 rounded-2xl">
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

                        <!-- RIGHT COLUMN -->
                        <div class="space-y-3">
                            <!-- SKELETON LOOP -->
                            <?php for ($i = 0; $i < 3; $i++): ?>
                                <div class="flex items-center justify-between gap-4 p-4 bg-white/5 border border-white/5 rounded-2xl">
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
                </div>
            </div>

            <!-- CLASSIFICATION TEAMS CARD-->
            <div class="bg-surface-container relative p-8 border border-zinc-700 rounded-2xl min-h-[360px]">
                <!-- CLASSIFICATION TEAMS HEADER -->
                <div class="flex items-center gap-3 mb-6">
                    <i class="fa-solid fa-trophy text-primary-container text-2xl"></i>
                    <h2 class="text-xl font-bold italic text-white uppercase">
                        Clasificación de Escuderías
                    </h2>
                </div>

                <!-- CONSTRUCTOR STANDINGS -->
                <div id="constructor-standings" class="animate-pulse">
                    <div class="grid grid-cols-1 xl:grid-cols-2 gap-3 xl:gap-6 items-start">
                        <!-- LEFT COLUMN -->
                        <div class="space-y-3">
                            <!-- SKELETON LOOP -->
                            <?php for ($i = 0; $i < 3; $i++): ?>
                                <div class="flex items-center justify-between gap-4 p-4 bg-white/5 border border-white/5 rounded-2xl">
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

                        <!-- RIGHT COLUMN -->
                        <div class="space-y-3">
                            <!-- SKELETON LOOP -->
                            <?php for ($i = 0; $i < 3; $i++): ?>
                                <div class="flex items-center justify-between gap-4 p-4 bg-white/5 border border-white/5 rounded-2xl">
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
            </div>
        </section>

        <!-- SEASON PREDICTION CARD -->
        <div id="season-prediction-card"
            class="bg-primary-container/80 p-6 my-12 md:p-8 relative overflow-hidden rounded-2xl border border-white/10">
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
    </main>

    <?php include __DIR__ . '/components/footer.php'; ?>
    <?php include __DIR__ . '/components/scripts.php'; ?>
</body>

</html>