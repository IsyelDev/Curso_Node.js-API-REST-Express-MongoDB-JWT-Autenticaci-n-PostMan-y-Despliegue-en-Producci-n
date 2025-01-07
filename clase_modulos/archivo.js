// archivos.js
const fs = require("fs");

/**
 * Este módulo exporta funciones para trabajar con el sistema de archivos.
 * Puede listar los archivos en un directorio o leer archivos de manera síncrona y asíncrona.
 */

// Listar los archivos del directorio de manera asíncrona
const listarArchivosAsincrono = (directorio = "./") => {
  fs.readdir(directorio, (err, files) => {
    if (err) {
      console.error(`Error al leer el directorio ${directorio}:`, err);
    } else {
      console.log(`Archivos en el directorio ${directorio}:`, files);
    }
  });
};

// Listar los archivos del directorio de manera síncrona
const listarArchivosSincrono = (directorio = "./") => {
  try {
    const files = fs.readdirSync(directorio);
    console.log(`Archivos en el directorio ${directorio}:`, files);
  } catch (err) {
    console.error(`Error al leer el directorio ${directorio}:`, err);
  }
};

// Leer el contenido de un archivo de manera asíncrona
const leerArchivoAsincrono = (ruta) => {
  fs.readFile(ruta, "utf8", (err, data) => {
    if (err) {
      console.error(`Error al leer el archivo ${ruta}:`, err);
    } else {
      console.log(`Contenido de ${ruta}:`, data);
    }
  });
};

// Leer el contenido de un archivo de manera síncrona
const leerArchivoSincrono = (ruta) => {
  try {
    const data = fs.readFileSync(ruta, "utf8");
    console.log(`Contenido de ${ruta}:`, data);
  } catch (err) {
    console.error(`Error al leer el archivo ${ruta}:`, err);
  }
};

module.exports = {
  listarArchivosAsincrono,
  listarArchivosSincrono,
  leerArchivoAsincrono,
  leerArchivoSincrono,
};
