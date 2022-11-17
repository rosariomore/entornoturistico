import { mostrarProductos} from "./app.js"
import { pintarCarrito } from "./carritoIndex.js"
import { actualizarTotalesCarrito } from "./actualizarCarrito.js";
//import { productos } from "./stock.js"
import { obtenerCarritoStorage } from "./storage.js"

  document.addEventListener("DOMContentLoaded", () => {
    mostrarProductos();

    if (localStorage.getItem("carrito")) {
        const carrito = obtenerCarritoStorage();
        pintarCarrito(carrito);
        actualizarTotalesCarrito(carrito);
    };
  });

