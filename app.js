//1. Callbacks
//Leer un archivo de texto

//javascript
//Copiar código
const fs = require('fs');
fs.readFile('archivo.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
//Leer un archivo JSON 


const {fs} from •√

//javascript
//Copiar código
const fs = require('fs');
fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) throw err;
  const parsedData = JSON.parse(data);
  console.log(parsedData);
});
//Escribir en un archivo
//javascript Copiar código
const fs = require('fs');
const datas = 'Texto a escribir';
fs.writeFile('output.txt', datas, (err) => {
  if (err) throw err;
  console.log('El archivo fue guardado!');
});
//Conectar a una base de datos (MongoDB)

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  if (err) throw err;
  console.log('Conectado a la base de datos');
});
//Llamada a un API REST

const https = require('https');
https.get('https://api.example.com', (resp) => {
  let data = '';
  resp.on('data', (chunk) => {
    data += chunk;
  });
  resp.on('end', () => {
    console.log(JSON.parse(data));
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});
//Manejo de múltiples callbacks

function step1(callback) {
  setTimeout(() => {
    console.log('Paso 1 completado');
    callback();
  }, 1000);
}

function step2(callback) {
  setTimeout(() => {
    console.log('Paso 2 completado');
    callback();
  }, 1000);
}

step1(() => {
  step2(() => {
    console.log('Todos los pasos completados');
  });
});
//Leer y escribir en un archivo secuencialmente

const fs = require('fs');
fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) throw err;
  const newData = data.toUpperCase();
  fs.writeFile('output.txt', newData, (err) => {
    if (err) throw err;
    console.log('Archivo actualizado');
  });
});
//Procesar resultados de varias operaciones asincrónicas

function fetchDataFromAPI(callback) {
  setTimeout(() => {
    callback('Datos de API');
  }, 1000);
}

function processData(data, callback) {
  setTimeout(() => {
    callback(data + ' procesado');
  }, 1000);
}

fetchDataFromAPI((data) => {
  processData(data, (processedData) => {
    console.log(processedData);
  });
});
//Manejo de errores en un callback

function processFile(callback) {
  setTimeout(() => {
    const error = new Error('Archivo no encontrado');
    callback(error, null);
  }, 1000);
}

processFile((err, result) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(result);
  }
});
//Calcular el tiempo de ejecución de un callback

function executeTask(callback) {
  const start = Date.now();
  setTimeout(() => {
    callback();
    const end = Date.now();
    console.log(`La tarea tomó ${end - start} ms`);
  }, 2000);
}

executeTask(() => {
  console.log('Tarea completada');
});
//Promesas (resolve, reject)
//Simular una operación asincrónica con promesas

function tareaAsincrona() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tarea completada');
    }, 1000);
  });
}

tareaAsincrona().then((resultado) => {
  console.log(resultado);
});
//Rechazo de una promesa

function tareaConError() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Error en la tarea');
    }, 1000);
  });
}

tareaConError().catch((error) => {
  console.error(error);
});
//Encadenar promesas

function tarea1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Paso 1 completado');
    }, 1000);
  });
}

function tarea2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Paso 2 completado');
    }, 1000);
  });
}

tarea1()
  .then((resultado) => {
    console.log(resultado);
    return tarea2();
  })
  .then((resultado) => {
    console.log(resultado);
  });
//Usar resolve con un valor

function obtenerDatos() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ nombre: 'Carlos', edad: 30 });
    }, 1000);
  });
}

obtenerDatos().then((datos) => {
  console.log(datos);
});
//Usar reject con un error


function procesarPago() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Pago rechazado');
    }, 1000);
  });
}

procesarPago().catch((error) => {
  console.error(error);
});
//Promesas con múltiples resultados

function obtenerUsuarios() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(['Carlos', 'Ana', 'Luis']);
    }, 1000);
  });
}

obtenerUsuarios().then((usuarios) => {
  usuarios.forEach((usuario) => {
    console.log(usuario);
  });
});
//Usar Promise.all para esperar varias promesas

function tarea1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Tarea 1 completada');
    }, 1000);
  });
}

function tarea2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Tarea 2 completada');
    }, 2000);
  });
}

Promise.all([tarea1(), tarea2()]).then((resultados) => {
  console.log(resultados);
});
//Rechazo con Promise.all

function tareaExitosa() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Tarea exitosa');
    }, 1000);
  });
}

function tareaFallida() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Tarea fallida');
    }, 500);
  });
}

Promise.all([tareaExitosa(), tareaFallida()])
  .then((resultados) => {
    console.log(resultados);
  })
  .catch((error) => {
    console.error(error);  // Error desde la tarea fallida
  });
//Rechazar en base a un valor

