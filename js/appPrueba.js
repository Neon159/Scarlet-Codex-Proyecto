//llamo a la variable de session
let data = sessionStorage.getItem('NomUsuario');


let usuario2 = document.getElementById("BienvenidaUsuario2");

// usuario.textContent = "Bienvenido " + data;
usuario2.textContent = "Bienvenido " + data;





document.getElementById('formTask').addEventListener('submit', saveTask); // ejecutando el metodo

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

    if (localStorage.getItem('tasks') === null) { // API
        let tasks = [];
        tasks.push(task); //stringify paso un objeto a un objeto seteable string
        localStorage.setItem('tasks', JSON.stringify(tasks)); // primero nombre del  guardado  y luego  lo  q vas a guardar, se recomienda guardarlo  a string
    } else {
        let tasks = JSON.parse(localStorage.getItem('tasks')); //recibo el string y lo paso  a objeto
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    getTasks(); //  cada vez que guardo llamo a abtener tareas
    document.getElementById('formTask').reset();

}

function deleteTask(title) {

    let tasks = JSON.parse(localStorage.getItem('tasks'));
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].NombreClase == title) {
            tasks.splice(i, 1);
        }
    }

    localStorage.setItem('tasks', JSON.stringify(tasks));
    getTasks();
}

function getTasks() {
    let tasks = JSON.parse(localStorage.getItem('tasks')); // obteniendo las tareas del localstorage
    let tasksView = document.getElementById('tasks');
    tasksView.innerHTML = '';
    for (let i = 0; i < tasks.length; i++) {
        //   let title              = tasks[i].NombreCurso;
        //   let NombreDocente      = tasks[i].NombreDocente;
        //   let DescripcionCurso   = tasks[i].DescripcionCurso;

        let title = tasks[i].NombreClase;
        let URLI = tasks[i].URLI;
        let URL = tasks[i].URL;
        let DescripcionClase = tasks[i].DescripcionClase;

        //     <td>${title}</td>
        //    <td>${NombreDocente}</td>
        //    <td>${DescripcionCurso}</td>
        tasksView.innerHTML += `<tr>
                           
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

getTasks();

function editar(titulo) {
    console.log(titulo);

    let tasks = JSON.parse(localStorage.getItem('tasks'));

    for (let index = 0; index < tasks.length; index++) {

        if (tasks[index].NombreClase == titulo) {

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
                                       <input type="text" id="NombreClaseActualizar" placeholder="${tasks[index].NombreClase}" class="form-control">
                               </div>
                               <div class="form-group">
                                       <input type="url" id="URLIActualizar" placeholder="${tasks[index].URLI}" class="form-control">
                               </div>
                               <div class="form-group">
                                       <input type="url" id="URLActualizar" placeholder="${tasks[index].URL}" class="form-control">
                               </div>

                               <div class="form-group">
                                      <textarea id="DescripcionClaseActualizar" cols="30" rows="10" class="form-control" placeholder="${tasks[index].DescripcionClase}"></textarea>
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

    let tasks = JSON.parse(localStorage.getItem('tasks'));

    //  tasks[i].NombreCurso = document.getElementById("NombreCursoActualizar").value;
    //  tasks[i].NombreDocente = document.getElementById("NombreCursoActualizar").value;
    //  tasks[i].DescripcionCurso = document.getElementById("DescripcionCursoActualizar").value;

    tasks[i].NombreClase = document.getElementById("NombreClaseActualizar").value;
    tasks[i].URLI = document.getElementById("URLIActualizar").value;
    tasks[i].URL = document.getElementById("URLActualizar").value;
    tasks[i].DescripcionClase = document.getElementById("DescripcionClaseActualizar").value;

    localStorage.setItem('tasks', JSON.stringify(tasks));

    getTasks();

}