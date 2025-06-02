const relleno = document.getElementById('relleno');
const sol = document.getElementById('sol');
const pantalla = document.getElementById('pantallaCarga');
const contenido = document.getElementById('contenidoPrincipal');

let porcentaje = 0;

const intervalo = setInterval(() => {
  porcentaje += 1;
  relleno.style.height = porcentaje + "%";

  if (porcentaje >= 100) {
    clearInterval(intervalo);

    sol.style.bottom = "0px"; // baja el sol

    setTimeout(() => {
      pantalla.style.opacity = 0;

      setTimeout(() => {
        pantalla.style.display = "none";
        contenido.style.display = "block";

        // configurar y lanzar animación
        contenido.style.animationDuration = "1s";
        contenido.classList.add('fade-in');

      }, 1000); // espera a que desaparezca la pantalla
    }, 1); // espera después de que el sol baja
  }
}, 30);

