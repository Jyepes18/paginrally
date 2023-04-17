function validar(){

    var  Fecha, Hora, producto, Descripcion, expresion;

    Fecha = document.getElementById("Fecha").value;
    Hora = document.getElementById("Hora").value;
    producto = document.getElementById("Producto").value;
    Cantidad = document.getElementById("Cantidad").value;
    Descripcion = document.getElementById("Descripcion").value;

    expresion = /^[a-zA-Z0-9\s.,!?()-]*$/;
    


    if (Fecha ==="" || Hora==="" || producto==="" || Cantidad===""  || Descripcion==="") {
        alert("Todos los campos son obligatorios");
         return false;
    }

    else if(Descripcion.length> 500){
        alert("Pasate el maximo de 500 caracateres");
        return false;
    }

    else if(!expresion.test(Descripcion)){
        alert("Redacto mal la descripcion");
        return false;


    }


    



}