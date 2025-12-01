// Importamos la función 'agregarInventario' desde el archivo 'eje_2.js'
// Esta función nos permite añadir un nuevo ítem a una lista sin modificar la original.
const { agregarInventario } = require("./eje_2.js");

// Importamos la librería 'prompt-sync', que nos permite leer entradas del usuario desde la consola.
// Esto es útil para que el usuario pueda escribir datos directamente en la terminal.
const prompt = require("prompt-sync")();

// Definimos el inventario inicial como un arreglo constante (inmutable en este contexto).
// Esto significa que no lo vamos a cambiar directamente; en su lugar, crearemos una nueva copia si lo actualizamos.
const inventario = ["cámara", "tripode", "microfono"];

// Pedimos al usuario que ingrese un nuevo ítem para el inventario.
// La función 'prompt' muestra un mensaje en la consola y espera a que el usuario escriba algo y presione Enter.
// El valor introducido se guarda en la variable 'nuevoItem'.
const nuevoItem = prompt("Ingrese el nuevo ítem para el inventario: ");

// Llamamos a la función 'agregarInventario', pasándole el inventario original y el nuevo ítem.
// Esta función devuelve un *nuevo arreglo* con el ítem añadido, sin modificar el arreglo original.
// Esto se llama "inmutabilidad": trabajar con copias en lugar de cambiar los datos originales.
const inventarioActualizado = agregarInventario(inventario, nuevoItem);

// Mostramos el inventario original para confirmar que no ha sido modificado.
// Esto demuestra que la función 'agregarInventario' no altera los datos de entrada.
console.log("\nInventario original (sin cambios):");
console.log(inventario);

// Mostramos el nuevo inventario, que incluye el ítem agregado.
// Este es un arreglo completamente nuevo, resultado de la operación.
console.log("\nInventario actualizado:");
console.log(inventarioActualizado);

