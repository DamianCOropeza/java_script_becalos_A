// este es el programa para mostrar los multiplos de5 hasta un numero dado por el usuario

let numero = 793;
// o sea, quiero encontrar los multiplos de 5 hasta el numero dado}

let contador = 1;

while(contador <= numero){
    //codigo a iterar
    if(contador % 5 ===0){
        console.log(contador);
}
contador++; //incremento del contador
}

console.log("Fin del programa");

//Numeros impares

let numero2 = 38;

for(let indice = 0; indice <= numero2; indice ++){
    if(indice % 2 !== 0){
        console.log(indice);
}}

console.log ("Fin del programa");

//Imprimir los numeros del 1 al 10

let inicio = 0;

while(inicio <= 10){
    console.log(inicio);
    inicio++;
}

console.log ("Fin del programa");

for (let i =1; i <= 10; i++){
    console.log(i);
}
