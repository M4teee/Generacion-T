// Variables para almacenar usuarios y contraseñas
usuarios = {
    "Miguel": "1234",
    "Mateo": "1234",
    "Danna": "1234",
    "Galo": "1234",
    "Brunella": "1234",
    "Sebastian": "1234",
    "Diego": "1234",
};
//funcion para registrarse
function registrarUsuario() {
    var usuario = document.getElementById("username").value.toLowerCase();
    var contrasena = document.getElementById("password").value;

    if (usuario && contrasena) {
        if (!usuarios.hasOwnProperty(usuario)) {
            usuarios[usuario] = contrasena;
            alert("Registro exitoso. Ahora podes iniciar sesión.");
            window.location = "inicio-sesion.html"; 
        } else {
            alert("El nombre de usuario ya existe. Por favor, elegi otro.");
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
            window.location = "inicio.html";
        } else {
            alert("Usuario o contraseña incorrectos. Por favor, intentalo de nuevo.");
        }
    } else {
        alert("Por favor, completa todos los campos.");
    }
}

var details = document.getElementById('details');
var summary = details.querySelector('summary');

details.addEventListener('toggle', function() {
  if (details.open) {
    summary.textContent = '';
  } else {
    summary.textContent = 'Abrir';
  }
});

function mostrarMensaje() {
  alert("¡La inscripción ha sido solicitada! Será informado con un mail cuando pueda ingresar.");
}
