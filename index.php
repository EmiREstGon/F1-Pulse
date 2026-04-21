<?php
require_once __DIR__ . '/config/bootstrap.php';

$apiBase = $_ENV['OPENF1_BASE_URL'] ?? '';
$pageTitle = 'F1 Pulse';
$pageScripts = [
    'assets/js/views/hero.js',
    'assets/js/views/circuit.js',
    'assets/js/views/calendar.js',
    'assets/js/views/standings.js',
    'assets/js/views/teams.js',
    'assets/js/views/prediction.js',
    'assets/js/app.js',
];
?>
<!DOCTYPE html>
<html class="dark" lang="es">

<head>
    <?php include __DIR__ . '/components/head.php'; ?>
</head>

<body class="bg-background text-on-surface font-body selection:bg-primary-container selection:text-white">
    <?php include __DIR__ . '/components/header.php'; ?>

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
                    <div class="flex items-center gap-3 mb-6">
                        <div class="h-1 w-12 bg-primary-container"></div>
                        <span class="font-headline uppercase tracking-[0.3em] text-primary text-xs font-bold">Temporada
                            2026</span>
                    </div>
                    <h1
                        class="text-6xl md:text-9xl font-black italic font-headline leading-none tracking-tighter mb-8 uppercase text-white drop-shadow-2xl">
                        VIVE LA <span class="text-primary-container">FÓRMULA 1</span> EN UN SOLO LUGAR
                    </h1>
                    <div
                        class="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary-container to-transparent opacity-30">
                    </div>
                    <div class="flex flex-col md:flex-row gap-8 items-start md:items-center pt-10">
                        <!-- COUNTDOWN -->
                        <div class="bg-surface-container-high border border-white/10 p-6 rounded-2xl">
                            <p class="text-sm uppercase tracking-widest text-zinc-500 font-headline mb-3">
                                Cuenta atrás próximo GP
                            </p>
                            <div id="countdown" class="flex gap-6 text-center animate-pulse">
                                <div class="w-12">
                                    <p id="cd-days" class="text-3xl md:text-4xl font-black text-white">--</p>
                                    <span class="text-xs uppercase text-zinc-500">Días</span>
                                </div>
                                <div class="w-12">
                                    <p id="cd-hours" class="text-3xl md:text-4xl font-black text-white">--</p>
                                    <span class="text-xs uppercase text-zinc-500">Horas</span>
                                </div>
                                <div class="w-12">
                                    <p id="cd-minutes" class="text-3xl md:text-4xl font-black text-white">--</p>
                                    <span class="text-xs uppercase text-zinc-500">Min</span>
                                </div>
                                <div class="w-12">
                                    <p id="cd-seconds" class="text-3xl md:text-4xl font-black text-white">--</p>
                                    <span class="text-xs uppercase text-zinc-500">Seg</span>
                                </div>
                            </div>
                        </div>
                        <!-- NEXT GP CARD -->
                        <div class="p-6 bg-surface-container-high border border-white/10 rounded-2xl min-w-[280px]"
                            id="next-gp-block">
                            <p class="text-sm font-headline uppercase text-zinc-500 tracking-widest mb-3">
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
            <div
                class="absolute inset-0 pointer-events-none bg-gradient-to-t from-background via-transparent to-transparent">
            </div>
        </section>
        <!-- Circuit Detail Quick Block -->
        <section class="px-8 md:px-12">
            <div id="circuit-info-block"
                class="relative overflow-hidden bg-surface-container-high border border-white/10 rounded-3xl p-8 md:p-10 shadow-[0_0_40px_rgba(0,0,0,0.25)] animate-pulse">
                <div
                    class="absolute inset-0 pointer-events-none bg-gradient-to-r from-primary-container/5 via-transparent to-transparent">
                </div>
                <div class="relative z-10 flex flex-col gap-8">
                    <!-- Header -->
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
                    <!-- Stats -->
                    <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
                        <div class="rounded-2xl border border-white/5 bg-background/30 p-5 text-center">
                            <p class="text-zinc-500 text-xs uppercase font-headline tracking-widest mb-2">Longitud</p>
                            <p class="text-white font-bold italic text-2xl">-- KM</p>
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
                        <div class="rounded-2xl border border-white/5 bg-background/30 p-5 text-center">
                            <p class="text-zinc-500 text-xs uppercase font-headline tracking-widest mb-2">Curvas</p>
                            <p class="text-white font-bold italic text-2xl">--</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Data Dashboard Section -->
        <section class="py-24 bg-background" id="data-dashboard">
            <div class="max-w-7xl mx-auto px-8 mb-12 flex justify-between items-center">
                <h2 class="text-3xl font-black italic font-headline text-white uppercase">
                    PANEL DE <span class="text-primary-container">RESULTADOS</span>
                </h2>
            </div>
            <div class="max-w-7xl mx-auto px-8 space-y-6">
                <!-- Top row -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <!-- Classification Drivers -->
                    <div
                        class="bg-surface-container relative p-8 border border-primary-container/50 border-primary-container rounded-2xl min-h-[360px]">
                        <div class="flex items-center gap-3 mb-6">
                            <span class="text-primary-container">
                                <i class="fa-solid fa-ranking-star text-white text-2xl"></i>
                            </span>
                            <span class="font-headline uppercase italic font-bold tracking-widest text-zinc-400">
                                Clasificación de pilotos
                            </span>
                        </div>
                        <div id="driver-standings" class="space-y-3 animate-pulse">
                            <div
                                class="flex items-center justify-between p-4 bg-white/5 border border-white/5 rounded-2xl">
                                <div class="flex items-center gap-4">
                                    <div class="size-8 rounded-full bg-white/10"></div>
                                    <div class="size-12 rounded-full bg-white/10"></div>
                                    <div class="space-y-2">
                                        <div class="h-4 w-32 bg-white/10 rounded"></div>
                                    </div>
                                </div>
                                <div class="h-4 w-14 bg-white/10 rounded"></div>
                            </div>
                            <div
                                class="flex items-center justify-between p-4 bg-white/5 border border-white/5  rounded-2xl">
                                <div class="flex items-center gap-4">
                                    <div class="size-8 rounded-full bg-white/10"></div>
                                    <div class="size-12 rounded-full bg-white/10"></div>
                                    <div class="space-y-2">
                                        <div class="h-4 w-36 bg-white/10 rounded"></div>
                                    </div>
                                </div>
                                <div class="h-4 w-14 bg-white/10 rounded"></div>
                            </div>
                            <div
                                class="flex items-center justify-between p-4 bg-white/5 border border-white/5 rounded-2xl">
                                <div class="flex items-center gap-4">
                                    <div class="size-8 rounded-full bg-white/10"></div>
                                    <div class="size-12 rounded-full bg-white/10"></div>
                                    <div class="space-y-2">
                                        <div class="h-4 w-28 bg-white/10 rounded"></div>
                                    </div>
                                </div>
                                <div class="h-4 w-14 bg-white/10 rounded"></div>
                            </div>
                        </div>
                    </div>
                    <!-- Classification Teams -->
                    <div
                        class="bg-surface-container relative p-8 border border-zinc-700 rounded-2xl min-h-[360px]">
                        <div class="flex items-center gap-3 mb-6">
                            <span class="text-zinc-500">
                                <i class="fa-solid fa-trophy text-primary-container text-2xl"></i>
                            </span>
                            <span class="font-headline uppercase italic font-bold tracking-widest text-zinc-400">
                                Clasificación de escuderías
                            </span>
                        </div>
                        <div id="constructor-standings" class="space-y-3 animate-pulse">
                            <div
                                class="flex items-center justify-between p-4 bg-white/5 border border-white/5 rounded-2xl">
                                <div class="flex items-center gap-4">
                                    <div class="size-8 rounded-full bg-white/10"></div>
                                    <div class="size-12 rounded-md bg-white/10"></div>
                                    <div class="space-y-2">
                                        <div class="h-4 w-32 bg-white/10 rounded"></div>
                                    </div>
                                </div>
                                <div class="h-4 w-14 bg-white/10 rounded"></div>
                            </div>
                            <div
                                class="flex items-center justify-between p-4 bg-white/5 border border-white/5 rounded-2xl">
                                <div class="flex items-center gap-4">
                                    <div class="size-8 rounded-full bg-white/10"></div>
                                    <div class="size-12 rounded-md bg-white/10"></div>
                                    <div class="space-y-2">
                                        <div class="h-4 w-36 bg-white/10 rounded"></div>
                                    </div>
                                </div>
                                <div class="h-4 w-14 bg-white/10 rounded"></div>
                            </div>
                            <div
                                class="flex items-center justify-between p-4 bg-white/5 border border-white/5 rounded-2xl">
                                <div class="flex items-center gap-4">
                                    <div class="size-8 rounded-full bg-white/10"></div>
                                    <div class="size-12 rounded-md bg-white/10"></div>
                                    <div class="space-y-2">
                                        <div class="h-4 w-28 bg-white/10 rounded"></div>
                                    </div>
                                </div>
                                <div class="h-4 w-14 bg-white/10 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Bottom row -->
                <!-- Season Prediction Info -->
                <div id="season-prediction-card"
                    class="bg-primary-container/80 p-6 md:p-8 relative overflow-hidden rounded-2xl border border-white/10">
                    <div class="relative">
                        <!-- Header -->
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
                        <!-- Subtexto -->
                        <p id="season-prediction-summary" class="text-white/80 text-sm md:text-base font-headline mb-6 leading-relaxed">
                            Cargando progreso del campeonato...
                        </p>
                        <!-- Metodología -->
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
                        <!-- Línea separadora -->
                        <div class="h-[1px] w-full bg-white/10 mb-6 relative">
                            <div class="absolute left-0 top-0 h-[1px] w-12 bg-white/40"></div>
                        </div>
                        <!-- Grid -->
                        <div class="grid grid-cols-1 xl:grid-cols-2 gap-6">
                            <!-- Pilotos -->
                            <div class="bg-white/5 p-4 border border-white/5 rounded-2xl">
                                <div class="flex items-center gap-2 mb-2">
                                    <i class="fa-solid fa-flag-checkered text-white/80 text-base"></i>
                                    <p class="text-sm uppercase tracking-[0.2em] text-white/70 font-headline">
                                        Pilotos
                                    </p>
                                </div>
                                <div id="predicted-driver-podium" class="space-y-3">
                                    <div class="text-white text-sm italic">Cargando estimación...</div>
                                </div>
                            </div>
                            <!-- Escuderías -->
                            <div class="bg-white/5 p-4 border border-white/5 rounded-2xl">
                                <div class="flex items-center gap-2 mb-2">
                                    <i class="fa-solid fa-screwdriver-wrench text-white/80 text-base"></i>
                                    <p class="text-sm uppercase tracking-[0.2em] text-white/70 font-headline">
                                        Escuderías
                                    </p>
                                </div>
                                <div id="predicted-constructor-podium" class="space-y-3">
                                    <div class="text-white text-sm italic">Cargando estimación...</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Calendar Section -->
        <section class="py-24 bg-background relative overflow-hidden" id="season-calendar">
            <div class="px-12 md:px-24 mb-16 flex justify-between items-end">
                <div>
                    <h2
                        class="text-4xl md:text-6xl font-black italic font-headline uppercase tracking-tighter text-white">
                        CALENDARIO DE LA <span class="text-primary-container">TEMPORADA</span></h2>
                </div>
                <div class="hidden md:block h-[1px] flex-grow mx-12 bg-zinc-800 relative">
                    <div
                        class="absolute right-0 top-[-3px] h-2 w-2 rounded-full bg-primary-container shadow-[0_0_10px_#d31411]">
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-4 gap-px bg-white/5 p-2 animate-pulse" id="circuit-list">
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
                <div class="bg-surface-container-low flex flex-col items-center justify-center p-8 rounded-2xl m-2 min-h-[230px]">
                    <div class="w-12 h-12 rounded-full bg-zinc-700 mb-4"></div>
                    <div class="h-4 w-36 bg-zinc-700 rounded"></div>
                </div>
            </div>
        </section>
        <!-- Teams Section -->
        <section class="py-32 bg-surface-container-lowest relative" id="teams-section">
            <div
                class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-container to-transparent opacity-20">
            </div>
            <div class="max-w-7xl mx-auto px-8">
                <div class="text-center mb-24">
                    <span
                        class="text-zinc-500 font-headline italic font-bold uppercase tracking-[0.5em] text-sm block mb-4">Constructores
                        2026</span>
                    <h2
                        class="text-5xl md:text-7xl font-black italic font-headline text-white uppercase tracking-tighter">
                        LAS <span class="text-primary-container">ESCUDERÍAS</span></h2>
                </div>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-8 animate-pulse" id="team-list">
                    <div class="aspect-square bg-surface-container-high rounded-2xl p-8 flex flex-col items-center justify-center">
                        <div class="h-20 w-24 bg-white/10 rounded mb-5"></div>
                        <div class="w-full h-[1px] bg-white/10 mb-6"></div>
                        <div class="h-6 w-32 bg-white/10 rounded mb-3"></div>
                        <div class="h-8 w-24 bg-white/10 rounded-full"></div>
                    </div>
                    <div class="aspect-square bg-surface-container-high rounded-2xl p-8 flex flex-col items-center justify-center">
                        <div class="h-20 w-24 bg-white/10 rounded mb-5"></div>
                        <div class="w-full h-[1px] bg-white/10 mb-6"></div>
                        <div class="h-6 w-32 bg-white/10 rounded mb-3"></div>
                        <div class="h-8 w-24 bg-white/10 rounded-full"></div>
                    </div>
                    <div class="aspect-square bg-surface-container-high rounded-2xl p-8 flex flex-col items-center justify-center">
                        <div class="h-20 w-24 bg-white/10 rounded mb-5"></div>
                        <div class="w-full h-[1px] bg-white/10 mb-6"></div>
                        <div class="h-6 w-32 bg-white/10 rounded mb-3"></div>
                        <div class="h-8 w-24 bg-white/10 rounded-full"></div>
                    </div>
                    <div class="aspect-square bg-surface-container-high rounded-2xl p-8 flex flex-col items-center justify-center">
                        <div class="h-20 w-24 bg-white/10 rounded mb-5"></div>
                        <div class="w-full h-[1px] bg-white/10 mb-6"></div>
                        <div class="h-6 w-32 bg-white/10 rounded mb-3"></div>
                        <div class="h-8 w-24 bg-white/10 rounded-full"></div>
                    </div>
                </div>
            </div>
        </section>
        <!-- New Teams Section -->
        <section class="py-32 bg-background relative overflow-hidden" id="future-era">
            <div class="absolute inset-0 racing-grid opacity-10 pointer-events-none"></div>
            <div class="max-w-7xl mx-auto px-8 relative">
                <div class="mb-16">
                    <span
                        class="text-zinc-500 font-headline italic font-bold uppercase tracking-[0.5em] text-sm block mb-4">Tendencias
                        de Mercado</span>
                    <h2
                        class="text-5xl md:text-7xl font-black italic font-headline text-white uppercase tracking-tighter">
                        NUEVAS <span class="text-primary-container">INCORPORACIONES</span></h2>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <!-- Audi News -->
                    <div
                        class="group relative bg-zinc-900/50 border border-white/5 p-12 overflow-hidden transform transition-all duration-300 ease-out hover:scale-105 hover:bg-zinc-900 rounded-3xl">
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
                        <div class="h-px w-full bg-gradient-to-r from-primary-container/30 to-transparent mb-6"></div>
                        <p class="text-zinc-400 font-headline leading-relaxed mb-8 italic-slant">La firma alemana
                            entrará oficialmente en la Fórmula 1 en 2026 tras asumir la estructura de Sauber. El
                            desarrollo de su propia unidad de potencia será una de las claves de esta nueva etapa.</p>
                        <div
                            class="flex items-center gap-2 text-white font-headline italic font-bold uppercase text-sm tracking-tighter group-hover:text-primary-container transition-colors">
                            Explorar equipo <span class="text-sm"><i class="fa-solid fa-angle-right"></i></span>
                        </div>
                    </div>
                    <!-- Cadillac News -->
                    <div
                        class="group relative bg-zinc-900/50 border border-white/5 p-12 overflow-hidden transform transition-all duration-300 ease-out hover:scale-105 hover:bg-zinc-900 rounded-3xl">
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
                        <div class="h-px w-full bg-gradient-to-r from-primary-container/30 to-transparent mb-6"></div>
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

    <?php include __DIR__ . '/components/footer.php'; ?>
    <?php include __DIR__ . '/components/scripts.php'; ?>
</body>

</html>