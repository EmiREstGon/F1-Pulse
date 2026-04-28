const wallpaperConfig = {
  format: "desktop",
  colorMode: "team",
  sizes: {
    desktop: { width: 1920, height: 1080, label: "1920 × 1080" },
    mobile: { width: 1080, height: 1920, label: "1080 × 1920" }
  }
};

const imageCache = new Map();

function getCanvasElements() {
  return {
    canvas: document.getElementById("wallpaper-canvas"),
    colorInput: document.getElementById("wallpaper-color"),
    driverSelect: document.getElementById("wallpaper-driver"),
    teamSelect: document.getElementById("wallpaper-team"),
    sizeLabel: document.getElementById("wallpaper-size-label")
  };
}

function setColorMode(mode) {
  wallpaperConfig.colorMode = mode;

  document.querySelectorAll(".wallpaper-color-mode-btn").forEach(btn => {
    const isActive = btn.dataset.colorMode === mode;

    btn.classList.toggle("border-primary-container", isActive);
    btn.classList.toggle("bg-primary-container/20", isActive);

    btn.classList.toggle("border-white/10", !isActive);
    btn.classList.toggle("bg-white/5", !isActive);
  });

  const { colorInput } = getCanvasElements();

  if (colorInput) {
    colorInput.disabled = mode === "team";
    colorInput.classList.toggle("opacity-50", mode === "team");
    colorInput.classList.toggle("cursor-not-allowed", mode === "team");
  }

  drawWallpaper();
}

function getSelectedAccentColor(teamName, colorInput) {
  if (wallpaperConfig.colorMode === "team") {
    return getTeamColor(teamName) || "#d31411";
  }

  return colorInput?.value || "#d31411";
}

function loadImage(src) {
  if (!src) return Promise.resolve(null);
  if (imageCache.has(src)) return imageCache.get(src);

  const promise = new Promise(resolve => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => resolve(null);
    img.src = src;
  });

  imageCache.set(src, promise);
  return promise;
}

function getDriverNames() {
  return Object.keys(driverImages || {});
}

function getTeamNames() {
  return Object.keys(teamCars || {});
}

function getWebLogoImage() {
  return "assets/img/logos/web/logo-dark.png";
}

function populateWallpaperSelects() {
  const { driverSelect, teamSelect } = getCanvasElements();

  if (driverSelect && !driverSelect.options.length) {
    driverSelect.innerHTML = getDriverNames().map(name =>
      `<option value="${name}">${name}</option>`
    ).join("");
  }

  if (teamSelect && !teamSelect.options.length) {
    teamSelect.innerHTML = getTeamNames().map(name =>
      `<option value="${name}">${name}</option>`
    ).join("");
  }
}

function resizeCanvas() {
  const { canvas, sizeLabel } = getCanvasElements();
  if (!canvas) return;

  const size = wallpaperConfig.sizes[wallpaperConfig.format];

  canvas.width = size.width;
  canvas.height = size.height;
  canvas.style.aspectRatio = `${size.width} / ${size.height}`;
  canvas.style.width = wallpaperConfig.format === "desktop" ? "100%" : "360px";

  if (sizeLabel) sizeLabel.textContent = size.label;
}

function hexToRgb(hex) {
  const cleanHex = hex.replace("#", "");

  return {
    r: parseInt(cleanHex.substring(0, 2), 16),
    g: parseInt(cleanHex.substring(2, 4), 16),
    b: parseInt(cleanHex.substring(4, 6), 16)
  };
}

function mixColor(hex, target, amount) {
  const color = hexToRgb(hex);
  const targetColor = hexToRgb(target);

  const r = Math.round(color.r + (targetColor.r - color.r) * amount);
  const g = Math.round(color.g + (targetColor.g - color.g) * amount);
  const b = Math.round(color.b + (targetColor.b - color.b) * amount);

  return `rgb(${r}, ${g}, ${b})`;
}

