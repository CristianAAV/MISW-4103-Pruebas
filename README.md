# MISW-4103-Pruebas Grupo 15 (Escenarios de validación de datos haciendo uso de estrategias y herramientas para generación de datos)
## Integrantes
| Nombre | email |
| --------- | --------- |
| Cristian Arnulfo Arias Vargas | ca.ariasv1@uniandes.edu.co |
| Daniela Báez Rincón | d.baezr@uniandes.edu.co |
| Emerson Chaparro Ampa | e.chaparroa@uniandes.edu.co |
| Óscar Iván Manco Racines | o.manco@uniandes.edu.co |

## Estrategia de Generacion de datos
[Descripcion de la generacion de datos](https://github.com/CristianAAV/MISW-4103-Pruebas--GHOST-5.71/wiki/Descripcion-de-la-Generacion-de-datos(Semana-7))
## Descripcion de Escenarios
[Descripcion de Escenarios](https://github.com/CristianAAV/MISW-4103-Pruebas--GHOST-5.71/wiki/Descripcion-de-Escenarios(Semana-7))
## Registro de Incidencias 
[Enlace de registro de incidencias](https://github.com/CristianAAV/MISW-4103-Pruebas--GHOST-5.71/issues)
## Instalacion de Herramientas
### Ghost
* Instalar la imagen de ghost disponible en docker, la version utilizada es la 5.71, puede utilizar el siguiente comnado: 
docker run -d --name ghostv4 -e NODE_ENV=development -e url=http://localhost:3001 -p 3005:2368 ghost:5.71
* Abrir el enlace http://localhost:3005/ghost/#/dashboard y crear un usuario administrador.


### Kraken-node
* Tener instaldo Android SDK, Appium (como paquete "global"), NodeJS lts y java
* Instalar el SDK de android
    * Abrir Android Studio, seleccionar el SDK manager, en SDK tools, instalar: Android SDK Build-Tools, Android SDK comand line tools y Android SDK Platform-Tools
    * En las variables de sistema crear una variable con los valores:	ANDROID_HOME (nombre), C:\Users\[USUARIO]\AppData\Local\Android\Sdk (Valor)
    * En la variable PATH del sistema agregar las rutas para abd.exe y aapt.exe: "C:\Users\[USUARIO]\AppData\Local\Android\Sdk\platform-tools" y "C:\Users\[USUARIO]\AppData\Local\Android\Sdk\build-tools\29.0.3" respectivamente
    * Instalar Java
    * En las variables de sistema crear una variable con los valores: JAVA_HOME (nombre) y C:\Program Files\Java\jdk-[.....]\ (valor)
    * Ejecutar el utilitario kraken-node doctor, y comprobar que no existan errores.

### Cypress
* Tener instaldo cypress (como paquete "global")

## Ejecucion del proyecto
### Pruebas con Datos A-Priori
* Clonar el repositorio e ir a la carpeta "e2e_cypress"
* Realizar la instalacion de dependencias con el comando "npm install"
* Actualizar las credenciales y la URL de ghost en el archivo cypress.config.js
* Si desea generar nuevamente los datos "apriori", ejecutar: "node regenerar_data_pool_apriori.js", se copiaran los datos generados previamente en Mockaroo (archivos JSON) en la carpeta "fixtures"
* Puede ejecutar individualmente cada prueba ubicado en el folder "apriori" con el siguiente comando: npx cypress run --spec "cypress/e2e/apriori/ARCHIVO-PRUEBA.cy.js"
* O puede ejecutar todas las pruebas del folder "apriori" con el siguiente comando: npx cypress run --spec "cypress/e2e/apriori/*.cy.js"

### Pruebas con Datos Pesudo - Aleatorios 
* Clonar el repositorio e ir a la carpeta "e2e_cypress"
* Realizar la instalacion de dependencias con el comando "npm install"
* Actualizar las credenciales y la URL de ghost en el archivo cypress.config.js
* Puede ejecutar individualmente cada prueba ubicado en el folder "apriori" con el siguiente comando: npx cypress run --spec "cypress/e2e/pseudoaleatorio/ARCHIVO-PRUEBA.cy.js"
* O puede ejecutar todas las pruebas del folder "apriori" con el siguiente comando: npx cypress run --spec "cypress/e2e/pseudoaleatorio/*.cy.js"

### Pruebas con Datos Aleatorios - Kraken
* Para ejecutarlo escriba el siguiente comando: "node ejecutarpruebas.js", para ejecutar las pruebas de kraken con datos aleatorios
* Este ejecuta y confirma el resultado de la prueba, pero la ejecucion es algo lenta si por algun motivo siente que no siguio ejecutando oprima una flecha en la consola donde esta ejecutando el comando.
* Si por algun motivo la ejecucion del codigo se cancela o se traba y cierras la ejecucion es importante validar que en la carpeta ...\MISW-4103-Pruebas\e2e_ghost_kraken\features no existan archivos con la extencion .feature ya que de lo contrario el kraken no podra ejecutarse correctamente con el script desarrollado.
* Es necesario ejecutar las pruebas de forma secuencial incrementalmente, si desea validar un test de forma individual debe dirigirse a la carpeta ...\MISW-4103-Pruebas\e2e_ghost_kraken\features\_all_features. Seleccionar la prueba que desea ejecutar copiarlo y pegarlo en ...\MISW-4103-Pruebas\e2e_ghost_kraken\features. Ejecutarlo con el comando: npx kraken-node run.