function verificarEdad(edad) {
  return new Promise((resolve, reject) => {
    if (edad >= 18) {
      resolve('Edad válida');
    } else {
      reject('Edad no válida');
    }
  });
}

verificarEdad(16).catch((error) => {
  console.error(error);
});

//Simular una llamada API con promesas

function obtenerDatosAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ nombre: 'Carlos', ciudad: 'Madrid' });
    }, 1000);
  });
}

obtenerDatosAPI().then((datos) => {
  console.log(datos);
});
//3. Async/Await

async function saludo() {
  return 'Hola Mundo';
}

saludo().then((mensaje) => {
  console.log(mensaje);
});
//Convertir una promesa a async/await

async function obtenerDatos() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Datos obtenidos');
    }, 1000);
  });
}

async function mostrarDatos() {
  const resultado = await obtenerDatos();
  console.log(resultado);
}

mostrarDatos();
//Manejo de errores con async/await

async function obtenerDatosConError() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Error al obtener los datos');
    }, 1000);
  });
}

async function manejarError() {
  try {
    await obtenerDatosConError();
  } catch (error) {
    console.error(error);
  }
}

manejarError();
//Esperar múltiples operaciones asincrónicas

async function tarea1() {
  return 'Tarea 1 completada';
}

async function tarea2() {
  return 'Tarea 2 completada';
}

async function realizarTareas() {
  const resultados = await Promise.all([tarea1(), tarea2()]);
  console.log(resultados);
}

realizarTareas();
//Obtener datos y luego procesarlos

async function obtenerUsuarios() {
  return ['Carlos', 'Ana', 'Luis'];
}

async function procesarUsuarios() {
  const usuarios = await obtenerUsuarios();
  usuarios.forEach((usuario) => {
    console.log(usuario);
  });
}

procesarUsuarios();
//Simular un proceso de pago con async/await

async function procesarPago(monto) {
  if (monto > 100) {
    throw new Error('Monto excede el límite');
  }
  return 'Pago procesado';
}

async function realizarPago() {
  try {
    const resultado = await procesarPago(50);
    console.log(resultado);
  } catch (error) {
    console.error(error.message);
  }
}

realizarPago();
//Retrasar ejecución con async/await

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function ejecutarConRetraso() {
  console.log('Inicio');
  await delay(2000);
  console.log('Fin después de 2 segundos');
}

ejecutarConRetraso();
//Obtener datos de varias APIs

async function obtenerDatosDeAPI(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function mostrarDatos() {
  const data1 = await obtenerDatosDeAPI('https://api.example.com/data1');
  const data2 = await obtenerDatosDeAPI('https://api.example.com/data2');
  console.log(data1, data2);
}

mostrarDatos();
//Simular un proceso de registro con validación


async function validarRegistro(usuario) {
  if (!usuario.nombre || !usuario.email) {
    throw new Error('Faltan campos obligatorios');
  }
  return 'Registro exitoso';
}

async function registrarUsuario() {
  try {
    const resultado = await validarRegistro({ nombre: 'Carlos', email: 'carlos@example.com' });
    console.log(resultado);
  } catch (error) {
    console.error(error.message);
  }
}

registrarUsuario();
//Esperar múltiples promesas con async/await


async function tarea1() {
  return 'Tarea 1 completa';
}

async function tarea2() {
  return 'Tarea 2 completa';
}

async function realizarTodasLasTareas() {
  const resultados = await Promise.all([tarea1(), tarea2()]);
  console.log(resultados);
}

realizarTodasLasTareas();


//31. Usar fetch con promesas para obtener datos de una API

// Hacer una solicitud GET a una API usando fetch y promesas
fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json()) // Convertir la respuesta en JSON
  .then((data) => {
    console.log(data); // Mostrar los datos recibidos
  })
  .catch((error) => {
    console.error('Error al obtener los datos:', error);
  });
//32. Usar fetch con promesas para hacer un POST
// Enviar datos a una API con fetch y promesas
const datass = {
  title: 'Nuevo Post',
  body: 'Este es el contenido del post',
  userId: 1,
};

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(datass),
})
  .then((response) => response.json()) // Convertir la respuesta en JSON
  .then((datass) => {
    console.log('Respuesta de la API:', datass);
  })
  .catch((error) => {
    console.error('Error al hacer el POST:', error);
  });
//33. Usar fetch con async/await para obtener datos

// Hacer una solicitud GET con async/await
async function obtenerPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json(); // Convertir la respuesta en JSON
    console.log(data); // Mostrar los datos
  } catch (error) {
    console.error('Error al obtener los datos:', error);
  }
}

obtenerPosts();
//34. Usar fetch con async/await para hacer un POST

