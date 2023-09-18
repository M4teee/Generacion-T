// Variables para almacenar usuarios y contraseñas
usuarios = {
    "Miguel": "1234",
};

function registrarUsuario() {
    var usuario = document.getElementById("username").value.toLowerCase(); // Convertir a minúsculas
    var contrasena = document.getElementById("password").value;

    if (usuario && contrasena) {
        // Verifica si el usuario ya existe
        if (!usuarios.hasOwnProperty(usuario)) {
            // Registra al nuevo usuario
            usuarios[usuario] = contrasena; // Cambio de == a =
            alert("Registro exitoso. Ahora puedes iniciar sesión.");
            // Redirige a la página de inicio de sesión o donde prefieras
            window.location = "inicio-sesion.html"; // Cambia el nombre de la página de inicio de sesión si es necesario
        } else {
            alert("El nombre de usuario ya existe. Por favor, elige otro.");
        }
    } else {
        alert("Por favor, completa todos los campos.");
    }
}



// Función para iniciar sesión
function login() {
    var user, pass;
    user = document.getElementById("login-username").value;
    pass = document.getElementById("login-password").value;

    if (user && pass) {
        // Verifica si el usuario y la contraseña coinciden con los registrados
        if (usuarios.hasOwnProperty(user) && usuarios[user] === pass) {
            alert("Inicio de sesión exitoso. ¡Bienvenido, " + user + "!");
            window.location = "inicio.html"; // Cambia el nombre de la página de inicio si es necesario
        } else {
            alert("Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.");
        }
    } else {
        alert("Por favor, completa todos los campos.");
    }
}
