function mudarEstado(elemento) {
    let display = document.getElementById(elemento).style.display;
    if (display == "block") {
        document.getElementById(elemento).style.display = "none";
    } else {
        document.getElementById(elemento).style.display = "block";
    }
}