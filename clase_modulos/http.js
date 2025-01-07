// productos.js
const http = require("http");

/**
 * Este módulo crea un servidor HTTP que maneja varias rutas.
 * El servidor responde con un mensaje personalizado para cada ruta solicitada.
 */
const crearServidor = () => {
  const server = http.createServer((req, res) => {
    // Responder con "Hola Mundo" en la ruta raíz '/'
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.write("¡Hola Mundo!");
      res.end();
    }

    // Responder con una lista de productos en formato JSON en '/api/productos'
    else if (req.url === "/api/productos") {
      const productos = ["mouse", "teclado", "parlante"];
      res.writeHead(200, { "Content-Type": "application/json" });
      res.write(JSON.stringify(productos));
      res.end();
    }

    // Responder con un mensaje de error si la ruta no existe
    else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.write("Ruta no encontrada");
      res.end();
    }
  });

  server.listen(3000, () => {
    console.log("Servidor escuchando en el puerto 3000...");
  });
};

module.exports = crearServidor;
