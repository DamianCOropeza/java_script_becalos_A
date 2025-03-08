// Primero, debo declarar mi arreglo vacio 

let librosLeidos = [];

//Fx agregarLibro 

function agregarLibro(tituloLibro){
    librosLeidos.push(tituloLibro); //Agregamos un elemento al arreglo 
}

agregarLibro("La cancion de Aquiles");
agregarLibro ("Circe"); 
agregarLibro("Las horas de terciopelo");

console.log(librosLeidos); //Imprimimos el arreglo

//Mostrar los libros leidos 

function mostrarLibrosLeidos(){
    for(let i = 0; i< librosLeidos.length; i++){
        console.log(librosLeidos[i]);
    }
}

//TLlamar a la fx

mostrarLibrosLeidos();

console.log("--------------------")
agregarLibro("La quinta ola");
agregarLibro ("Fundamentos de Bioquímica"); 
agregarLibro("Asesino de brujas");

mostrarLibrosLeidos();