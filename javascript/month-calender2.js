/*
export function initCalendar() {
    // Get elements with null checks
    const calendarContainer = document.querySelector("[data-month-calendar]");
    const daysContainer = document.querySelector(".month-calendar-day-list");
    const dateDisplay = document.querySelector(".date");
    const prevBtn = document.querySelector(".lucide-move-left-icon")?.closest("button");
    const nextBtn = document.querySelector(".lucide-move-right-icon")?.closest("button");

    if (!calendarContainer || !daysContainer) {
        console.error("Calendar elements not found");
        return;
    }

    let currentDate = new Date();

    function renderMonth() {
        // Clear previous days
        daysContainer.innerHTML = "";

        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();

        // Update month/year display
        if (dateDisplay) {
            dateDisplay.textContent = new Date(year, month).toLocaleString('default', { 
                month: 'long', 
                year: 'numeric' 
            });
        }

        // Get calendar data
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const prevMonthDays = new Date(year, month, 0).getDate();

        // Calculate days from previous month to show
        const daysFromPrevMonth = (firstDay === 0) ? 6 : firstDay - 1; // Adjust for Sunday start

        // Add days from previous month
        for (let i = 0; i < daysFromPrevMonth; i++) {
            const day = prevMonthDays - daysFromPrevMonth + i + 1;
            daysContainer.appendChild(createDayElement(day, true));
        }

        // Add current month days
        for (let day = 1; day <= daysInMonth; day++) {
            daysContainer.appendChild(createDayElement(day));
        }

        // Calculate days needed from next month (42 cells total for 6 weeks)
        const totalCells = 42;
        const remainingCells = totalCells - (daysFromPrevMonth + daysInMonth);
        
        // Add days from next month
        for (let i = 1; i <= remainingCells; i++) {
            daysContainer.appendChild(createDayElement(i, true));
        }
    }

    function createDayElement(day, isOtherMonth = false) {
        const li = document.createElement("li");
        li.className = "month-calendar-day";
        
        const button = document.createElement("button");
        button.className = "month-calendar-day-label";
        button.textContent = day;
        
        if (isOtherMonth) {
            button.style.opacity = "0.5";
            button.style.color = "var(--color-gray-400)";
        }
        
        const eventDiv = document.createElement("div");
        eventDiv.className = "month-calendar-day-event";
        eventDiv.innerHTML = `<ul class="event-list"></ul>`;
        
        li.append(button, eventDiv);
        return li;
    }

    // Navigation
    if (prevBtn) {
        prevBtn.addEventListener("click", () => {
            currentDate.setMonth(currentDate.getMonth() - 1);
            renderMonth();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            currentDate.setMonth(currentDate.getMonth() + 1);
            renderMonth();
        });
    }

    // Initial render
    renderMonth();
}*/