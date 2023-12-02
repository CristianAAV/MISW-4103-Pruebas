# MISW-4103-semana8: Instrucciones de Ejecucion
Para esta semana queremos concluir nuestra entrega ejecutando nuestra suite de pruebas en pantallas de dispositivos moviles, dado que existe un buen porcentaje de usuario que utilizan la aplicacion en dispositivos moviles,  y para asegurar que la calidad de la aplicacion se mantenga, hemos decidido realizar el proceso de regresion visual de la ultima verison de GHOST (5.74) con la version que utilizamos unas semanas atras (5.71)
Para ello utilizamos Cypress y resemble para hacer la comparacion de imagenes, y sabiendo que el proceso de regresion visual es costosa por lo cual decidimos ejecutar solo las pruebas que consideramos mas significativas para el usuario.

## Integrantes
| Nombre | Email |
|------|----------------------------------------------|
| Daniela Báez Rincón| d.baezr@uniandes.edu.co |
| Oscar Manco| o.manco@uniandes.edu.co |
| Emerson Chaparro Ampa  | e.chaparroa@uniandes.edu.co |
|Cristian Arnulfo Arias Vargas | ca.ariasv1@uniandes.edu.co |

## Ejecutar Docker
- docker run -d --name ghost571 -e NODE_ENV=development -e url=http://localhost:3001 -p 3571:2368 ghost:5.71
- docker run -d --name ghost574 -e NODE_ENV=development -e url=http://localhost:3001 -p 3574:2368 ghost:5.74

## Ejecutar pruebas 
- Despues de clonar el repositorio, dirijase a la carpeta e2e_cypress_movil
- Debe tener instaldo cypress de manera global para facilitar la ejecucion de las pruebas
- Instale las dependencias con el comando: npm install -g cypress
- Puede configurar los parametros de ejecucion el el archivo cypress.config.js, alli podrá modificar las URLs correspondientes a ambas versiones de GHOST, las credenciales de usuario asi como la resolucion de la pantalla con cual se desean realizar las pruebas, la cual por defecto es de 480 x 800
- Antes te ejecutar ambas suits de pruebas elimine el forder VRT
- Para la  version 5.71, ejecute el siguiente comando:
    - npx cypress run --env VERSION=5.71 --spec "cypress/e2e/571/*.cy.js"
- Para la  version 5.74, ejecute el siguiente comando:
    - npx cypress run --env VERSION=5.74 --spec "cypress/e2e/574/*.cy.js"

## Ejecutar VRT
- Puede configurar los valores de la regresion visual en el archivo resemble.config.json
    - resultsPath: Folder en donde se almacenaran los resultados
    - pathImagesGhostV_A: Carpeta de imagenes de la version 5.71
    - pathImagesGhostV_B: Carpeta de imagenes de la version 5.74
    - escenariosVrt: Listado de escenarioq que deseamos comparar, dejar el listado vacio para comparar todos los escenarios
    - porcentajeDiferencia: Porcentaje de diferencia entre las imagenes
- Para procesar la regresion  visual, puede borrar la carpeta "results" y ejecutar el comnando: node index.js
- Para ver los resultados dirijase a la carpeta "results" y visualice el archivo index.html

## Estrategia de Pruebas
[Estrategia de pruebas](https://github.com/CristianAAV/MISW-4103-Pruebas--GHOST-5.71/blob/main/estrategia-pruebas.pdf)

## Inventario de Pruebas exploratorias
[Semana 8](https://github.com/CristianAAV/MISW-4103-Pruebas--GHOST-5.71/blob/main/inventario-pruebas-exploratorias%20Semana%201%20-%20Final.xlsx)
[Semana 1 - A](https://github.com/CristianAAV/MISW-4103-Pruebas--GHOST-5.71/blob/main/inventario-pruebas-exploratorias%20Semana%201%20-Antecendente_1.xlsx)
[Semana 1 - B](https://github.com/CristianAAV/MISW-4103-Pruebas--GHOST-5.71/blob/main/inventario-pruebas-exploratorias%20Semana%201%20-Antecendente_2.xlsx)

## Registro de Incidencias
[Registro de Incidencias](https://github.com/CristianAAV/MISW-4103-Pruebas--GHOST-5.71/issues)

# [MISW-4103-semana7: Instrucciones de Ejecucion](https://github.com/CristianAAV/MISW-4103-Pruebas--GHOST-5.71/wiki/README.MD-SEMANA-7)
# [MISW-4103-semana6: Instrucciones de Ejecucion](https://github.com/CristianAAV/MISW-4103-Pruebas--GHOST-5.71/wiki/README.MD-SEMANA-6)
# [MISW-4103-semana5: Instrucciones de Ejecucion](https://github.com/CristianAAV/MISW-4103-Pruebas--GHOST-5.71/wiki/README.MD-SEMANA-5)
# MISW-4103-semana4: Instrucciones de Ejecucion
 * [Instrucciones - Monkey cypress](https://github.com/CristianAAV/MISW-4103-Pruebas--GHOST-5.71/blob/main/Semana04/reporte_experiencia_monkey_cypress.pdf)
 * [Instrucciones - rippuppet](https://github.com/CristianAAV/MISW-4103-Pruebas--GHOST-5.71/blob/main/Semana04/reporte_experencia_rippuppet.pdf)
