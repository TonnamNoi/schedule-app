import { validateEvent } from "./validate.js";


export function InitEventForm(toaster) {
    const formElement = document.querySelector("[data-event-form]");

    formElement.addEventListener("submit", (event) => {
        event.preventDefault();
        const formEvent = formIntoEvent(formElement);

        const validationError = validateEvent(formEvent);
        console.log(formEvent);
        if (validationError !== null) {
           alert(validationError);  // Show toast with the error message
            return;
        }

       

        formElement.dispatchEvent(new CustomEvent("event-create", {
            detail: {
                event: formEvent
            },
            bubbles: true
        }));
    });

    return {
        formElement,
        reset() {
            formElement.reset();
        }
    };
}

export default function formIntoEvent(formElement) {
    const formData = new FormData(formElement);
    
       const title= formData.get("title");
       const  date= formData.get("date");
       const color= formData.get("color");
       const startTime = formData.get("start-time");
       const endTime = formData.get("end-time")
const event = {
        title,
        date: new Date(date),          // Properly create a Date object from the date value
        startTime: startTime ? parseInt(startTime, 10) : null, // Convert start-time to an integer
        color,
        endTime: endTime ? parseInt(endTime, 10) : null  
};
return event;
    
}