// Enviar datos a una API con async/await
async function enviarPost() {
  const data = {
    title: 'Nuevo Post con Async/Await',
    body: 'Este es el contenido del nuevo post usando async/await',
    userId: 1,
  };

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const result = await response.json(); // Convertir la respuesta en JSON
    console.log('Respuesta de la API:', result);
  } catch (error) {
    console.error('Error al hacer el POST:', error);
  }
}

enviarPost();
//35. Manejo de errores con fetch y async/await

// Manejo de errores cuando se realiza una solicitud con fetch
async function obtenerUsuario(id) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    
    if (!response.ok) {
      throw new Error('Error al obtener el usuario');
    }

    const data = await response.json();
    console.log(data); // Mostrar datos del usuario
  } catch (error) {
    console.error('Error:', error);
  }
}

obtenerUsuario(1); // Buscar el usuario con ID 1
//36. Usar fetch con async/await para hacer múltiples solicitudes en paralelo

// Realizar múltiples solicitudes a la API de forma paralela
async function obtenerDatos() {
  try {
    const [posts, users] = await Promise.all([
      fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json()),
      fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json()),
    ]);
    
    console.log('Posts:', posts);
    console.log('Users:', users);
  } catch (error) {
    console.error('Error al obtener los datos:', error);
  }
}

obtenerDatos();
//37. Comprobar el estado de la respuesta con fetch

// Comprobar si la respuesta es exitosa o no
async function obtenerPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    if (!response.ok) {
      throw new Error('No se pudo obtener los posts');
    }

    const posts = await response.json();
    console.log(posts); // Mostrar los posts
  } catch (error) {
    console.error('Error:', error.message);
  }
}

obtenerPosts();
//38. Enviar datos a la API con fetch usando POST y autenticación

// Hacer una solicitud POST con autenticación
const data = {
  title: 'Nuevo Post con autenticación',
  body: 'Este es un post enviado con autenticación',
  userId: 1,
};

async function crearPostConAutenticacion() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer tu-token-aqui', // Autenticación con token
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log('Respuesta:', result);
  } catch (error) {
    console.error('Error al crear el post:', error);
  }
}

crearPostConAutenticacion();
//39. Usar fetch para obtener y mostrar datos en un sitio web

// Mostrar los datos de una API en el HTML
async function mostrarDatos() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();

    const postsContainer = document.getElementById('posts');
    posts.forEach((post) => {
      const postElement = document.createElement('div');
      postElement.classList.add('post');
      postElement.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
      postsContainer.appendChild(postElement);
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

mostrarDatos();
//40. Realizar un PUT usando fetch para actualizar datos

// Enviar datos usando PUT para actualizar un recurso
async function actualizarPost(id) {
  const data = {
    title: 'Post actualizado',
    body: 'Este es el cuerpo del post actualizado',
    userId: 1,
  };

  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log('Post actualizado:', result);
  } catch (error) {
    console.error('Error al actualizar el post:', error);
  }
}

actualizarPost(1);
//41. Realizar un DELETE con fetch para eliminar datos

// Eliminar un post usando DELETE
async function eliminarPost(id) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      console.log(`Post con ID ${id} eliminado`);
    } else {
      console.error('Error al eliminar el post');
    }
  } catch (error) {
    console.error('Error al eliminar el post:', error);
  }
}

eliminarPost(1);

//42. Obtención de datos de una API con fetch y manejo de errores

// Realizar una solicitud GET y manejar errores
async function obtenerDatosAPI() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error('No se pudieron obtener los datos');
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

obtenerDatosAPI();
//43. Obtener datos usando fetch con autenticación básica

// Enviar una solicitud GET con autenticación básica
async function obtenerDatosConAutenticacion() {
  const username = 'user';
  const password = 'password';

  const headers = new Headers();
  headers.set('Authorization', 'Basic ' + btoa(username + ':' + password));

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'GET',
      headers: headers,
    });
    if (!response.ok) {
      throw new Error('Error de autenticación o datos no disponibles');
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

obtenerDatosConAutenticacion();
//44. Simulación de un tiempo de espera con fetch usando setTimeout

// Simular un retraso en la solicitud HTTP usando setTimeout
async function obtenerDatosConRetraso() {
  const timeout = new Promise((_, reject) => setTimeout(() => reject(new Error('Tiempo de espera agotado')), 5000));
  const fetchData = fetch('https://jsonplaceholder.typicode.com/posts');

  try {
    const response = await Promise.race([fetchData, timeout]);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

obtenerDatosConRetraso();
//45. Enviar datos con fetch usando PATCH para actualizar parcialmente un recurso

// Usar PATCH para actualizar parcialmente un recurso
async function actualizarPostParcialmente(id) {
  const data = {
    title: 'Título actualizado parcialmente',
  };

  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Error al actualizar el post');
    }

    const result = await response.json();
    console.log('Post actualizado parcialmente:', result);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

actualizarPostParcialmente(1);
//46. Usar fetch para obtener datos y manejar múltiples errores

// Manejar múltiples tipos de errores
async function obtenerPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error('Respuesta no exitosa');
    }
    const posts = await response.json();
    console.log(posts);
  } catch (error) {
    if (error.name === 'TypeError') {
      console.error('Error de red o de CORS:', error.message);
    } else {
      console.error('Otro error:', error.message);
    }
  }
}

