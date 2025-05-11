import { Animationfinish } from "./animation.js";

export function initdialog(name) {
  const dialogElement = document.querySelector(`[data-dialog=${name}]`); // Ensure dialogElement is selected
  const closeButtonElements = document.querySelectorAll("[close-button-icon]"); // Select close button elements

  function close() {
    dialogElement.classList.add("dialog--closing");

    return Animationfinish(dialogElement)
      .then(() => {
        dialogElement.classList.remove("dialog--closing");
        dialogElement.close();
      })
      .catch((error) => {
        console.error("Finish dialog animation promise failed", error);
      });
  }

  // Add event listeners to each close button element
  for (const closeButtonElement of closeButtonElements) {
    closeButtonElement.addEventListener("click", () => {
      close();
    });
  }

  // Close dialog when clicking outside the dialog
  dialogElement.addEventListener("click", (event) => {
    if (event.target === dialogElement) {
      close();
    }
  });

  // Handle cancel event
  dialogElement.addEventListener("cancel", (event) => {
    event.preventDefault();
    close();
  });

  return {
    dialogElement,
    open() {
      dialogElement.showModal();
    },
    close() {
      return close();
    }
  };
}
