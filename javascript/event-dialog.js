import {initdialog} from "./dialog.js";
import { InitEventForm } from "./event-form.js";
import {InitToaster} from "./toaster.js";

export function Eventformdialog(){
    const dialog = initdialog("event-form")
    const toaster = InitToaster(dialog.dialogElement)
    const eventform = InitEventForm();

    document.addEventListener("create-event-request", () => {
        dialog.open();
    });

    dialog.dialogElement.addEventListener("close", () => {
        eventform.reset();
    });

    eventform.formElement.addEventListener("event-create", () => {
        dialog.close();
    });
}