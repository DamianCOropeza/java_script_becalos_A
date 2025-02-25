// Tipo de mascotas: gato, perro, cuyo

//condicionales: jaula mediana, grande, chica

let tipodemascota = "perro";

if (tipodemascota === "perro"){
    console.log("necesitas la jaula grande")
} else if (tipodemascota === "gato"){
    console.log("si tienes al animal más bonito de este mundo, o sea el gato, necesitas una jaula mediana")
}else if (tipodemascota === "cuyo"){
    console.log("necesitas la jaula chica en caso de cuyo")
}else{
    console.log("no hay para eso, consiguete otra cosa")
}

let edad = 17;
let tienelicencia = true;

if (edad>= 18 && tienelicencia) {
    console.log("Puedes conducir");
} else {
    console.log("no puedes conducir");
}

let creditos = 10; //minimo 10 creditos
let promedio = 8.5; //minimo 8.5

if(creditos >=10 && promedio >= 8.5){
    console.log("tienes derecho a beca");
}else{
    console.log("no puedes tener una beca");
}
