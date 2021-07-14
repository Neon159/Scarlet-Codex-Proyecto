let data = sessionStorage.getItem('NomUsuario');

let usuario= document.getElementById("BienvenidaUsuario");

usuario.textContent = "Bienvenido " + data ;


document.getElementById("form-registroCurso").addEventListener("submit", guardarCursoLocalStorage);


function guardarCursoLocalStorage(e){

  e.prevetDefault();

    const nombreCurso         = document.getElementById("NombreCurso").value,
           nombreProfesor     = document.getElementById("NombreDocente").value,
           descripcionCurso   = document.getElementById("DescripCurso").value;

           let curso = {
            nombreCurso ,
            nombreProfesor,
            descripcionCurso  
          };
          


  if(localStorage.getItem('DBCurso') === null) { 
    let ListaCurso = [];
    ListaCurso.push(curso);                                     
    localStorage.setItem('DBCurso', JSON.stringify(ListaCurso)); 
    
  } else {
    let ListaCurso = JSON.parse(localStorage.getItem('DBCurso')) 
    ListaCurso.push(curso);
    localStorage.setItem('DBCurso', JSON.stringify(ListaCurso));
    
  }
 /*  mostrarDatosCurso();*/


}
 


function mostrarDatosCurso(){
    let ListaCurso = JSON.parse(localStorage.getItem('DBCurso')) ; 
    
    document.getElementById("tbody").innerHTML ="";

    for(let i =0;i<ListaCurso.length;i++){

        let nombreCurso = ListaCurso[i].nombreCurso;
        let nombreProfesor= ListaCurso[i].NombreDocente;
        let descripcionCurso = ListaCurso[i].DescripcionCurso;

        document.getElementById("tbody").innerHTML +=
        `<tr>
             <td>${nombreCurso}</td>
             <td>${nombreProfesor}</td>
             <td>${descripcionCurso}</td>
             <td>
             <a  onclick='deleteCurso("${nombreCurso}")' class="btn btn-danger ml-5">eliminar</a>
             </td>
         </tr>`
         ;  

    }

}





