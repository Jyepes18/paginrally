function validar() {
    
    var  Nombre, Codigo, Proveedor, Precio, Categoria, Venta, Cantidad, Automovil, Descripcion, expresion, expresion2, expresion3, expresion4;

    Nombre = document.getElementById("Nombre").value;
    Codigo = document.getElementById("Codigo").value;
    Proveedor = document.getElementById("Proveedor").value;
    Precio = document.getElementById("Precio").value;
    Categoria = document.getElementById("Categoria").value;
    Venta = document.getElementById("Venta").value;
    Cantidad = document.getElementById("Cantidad").value;
    Automovil = document.getElementById("Automovil").value;
    Descripcion = document.getElementById("Descripcion").value;

    expresion = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/;

    expresion2 = /^\d+$/;

    expresion3 = /^[a-zA-Z0-9.,]+$/;

    expresion4 = /^[0-9]+$/;


    if (Nombre ==="" || Codigo==="" || Proveedor==="" || Precio==="" || Categoria===""  || Venta==="" || Cantidad==="" || Automovil==="" || Descripcion=="") {
        alert("Todos los campos son obligatorios");
         return false;
    }

    else if (Nombre.length>30){
        alert ("El Nombre es muy largo");
        return false;
    }  
    else if (!expresion.test(Nombre)){
        alert ("El nombre no es valido");
        return false;
    }

    else if (Codigo.length>3){
        alert ("El codigo es muy largo (maximo tres caracteres)");
        return false;
    }  

    else if (!expresion2.test(Codigo)){
        alert("El codigo esta mal redactado (solo números)");
        return false;
    }

    else if (Precio.length>10){
        alert ("escribe el precio del producto");
        return false;
    } 
    else if (!expresion4.test(Precio)){
        alert("El precio esta mal redactado (solo números)");
        return false;
    }

    else if (Categoria.length>40){
        alert ("Elige la categoria del producto");
        return false;
    }  

    else if (Venta.length>10){
        alert ("Escribe el valor del producto para la venta");
        return false;
    } 
    else if (!expresion4.test(Venta)){
        alert("La venta esta mal redactado (solo números)");
        return false;
    }

    else if (Descripcion.length>500){
        alert ("El Codigo e");
        return false;
    }
    else if (!expresion3.test(Descripcion)){
        alert("El codigo esta mal redactado");
        return false;
    }
}
