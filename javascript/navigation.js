/*import { initDynamicCalendar } from './calendar.js';
export function initMonthNavigation() {
    const prevButton = document.querySelector("[data-prev-month]");
    const nextButton = document.querySelector("[data-next-month]");
    const calendarContainer = document.querySelector("[data-calendar-container]");

    let currentDate = new Date();

    prevButton.addEventListener("click", () => navigateMonth(-1));
    nextButton.addEventListener("click", () => navigateMonth(1));

    function navigateMonth(direction) {
        currentDate.setMonth(currentDate.getMonth() + direction);
        calendarContainer.innerHTML = "";
        initDynamicCalendar(calendarContainer, currentDate);
    }

    // Initialize the current month view
    initDynamicCalendar(calendarContainer, currentDate);
}*/
