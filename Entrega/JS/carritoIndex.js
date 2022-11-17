import { actualizarTotalesCarrito } from "./actualizarCarrito.js";
import { productos } from "./stock.js";
import { obtenerCarritoStorage } from './storage.js';

let carrito = []

const validarProductoRepetido = (productoId) =>{

    if (localStorage.getItem("carrito")) {
        carrito = obtenerCarritoStorage();
    }

    const productoRepetido = carrito.find(producto=> producto.id === productoId);

    if (productoRepetido) {
        productoRepetido.cantidad++;
        const cantidadProducto = document.getElementById(`cantidad${productoRepetido.id}`);
        cantidadProducto.innerText = `cantidad: ${productoRepetido.cantidad}`;
        actualizarTotalesCarrito(carrito);
    } else {
        agregarAlCarrito(productoId);
    }
};

const agregarAlCarrito = (productoId) => {
    const contenedor = document.getElementById ("carrito-contenedor");
    const producto = productos.find(producto => producto.id === productoId);
    carrito.push(producto);

    const div = document.createElement("div");
    div.classList.add("productoEnCarrito");
    div.innerHTML = `<p>${producto.nombre}</p>
                    <p>Precio: $${producto.precio}</p> 
                    <p id=cantidad${producto.id}>Cantidad: ${producto.cantidad}</p>
                    <button id=emiminar${producto.id} value="${producto.id}" class="btn waves-effect waves-ligth boton-eliminar">X</button>
                    `;
    contenedor.appendChild(div);
    actualizarTotalesCarrito(carrito);
};
// pintarCarrito recibe un array de objetos
const pintarCarrito = (carrito) =>{
    const contenedor = document.getElementById ("carrito-contenedor");

    contenedor.innerHTML = "";

    carrito.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("productoEnCarrito");
        div.innerHTML = `<p>${producto.nombre}</p>
                    <p>Precio: $${producto.precio}</p> 
                    <p id=cantidad${producto.id}>Cantidad: ${producto.cantidad}</p>
                    <button id=eliminar${producto.id} value='${producto.id}' class='btn waves-effect waves-ligth boton-eliminar'>X</button>
                    `;
        contenedor.appendChild(div);
    });
};

const eliminarProductoCarrito = (productoId) => {
    const carritoStorage = obtenerCarritoStorage();
    const carritoActualizado = carritoStorage.filter(producto => producto.id != productoId);

    actualizarTotalesCarrito(carritoActualizado);
    pintarCarrito(carritoActualizado);
};

const finalizarBoton = document.getElementById('finalizar');

finalizarBoton.addEventListener('click', () => {
    if (carrito.length === 0) {

        Swal.fire({
            text: "Tu carrito esta vacio!",
            icon: 'warning',
            iconColor:'#A50CA8',
            confirmButtonColor: '#5cc6d0',
            cancelButtonColor: '#C83437',
            confirmButtonText: 'Ok!',
            background: "url(../imagenes/compra.jpg)"
            })


    } else if (carrito.length > 0) {
        Swal.fire({
            title: 'COMPRAR',
            text: 'Desea concretar la compra?',
            iconColor:'#A50CA8',
            showCancelButton: true,
            confirmButtonColor: '#5cc6d0',
            cancelButtonColor: '#C83437',
            confirmButtonText:'Si, comprar!',
            cancelButtonText:'No aún',
            position: top,
            imageWith: 600,
            imageHeigth: 400,
            background: "url(../imagenes/compra.jpg)"

        }).then((result)=>{
            if(result.isConfirmed){
                while (carrito.length > 0) {
                    carrito.pop()
                }
                Swal.fire({
                    title: 'Felicitaciones!',
                    text: 'Tu pedido ha sido enviado',
                    icon:'success',
                    iconColor:'#5cc6d0',
                    position: top,
                    imageWith: 400,
                    imageHeigth: 400,
                    background: "url(../imagenes/compra.jpg)"
                    })
                    actualizarTotalesCarrito(carrito)
                    pintarCarrito(carrito)

            }

        })

    }


})



export { agregarAlCarrito, validarProductoRepetido, pintarCarrito, eliminarProductoCarrito };
