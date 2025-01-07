function printMessage() {
  console.log("Esto es un callback nombrado.");
}

function executeCallback(callback) {
  console.log("Ejecutando la función principal.");
  callback();
}

executeCallback(printMessage);

// Salida:
// Ejecutando la función principal.
// Esto es un callback nombrado.


function executeCallbacko(callback) {
  console.log("Ejecutando la función principal.");
  callback();
}

executeCallbacko(() => {
  console.log("Esto es un callback anónimo.");
});

// Salida:
// Ejecutando la función principal.
// Esto es un callback anónimo.

function processNumber(num, callback) {
  const result = num * 2;
  callback(result);
}

processNumber(5, (result) => {
  console.log(`El resultado es: ${result}`);
});

// Salida:
// El resultado es: 10
