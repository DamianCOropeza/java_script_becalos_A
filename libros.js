
// Declarando el objeto libro con las propiedades requeridas
const libro = {
    titulo: "Nuestra Parte de Noche",
    autor: "Mariana Enriquez",
    anio: 2019,
    estado: "disponible",

// Método para describir el libro
    describirLibro: function() {
        console.log(`Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`);
    }
};

// Llamar al método para imprimir la información del libro
libro.describirLibro();
