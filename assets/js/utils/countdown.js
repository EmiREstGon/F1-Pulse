let countdownInterval;

function startCountdown(dateStr) {
  if (!dateStr) return;

  const target = new Date(dateStr);

  clearInterval(countdownInterval);

  function update() {
    const now = new Date();
    const diff = target - now;

    const countdownEl = document.getElementById("countdown");

    if (diff <= 0) {
      if (countdownEl) {
        countdownEl.classList.remove("animate-pulse");
        countdownEl.innerHTML = `<p class="text-white font-bold font-headline italic text-3xl animate-pulse">¡Evento en curso!</p>`;
      }
      clearInterval(countdownInterval);
      return;
    }

    const isLessThan24h = diff <= 24 * 60 * 60 * 1000;
    setCountdownAlertMode(isLessThan24h);

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

function setCountdownAlertMode(isAlert) {
  const numbers = document.querySelectorAll(".cd-number");
  const container = document.getElementById("countdown");

  numbers.forEach(el => {
    el.classList.remove("text-white", "text-red-500", "text-primary-container");

    if (isAlert) {
      el.classList.add("text-primary-container");
    } else {
      el.classList.add("text-white");
    }
  });

  if (container) {
    if (isAlert) {
      container.classList.add("animate-pulse");
    } else {
      container.classList.remove("animate-pulse");
    }
  }
}