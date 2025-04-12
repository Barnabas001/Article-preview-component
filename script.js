const buttonHome = document.getElementById("defaultBtn");
const buttonActive = document.getElementById("activeBtn");
const footerActive = document.querySelector(".footer-active");
const cardFooter = document.querySelector(".card-footer");
const sharePopup = document.getElementById("sharePopup");

// Mobile toggle (≤ 650px)
buttonHome.addEventListener("click", () => {
  if (window.innerWidth <= 650) {
    footerActive.style.display = "flex";
    cardFooter.style.display = "none";
  } else {
    // Desktop: just toggle popup
    sharePopup.classList.toggle("active");
  }
});

// Hide popup on desktop, or revert to normal footer on mobile
buttonActive.addEventListener("click", () => {
  if (window.innerWidth <= 650) {
    footerActive.style.display = "none";
    cardFooter.style.display = "flex";
  } else {
    sharePopup.classList.remove("active");
  }
});
