const BTN_DARKMODE = document.querySelector("footer input[type='checkbox']");

function changeMode(e) {
  document.querySelector("body").classList.toggle("darkmode");

  document.querySelectorAll(".card").forEach((card) => {
    card.classList.toggle("darkmode");
  });
}

BTN_DARKMODE.addEventListener("click", changeMode, false);