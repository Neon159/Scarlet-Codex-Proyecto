//llamo a la variable de session
let data = sessionStorage.getItem('NomUsuario');

let usuario = document.getElementById("BienvenidaUsuario");

let usuario2 = document.getElementById("BienvenidaUsuario2");

usuario.textContent = "Bienvenido " + data;
usuario2.textContent = "Bienvenido " + data;





document.getElementById('formComu').addEventListener('submit', saveTask); // ejecutando el metodo

function saveTask(e) {

    e.preventDefault();
    let NombreClase = document.getElementById("nombre_clase").value;
    let URLI = document.getElementById("Url_imagen").value;
    let URL = document.getElementById("Url_clase").value;
    let DescripcionClase = document.getElementById("desc_clase").value;

    // guardando en un objeto
    let task = {
        NombreClase,
        URLI,
        URL,
        DescripcionClase

    };

    if (localStorage.getItem('Comus') === null) { // API
        let Comus = [];
        Comus.push(task); //stringify paso un objeto a un objeto seteable string
        localStorage.setItem('Comus', JSON.stringify(Comus)); // primero nombre del  guardado  y luego  lo  q vas a guardar, se recomienda guardarlo  a string
    } else {
        let Comus = JSON.parse(localStorage.getItem('Comus')); //recibo el string y lo paso  a objeto
        Comus.push(task);
        localStorage.setItem('Comus', JSON.stringify(Comus));
    }

    getComus(); //  cada vez que guardo llamo a abtener tareas
    document.getElementById('formTask').reset();

}

function deleteTask(title) {

    let Comus = JSON.parse(localStorage.getItem('Comus'));
    for (let i = 0; i < Comus.length; i++) {
        if (Comus[i].NombreClase == title) {
            Comus.splice(i, 1);
        }
    }

    localStorage.setItem('Comus', JSON.stringify(Comus));
    getComus();
}

function getComus() {
    let Comus = JSON.parse(localStorage.getItem('Comus')); // obteniendo las tareas del localstorage
    let ComusView = document.getElementById('Comus');
    ComusView.innerHTML = '';
    for (let i = 0; i < Comus.length; i++) {
        //   let title              = tasks[i].NombreCurso;
        //   let NombreDocente      = tasks[i].NombreDocente;
        //   let DescripcionCurso   = tasks[i].DescripcionCurso;

        let title = Comus[i].NombreClase;
        let URLI = Comus[i].URLI;
        let URL = Comus[i].URL;
        let DescripcionClase = Comus[i].DescripcionClase;

        //     <td>${title}</td>
        //    <td>${NombreDocente}</td>
        //    <td>${DescripcionCurso}</td>
        ComusView.innerHTML += `<tr>
                           
                            <td>${title}</td>
                           <td>${URLI}</td>
                           <td>${URL}</td>
                           <td>${DescripcionClase}</td>
                           
                           <td>
                           
                               <a href="#" onclick="deleteTask('${title}')" class="btn btn-danger ml-5">Eliminar</a>
                               <a href="#" onclick="editar('${title}')" class="btn btn-primary ml-5">Actualizar</a>
                           </td>
                           </tr>`;
    }
}

// Para agregar despues de que haya entendido mucho más la logica

//     <div class="form-group">
//           <input type="text" id="NombreCursoActualizar" placeholder="${tasks[index].NombreCurso}" class="form-control">
//    </div>
//    <div class="form-group">
//            <input type="text" id="NombreDocenteActualizar" placeholder="${tasks[index].NombreDocente}" class="form-control">
//    </div>
//    <div class="form-group">
//           <textarea id="DescripcionCursoActualizar" cols="30" rows="10" class="form-control" placeholder="${tasks[index].DescripcionCurso}"></textarea>

getComus();

function editar(titulo) {
    console.log(titulo);

    let Comus = JSON.parse(localStorage.getItem('Comus'));

    for (let index = 0; index < Comus.length; index++) {

        if (Comus[index].NombreClase == titulo) {

            document.getElementById("TablaActualizar").innerHTML = `
                <p> 
                     <a class="btn btn-primary" id="BTNletra" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                        Actualizar curso 
                     </a>
                </p>
                <div class="collapse" id="collapseExample">
                        <div class="card card-body">
                            <form id="formTaskActualizar">
                                
                             </div>
                             
                               <div class="form-group">
                                       <input type="text" id="NombreClaseActualizar" placeholder="${Comus[index].NombreClase}" class="form-control">
                               </div>
                               <div class="form-group">
                                       <input type="url" id="URLIActualizar" placeholder="${Comus[index].URLI}" class="form-control">
                               </div>
                               <div class="form-group">
                                       <input type="url" id="URLActualizar" placeholder="${Comus[index].URL}" class="form-control">
                               </div>

                               <div class="form-group">
                                      <textarea id="DescripcionClaseActualizar" cols="30" rows="10" class="form-control" placeholder="${Comus[index].DescripcionClase}"></textarea>
                             </div>

                                      <button type="submit" class="btn btn-primary btn-block" onclick="actualizar('${index}')">Actualizar</button>
                                      <button type="submit" class="btn btn-primary btn-block" >cancelar</button>
                             </form>
                        </div>
                 </div> `;
        }
    }

}

function actualizar(i) {
    console.log(i);

    let Comus = JSON.parse(localStorage.getItem('Comus'));

    //  tasks[i].NombreCurso = document.getElementById("NombreCursoActualizar").value;
    //  tasks[i].NombreDocente = document.getElementById("NombreCursoActualizar").value;
    //  tasks[i].DescripcionCurso = document.getElementById("DescripcionCursoActualizar").value;

    Comus[i].NombreClase = document.getElementById("NombreClaseActualizar").value;
    Comus[i].URLI = document.getElementById("URLIActualizar").value;
    Comus[i].URL = document.getElementById("URLActualizar").value;
    Comus[i].DescripcionClase = document.getElementById("DescripcionClaseActualizar").value;

    localStorage.setItem('Comus', JSON.stringify(Comus));

    getComus();

}