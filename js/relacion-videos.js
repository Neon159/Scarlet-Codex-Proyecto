let cardsVideo = document.querySelector('#addclase');


cardsVideo.addEventListener("click", cargarVideo);

function cargarVideo(e) {
    e.preventDefault();
    let url_imagen = e.target.classList[1];
    // console.log(tituloCurso);

    let obtenerCursos = JSON.parse(localStorage.getItem('tasks'));
    let buscarCurso = obtenerCursos.find(titulo => titulo.URLI = url_imagen);
    console.log(buscarCurso);
    let NombreClase = buscarCurso.NombreClase;
    let DescripcionClase = buscarCurso.DescripcionClase;
    let URL = buscarCurso.URL;
    let URLI = buscarCurso.URLI;
    let loadVideo = {
        NombreClase,
        DescripcionClase,
        URL,
        URLI
    }
    localStorage.setItem("loadVideo", JSON.stringify(loadVideo));
    window.location.href = "VisualiArte.html";
}