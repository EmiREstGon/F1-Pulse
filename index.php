<?php
require_once __DIR__ . '/config/bootstrap.php';

$routes = [
    'home' => [
        'file' => 'home.php',
        'title' => 'F1 Pulse',
        'page' => 'home',
        'scripts' => [
            'assets/js/views/hero.js',
            'assets/js/views/circuit.js',
            'assets/js/views/calendar.js',
            'assets/js/views/standings.js',
            'assets/js/views/teams.js',
            'assets/js/views/prediction.js',
            'assets/js/app.js'
        ]
    ],
    'classification' => [
        'file' => 'classification.php',
        'title' => 'Clasificación - F1 Pulse',
        'page' => 'classification',
        'scripts' => [
            'assets/js/views/standings.js',
            'assets/js/views/teams.js',
            'assets/js/views/prediction.js',
            'assets/js/pages/classification.js'
        ]
    ],
    'calendar' => [
        'file' => 'calendar.php',
        'title' => 'Calendario - F1 Pulse',
        'page' => 'calendar',
        'scripts' => [
            'assets/js/views/calendar.js',
            'assets/js/pages/calendar.js'
        ]
    ],
    'teams' => [
        'file' => 'teams.php',
        'title' => 'Escuderías - F1 Pulse',
        'page' => 'teams'
    ],
    'drivers' => [
        'file' => 'drivers.php',
        'title' => 'Pilotos - F1 Pulse',
        'page' => 'drivers'
    ],
    'wallpaper' => [
        'file' => 'wallpaper.php',
        'title' => 'Crea tu fondo - F1 Pulse',
        'page' => 'wallpaper'
    ],
];

$basePath = '/f1-pulse';

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$route = trim(str_replace($basePath, '', $uri), '/');

if ($route === '' || $route === 'index.php') {
    $route = $_GET['page'] ?? 'home';
}

if (!array_key_exists($route, $routes)) {
    http_response_code(404);
    $pageTitle = '404 - F1 Pulse';
    $currentPage = '404';
    $pageFile = __DIR__ . '/pages/404.php';
    $pageScripts = [];
} else {
    $pageTitle = $routes[$route]['title'];
    $currentPage = $routes[$route]['page'];
    $pageFile = __DIR__ . '/pages/' . $routes[$route]['file'];
    $pageScripts = $routes[$route]['scripts'] ?? [];

    if (!file_exists($pageFile)) {
        http_response_code(404);
        $pageTitle = '404 - F1 Pulse';
        $currentPage = '404';
        $pageFile = __DIR__ . '/pages/404.php';
        $pageScripts = [];
    }
}
?>
<!DOCTYPE html>
<html class="dark" lang="es">

<head>
    <?php include __DIR__ . '/components/head.php'; ?>
</head>

<body class="bg-background text-on-surface font-body">
    <?php include __DIR__ . '/components/header.php'; ?>

    <?php include $pageFile; ?>

    <?php include __DIR__ . '/components/footer.php'; ?>
    <?php include __DIR__ . '/components/scripts.php'; ?>
</body>

</html>