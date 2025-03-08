document.addEventListener('DOMContentLoaded', iniciarApp);
    // DOMContentLoaded

    function iniciarApp(){
        const productoInput = document.getElementById('producto');
        const agregarButton = document.getElementById('agregar');
        const listaCompras = document.getElementById('lista-compras');

    //getElementByID
        let productos = []; // Arreglo para almacenar los productos

        agregarButton.addEventListener()('click', function() {
            agregarProducto(productos, productoInput, listaCompras);
        });
    }

    function agregarProducto(productos, productoInput, listaCompras){
            const nombreProducto = productoInput.value.trim();
            if (nombreProducto) {
                const nuevoProducto = { // Objeto para representar un producto
                    nombre: nombreProducto,
                    comprado: false
                };
                productos.push(nuevoProducto);
                mostrarProductos(nuevoProducto, listaCompras);
                productoInput.value = '';
            }
        }

    function mostrarProductos(producto, listaCompras){
        const nuevoItem = document.createElement('li');
        nuevoItem.textContent = producto.nombre;
        listaCompras.appendChild(nuevoItem);
    }