function getTeamGradientColors(teamColor) {
  return {
    dark: mixColor(teamColor, "#000000", 0.72),
    mid: mixColor(teamColor, "#111317", 0.42),
    light: mixColor(teamColor, "#ffffff", 0.18)
  };
}

async function drawWallpaper() {
  const {
    canvas,
    titleInput,
    subtitleInput,
    colorInput,
    driverSelect,
    teamSelect
  } = getCanvasElements();

  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const { width, height } = canvas;

  const driverName = driverSelect?.value || getDriverNames()[0];
  const teamName = teamSelect?.value || getTeamNames()[0];
  const accentColor = getSelectedAccentColor(teamName, colorInput);

  const driverImg = await loadImage(getDriverImage(driverName));
  const numberImg = await loadImage(getDriverNumberImage(driverName));
  const carImg = await loadImage(getTeamCarImage(teamName));
  const teamLogoImg = await loadImage(getTeamColoredLogo(teamName));
  const webLogoImg = await loadImage(getWebLogoImage());

  // BASE GRADIENT
  const teamGradient = getTeamGradientColors(accentColor);
  const gradient = ctx.createLinearGradient(0, 0, width, height);

  gradient.addColorStop(0, teamGradient.mid);
  gradient.addColorStop(1, teamGradient.dark);

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  // BOTTOM FADE
  const bottomFade = ctx.createLinearGradient(0, height * 0.45, 0, height);
  bottomFade.addColorStop(0, "transparent");
  bottomFade.addColorStop(0.65, "rgba(0,0,0,0.35)");
  bottomFade.addColorStop(1, "rgba(0,0,0,0.85)");
  ctx.fillStyle = bottomFade;
  ctx.fillRect(0, 0, width, height);

  // LOGO
  if (teamLogoImg) {
    const bgLogoW = wallpaperConfig.format === "desktop" ? width * 0.62 : width * 0.9;
    const bgLogoH = bgLogoW * (teamLogoImg.height / teamLogoImg.width);

    const bgLogoX = wallpaperConfig.format === "desktop" ? width * 0.48 : width * 0.1;
    const bgLogoY = wallpaperConfig.format === "desktop" ? height * 0.09 : height * 0.35;

    ctx.save();
    ctx.globalAlpha = 0.25;
    ctx.drawImage(teamLogoImg, bgLogoX, bgLogoY, bgLogoW, bgLogoH);
    ctx.restore();
  }

  // DORSAL
  if (numberImg) {
    const numW = wallpaperConfig.format === "desktop" ? width * 0.22 : width * 0.40;
    const numH = numW * (numberImg.height / numberImg.width);

    const numX = wallpaperConfig.format === "desktop" ? width * 0.04 : width * 0.08;
    const numY = wallpaperConfig.format === "desktop" ? height * 0.25 : height * 0.14;

    ctx.save();
    ctx.globalAlpha = 0.9;
    ctx.drawImage(numberImg, numX, numY, numW, numH);
    ctx.restore();
  }

  // COCHE
  if (carImg) {
    const carW = wallpaperConfig.format === "desktop" ? width * 0.75 : width * 0.92;
    const carH = carW * (carImg.height / carImg.width);

    const carX = wallpaperConfig.format === "desktop" ? width * 0.22 : width * 0.045;
    const carY = wallpaperConfig.format === "desktop" ? height * 0.6 : height * 0.72;

    ctx.save();
    ctx.globalAlpha = 1;
    ctx.drawImage(carImg, carX, carY, carW, carH);
    ctx.restore();
  }

  // DRIVER
  if (driverImg) {
    const driverH = wallpaperConfig.format === "desktop" ? height * 0.73 : height * 0.8;
    const driverW = driverH * (driverImg.width / driverImg.height);

    const driverX = wallpaperConfig.format === "desktop" ? width * 0.59 : width * 0.34;
    const driverY = wallpaperConfig.format === "desktop" ? height * 0.25 : height * 0.2;

    ctx.save();
    ctx.globalAlpha = 1;
    ctx.drawImage(driverImg, driverX, driverY, driverW, driverH);
    ctx.restore();
  }

  // NAME & TEAM
  ctx.textAlign = "left";
  ctx.textBaseline = "middle";

  const driverTextSize = wallpaperConfig.format === "desktop" ? width * 0.038 : width * 0.055;
  const teamTextSize = wallpaperConfig.format === "desktop" ? width * 0.018 : width * 0.028;

  const textX = wallpaperConfig.format === "desktop" ? width * 0.035 : width * 0.07;
  const textY = wallpaperConfig.format === "desktop" ? height * 0.1 : height * 0.06;

  ctx.font = `900 italic ${driverTextSize}px Space Grotesk, Arial`;
  ctx.fillStyle = "#ffffff";
  ctx.fillText(driverName.toUpperCase(), textX, textY);

  ctx.font = `700 ${teamTextSize}px Space Grotesk, Arial`;
  ctx.fillStyle = "rgba(255,255,255,0.68)";
  ctx.fillText(`TEMPORADA 2026 · ${teamName.toUpperCase()}`, textX, textY + driverTextSize * 0.9);

  // LINE
  ctx.fillStyle = accentColor;
  ctx.fillRect(textX, textY + driverTextSize * 1.35, wallpaperConfig.format === "desktop" ? width * 0.155 : width * 0.34, Math.max(4, height * 0.006));

  // F1 PULSE LOGO
  if (webLogoImg) {
    const logoW = wallpaperConfig.format === "desktop" ? width * 0.12 : width * 0.22;
    const logoH = logoW * (webLogoImg.height / webLogoImg.width);

    const logoX = wallpaperConfig.format === "desktop" ? height * 0.07 : height * 0.04;
    const logoY = wallpaperConfig.format === "desktop" ? height * 0.89 : height * 0.93;

    ctx.save();
    ctx.globalAlpha = 0.75;
    ctx.drawImage(webLogoImg, logoX, logoY, logoW, logoH);
    ctx.restore();
  }
}

