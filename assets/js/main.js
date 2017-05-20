function validar() {
    var boton = document.getElementById("suscribirse");
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var direccion = document.getElementById("direccion").value;

    if (nombre == "") {
        alert("Ingrese Nombre");
    } else if (!(/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/.test(email))) {
        alert("Ingrese Email");
    } else if (direccion == "") {
        alert("Ingrese Dirección");
    } else if (!document.getElementById("selector").value) {
        alert("Elige tu set de té favorito");
    } else {
        document.getElementById("nombre").value = "";
        document.getElementById("email").value = "";
        document.getElementById("direccion").value = "";
        document.getElementById("selector").value = "";
        alert("Muchas gracias por suscribirte");
    }
}
