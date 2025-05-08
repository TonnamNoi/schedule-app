export function Eventbutton(){
    const buttonElement = document.querySelector("[data-event-creation]");
    buttonElement.addEventListener("click", ()=> {
        buttonElement.dispatchEvent(new CustomEvent
            ("create-event-request",{
                bubbles:true
            })
        );
    });
}