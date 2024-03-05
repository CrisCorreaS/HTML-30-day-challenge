const DETAILS = document.querySelectorAll("details");

function desplegar(e) {
  e.preventDefault();
  
  let detalle = e.currentTarget;

  DETAILS.forEach((det) => {
      det.removeAttribute("open");
  });

  if (!detalle.getAttribute("open")) {
    detalle.setAttribute("open", "");
  }
}

DETAILS.forEach((detalle) => {
  detalle.addEventListener("click", desplegar, false);
});
