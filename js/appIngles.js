//llamo a la variable de session
let data = sessionStorage.getItem('NomUsuario');

let usuario = document.getElementById("BienvenidaUsuario");

let usuario2 = document.getElementById("BienvenidaUsuario2");

usuario.textContent = "Bienvenido " + data;
usuario2.textContent = "Bienvenido " + data;





document.getElementById('formIng').addEventListener('submit', saveTask); // ejecutando el metodo

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

    if (localStorage.getItem('Ings') === null) { // API
        let Ings = [];
        Ings.push(task); //stringify paso un objeto a un objeto seteable string
        localStorage.setItem('Ings', JSON.stringify(Ings)); // primero nombre del  guardado  y luego  lo  q vas a guardar, se recomienda guardarlo  a string
    } else {
        let Ings = JSON.parse(localStorage.getItem('Ings')); //recibo el string y lo paso  a objeto
        Ings.push(task);
        localStorage.setItem('Ings', JSON.stringify(Ings));
    }

    getIngs(); //  cada vez que guardo llamo a abtener tareas
    document.getElementById('formTask').reset();

}

function deleteTask(title) {

    let Ings = JSON.parse(localStorage.getItem('Ings'));
    for (let i = 0; i < Ings.length; i++) {
        if (Ings[i].NombreClase == title) {
            Ings.splice(i, 1);
        }
    }

    localStorage.setItem('Ings', JSON.stringify(Ings));
    getIngs();
}

function getIngs() {
    let Ings = JSON.parse(localStorage.getItem('Ings')); // obteniendo las tareas del localstorage
    let IngsView = document.getElementById('Ings');
    IngsView.innerHTML = '';
    for (let i = 0; i < Ings.length; i++) {
        //   let title              = tasks[i].NombreCurso;
        //   let NombreDocente      = tasks[i].NombreDocente;
        //   let DescripcionCurso   = tasks[i].DescripcionCurso;

        let title = Ings[i].NombreClase;
        let URLI = Ings[i].URLI;
        let URL = Ings[i].URL;
        let DescripcionClase = Ings[i].DescripcionClase;

        //     <td>${title}</td>
        //    <td>${NombreDocente}</td>
        //    <td>${DescripcionCurso}</td>
        IngsView.innerHTML += `<tr>
                           
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

getIngs();

function editar(titulo) {
    console.log(titulo);

    let Ings = JSON.parse(localStorage.getItem('Ings'));

    for (let index = 0; index < Ings.length; index++) {

        if (Ings[index].NombreClase == titulo) {

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
                                       <input type="text" id="NombreClaseActualizar" placeholder="${Ings[index].NombreClase}" class="form-control">
                               </div>
                               <div class="form-group">
                                       <input type="url" id="URLIActualizar" placeholder="${Ings[index].URLI}" class="form-control">
                               </div>
                               <div class="form-group">
                                       <input type="url" id="URLActualizar" placeholder="${Ings[index].URL}" class="form-control">
                               </div>

                               <div class="form-group">
                                      <textarea id="DescripcionClaseActualizar" cols="30" rows="10" class="form-control" placeholder="${Ings[index].DescripcionClase}"></textarea>
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

    let Ings = JSON.parse(localStorage.getItem('Ings'));

    //  tasks[i].NombreCurso = document.getElementById("NombreCursoActualizar").value;
    //  tasks[i].NombreDocente = document.getElementById("NombreCursoActualizar").value;
    //  tasks[i].DescripcionCurso = document.getElementById("DescripcionCursoActualizar").value;

    Ings[i].NombreClase = document.getElementById("NombreClaseActualizar").value;
    Ings[i].URLI = document.getElementById("URLIActualizar").value;
    Ings[i].URL = document.getElementById("URLActualizar").value;
    Ings[i].DescripcionClase = document.getElementById("DescripcionClaseActualizar").value;

    localStorage.setItem('Ings', JSON.stringify(Ings));

    getIngs();

}