// const promt = require("prompt-sync")();

// usamos los parametros rest
function procesarPedido(pedido, ...extras) { //creamos una funcion llamada procesarPedido
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

// uso
const pedido = {
    cliente: "Ave Maria",
    producto: "Laptop",
    cantidad: 2
};

//mostramos el mensaje completo
console.log(pedido)