function setWallpaperFormat(format) {
  wallpaperConfig.format = format;

  document.querySelectorAll(".wallpaper-format-btn").forEach(btn => {
    const isActive = btn.dataset.format === format;
    btn.classList.toggle("border-primary-container", isActive);
    btn.classList.toggle("bg-primary-container/20", isActive);
    btn.classList.toggle("border-white/10", !isActive);
    btn.classList.toggle("bg-white/5", !isActive);
  });

  resizeCanvas();
  drawWallpaper();
}

function downloadWallpaper() {
  const { canvas } = getCanvasElements();
  if (!canvas) return;

  const link = document.createElement("a");
  link.download = `f1-pulse-wallpaper-${wallpaperConfig.format}.png`;
  link.href = canvas.toDataURL("image/png");
  link.click();
}

function initWallpaperGenerator() {
  populateWallpaperSelects();

  const {
    titleInput,
    subtitleInput,
    colorInput,
    driverSelect,
    teamSelect
  } = getCanvasElements();

  resizeCanvas();
  drawWallpaper();
  setColorMode(wallpaperConfig.colorMode);

  document.querySelectorAll(".wallpaper-format-btn").forEach(btn => {
    btn.addEventListener("click", () => setWallpaperFormat(btn.dataset.format));
  });

  document.querySelectorAll(".wallpaper-color-mode-btn").forEach(btn => {
    btn.addEventListener("click", () => setColorMode(btn.dataset.colorMode));
  });

  [titleInput, subtitleInput, colorInput, driverSelect, teamSelect].forEach(input => {
    input?.addEventListener("input", drawWallpaper);
    input?.addEventListener("change", drawWallpaper);
  });

  document.getElementById("download-wallpaper")?.addEventListener("click", downloadWallpaper);
}

document.addEventListener("DOMContentLoaded", initWallpaperGenerator);