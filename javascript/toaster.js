export function InitToaster(parent){
const toasterElement = document.createElement("div");
toasterElement.classList.add("toaster");
parent.appendChild(toasterElement);
return{
    success(message){
        showToast(toasterElement, message, "success");
    },
    error(message){
    showToast(toasterElement, message, "failed");
    }
};
}

function showToast(toasterElement, message, type){
    const toastElement = createToast(message, type);
    animationtoast(toastElement, toastElemet);
}
function createToast(message, type){
    const toastElement=document.createElement("div");
    toastElement.textContent = message
    toastElement.classList.add("toast")
    toastElement.classList.add(`toast"--${type}`);

    return toastElement
}

function animationToast(toasterElement, toastElement){
    toasterElement.appendChild(toastElement);
}