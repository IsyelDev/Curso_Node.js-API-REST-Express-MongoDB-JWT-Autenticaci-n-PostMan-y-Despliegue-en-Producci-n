// eventos.js
const EventEmitter = require("events");
const emitter = new EventEmitter();

/**
 * Este módulo maneja eventos personalizados utilizando el EventEmitter.
 * Se pueden registrar múltiples listeners para distintos tipos de eventos.
 */

// Registrar múltiples listeners
const registrarEventos = () => {
  // Listener para el evento 'mensajeLogger'
  emitter.on("mensajeLogger", (arg) => {
    console.log("Listener 1: Mensaje recibido", arg);
  });

  // Listener para otro evento 'errorLogger'
  emitter.on("errorLogger", (arg) => {
    console.error("Listener 2: Error ocurrido", arg);
  });

  // Emitir el evento 'mensajeLogger'
  emitter.emit("mensajeLogger", {
    id: 1,
    mensaje: "Este es un mensaje de log",
  });

  // Emitir el evento 'errorLogger'
  emitter.emit("errorLogger", { id: 2, mensaje: "Algo salió mal" });
};

// Registrar el evento y emitirlo
registrarEventos();

module.exports = registrarEventos;
