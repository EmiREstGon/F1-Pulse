<meta charset="utf-8" />
<meta content="width=device-width, initial-scale=1.0" name="viewport" />
<title><?= $pageTitle ?? 'F1 Pulse' ?></title>

<!-- Favicon -->
<link rel="icon" type="image/x-icon" href="assets/img/logos/web/favicon.ico">

<!-- Font Awesome -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" rel="stylesheet">

<!-- Google Fonts -->
<link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Space+Grotesk:wght@300;400;700;900&display=swap"
    rel="stylesheet" />

<link
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
    rel="stylesheet" />

<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>

<script id="tailwind-config">
    tailwind.config = {
        darkMode: "class",
        theme: {
            extend: {
                colors: {
                    primary: "#ffb4a9",
                    "primary-container": "#d31411",
                    background: "#111317",
                    surface: "#111317",
                    "surface-container": "#1e2024",
                    "surface-container-low": "#1a1c20",
                    "surface-container-high": "#282a2e",
                    "surface-container-lowest": "#0c0e12",
                    "on-surface": "#e2e2e8"
                },
                borderRadius: {
                    DEFAULT: "0px",
                    lg: "0px",
                    xl: "0px",
                    full: "9999px"
                },
                fontFamily: {
                    headline: ["Space Grotesk", "sans-serif"],
                    body: ["Inter", "sans-serif"],
                    label: ["Space Grotesk", "sans-serif"]
                }
            }
        }
    }
</script>