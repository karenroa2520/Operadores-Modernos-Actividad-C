const promt = require("prompt-sync")();


function procesarPedido(pedido, ...extras) {
    // Destructuración del objeto pedido
    const { cliente, producto, cantidad } = pedido;
    
    // Crear un objeto con la información consolidada
    const pedidoConsolidado = {
        cliente,
        producto,
        cantidad,
        extras: [...extras] // Almacenar los extras en un array
    };
    
    return pedidoConsolidado;
}

// Ejemplo de uso
const pedido = {
    cliente: "Juan Pérez",
    producto: "Laptop",
    cantidad: 2
};

console.log(pedido)














