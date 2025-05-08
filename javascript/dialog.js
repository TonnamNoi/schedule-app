export function initdialog(name) {
    const dialogElement = document.querySelector(`[data-dialog=${name}]`);
    const closeButtons = document.querySelectorAll("[close-button-icon]"); // use querySelectorAll

    for (const closeButton of closeButtons) { // fix naming
        closeButton.addEventListener("click", () => {
            dialogElement.close();
        });
    }

    return {
        open() {
            dialogElement.showModal();
        },
        close() {
            dialogElement.close();
        }
    };
}
