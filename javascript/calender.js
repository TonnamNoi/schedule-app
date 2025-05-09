export function initCalender(){
    const monthCalenederElement= document.querySelector("[data-month-calender]");
    const weekCalenederElement= document.querySelector("[data-week-calender]");
    document.addEventListener("view-change",  
        (event)=>{
           const selectedView = event.detail.view;
           if(selectedView === "Month"){
            monthCalenederElement.style.display="flex"
             weekCalenederElement.style.display="none"
           }
           else{
            monthCalenederElement.style.display="none"
             weekCalenederElement.style.display="none"
           }
           if(selectedView === "Week"){
            weekCalenederElement.style.display="flex"
             monthCalenederElement.style.display="none"
           }
           else{
            weekCalenederElement.style.display="none"
            monthCalenederElement.style.display="none"  
           }
           
        }
    );
};