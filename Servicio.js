function validar(){

    var  Nombre, Apellido, Direccion, Producto, Servi, Metodopago, Pagar, expresion, expresion2, expresion3, expresion4;


    Nombre = document.getElementById("Nombre").value;
    Apellido = document.getElementById("Apellido").value;
    Direccion = document.getElementById("Direccion").value;
    Producto = document.getElementById("Producto").value;
    Servi = document.getElementById("Servi").value;
    Metodopago = document.getElementById("Metodopago").value;
    Pagar = document.getElementById("Pagar").value;

    expresion = /^[a-zA-Z0-9]+$/;

    expresion2 = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/;

    expresion3 = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/;

    expresion4 = /^[0-9]+(?:\.[0-9]+)?$/;



    if (Nombre ==="" || Apellido==="" || Direccion==="" || Producto==="" || Servi===""  || Metodopago==="" || Pagar==="") {
        alert("Todos los campos son obligatorios");
         return false;
    }

    else if (Nombre.length>30){
        alert ("El Nombre es muy largo");
        return false;
    }  

    else if (!expresion2.test(Nombre)){
        alert ("El nombre no es valido");
        return false;
    }

    else if (Apellido.length>30){
        alert ("El Apellido es muy largo");
        return false;
    }  

    else if (!expresion2.test(Apellido)){
        alert ("El Apellido no es valido");
        return false;
    }

    else if (Direccion.length>40){
        alert ("La direccion es muy larga");
        return false;
    }  

    else if (!expresion.test(Direccion)){
        alert ("La direccion no es valido");
        return false;
    }

    else if (Pagar.length>20){
        alert ("Esta mal redactado el número Pago ");
        return false;
    }

    else if (!expresion4.test(Pagar)){
        alert ("Esta mal redactado el total a pagar (solo numeros)");
        return false;
    }

    












}