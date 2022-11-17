import { eliminarProductoCarrito } from "./carritoIndex.js";

const modalContenedor = document.querySelector('.modal-contenedor');
const abrirCarrito = document.getElementById('open');
const cerrarCarrito = document.getElementById('btn-cerrar-carrito');
const modalCarrito = document.querySelector(".modal-carrito");

// CLICK PARA ABRIR EL CARRITO - EN EL HEADER
abrirCarrito.addEventListener('click', ()=>{
    modalContenedor.classList.toggle('modal-active')
});

// CLICK BOTON CERRAR EN EL CARRITO - EN EL MODAL
cerrarCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active')
});

const btn = document.getElementById('btn-cerrar-carrito');

btn.addEventListener('click', () => {
Toastify({
    text: 'Gracias! Te esperamos la próxima! =)',
    duration: 3000
    }).showToast();
});


modalContenedor.addEventListener('click', () => {
    cerrarCarrito.click()
});

modalCarrito.addEventListener('click', (e) => {
    e.stopPropagation();

    if (e.target.classList.contains('boton-eliminar')) {
        Swal.fire({
            text: "Desea eliminar este producto?...",
            showCancelButton: true,
            confirmButtonColor: "#43D8CC",
            cancelButtonColor: "#C83437",
            confirmButtonText: "Eliminar",
            cancelButtonText: "Cancelar",
            imageWith: 600,
            imageHeigth: 400,
            background: "url(../imagenes/eliminar.jpg)"
        }).then((result) => {
            if (result.isConfirmed) {
                eliminarProductoCarrito(e.target.value)
                Swal.fire({
                text: "El producto ha sido eliminado.",
                background: "url(../imagenes/fondo.jpg)"
                })
            }
        })
    };
});



