let cardsVideo = document.querySelector('#addclase');


cardsVideo.addEventListener("click", cargarVideo);

function cargarVideo(e) {
    e.preventDefault();
    let tituloCurso = e.target.classList[1];
    // console.log(tituloCurso);

    let obtenerCursos = JSON.parse(localStorage.getItem('Mates'));
    let buscarCurso = obtenerCursos.find(titulo => titulo.NombreClase = tituloCurso);
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