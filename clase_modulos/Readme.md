# Guía de Módulos en Node.js

Este archivo contiene una guía completa sobre cómo trabajar con **módulos** en Node.js, incluyendo la creación de módulos, la carga de módulos, y ejemplos de los módulos estándar más comunes como **path**, **os**, **fs** y **http**.

## Índice

1. [¿Qué son los módulos?](#qué-son-los-módulos)
2. [Objetos Globales](#objetos-globales)
3. [Creación de un módulo](#creación-de-un-módulo)
4. [Carga de un módulo](#carga-de-un-módulo)
5. [Módulo `path`](#módulo-path)
6. [Módulo `os`](#módulo-os)
7. [Módulo `fs`](#módulo-fs)
8. [Módulo `http`](#módulo-http)
9. [Ejemplo Completo de Proyecto](#ejemplo-completo-de-proyecto)

---

## ¿Qué son los módulos?

En Node.js, un **módulo** es un archivo que contiene código que puede ser utilizado por otros archivos. Node.js usa el sistema de módulos de **CommonJS**, lo que significa que cada archivo puede ser tratado como un módulo independiente.

El uso de módulos permite organizar el código de manera modular, separando funcionalidades en diferentes archivos para un desarrollo más limpio y escalable.

### Tipos de módulos en Node.js:
1. **Módulos nativos (internos):** Son módulos proporcionados por Node.js, como `path`, `fs`, `http`, entre otros.
2. **Módulos locales (propios):** Son módulos definidos por el usuario en el proyecto.
3. **Módulos externos:** Son módulos que se instalan a través de npm (Node Package Manager), como `express`, `lodash`, etc.

### Ejemplo de un módulo nativo:
```javascript
// Módulo path
const path = require('path');
console.log(path.resolve('archivo.txt'));  // Resolución de ruta
