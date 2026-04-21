let heroSliderInterval;

function initHeroSlider() {
  const slides = document.querySelectorAll(".hero-slide");
  if (!slides.length) return;

  let current = 0;

  function start() {
    heroSliderInterval = setInterval(() => {
      slides[current].classList.replace("opacity-100", "opacity-0");
      current = (current + 1) % slides.length;
      slides[current].classList.replace("opacity-0", "opacity-100");
    }, 10000);
  }

  function stop() {
    clearInterval(heroSliderInterval);
  }

  const hero = document.getElementById("hero-section");
  if (!hero) return;

  hero.addEventListener("mouseenter", stop);
  hero.addEventListener("mouseleave", start);

  start();
}

function setNextGp(meeting) {
  const nameEl = document.getElementById("next-gp-name");
  const dateEl = document.getElementById("next-gp-date");

  if (!nameEl || !dateEl || !meeting) return;

  const country = getCountryData(meeting);

  nameEl.innerHTML = `
    ${country.flagUrl ? `
      <img 
        src="${country.flagUrl}" 
        alt="${country.nameES || country.name}" 
        class="w-5 h-4 object-cover rounded-sm"
        draggable="false"
      />
    ` : ""}
    <span>
      ${getMeetingNameES(meeting)} · ${getCircuitNameES(meeting)}
    </span>
  `;

  nameEl.classList.remove("animate-pulse");
  dateEl.classList.remove("animate-pulse");
  dateEl.textContent = formatDate(meeting.date_start);
  startCountdown(meeting.date_start);
}