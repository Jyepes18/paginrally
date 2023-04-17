function validar() {

    var username, password, expresion, expresion2;

    username = document.getElementById("username").value;
    password = document.getElementById("password").value;

    expresion = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    expresion2 = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;



    if ( username==="" || password==""){
        alert("Los campos son obligatorios");
        return false;
    }

    else if (username.length>100){
        alert("El Usuario es muy largo");
        return false;
    }

    else if (!expresion.test(username)){
        alert("El Usuario no es valido. Ejemplo: 123@gmail.com")
        return false;
    }

    else if (password.length>100){
        alert("La contraseña es muy larga");
        return false;
    }

    else if (!expresion2.test(password)){
        alert("La contraseña es de minimo 8 carateres y debe tener minimo una letra mayuscula, una minuscula y un numero")
        return false;
    }

}