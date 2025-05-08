export function initViewSelect(){
    const viewselectElement = document.querySelector("[data-view-select]");
    console.log(viewselectElement);

    viewselectElement.addEventListener("change",(event) =>{
       viewselectElement.dispatchEvent(new CustomEvent("view-change", {
        detail: {
            view: viewselectElement.value
        },
        bubbles: true
       }))
    });
}