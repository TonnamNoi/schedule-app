import {initdialog} from "./dialog.js";
import { InitEventForm } from "./event-form.js";

export function Eventformdialog(){
    const dialog = initdialog("event-form")
    const eventform= InitEventForm();



    document.addEventListener("create-event-request",()=>{
      dialog.open();
    });
    dialog.dialogElement.addEventListener("close",()=>{
  eventform.reset();
    });
}