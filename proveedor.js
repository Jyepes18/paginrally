
function validar() {

    var tipoid, Documento, Nombre, Apellido, Telefono,Rut, Direccion, Correo, expresion, expresion2, expresion3;

    tipoid = document.getElementById("tipoid").value;
    Documento = document.getElementById("Documento").value;
    Nombre = document.getElementById("Nombre").value;
    Apellido = document.getElementById("Apellido").value;
    Telefono = document.getElementById("Telefono").value;
    Rut = document.getElementById("Rut").value;
    Direccion = document.getElementById("Direccion").value;
    Correo= document.getElementById("Correo").value;

    expresion = /\w+@\w+\.+[a-z]/;

    expresion2 = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/;

    expresion3 = /^[a-zA-Z0-9\s,'-]*$/;

    if(tipoid ==="" || Documento==="" || Nombre==="" || Apellido==="" || Telefono===""  || Rut==="" || Telefono==="" || Direccion==="" || Correo==="") {
       alert("Todos los campos son obligatorios");
        return false;
   }
   
    else if (Documento.length>10){
    alert ("El documento es de maximo 10 caraceteres");
    return false;
    }    

    else if (isNaN(Documento)) {
        alert ("En el campo Documento se agregan números");
        return false;
    }

    else if (Nombre.length>30){
        alert ("El nombre esta muy largo");
        return false;
        }  
        else if (!expresion2.test(Nombre)){
            alert ("El nombre no es valido");
            return false;
        }
   
    else if (Apellido.length>30){
        alert ("Los Apellidos esta muy largo");
        return false;
    }  

    else if (!expresion2.test(Apellido)){
        alert ("El Apellido no es valido");
        return false;
    }
            
    else if (Telefono.length>10){
        alert ("El telefono es de maximo 10 caraceteres");
        return false;
    }    

    else if (isNaN(Telefono)) {
        alert ("En el campo telefono se agregan números");
        return false;
    }

    else if (Rut.length>10){
        alert ("El Rut es de maximo 10 caraceteres");
        return false;
    }    

    else if (isNaN(Rut)) {
        alert ("En el campo Rut se agregan números");
        return false;
    }

    else if (Direccion.length>30){
        alert ("La direccion esta mas escrita");
         return false;
    }   
    
    else if (!expresion3.test(Direccion)){
        alert ("La direccion esta mas escrita");
        return false;
    }

    else if (Correo.length>100){
        alert ("El correo esta mal escrito");
        return false;
    }
    else if (!expresion.test(Correo)){
        alert ("El correo no es valido");
        return false;
    }

                       
}


