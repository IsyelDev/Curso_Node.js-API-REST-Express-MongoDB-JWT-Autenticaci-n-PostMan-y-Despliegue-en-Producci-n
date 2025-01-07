// datos.js
/**
 * Este módulo exporta una función que imprime un mensaje en consola.
 * Se le pueden pasar más parámetros para personalizar el comportamiento.
 *
 * Ejemplo de uso:
 *
 * const datos = require('./datos');
 * datos('Mensaje de bienvenida', 'info');
 *
 * @param {string} mensaje - El mensaje que se desea imprimir en consola.
 * @param {string} [tipo='log'] - El tipo de log. Puede ser 'log', 'warn' o 'error'.
 */
module.exports = (mensaje, tipo = "log") => {
  switch (tipo) {
    case "warn":
      console.warn(mensaje); // Imprime el mensaje como advertencia
      break;
    case "error":
      console.error(mensaje); // Imprime el mensaje como error
      break;
    case "log":
    default:
      console.log(mensaje); // Imprime el mensaje como log regular
  }
};
