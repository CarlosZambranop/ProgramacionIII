$(document).ready(function() {
    // ----- Carrusel -----
    const imagenes = [
        'https://www.apple.com/co/iphone-16/images/meta/iphone-16_overview__fcivqu9d5t6q_og.png?202409131406',
        'https://i.ytimg.com/vi/fZiaDkoklX8/maxresdefault.jpg',
        'https://i.ytimg.com/vi/Y3E5JgTGIWk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCD7apsZevqWhLnUQqnsRg3kMv1_Q'
    ];

    let indiceActual = 0;
    
    function cambiarImagen(indice) {
        $('#carrusel-imagen').attr('src', imagenes[indice]);
    }

    // Cambio automático de imagen cada 4 segundos
    setInterval(function() {
        indiceActual = (indiceActual < imagenes.length - 1) ? indiceActual + 1 : 0;
        cambiarImagen(indiceActual);
    }, 4000);

    // ----- Filtrar productos -----
    const productos = [
        { id: 1, nombre: 'Lightning', descripcion: 'Cargador apple', imagen: 'https://ferreteriaabg.com/wp-content/uploads/2024/04/Diseno-sin-titulo-2024-04-10T194550.685.png' },
        { id: 2, nombre: 'Tipo C', descripcion: 'Cargador tipo c', imagen: 'https://unitecusashop.com/cdn/shop/files/120518_3.png?v=1695937834' },
        { id: 3, nombre: 'Mag safe', descripcion: 'Cargador Inalambrico', imagen: 'https://co.tiendasishop.com/cdn/shop/files/mhxh3am_a_1.jpg?v=1713386763' },
    ];

    // Función para mostrar productos
    function mostrarProductos(lista) {
        $('#lista-productos').empty();
        lista.forEach(producto => {
            $('#lista-productos').append(`
                <div class="producto">
                    <img src="${producto.imagen}" alt="${producto.nombre}">
                    <h3>${producto.nombre}</h3>
                    <p>${producto.descripcion}</p>
                </div>
            `);
        });
    }

    // Mostrar todos los productos al cargar la página
    mostrarProductos(productos);

    // Filtrar productos en tiempo real al escribir en el input
    $('#filtro-productos').on('input', function() {
        const filtro = $(this).val().toLowerCase();
        const productosFiltrados = productos.filter(producto => producto.nombre.toLowerCase().includes(filtro));
        mostrarProductos(productosFiltrados);
    });
});