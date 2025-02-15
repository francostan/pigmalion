# Pigmalion

## Descripción

Este proyecto es una aplicación de ejemplo construida con **Node.js** utilizando **JavaScript** (ES Modules) como lenguaje principal. Su objetivo es demostrar una estructura modular y organizada para resolver el sgte. enunciado: determinar si es posible formar un número a partir de la suma de dos elementos de un array ingresado por el usuario.

## Lenguaje y Herramientas

- **Lenguaje:** JavaScript (ES Modules)
- **Node.js:** Versión 23.7.0
- **npm:** Versión 10.9.2

## Estructura del Proyecto

- **src/main.js:** Archivo principal que contiene la interacción con el usuario y la lógica para resolver el ejercicio.
- **utils/index.js:** Archivo de utilidades que agrupa funciones de validación, conversión de entrada y las implementaciones de las soluciones (optimizada y no optimizada).
- **package.json:** Archivo de configuración del proyecto. Se incluye `"type": "module"` para trabajar con ES Modules.

## Instrucciones de Uso

1. **Abre la carpete pigmalion en una terminal:**  
   Ejecuta el siguiente comando en la raíz del proyecto:
   ```bash
   npm install

2. **Ejecución de la aplicación:**  
   Inicia la aplicación con el siguiente comando:
   ```bash
   npm start
   
   Este comando ejecuta el archivo src/main.js y abre una sesión interactiva en la terminal.

3. **Interacción y verificación:**  
    Sigue las instrucciones dadas por el terminal.

4. **Respuesta:**  
    Una vez terminado el proceso, la terminal imprimera el tiempo de ejecucion y la respuesta final sobre si es posible lograr la suma solicitada con dos elementos del array.
