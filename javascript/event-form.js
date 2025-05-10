import { validateEvent } from "./validate.js";

export function InitEventForm(toaster) {
    const formElement = document.querySelector("[data-event-form]");

    formElement.addEventListener("submit", (event) => {
        event.preventDefault();
        const formEvent = formIntoEvent(formElement);
        
        try {
            validateEvent(formEvent);
            formElement.dispatchEvent(new CustomEvent("event-create", {
                detail: {
                    event: formEvent
                },
                bubbles: true
            }));
        } catch (error) {
            if (toaster) {
                toaster.error(error.message);
            } else {
                alert(error.message);
            }
        }
    });

    return {
        formElement,
        reset() {
            formElement.reset();
        }
    };
}

function formIntoEvent(formElement) {
    const formData = new FormData(formElement);
    return {
        title: formData.get("title"),
        date: new Date(formData.get("date")),
        color: formData.get("color")
    };
}