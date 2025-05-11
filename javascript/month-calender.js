const calenderTemplate = document.querySelector(["[data-template='month-calender]"]);
const calenderdayTemplate = document.querySelector("[data-template='month-calender-day]");

export function initMonthCalender(parent, selectedDate){
    const calenderContent = calenderTemplate.content.cloneNode(true);
    const calenderElement = calenderdayTemplate.querySelector("[data-month-calender]");
    const calenderDayListElement = calenderElement.querySelector("[data-month-calender-day-list]");
    parent.appendChild(calenderElement)
}