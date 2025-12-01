// Definimos una función flecha llamada 'agregarInventario' que recibe dos parámetros:
// - 'lista': el arreglo actual de ítems del inventario (no se modificará)
// - 'nuevoItem': el nuevo ítem que queremos añadir al inventario
const agregarInventario = (lista, nuevoItem) => {
  // Usamos el operador spread (...) para crear una COPIA del arreglo original.
  // Esto garantiza la INMUTABILIDAD: el arreglo original no se altera.
  // Luego, agregamos el 'nuevoItem' al final de esa copia.
  const nuevaLista = [...lista, nuevoItem];
  
  // Mostramos un mensaje en la consola indicando cuántos ítems tiene el nuevo inventario.
  // Usamos una plantilla de cadena (template literal) para insertar el número directamente.
  console.log(`El inventario ahora tiene ${nuevaLista.length} ítems.`);
  
  // Devolvemos la nueva lista (la copia con el ítem añadido).
  // La lista original que se pasó como argumento sigue intacta.
  return nuevaLista;
};

// Exportamos la función usando 'module.exports' para que pueda usarse en otros archivos
// con 'require()'. Esto es el sistema de módulos de CommonJS, usado en Node.js.
module.exports = { agregarInventario };