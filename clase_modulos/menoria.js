// memoria.js
const os = require("os");

/**
 * Este módulo exporta una función que muestra información sobre el sistema,
 * como la memoria libre, la memoria total, el tipo de procesador y la arquitectura.
 * Utiliza el módulo 'os' de Node.js.
 */
const obtenerMemoria = () => {
  // Obtener la memoria libre en bytes
  const memoriaLibre = os.freemem();

  // Obtener la memoria total en bytes
  const memoriaTotal = os.totalmem();

  // Convertimos los valores de bytes a gigabytes para hacerlo más comprensible
  const memoriaLibreGB = (memoriaLibre / (1024 * 1024 * 1024)).toFixed(2);
  const memoriaTotalGB = (memoriaTotal / (1024 * 1024 * 1024)).toFixed(2);

  // Información adicional del sistema
  const sistemaOperativo = os.platform(); // Ej: 'win32', 'linux', 'darwin'
  const versionSO = os.release(); // Ej: '10.0.19041'
  const tipoProcesador = os.cpus()[0].model; // Modelo de procesador
  const arquitectura = os.arch(); // Ej: 'x64', 'arm'

  // Imprimir la memoria libre y total en consola
  console.log(`Memoria libre: ${memoriaLibreGB} GB`);
  console.log(`Memoria total: ${memoriaTotalGB} GB`);
  console.log(`Sistema operativo: ${sistemaOperativo}`);
  console.log(`Versión del SO: ${versionSO}`);
  console.log(`Procesador: ${tipoProcesador}`);
  console.log(`Arquitectura: ${arquitectura}`);
};

module.exports = obtenerMemoria;
