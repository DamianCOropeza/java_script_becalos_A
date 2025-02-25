let verduras = ['lechuga', 'tomate','cebolla', 'jitomate'];

console.log(verduras[2]); //se empieza desde el 0

console.log(verduras.length); //tu eres para contar la cantidad de datos

console.log("imprimiendo verduras con ciclo for");

for(let indice = 0; indice < verduras.length; indice++){
    console.log(verduras[indice]);
}

console.log("metodos de arreglos");
let personas = []

personas.push("ana"); //agrega un elemento al final del arreglo
personas.push("diego");
personas.push("pepe");
personas.push("juan");
personas.push("luis");

console.log(personas);

personas.pop();
console.log(personas); //ya la ultima no está, pobrecito

personas.unshift("alex"); //agregamos un elemento al inicio de mi arrreglo
personas.unshift("karen");

console.log(personas); 

personas.shift(); //eliminamos el primer elemento de mi arreglo
console.log(personas);

//ACTIVIDAD DE FRUTAS

let frutas = ["caomei", "xigua", "pingguo", "mangguo", "xigua"];
let nombrefrutas = ["caomei", "xigua", "pingguo", "mangguo"];
let numerofrutas = [0,0,0,0,];

for (let i=0; i< frutas.length; i++) {
    if (frutas[i] === nombrefrutas[j]) {
        numerofrutas [j]++;
    }
}

for (let i=0; i < nombrefrutas.length; i++) {
    console.log(nombrefrutas[i] + "=" + numerofrutas[i]);
}

console.log(numerofrutas);
