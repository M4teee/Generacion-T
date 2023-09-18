// Variables para almacenar usuarios y contraseñas
usuarios = {
    "Miguel": "1234",
};
//funcion para registrarse
function registrarUsuario() {
    var usuario = document.getElementById("username").value.toLowerCase();
    var contrasena = document.getElementById("password").value;

    if (usuario && contrasena) {
        if (!usuarios.hasOwnProperty(usuario)) {
            usuarios[usuario] = contrasena;
            alert("Registro exitoso. Ahora puedes iniciar sesión.");
            window.location = "inicio-sesion.html"; 
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
        if (usuarios.hasOwnProperty(user) && usuarios[user] === pass) {
            alert("Inicio de sesión exitoso. ¡Bienvenido, " + user + "!");
            window.location = "inicio.html";
        } else {
            alert("Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.");
        }
    } else {
        alert("Por favor, completa todos los campos.");
    }
}
