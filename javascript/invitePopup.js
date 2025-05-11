document.addEventListener("DOMContentLoaded", function () {
  // Show all popups on page load
  const popups = document.querySelectorAll(".invite-popup");
  popups.forEach((popup) => {
    popup.style.display = "block";
  });
});
