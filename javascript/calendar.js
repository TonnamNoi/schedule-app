/*export function initDynamicCalendar(parent, selectedDate) {
    const calendarElement = document.createElement("div");
    calendarElement.classList.add("month-calender");
    const dayListElement = document.createElement("ul");
    dayListElement.classList.add("day-list");

    // Get the first day of the month and total days
    const firstDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
    const lastDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0);
    const totalDays = lastDay.getDate();
    const firstDayWeekday = firstDay.getDay();

    // Add empty cells before the first day of the month
    for (let i = 0; i < firstDayWeekday; i++) {
        const emptyCell = document.createElement("li");
        emptyCell.classList.add("month-calender-day");
        dayListElement.appendChild(emptyCell);
    }

    // Add cells for each day of the month
    for (let day = 1; day <= totalDays; day++) {
        const dayCell = document.createElement("li");
        dayCell.classList.add("month-calender-day");
        dayCell.dataset.date = `${day}/${selectedDate.getMonth() + 1}/${selectedDate.getFullYear()}`;

        const dayLabel = document.createElement("button");
        dayLabel.classList.add("month-calender-day-label");
        dayLabel.textContent = day;
        dayLabel.addEventListener("click", () => showEventCreationForm(day, selectedDate));

        dayCell.appendChild(dayLabel);
        dayListElement.appendChild(dayCell);
    }

    calendarElement.appendChild(dayListElement);
    parent.appendChild(calendarElement);
}

// Show the event creation form when a day is clicked
export function showEventCreationForm(day, selectedDate) {
    const eventTitle = prompt(`Create an event for ${day}/${selectedDate.getMonth() + 1}/${selectedDate.getFullYear()}`);
    if (eventTitle) {
        createEvent(day, selectedDate, eventTitle);
    }
}

// Create an event and save it to localStorage
export function createEvent(day, selectedDate, eventTitle) {
    const event = {
        title: eventTitle,
        date: `${day}/${selectedDate.getMonth() + 1}/${selectedDate.getFullYear()}`,
    };

    const events = getStoredEvents();
    events.push(event);
    saveEvents(events);

    renderEvent(day, selectedDate, event);
}

// Render the event on the selected day
export function renderEvent(day, selectedDate, event) {
    const dayCell = document.querySelector(`[data-date='${event.date}']`);
    const eventBlock = document.createElement("div");
    eventBlock.classList.add("event-block");
    eventBlock.textContent = event.title;

    // Create an "X" button to delete the event
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.classList.add("delete-event");
    deleteButton.addEventListener("click", () => deleteEvent(day, selectedDate, eventBlock));

    eventBlock.appendChild(deleteButton);
    dayCell.appendChild(eventBlock);
}

// Delete the event from the calendar and localStorage
export function deleteEvent(day, selectedDate, eventBlock) {
    const events = getStoredEvents().filter(event => event.date !== `${day}/${selectedDate.getMonth() + 1}/${selectedDate.getFullYear()}`);
    saveEvents(events);

    eventBlock.remove();
}

// Get stored events from localStorage
export function getStoredEvents() {
    const storedEvents = localStorage.getItem("events");
    return storedEvents ? JSON.parse(storedEvents) : [];
}

// Save events to localStorage
export function saveEvents(events) {
    localStorage.setItem("events", JSON.stringify(events));
}*/
