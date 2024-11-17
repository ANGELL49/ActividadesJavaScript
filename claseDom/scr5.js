function cambiar() {
    const parrafos = document.querySelectorAll('.texto');

    parrafos.forEach((parrafo, index) => {
        if (parrafo.textContent === "Temporada de patos.") {
            parrafo.textContent = `De conejos!.`;
        } else if (parrafo.textContent === "Temporada de conejos.") {
            parrafo.textContent = `De patos!.`;
        }
    });
}

// Asignar la función al evento click del botón
document.getElementById('boton').addEventListener('click', cambiarTextos);
