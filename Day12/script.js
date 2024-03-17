const SLIDER = document.querySelector("input[type='range']");
const OUTPUT = document.querySelector("output");
const IMAGEN = document.querySelector("img");
const INFO_OPACIDAD = document.querySelector("#total");

const MIN_INICIAL = 1;
const MAX_INICIAL = 50;
const MIN_FINAL = 0;
const MAX_FINAL = 1;

function cambiarOpacidad(e) {
  e.preventDefault();

  let opacidadActual = e.target.value;
  let opacidadEscala =
    ((opacidadActual - MIN_INICIAL) * (MAX_FINAL - MIN_FINAL)) /
      (MAX_INICIAL - MIN_INICIAL) +
    MIN_FINAL;
  let texto = "Opacidad " + opacidadEscala.toFixed(3);

  IMAGEN.style.opacity = opacidadEscala;
  INFO_OPACIDAD.innerHTML = texto;
}

SLIDER.addEventListener("input", cambiarOpacidad, false);
