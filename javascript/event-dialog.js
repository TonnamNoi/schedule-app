import {initdialog} from "./dialog.js";
import { InitEventForm } from "./event-form.js";
import {initToaster} from "./toaster.js";

export function Eventformdialog(){
    const dialog = initdialog("event-form");
    const toaster = initToaster(dialog.dialogElement);
    const eventform = InitEventForm(toaster);

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