export function initCalender() {
    const monthCalenderElement = document.querySelector("[data-month-calender]");
    const weekCalenderElement = document.querySelector("[data-week-calender]");

    document.addEventListener("view-change", (event) => {
        const selectedView = event.detail.view;

        if (selectedView === "Month") {
            console.log("month time")
        } else if (selectedView === "Week") {
            monthCalenderElement.style.display = "none";
            weekCalenderElement.style.display = "flex";
        } else {
            
            monthCalenderElement.style.display = "none";
            weekCalenderElement.style.display = "none";
        }
    });
}
