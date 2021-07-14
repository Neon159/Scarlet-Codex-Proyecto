import { Usuarios } from "../Usuarios.js";


document.getElementById("form-logeo").addEventListener("submit", function(e) {
    e.preventDefault();

    /*de iniciar sesion*/

    const Icorreo = document.getElementById("Icorreo").value,
        Icontraseña = document.getElementById("Icontraseña").value,
        Iadministrador = document.getElementById("IdAdmin").value;

    let recibo = compararUsuarioLocalStorage(Icorreo, Icontraseña);

    if (recibo.length > 0 && Iadministrador == "AdminUpeu") {
        Swal.fire({
            type: "success",
            title: ":",
            text: "bienvenido",
            showConfirmButton: false,
            timer: 2000,
        }).then(function() {

            sessionStorage.setItem('NomUsuario', Icorreo);
            window.location = "tableArte.html";
        });
    } else if (recibo.length > 0 && Iadministrador != "AdminUpeu") {
        Swal.fire({
            type: "success",
            title: ":",
            text: "bienvenido",
            showConfirmButton: false,
            timer: 2000,
        }).then(function() {

            sessionStorage.setItem('NomUsuario', Icorreo);
            window.location = "indexxx.html";
        });

    }

    if (recibo.length > 0) {

    }
});

/*-------------inicio funciones de guardar en localstrorage--------------*/

function guardarUsuarioLocalStorage(usuario) {
    if (localStorage.getItem("DBUsuarios") === null) {
        let ListaUsuarios = [];
        ListaUsuarios.push(usuario);
        localStorage.setItem("DBUsuarios", JSON.stringify(ListaUsuarios));
        let respuesta = 0;
        return respuesta;
    } else {
        let ListaUsuarios = JSON.parse(localStorage.getItem("DBUsuarios"));
        ListaUsuarios.push(usuario);
        localStorage.setItem("DBUsuarios", JSON.stringify(ListaUsuarios));
        let respuesta = 1;
        return respuesta;
    }
}

/*-------------fin funciones de guardar en localstrorage--------------*/

/*-------------inicio funciones de comparar en localstrorage--------------*/

function compararUsuarioLocalStorage(Usuario, Contrasena) {
    let buscar1 = Usuario;
    let buscar2 = Contrasena;

    let ListaUsuarios = JSON.parse(localStorage.getItem("DBUsuarios"));

    let array2 = ListaUsuarios.filter(function(re) {
        return re.email === buscar1 && re.contrasena === buscar2;
    });
    return array2;
}

/*-------------fin funciones de comparar en localstrorage--------------*/

/*---------------inicio funciones de validacion-------------*/
function ValidarNombre(nombreValidar) {
    if (nombreValidar.length > 0) {
        let respuesta = 1; // bueno
        return respuesta;
    } else {
        let respuesta = 0; // malo
        return respuesta;
    }
}

function ValidarEmail(emialValidar) {
    if (
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
            emialValidar
        )
    ) {
        let respuesta = 1; // bueno
        return respuesta;
    } else {
        let respuesta = 0; // malo
        return respuesta;
    }
}
/**************fin funciones de validacion*********************/