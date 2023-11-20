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

### Escenarios de de Funcionalidaes:
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
| 20 |  Eliminar miembro existente |

### Escenarios seleccionados para Regresión Visual
| Escenario   | Herramienta |
|-------------|-------------|
| escenario01 | ResembleJS  |
| escenario03 | ResembleJS  |
| escenario07 | ResembleJS  |
| escenario09 | ResembleJS  |
| escenario12 | BackstopJS  |
| escenario15 | BackstopJS  |
| escenario16 | BackstopJS  |
| escenario17 | BackstopJS  |
| escenario18 | BackstopJS  |
| escenario20 | BackstopJS  |

## Ghost
### Configuración
* Para la ejecucion de las pruebas es importante realizar una instalacion limpia de el Ghost, por esto se solicita eliminar cualquier contenedor de Ghost que se tenga en Docker.
* Instalar la versión de ghost que esta en docker (https://hub.docker.com/_/ghost/).
Codigo a ejecutar:
    docker run -d --name ghostv4 -e NODE_ENV=development -e url=http://localhost:3001 -p 3004:2368 ghost:4.44
    docker run -d --name ghostv5 -e NODE_ENV=development -e url=http://localhost:3001 -p 3005:2368 ghost:5.71
* Abrir el enlace http://localhost:3004/ghost/#/dashboard para ka versión 4.44, crear un usuario administrador.
* Abrir el enlace http://localhost:3005/ghost/#/dashboard para ka versión 5.71, crear un usuario administrador.

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
* Tener instalado el pagquete cypress de manera global
### Ventajas
* Fácil de instalar y configurar.
* Buena documentación.
### Desventajas
* Se nos fue confuso configurar las funciones compartidas.

## Instrucciones de Ejecucion Semana 5
Las instrucciones de ejecucion de la semana 5 se encuentran [aqui](https://github.com/CristianAAV/MISW-4103-Pruebas--GHOST-5.71/wiki/Readme-semana-5)


## Ejecucion del Proyecto
* Es importante haber leido y realizado los pasos anteriores.

### Kraken-node
* clonar el repositorio, ir a la carpeta e2e_ghost_kraken e instalar las dependencias.
* npm install
* npm install kraken-node -g
* npm install -g appium
* npm install -g @cucumber/cucumber@7.2.1
* npm install @cucumber/cucumber@7.2.1
* Ir al archivo properties.json y cambiar  el email y el password según el usuario que se tiene en Ghost.
* Para la ejecucion secunecial de kraken se desarrollo un codigo que copia y pega los archivos de preubas los ejecuta y los elimina post ejecucion.
* Para ejecutarlo escriba el siguiente comando: node ejecutar4.js para la versión 4.44
* Para ejecutarlo escriba el siguiente comando: node ejecutar5.js para la versión 5.71
* Este ejecuta y confirma el resultado de la prueba, pero la ejecucion es algo lenta si por algun motivo siente que no siguio ejecutando oprima una flecha en la consola donde esta ejecutando el codigo.
* Si por algun motivo la ejecucion del codigo se cancela o se traba y cierras la ejecucion es importante validar que en la carpeta  ...\MISW-4103-Pruebas\e2e_ghost_kraken\features no existan archivos con la extencion .feature ya que de lo contrario el kraken no podra ejecutarse correctamente con el script desarrollado (adicional verificar no existan members creados).
* Es necesario ejecutar las pruebas de forma secuencial incrementalmente, si desea validar un test de forma individual debe dirigirse a la carpeta  ...\MISW-4103-Pruebas\e2e_ghost_kraken\features\features. Seleccionar la prueba que desea ejecutar copiarlo y pegarlo en ...\MISW-4103-Pruebas\e2e_ghost_kraken\features. Ejecutarlo con el comando: npx kraken-node run. (para la prueba 16 es importante que no existan miembros con el correo newmember@uniandes.edu.co, debido a que los miembros no pueden contener correos repetidos)

### Cypress 
* Clonar el repositorio, e ir a la carpeta “e2e_ghost_cypress”
* npm install -g cypress
* Instalar las dependencias con el comando npm i
* Ir al archivo cypress.config.js y cambiar la URL, email y el password para  cada instalacion de GHOST:
  ![image](https://github.com/CristianAAV/MISW-4103-Pruebas--GHOST-5.71/assets/111321588/7b542609-7f16-430b-8505-bc2298c6d946)
* Borrar el folder "vrt" antes de ejecutar las pruebas
* Para ejecutar las pruebas para la version 4, ejecute el siguiente comando: npx cypress run --env VERSION=4 --spec "cypress/e2e/4/*.cy.js"
* Para ejecutar las pruebas para la version 5, ejecute el siguiente comando: npx cypress run --env VERSION=5 --spec "cypress/e2e/5/*.cy.js"
* Las imagenes correspondientes a cada prueba se almacenan en la carpeta "\vrt[version_ghost]"

### Resemble.js
* Despues de haber ejecutado el paso anterior, ir a la carpeta “vrt_resemble”
* Instalar las dependencias con el comando npm i
* Puede utilizar el archivo config.json y cambiar los parametros por defecto:
![image](https://github.com/CristianAAV/MISW-4103-Pruebas--GHOST-5.71/assets/111321588/2db7af4f-a9fa-4df7-b75a-b3c522747dee)
    - resultsPath: Folder en donde se generan los resultados
    - pathImagesGhostV4: Folder de imagenes de las pruebas a la version 4 de Ghost
    - pathImagesGhostV5:: Folder de imagenes de las pruebas a la version 5 de Ghost
    - escenariosVrt: Listado de escenarios que se desean comparar
    - porcentajeDiferencia: Porcentaje minimo de diferencia entre dos imagenes que se desea generar.
* Ejecutar el comando “node index.js” para empezar con el proceso de comparacacion de imagenes
* Ver los resultados generados dirigiendose al archivo “./results/report.html”.

  #### Reporte de resultados:
  - misMatch: 10%
    https://echaparroa-uniandes.github.io/MISW-4103-VRT_resemble/
  #### Ventajas:
  - Fácil uso ya que posee una sintaxis sencilla.
  - Permite comparar de imagenes de manera visual.
  - Permite ajustar los porametros de comparación según las necesidades.
  #### Desventajas:
  - Tiene bastante sensibilidad a la hora de encontrar pequeños cambios, generando falsos positivos o negativos en la comparación.
  - Dependiendo del tamaño de las imagenes podria variar el rendimiento del mismo.
  - No tiene un "reporteador" que genere los resultados automáticamente.
  - En imágenes en las cuales solo varia el texto el análisis muestra una gran diferencia.
  - Del mismo modo las imágenes en las que varias colores de fondo el análisis muestra que existen diferencias.
    
### Backstop.js
* Clonar el repositorio.
* npm install -g backstopjs.
* Ejecutar el siguiente comando: backstop init.
* Ejecutar el siguiente comando: node VRT.JS, se generará el archivo Backstop.js y se ejecutaran las pruebas de VRT.
  
  #### Reporte de resultados:
  - misMatch: 10%
    https://cristianaav.github.io/VRT_Backstop/ 
    
  #### Ventajas:
  - Es fácil de integrar con flujos de trabajo de desarrollo y sistemas de integración continua (CI) para asegurar que las pruebas visuales se ejecuten automáticamente durante el proceso de desarrollo.
  - Permite ajustar los porametros de comparación según las necesidades.
  - Genera capturas de pantalla que resaltan las diferencias visuales, facilitando la identificación y resolución de problemas.
  - Ofrece informes detallados después de cada ejecución de prueba, lo que facilita la identificación y solución de problemas visuales.
  #### Desventajas:
  - Puede ser demasiado sensible a cambios mínimos, lo que podría generar falsos positivos o negativos.
  - La configuración inicial puede requerir tiempo, especialmente para usuarios que no están familiarizados con la herramienta.
  - Se centra en pruebas visuales y no proporciona funcionalidades avanzadas para probar la lógica del negocio u otras funcionalidades no visuales.
