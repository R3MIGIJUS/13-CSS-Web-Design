let backdrop = document.querySelector(".backdrop");
let modal = document.querySelector(".modal");
let modalActionNo = document.querySelector(".modal__action--negative");
let planButtons = document.querySelectorAll(".plan button");
let toggleButton = document.querySelector(".toggle-button");
let mobileNav = document.querySelector(".mobile-nav");

for (let i = 0; i < planButtons.length; i++) {
  planButtons[i].addEventListener("click", function () {
    modal.style.display = "block";
    backdrop.style.display = "block";
  });
}

backdrop.addEventListener("click", function () {
  backdrop.style.display = "none";
  mobileNav.style.display = "none";
  if (modal) {
    modal.style.display = "none";
  }
});

if (modalActionNo) {
  modalActionNo.addEventListener("click", function () {
    modal.style.display = "none";
    backdrop.style.display = "none";
  });
}

toggleButton.addEventListener("click", function () {
  mobileNav.style.display = "block";
  backdrop.style.display = "block";
});