obtenerPosts();
//47. Obtener múltiples respuestas con Promise.all y fetch

// Obtener múltiples recursos en paralelo
async function obtenerDatosDeVariasApis() {
  try {
    const [posts, comments] = await Promise.all([
      fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json()),
      fetch('https://jsonplaceholder.typicode.com/comments').then((res) => res.json()),
    ]);
    console.log('Posts:', posts);
    console.log('Comments:', comments);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

obtenerDatosDeVariasApis();
//48. Realizar varias solicitudes con fetch usando for en paralelo

// Realizar múltiples solicitudes en paralelo con un bucle
async function obtenerDatosDeUsuarios() {
  const usuarios = [1, 2, 3, 4, 5];
  const peticiones = usuarios.map((id) =>
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => res.json())
  );

  try {
    const datosUsuarios = await Promise.all(peticiones);
    console.log(datosUsuarios);
  } catch (error) {
    console.error('Error al obtener datos de usuarios:', error.message);
  }
}

obtenerDatosDeUsuarios();
//49. Usar fetch con async/await para paginación de resultados

// Paginación en una API de resultados
async function obtenerPostsConPaginacion(pagina = 1) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${pagina}&_limit=5`);
    const posts = await response.json();
    console.log('Posts en la página:', posts);
  } catch (error) {
    console.error('Error al obtener posts:', error.message);
  }
}

obtenerPostsConPaginacion(2);
//50. Manejo de caché con fetch

// Usar caché con la API Fetch
async function obtenerDatosConCache() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      cache: 'reload', // fuerza a cargar desde la red
    });

    if (!response.ok) {
      throw new Error('No se pudieron obtener los datos');
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

obtenerDatosConCache();
//51. Usar fetch con POST para enviar datos de un formulario

// Enviar datos de un formulario usando POST
async function enviarFormulario() {
  const formData = new FormData();
  formData.append('username', 'user');
  formData.append('password', 'secret');

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Error al enviar el formulario');
    }

    const result = await response.json();
    console.log('Formulario enviado:', result);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

enviarFormulario();
//52. Usar fetch con múltiples solicitudes y Promise.allSettled

// Usar Promise.allSettled para manejar múltiples solicitudes sin fallar en caso de error
async function obtenerDatosVariados() {
  const urls = [
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/comments',
  ];

  const solicitudes = urls.map((url) =>
    fetch(url).then((res) => res.json()).catch((error) => error)
  );

  const resultados = await Promise.allSettled(solicitudes);
  resultados.forEach((resultado, index) => {
    if (resultado.status === 'fulfilled') {
      console.log(`Datos de la solicitud ${index + 1}:`, resultado.value);
    } else {
      console.error(`Error en la solicitud ${index + 1}:`, resultado.reason);
    }
  });
}

obtenerDatosVariados();
//53. Verificar si un recurso existe con fetch
// Verificar si un recurso existe en la API
async function verificarRecursoExistente(id) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (response.ok) {
      const data = await response.json();
      console.log('Recurso encontrado:', data);
    } else {
      console.log('Recurso no encontrado');
    }
  } catch (error) {
    console.error('Error al verificar el recurso:', error.message);
  }
}

verificarRecursoExistente(1);
//54. Usar fetch para enviar datos JSON y manejar respuestas

// Enviar datos en formato JSON con fetch
async function enviarDatosJSON() {
  const data = {
    title: 'Nuevo post',
    body: 'Contenido del post',
    userId: 1,
  };

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log('Respuesta del servidor:', result);
  } catch (error) {
    console.error('Error al enviar datos:', error.message);
  }
}

enviarDatosJSON();
//55. Usar fetch con un tiempo de espera personalizado
// Usar fetch con un tiempo de espera limitado
async function obtenerDatosConTimeout() {
  const timeout = new Promise((_, reject) => setTimeout(() => reject(new Error('Tiempo de espera agotado')), 5000));

  try {
    const response = await Promise.race([
      fetch('https://jsonplaceholder.typicode.com/posts'),
      timeout,
    ]);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

obtenerDatosConTimeout();