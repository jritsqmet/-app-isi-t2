document.addEventListener("DOMContentLoaded", function() {
    // Obtener todos los enlaces de las especialidades
    var links = document.querySelectorAll('nav a[href^="#"]');

    // Agregar un event listener a cada enlace
    links.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();

            // Obtener el valor del atributo href del enlace
            var targetId = this.getAttribute("href").substring(1);

            // Obtener el elemento con el id correspondiente
            var targetElement = document.getElementById(targetId);

            // Hacer scroll suave hacia el elemento
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
});
