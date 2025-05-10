export function InitEventForm(){
    const formElement = document.querySelector("[data-event-form]")

    formElement.addEventListener("submit",(event)=>
    {   event.preventDefault();
        const formEvent = formIntoEvent(formElement);
        console.log(formEvent)

    });
    return{
        reset(){
            formElement.reset();
        }
    };

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

