let countdownInterval;

function startCountdown(dateStr) {
  if (!dateStr) return;

  const target = new Date(dateStr);

  clearInterval(countdownInterval);

  function update() {
    const now = new Date();
    const diff = target - now;

    const countdownEl = document.getElementById("countdown");
    if (countdownEl) {
      countdownEl.classList.remove("animate-pulse");
    }

    if (diff <= 0) {
      if (countdownEl) {
        countdownEl.classList.remove("animate-pulse");
        countdownEl.innerHTML = `<p class="text-white font-bold text-xl">¡Evento en curso!</p>`;
      }

      clearInterval(countdownInterval);
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("cd-days").textContent = days;
    document.getElementById("cd-hours").textContent = hours;
    document.getElementById("cd-minutes").textContent = minutes;
    document.getElementById("cd-seconds").textContent = seconds;
  }

  update();
  countdownInterval = setInterval(update, 1000);
}