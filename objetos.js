//práctica de frutas

//declaramos el arreglo
let frutas = ["uva", "pera", "tuna", "fresa", "uva", "caomei"];

//creamos un objeto para almacenar la cantidad de cada tipo de fruta
let conteofrutas = {};

// usamos un cliclo for para recorrer el arreglo y contar las frutas
for (let indice = 0; indice < frutas.length; indice++){
    let fruta = frutas[indice];
    if (conteofrutas[fruta]){
        //si ya existe la fruta, incrementar el contador
        conteofrutas[fruta]++;
    } else {
        conteofrutas[fruta] = 1;
        //si la fruta no existe, se inicia el coteo en uno
    }
}

// imprimir en la consola la cantidad de cada tipo de fruta
console.log("conteo de frutas usando ciclo for:");
for (let fruta in conteofrutas) {
    console.log(`${fruta}: ${conteofrutas[fruta]}`); //todavia no vemos esto
}
