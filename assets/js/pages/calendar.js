async function loadCalendarPage() {
  try {
    const meetings = await fetchJSON(
      `${API_BASE}/meetings?year=${CURRENT_YEAR}`,
      { retries: 2 }
    );

    renderFullCalendar(meetings);
  } catch (error) {
    console.error("Error cargando calendario:", error);
    renderFullCalendar([]);
  }
}

document.addEventListener("DOMContentLoaded", loadCalendarPage);