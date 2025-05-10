import {validateEvent } from "./validate.js";
export function InitEventForm(toaster){
    const formElement = document.querySelector("[data-event-form]")

    formElement.addEventListener("submit",(event)=>
    {   event.preventDefault();
        const formEvent = formIntoEvent(formElement);
        const validation = validateEvent(formEvent);
        if(validation != null){
            alert(validation)
            return;
        }
           formElement.dispatchEvent(new CustomEvent("event-create",{
        detail: {
            event: formEvent
        },
        bubbles:true

    }))
    return{
        formElement,
        reset(){
            formElement.reset();
        }
    };



    });
 
}

function formIntoEvent(formElement){
    const formData = new FormData(formElement);
    const title = formData.get("title");
    const date = formData.get("date");
    const color = formData.get("color")

const event ={
    title,
    date: new Date(date),
    color
};
return event;
}

