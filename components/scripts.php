<?php
// Scripts comunes para todas las páginas
$commonScripts = [
    'assets/js/config.js',

    'assets/js/data/countries.js',
    'assets/js/data/fallbacks.js',
    'assets/js/data/teams.js',
    'assets/js/data/pilots.js',
    'assets/js/data/circuits.js',
    'assets/js/data/translations.js',

    'assets/js/utils/debug.js',
    'assets/js/utils/formatters.js',
    'assets/js/utils/countdown.js',
    'assets/js/utils/helpers.js',

    'assets/js/services/openf1.js',
];

// Scripts específicos de cada página
$pageScripts = $pageScripts ?? [];
?>

<!-- Configuración global -->
<script>
    window.APP_CONFIG = {
        OPENF1_BASE_URL: "<?= htmlspecialchars($_ENV['OPENF1_BASE_URL'] ?? '', ENT_QUOTES) ?>",
        GOOGLE_MAPS_API_KEY: "<?= htmlspecialchars($_ENV['GOOGLE_MAPS_API_KEY'] ?? '', ENT_QUOTES) ?>"
    };
</script>

<!-- Scripts comunes -->
<?php foreach ($commonScripts as $script): ?>
    <script src="<?= $script ?>"></script>
<?php endforeach; ?>

<!-- Scripts específicos de la página -->
<?php foreach ($pageScripts as $script): ?>
    <script src="<?= $script ?>"></script>
<?php endforeach; ?>