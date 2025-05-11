window.onload = function () {
  const popup = document.getElementById("invitePopup");
  if (popup) {
    popup.style.display = "block";

    document.getElementById("acceptInvite").onclick = function () {
      const meetingId = this.getAttribute("data-meeting-id");
      window.location.href = `meeting.php?id=${meetingId}`;
    };

    document.getElementById("closePopup").onclick = function () {
      popup.style.display = "none";
    };
  }
};
