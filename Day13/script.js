const METER = document.querySelector("meter");
const TXT_NUM_ENTRADAS = document.querySelector("strong");
const NUM_ENTRADAS = document.querySelector("input[type='number']");
const SEND = document.querySelector("input[type='submit']");
const ERROR_MSG = document.querySelector("#mensaje");

function cambiarNumEntradas(e) {
  e.preventDefault();

  let numEntradasElegidas = Number.parseInt(NUM_ENTRADAS.value);
  let numEntradasTotales = Number.parseInt(METER.value);

  if (
    numEntradasTotales + numEntradasElegidas <= 100 &&
    numEntradasTotales + numEntradasElegidas >= 0 &&
    numEntradasElegidas <= 20 && 
    numEntradasElegidas >= -20 
  ) {
    METER.value = numEntradasTotales + numEntradasElegidas;
    TXT_NUM_ENTRADAS.innerHTML = METER.value + " entradas";
    ERROR_MSG.classList.add("hide");
  } else {
    numEntradasElegidas > 0 
      ? (ERROR_MSG.innerHTML =
          "No se pueden añadir " + numEntradasElegidas + " entradas")
      : (ERROR_MSG.innerHTML =
          "No se pueden quitar " + -numEntradasElegidas + " entradas");
    ERROR_MSG.classList.remove("hide");
  }


  NUM_ENTRADAS.value = "0";
}

SEND.addEventListener("click", cambiarNumEntradas, false);
