function sumar(numero1, numero2){ //fx para sumar , function + nombre de funcion + parametros
    let total = numero1 + numero2;
    return total;
}

// Llamado de funcion
let resultado = sumar(10,10);

//return nos permite guardar

console.log(resultado);

console.log(sumar(12,20));

sumar(2,3);

function saludar(nombre){
    console.log("hola, bienvenide " + nombre);
}

saludar("carolina");
saludar("monse");

function restar(a,b){
    let total = a-b;
    console.log(total);
}
//console log solo imprime en consola
//mejor usar return siempre

restar (13,2)

function casita(){ //no recibe datos de entrada
    let nombre = "ana";
    let apellido = "perez";
    console.log("es una casita");
}

casita();

//console.log(nombre); no se accede pq está dentro de una fx


let nombre = "pepe";//variable global
let edad = 99;
let ciudad = "cdmx";

console.log("el es " + nombre + " tiene " + edad + " y vivie en " + ciudad);

console.log (`el es ${nombre} tiene ${edad} años y vive en ${ciudad}`)


// Pedir datos al usuario
let usuario = prompt("Cual es tu nombre?"); // Los datos se guardan en string
let gatos = prompt("¿Cuantos gatos tienes?"); 
let perros = prompt("Cuantos perros tienes?"); 


let total = parseInt(gatos) + parseInt(perros); // Convertir string a numero
let total_2 = Number(gatos) + Number(perros); // Convertir string a numero

// Vemos los datos en consola
console.log(` ${usuario} tiene ${gatos} gatos y ${perros} perros.`);

// Vemos los datos en pop up
alert(`${usuario} tiene ${gatos} gatos y ${perros} perros, en total tiene ${total} mascotas.`);

// Vemos los datos en la pagina
document.write(`${usuario} tiene ${gatos} gatos y ${perros} perros. En total tiene ${total} mascotas.`);