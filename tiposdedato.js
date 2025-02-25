// Este es un comentario uwu

//Console.log es una fx q se utiliza para imprimir dentro de la consola
console.log("Hola mundo");

//Declaración de variables
var nombre = "Juanito";
var edad = 33;
var sueldo = 1.8888;
var casada = false;
var estudio = true;
var hijos = null; //ausensia de valor
var dato;

console.log(typeof(nombre));
console.log(typeof(edad));
console.log(typeof(sueldo));
console.log(typeof(casada));
console.log(typeof(estudio));
console.log(typeof(hijos));
console.log(typeof(dato));

var nombre = "Amelie";

//ejercicios de CAMPUS CLASE 1
// Ejemplos proporcionados
console.log(typeof 42);            // number
console.log(typeof 'Veinticinco'); // string
console.log(typeof -666);          // number
console.log(typeof true);          // boolean
console.log(typeof 0);             // number
console.log(typeof '');            // string
console.log(typeof null);          // object (esto es un caso especial en JS)
console.log(typeof undefined);     // undefined
console.log(typeof false);         // boolean

// Ejemplos adicionales
console.log(typeof NaN);           // number (Not-A-Number sigue siendo un número en JS)
console.log(typeof [1, 2, 3]);     // object (los arrays son objetos en JS)
console.log(typeof {a: 1, b: 2});  // object
console.log(typeof function(){});  // function
console.log(typeof Symbol('id'));  // symbol
console.log(typeof BigInt(9007199254740991)); // bigint
console.log(typeof /[a-z]/);       // object (Expresiones regulares son objetos)
console.log(typeof new Date());    // object

// Experimentación con mis propios ejemplos sacados de una IA
console.log(typeof Infinity);      // number
console.log(typeof (42 + ''));     // string (coerción de número a string)
console.log(typeof (true + 1));    // number (coerción de boolean a número)
