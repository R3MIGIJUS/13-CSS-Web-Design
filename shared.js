let backdrop = document.querySelector(".backdrop");
let modal = document.querySelector(".modal");
let modalActionNo = document.querySelector(".modal__action--negative");
let planButtons = document.querySelectorAll(".plan button");
let mobileVersion;

for (let i = 0; i < planButtons.length; i++) {
  planButtons[i].addEventListener("click", function () {
    modal.style.display = "block";
    backdrop.style.display = "block";
  });
}

backdrop.addEventListener("click", function () {
  backdrop.style.display = "none";
  modal.style.display = "none";
});

modalActionNo.addEventListener("click", function () {
  backdrop.style.display = "none";
  modal.style.display = "none";
});
