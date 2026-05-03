<?php
// Common scripts for all pages
$commonScripts = [
    'assets/js/config.js',

    'assets/js/data/countries.js',
    'assets/js/data/fallbacks.js',
    'assets/js/data/teams.js',
    'assets/js/data/drivers.js',
    'assets/js/data/circuits.js',
    'assets/js/data/translations.js',

    'assets/js/utils/debug.js',
    'assets/js/utils/formatters.js',
    'assets/js/utils/countdown.js',
    'assets/js/utils/helpers.js',

    'assets/js/services/openf1.js',
];

// Specific scripts for each page
$pageScripts = $pageScripts ?? [];
?>

<!-- Global configuration -->
<script>
    window.APP_CONFIG = {
        OPENF1_BASE_URL: "<?= htmlspecialchars($_ENV['OPENF1_BASE_URL'] ?? '', ENT_QUOTES) ?>",
        GOOGLE_MAPS_API_KEY: "<?= htmlspecialchars($_ENV['GOOGLE_MAPS_API_KEY'] ?? '', ENT_QUOTES) ?>"
    };
</script>

<!-- Common scripts loop -->
<?php foreach ($commonScripts as $script): ?>
    <script src="<?= $script ?>"></script>
<?php endforeach; ?>

<!-- Specific scripts for each page loop -->
<?php foreach ($pageScripts as $script): ?>
    <script src="<?= $script ?>"></script>
<?php endforeach; ?>