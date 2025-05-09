

export function initdialog(name) {
    const dialogElement = document.querySelector(`[data-dialog=${name}]`);
    const closeButtons = document.querySelectorAll("[close-button-icon]"); // use querySelectorAll
function close(){
    dialogElement.classList.add("dialog--closing");
    const pendingAnimation = dialogElement.getAnimations();
    console.log(pendingAnimation);
}
    for (const closeButton of closeButtons) { // fix naming
        closeButton.addEventListener("click", () => {
            dialogElement.close();
        });
    }
    dialogElement.addEventListener("click", (event)=>{
        if(event.target == dialogElement){
            dialogElement.close();
        }
    })
    return {
        open() {
            dialogElement.showModal();
        },
        close() {
            close();
        }
    };
}
