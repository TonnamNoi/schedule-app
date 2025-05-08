import {initdialog} from "./dialog.js";

export function Eventformdialog(){
    const dialog = initdialog("event-form")
    document.addEventListener("create-event-request",()=>{
      dialog.open();
    });
}