function cambiarTexto(){
    let titulo = document.getElementById("titulo");
    titulo.textContent = "Hola desde el DOM";
}

function cambiarColor(){
    let parrafos = document.getElementsByClassName("texto");
    for (let i = 0; i < parrafos.length; i++){
        parrafos[i].style.color = "blue";
    }
}

function ocultarParrafo(){
    let segundoParrafo = document.getElementsByTagName("p")[4];
    segundoParrafo.style.display="none";
}

function cambiarTextoDiv(){
    let parrafoDiv = document.querySelector("div p");
    parrafoDiv.textContent="Texto cambiado dentro del div";
}

function marcarItems (){
    let items = document.querySelectorAll("li");
        items.forEach (item => {
            item.style.backgroundColor="yellow";
        });
}