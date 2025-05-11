import {initToaster} from "./toaster.js";

export function initnotification(){
const toaster = initToaster(document.body)

document.addEventListener("event-create", ()=>{
 toaster.success("Event is created")
});
}