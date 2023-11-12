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
| Esc_01 |  Crear nuevo tag con datos vacios  |
| Esc_02   |  Crear nuevo tag con color invalido  | 
| Esc_03    |  Crear nuevo tag con una descripcion mayor a 500 caracteres |
| Esc_04 |  Crear nuevo tag con datos validos |
| Esc_05 |  Modificar titulo de tag existente |
| Esc_06 |  Modificar tag con descripcion invalida |
| Esc_07 |  Eliminar tag existente   |
| Esc_08 |  Crear pages |
| Esc_09 |  Crear pages y editar |
| Esc_10 |  Eliminar pages o draft |
| Esc_11 |  Verificar creación de pages con un titulo de 255 caracteres |
| Esc_12 |  Crear post y verificar |
| Esc_13 |  Crear post y editar |
| Esc_14 |  Crear post con titulo vacio pero con descripsción |
| Esc_15 |  Crear post y preview |
| Esc_16 |  Crear member con datos validos |
| Esc_17 |  Crear member con datos vacios |
| Esc_18 |  Crear member con datos existentes |
| Esc_19 |  Modificar name y email de miembro existente |
| Esc_20 |  Crear y Eliminar tag existente | 
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
* clonar el repositorio, ir a la carpeta ... e instalar las dependencias
### Cypress
* npm install -g cypress
* clonar el repositorio, ir a la carpeta ... e instalar las dependencias
