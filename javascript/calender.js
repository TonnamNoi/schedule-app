export function initCalender(){
    const monthCalenederElement= document.querySelector("[data-month-calender]");
    const weekCalenederElement= document.querySelector("[data-week-calender]");
    document.addEventListener("view-change",  
        (event)=>{
           const selectedView = event.detail.view;
           if(selectedView === "Month"){
            monthCalenederElement.style.display="flex"
  
           }
           else{
            monthCalenederElement.style.display="none"
            
           }
           if(selectedView === "Week"){
            weekCalenederElement.style.display="flex"
             
           }
           else{
            weekCalenederElement.style.display="none"
              
           }
           
        }
    );
};