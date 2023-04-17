function validar() {

    var Nombres, Apellido, Telefono, Correo, Mensaje, expresion, expresion2, expresion3, expresion4;

    Nombres = document.getElementById("Nombres").value;
    Apellido = document.getElementById("Apellido").value;
    Telefono = document.getElementById("Telefono").value;
    Correo = document.getElementById("Correo").value;
    Mensaje = document.getElementById("Mensaje").value;

    expresion = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    expresion2 = /^\d{10}$/;
    expresion3 = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    expresion4 = /^[\w\s\d.,;:!?¡¿@()$%&*+-/]+$/;



    if (Nombres==="" || Apellido==="" || Telefono ==="" || Correo==="" || Mensaje=="") {
        alert ("Todos los campos son obligatorios");
        return false;
    }

    else if (Nombres.length>30){
        alert ("El Nombre es muy largo");
        return false;
    }

    else if (!expresion.test(Nombres)){
        alert ("El Nombre no es valido");
        return false;
    }

    else if (Apellido.length>30){
        alert ("El Nombre es muy largo");
        return false;
    }

    else if (!expresion.test(Apellido)){
        alert ("El Apellido no es valido");
        return false;
    }

    else if (Telefono.length>10){
        alert("El telefono es muy largo (minimo y maximo 10 caracteres)");
        return false;
    }

    else if (!expresion2.test(Telefono)){
        alert ("En telefono se escriben numeros (minimo y maximo 10 caracteres)")
        return false;
    }

    else if (Correo.length>100){
        alert("El Correo es muy largo");
        return false;
    }

    else if (!expresion3.test(Correo)){
        alert ("Esta mal redactado el correo");
        return false;
    }

    else if (Mensaje.length>500){
        alert("El mensaje es muy largo");
        return false;
    }

    else if (!expresion4.test(Mensaje)){
        alert ("Esta mal redactado el Mensaje");
        return false;
    }






   



}