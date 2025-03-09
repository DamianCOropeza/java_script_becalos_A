document.addEventListener('DOMContentLoaded', function() {
    const comentarioInput = document.getElementById('comentario-input');
    const publicarBtn = document.getElementById('publicar-btn');
    const commentsContainer = document.getElementById('comments-container');
    const noCommentsMessage = document.getElementById('no-comments');
    
    // Cargar comentarios guardados al iniciar la página
    cargarComentarios();
    
    // Evento para el botón de publicar
    publicarBtn.addEventListener('click', function() {
        publicarComentario();
    });
    
    // Permitir publicar al presionar Enter (con Shift+Enter para nueva línea)
    comentarioInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            publicarComentario();
        }
    });
    
    // Función para publicar un comentario
    function publicarComentario() {
        const comentarioTexto = comentarioInput.value.trim();
        
        if (comentarioTexto === '') {
            return; // No hacer nada si el comentario está vacío
        }
        
        // Obtener fecha y hora actual
        const fecha = new Date();
        const fechaFormateada = fecha.toLocaleString();
        
        // Crear el objeto de comentario
        const comentario = {
            texto: comentarioTexto,
            fecha: fechaFormateada,
            id: Date.now() // Usar timestamp como ID único
        };
        
        // Guardar el comentario
        guardarComentario(comentario);
        
        // Crear y mostrar el elemento del comentario
        crearElementoComentario(comentario);
        
        // Limpiar el campo de texto
        comentarioInput.value = '';
        
        // Enfocar nuevamente el campo de texto
        comentarioInput.focus();
    }
    
    // Función para crear un elemento de comentario
    function crearElementoComentario(comentario) {
        // Ocultar el mensaje de "no hay comentarios"
        noCommentsMessage.style.display = 'none';
        
        // Crear el elemento del comentario
        const commentElement = document.createElement('div');
        commentElement.className = 'comment';
        commentElement.dataset.id = comentario.id;
        
        // Contenido del comentario
        commentElement.innerHTML = `
            <p class="comment-text">${escaparHTML(comentario.texto)}</p>
            <p class="comment-info">Publicado el ${comentario.fecha}</p>
            <button class="delete-btn">Eliminar</button>
        `;
        
        // Evento para eliminar el comentario
        const deleteBtn = commentElement.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', function() {
            eliminarComentario(comentario.id);
            commentElement.remove();
            
            // Mostrar mensaje si no hay comentarios
            if (commentsContainer.querySelectorAll('.comment').length === 0) {
                noCommentsMessage.style.display = 'block';
            }
        });
        
        // Agregar el comentario al contenedor
        commentsContainer.appendChild(commentElement);
    }
    
    // Función para guardar un comentario en localStorage
    function guardarComentario(comentario) {
        let comentarios = obtenerComentariosGuardados();
        comentarios.push(comentario);
        localStorage.setItem('comentarios', JSON.stringify(comentarios));
    }
    
    // Función para eliminar un comentario del localStorage
    function eliminarComentario(id) {
        let comentarios = obtenerComentariosGuardados();
        comentarios = comentarios.filter(c => c.id !== id);
        localStorage.setItem('comentarios', JSON.stringify(comentarios));
    }
    
    // Función para obtener los comentarios guardados
    function obtenerComentariosGuardados() {
        const comentariosGuardados = localStorage.getItem('comentarios');
        return comentariosGuardados ? JSON.parse(comentariosGuardados) : [];
    }
    
    // Función para cargar comentarios guardados
    function cargarComentarios() {
        const comentarios = obtenerComentariosGuardados();
        
        if (comentarios.length > 0) {
            noCommentsMessage.style.display = 'none';
            
            // Ordenar comentarios por fecha (más recientes primero)
            comentarios.sort((a, b) => b.id - a.id);
            
            // Mostrar cada comentario
            comentarios.forEach(function(comentario) {
                crearElementoComentario(comentario);
            });
        }
    }
    
    // Función para escapar HTML y prevenir XSS
    function escaparHTML(texto) {
        const div = document.createElement('div');
        div.textContent = texto;
        return div.innerHTML;
    }
});