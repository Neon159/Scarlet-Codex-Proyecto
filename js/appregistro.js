import { Usuarios } from "../Usuarios.js";

document
    .getElementById("form-registro")
    .addEventListener("submit", function(e) {
        e.preventDefault();

        /*de registro*/
        const nombre = document.getElementById("nombre").value,
            apellido = document.getElementById("apellido").value,
            dni = document.getElementById("dni").value,
            fecha = document.getElementById("fecha").value,
            genero = document.getElementById("genero").value,
            email = document.getElementById("Icorreo").value,
            contrasena = document.getElementById("Icontraseña").value;

        if (ValidarNombre(nombre) === 0 || ValidarNombre(nombre) === "") {
            return Swal.fire({
                type: "error",
                title: "Oops...",
                text: "el campo usuario sólo acepta letras y espacio",
                showConfirmButton: false,
                timer: 3000,
            });
        }

        if (ValidarEmail(email) === 0 || ValidarEmail(email) === "") {
            return Swal.fire({
                type: "error",
                title: "Oops...",
                text: "el  campo no  expresa un email valido",
                showConfirmButton: false,
                timer: 3000,
            });
        }

        const usuario = new Usuarios(
            nombre,
            apellido,
            dni,
            fecha,
            genero,
            email,
            contrasena
        );

        guardarUsuarioLocalStorage(usuario);

        Swal.fire({
            type: "success",
            title: ":)",
            text: "registrado con existo",
            showConfirmButton: false,
            timer: 3000,
        }).then(function() {
            window.location = "loginvista.html";
        });
    });


/**
 * Logueo
 */
// document.getElementById("form-logeo").addEventListener("submit", function (e) {
//     e.preventDefault();

//     /*de iniciar sesion*/

//     const Icorreo = document.getElementById("Icorreo").value,
//       Icontraseña = document.getElementById("Icontraseña").value;

//     let recibo = compararUsuarioLocalStorage(Icorreo, Icontraseña);

//     if (recibo.length > 0) {
//       Swal.fire({
//         type: "success",
//         title: ":",
//         text: "bienvenido",
//         showConfirmButton: false,
//         timer: 2000,
//       }).then(function () {

//         sessionStorage.setItem('NomUsuario', Icorreo);
//         window.location = "tables.html";
//       });
//     } else {
//       Swal.fire({
//         type: "error",
//         title: "Oops...",
//         text: "ustted no  esta registrado",
//         showConfirmButton: false,
//         timer: 2000,
//       });
//     }

//     if(recibo.length > 0){

//     }
//   });

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