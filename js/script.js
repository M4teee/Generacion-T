
 function login(){
var user,pass
 user = document.getElementById("usuario").value;
 pass = document.getElementById("contra").value;

 if (user=="Miguel" && pass=="1234"){
    window.location = "inicio.html"; 
 }
 else{
    alert("sos tremendo trolo")
 }
 
}

boton.addEventListener("click", login)
