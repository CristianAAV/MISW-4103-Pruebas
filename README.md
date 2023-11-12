# MISW-4103-Pruebas Grupo 11
## Integrantes
| Nombre | email |
| --------- | --------- |
| Cristian Arnulfo Arias Vargas | ca.ariasv1@uniandes.edu.co |
| Daniela Báez Rincón | d.baezr@uniandes.edu.co |
| Emerson Chaparro Ampa | e.chaparroa@uniandes.edu.co |
| Óscar Iván Manco Racines | o.manco@uniandes.edu.co |

## Funcionalidades
1. Crear nuevo tag
2. Modificar Tag existente
3. Crear page
4. Crear post
5. Crear member
6. Modificar member

## Escenarios
| Identificador | Descripcion |
| ----- | ----------- |
| 01 |  Crear nuevo tag con datos vacios  |
| 02 |  Crear nuevo tag con color invalido  | 
| 03 |  Crear nuevo tag con una descripcion mayor a 500 caracteres |
| 04 |  Crear nuevo tag con datos validos |
| 05 |  Modificar titulo de tag existente |
| 06 |  Modificar tag con descripcion invalida |
| 07 |  Eliminar tag existente   |
| 08 |  Crear pages |
| 09 |  Crear pages y editar |
| 10 |  Eliminar pages o draft |
| 11 |  Verificar creación de pages con un titulo de 255 caracteres |
| 12 |  Crear post y verificar |
| 13 |  Crear post y editar |
| 14 |  Crear post con titulo vacio pero con descripsción |
| 15 |  Crear post y preview |
| 16 |  Crear member con datos validos |
| 17 |  Crear member con datos vacios |
| 18 |  Crear member con datos existentes |
| 19 |  Modificar name y email de miembro existente |
| 20 |  Crear y Eliminar tag existente | 
## Kraken-node
### Requisitos
* Android SDK
* Appium
* NodeJS lts
* java
### Configuracion
* Instalar el SDK de android
* Abrir Android Studio, seleccionar el SDK manager, en SDK tools, instalar: Android SDK Build-Tools, Android SDK comand line tools y Android SDK Platform-Tools
* En las variables de sistema crear una variable con los valores:	ANDROID_HOME (nombre), C:\Users\[USUARIO]\AppData\Local\Android\Sdk (Valor)
* En la variable PATH del sistema agregar las rutas para abd.exe y aapt.exe: "C:\Users\[USUARIO]\AppData\Local\Android\Sdk\platform-tools" y "C:\Users\[USUARIO]\AppData\Local\Android\Sdk\build-tools\29.0.3" respectivamente
* Instalar Java
* En las variables de sistema crear una variable con los valores: JAVA_HOME (nombre) y C:\Program Files\Java\jdk-[.....]\ (valor)
* Ejecutar el utilitario kraken-node doctor, y comprobar que no existan errores.
### Ventajas
* Multiplataforma, puede utilizarse para el testing de aplicaciones web y moviles.
* La sintaxis de las pruebas es legible para desarrolladores y usuarios finales.
* Maneja un lenguaje más amigable y entendible para todos los usuarios.
### Desventajas
* Difícil de instalar y configurar, nos llevo bastantes horas instalar adecuadamente la herramienta.
* Lento, la ejecución de cada prueba demora.
* Cuenta con poca documentación.
* No soporta varios features a la vez, hay que utilizar uno y dentro de este montar todos los escenarios de pruebas.
## Cypress
### Requisitos
* NodeJS lts
### Configuracion
* Tener instalado el pagquete de manera global
### Ventajas
* Fácil de instalar y configurar.
* Buena documentación.
### Desventajas
* Se nos fue confuso configurar las funciones compartidas.
## Ejecucion del Proyecto
### Kraken-node
* npm install kraken-node -g
* npm install -g appium
* npm install -g @cucumber/cucumber@7.2.1
* clonar el repositorio, ir a la carpeta e2e_ghost_kraken e instalar las dependencias.
* Ir al archivo properties.json y cambiar  el email y el password según el usuario que se tiene en Ghost.
### Cypress 
* npm install -g cypress
* clonar el repositorio, ir a la carpeta e2e_ghost_cypress
* Instalar las dependencias con el comando npm i
* Ir al archivo params.js y cambiar  el email y el password según el usuario que se tiene en Ghost.
* Para ejecutar las pruebas ejecutar el comando: npx cypress run --headless
* Opcionalemente puede ejecutar el comanado:  npx cypress open
