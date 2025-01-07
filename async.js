// Simulamos una operación asincrónica con setTimeout
const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Datos cargados");
    }, 2000);
  });
};

// Función asincrónica
const run = async () => {
  console.log("Iniciando...");

  // Esperamos a que se resuelva la promesa con 'await'
  const result = await fetchData();

  console.log(result); // Imprime: Datos cargados
};

run();


const fetchDatas = () => {
  return new Promise((resolve, reject) => {
    const success = false; // Cambiar a `true` para ver un resultado exitoso
    setTimeout(() => {
      if (success) {
        resolve("Datos cargados");
      } else {
        reject("Hubo un error al cargar los datos");
      }
    }, 2000);
  });
};

const runs = async () => {
  try {
    console.log("Iniciando...");

    // Intentamos obtener los datos
    const result = await fetchDatas();

    console.log(result); // Si la promesa se resuelve, mostramos los datos
  } catch (error) {
    console.log("Error:", error); // Si la promesa se rechaza, mostramos el error
  }
};

runs();


const step1 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Paso 1 completado");
    }, 1000);
  });
};

const step2 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Paso 2 completado");
    }, 2000);
  });
};

const step3 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Paso 3 completado");
    }, 1500);
  });
};

const runss = async () => {
  const result1 = await step1(); // Esperamos el paso 1
  console.log(result1);

  const result2 = await step2(); // Esperamos el paso 2
  console.log(result2);

  const result3 = await step3(); // Esperamos el paso 3
  console.log(result3);
};

runss();



const step1d = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Paso 1 completado");
    }, 1000);
  });
};

const step2d = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Paso 2 completado");
    }, 2000);
  });
};

const step3d = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Paso 3 completado");
    }, 1500);
  });
};

const rund = async () => {
  // Usamos Promise.all para ejecutar las promesas en paralelo
  const results = await Promise.all([step1d(), step2d(), step3d()]);

  console.log(results); // Imprime: [ 'Paso 1 completado', 'Paso 2 completado', 'Paso 3 completado' ]
};

rund();
