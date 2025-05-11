// dynamic-calendar.js

export function initDynamicCalendar(container = document.querySelector('[data-calendar-container]'), date = new Date()) {
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth();

  container.innerHTML = ''; // Clear previous content

  const calendar = document.createElement('div');
  calendar.classList.add('month-calendar');

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const headerRow = document.createElement('ul');
  headerRow.classList.add('week-header');

  daysOfWeek.forEach(day => {
    const dayHeader = document.createElement('li');
    dayHeader.textContent = day;
    headerRow.appendChild(dayHeader);
  });

  calendar.appendChild(headerRow);

  const daysGrid = document.createElement('ul');
  daysGrid.classList.add('month-days');

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  // Optional: days from previous month for alignment
  for (let i = 0; i < firstDayOfMonth; i++) {
    const emptyCell = document.createElement('li');
    emptyCell.classList.add('empty');
    daysGrid.appendChild(emptyCell);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const dayItem = document.createElement('li');
    dayItem.classList.add('month-calender-day');

    const button = document.createElement('button');
    button.classList.add('month-calender-day-label');
    button.textContent = day;

    const eventContainer = document.createElement('div');
    eventContainer.classList.add('month-calender-day-event');

    const eventList = document.createElement('ul');
    eventList.classList.add('event-list');

    eventContainer.appendChild(eventList);
    dayItem.appendChild(button);
    dayItem.appendChild(eventContainer);

    // Optional: Highlight today's date
    const today = new Date();
    if (
      currentYear === today.getFullYear() &&
      currentMonth === today.getMonth() &&
      day === today.getDate()
    ) {
      button.classList.add('today');
    }

    // Example: click to go to "room" page
    button.addEventListener('click', () => {
      const storedEvents = JSON.parse(localStorage.getItem(getDateKey(currentYear, currentMonth, day))) || [];
      if (storedEvents.length > 0) {
        window.location.href = 'room.html'; // or dynamically load room
      }
    });

    daysGrid.appendChild(dayItem);
  }

  calendar.appendChild(daysGrid);
  container.appendChild(calendar);
}

function getDateKey(year, month, day) {
  return `${year}-${month + 1}-${day}`;
}
