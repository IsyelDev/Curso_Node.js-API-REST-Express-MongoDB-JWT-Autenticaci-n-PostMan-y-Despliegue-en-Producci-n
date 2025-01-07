const step1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Paso 1 completado");
  }, 1000);
});

const step2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Paso 2 completado");
  }, 1000);
});

step1
  .then((result) => {
    console.log(result); // Paso 1 completado
    return step2; // Devuelve la segunda promesa
  })
  .then((result) => {
    console.log(result); // Paso 2 completado
  })
  .catch((error) => {
    console.log("Hubo un error:", error);
  });

const promise1 = new Promise((resolve) => {
  setTimeout(() => resolve("Resultado de la promesa 1"), 1000);
});

const promise2 = new Promise((resolve) => {
  setTimeout(() => resolve("Resultado de la promesa 2"), 2000);
});

const promise3 = new Promise((resolve) => {
  setTimeout(() => resolve("Resultado de la promesa 3"), 3000);
});

Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log(results); // [ 'Resultado de la promesa 1', 'Resultado de la promesa 2', 'Resultado de la promesa 3' ]
  })
  .catch((error) => {
    console.log("Hubo un error:", error);
  });



  const promises1 = new Promise((resolve) => {
    setTimeout(() => resolve("Resultado de la promesa 1"), 3000);
  });

  const promises2 = new Promise((resolve) => {
    setTimeout(() => resolve("Resultado de la promesa 2"), 1000);
  });

  Promise.race([promises1, promises2])
    .then((result) => {
      console.log(result); // Resultado de la promesa 2
    })
    .catch((error) => {
      console.log("Hubo un error:", error);
    });
