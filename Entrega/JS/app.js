import { validarProductoRepetido } from "./carritoIndex.js";
import { obtenerProductos } from "./obtenerProductos.js";

const mostrarProductos = async () =>{
    const contenedor = document.getElementById("producto-contenedor");

    const productos = await obtenerProductos();

    productos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("card")
        div.innerHTML +=`<div class="card" style="width: 18rem;">
                            <img src="${producto.img}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${producto.nombre}</h5>
                                <p class="card-text">Descripción:${producto.desc}</p>
                                <p class="card-text">Precio:$ ${producto.precio}</p>
                                <button class="btn btn-primary" id=boton${producto.id}>Comprar</button>
                            </div>
                        </div>
                        `
    contenedor.appendChild(div)

    const boton = document.getElementById(`boton${producto.id}`);
    boton.addEventListener('click', ()=>{
       validarProductoRepetido(producto.id);
        })                
    });
};    

export { mostrarProductos };