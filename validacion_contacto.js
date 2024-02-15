document.getElementById("contactForm").addEventListener("submit", function(event) {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        document.getElementById("errorMessage").style.display = "block";
        event.preventDefault(); // Evita que el formulario se envíe si hay campos vacíos
    }
});
