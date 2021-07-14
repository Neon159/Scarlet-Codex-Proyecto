//llamo a la variable de session
// let data = sessionStorage.getItem('NomUsuario');


// let usuario2 = document.getElementById("BienvenidaUsuario2");

// usuario.textContent = "Bienvenido " + data;
// usuario2.textContent = "Bienvenido " + data;





document.getElementById('formTask').addEventListener('submit', saveTask); // ejecutando el metodo

function saveTask(e) {

    e.preventDefault();
    let NombreCurso = document.getElementById("nombre_curso").value;
    let PROFESOR = document.getElementById("profesor").value;
    let URLI = document.getElementById("Url_imagen").value;
    let DescripcionClase = document.getElementById("desc_clase").value;

    // guardando en un objeto
    let task = {
        NombreCurso,
        PROFESOR,
        URLI,
        DescripcionClase

    };

    if (localStorage.getItem('curs') === null) { // API
        let curs = [];
        curs.push(task); //stringify paso un objeto a un objeto seteable string
        localStorage.setItem('curs', JSON.stringify(curs)); // primero nombre del  guardado  y luego  lo  q vas a guardar, se recomienda guardarlo  a string
    } else {
        let curs = JSON.parse(localStorage.getItem('curs')); //recibo el string y lo paso  a objeto
        curs.push(task);
        localStorage.setItem('curs', JSON.stringify(curs));
    }

    getcurs(); //  cada vez que guardo llamo a abtener tareas
    document.getElementById('formTask').reset();

}

function deleteTask(title) {

    let curs = JSON.parse(localStorage.getItem('curs'));
    for (let i = 0; i < curs.length; i++) {
        if (curs[i].NombreCurso == title) {
            curs.splice(i, 1);
        }
    }

    localStorage.setItem('curs', JSON.stringify(curs));
    getcurs();
}

function getcurs() {
    let curs = JSON.parse(localStorage.getItem('curs')); // obteniendo las tareas del localstorage
    let cursView = document.getElementById('curs');
    cursView.innerHTML = '';
    for (let i = 0; i < curs.length; i++) {
        //   let title              = tasks[i].NombreCurso;
        //   let NombreDocente      = tasks[i].NombreDocente;
        //   let DescripcionCurso   = tasks[i].DescripcionCurso;

        let title = curs[i].NombreCurso;
        let PROFESOR = curs[i].PROFESOR;
        let ULRI = curs[i].URLI;
        let DescripcionClase = curs[i].DescripcionClase;

        //     <td>${title}</td>
        //    <td>${NombreDocente}</td>
        //    <td>${DescripcionCurso}</td>
        cursView.innerHTML += `<tr>
                           
                            <td>${title}</td>
                           <td>${PROFESOR}</td>
                           <td>${ULRI}</td>
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

getcurs();

function editar(titulo) {
    console.log(titulo);

    let curs = JSON.parse(localStorage.getItem('curs'));

    for (let index = 0; index < curs.length; index++) {

        if (curs[index].NombreCurso == titulo) {

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
                                       <input type="text" id="NombreClaseActualizar" placeholder="${curs[index].NombreCurso}" class="form-control">
                               </div>
                               <div class="form-group">
                                       <input type="url" id="URLIActualizar" placeholder="${curs[index].PROFESOR}" class="form-control">
                               </div>
                               <div class="form-group">
                                       <input type="url" id="URLActualizar" placeholder="${curs[index].URL}" class="form-control">
                               </div>

                               <div class="form-group">
                                      <textarea id="DescripcionClaseActualizar" cols="30" rows="10" class="form-control" placeholder="${curs[index].DescripcionClase}"></textarea>
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

    let curs = JSON.parse(localStorage.getItem('curs'));
    //  tasks[i].NombreCurso = document.getElementById("NombreCursoActualizar").value;
    //  tasks[i].NombreDocente = document.getElementById("NombreCursoActualizar").value;
    //  tasks[i].DescripcionCurso = document.getElementById("DescripcionCursoActualizar").value;

    curs[i].NombreClase = document.getElementById("NombreClaseActualizar").value;
    curs[i].PROFESOR = document.getElementById("PROFESORActualizar").value;
    curs[i].URLI = document.getElementById("URLIActualizar").value;
    curs[i].DescripcionClase = document.getElementById("DescripcionClaseActualizar").value;

    localStorage.setItem('curs', JSON.stringify(curs));

    getcurs();

}