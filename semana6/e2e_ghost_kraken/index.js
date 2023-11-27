//constante para llamar al metodo  fs de node.js
const fs = require('fs');
const path = require('path');

//constantes 
// Archivo que vamos a modificar
const backstopFile = './backstop.json'
//ruta de la carpeta que contiene los screenshot
const pathScreenshot = './screenshots/Ghost5/bitmaps_test'
//ruta de la carpeta que contiene los screenshot referencia
const pathScreenshotv4 = './screenshots/Ghost4/bitmaps_reference'
//ruta de save carpeta
const pathSaveFile = './screenshots'


const archivos = fs.readdirSync(pathScreenshot).filter(archivo => path.extname(archivo) === '.png');

//leer el contenido actual del archivo
fs.readFile(backstopFile, 'utf8',(err,data) => {
    if(err){
        console.error('Error al leer el archivo',err);
        return;
    }

        // Trunca el archivo para borrar todo su contenido
    fs.truncate(backstopFile, 0, (err) => {
        if (err) {
        console.error('Error al truncar el archivo:', err);
        return;
        }

        //contenido base
        const contenido_base = 
        `
        {"id": "backstop_default",
        "viewports": [
          {
            "label": "default",
            "width": 1184,
            "height": 762
          }
         
        ],
        "scenarios": [
         
          
        ],
        "paths": {
          "bitmaps_reference": "${pathScreenshotv4}",
          "bitmaps_test": "${pathScreenshot}",
          "engine_scripts":"${pathSaveFile}",
          "html_report": "${pathSaveFile}",
          "ci_report": "${pathSaveFile}"
        },
        "report": ["browser"],
        "engine": "puppeteer",
        "engineOptions": {
          "args": ["--no-sandbox"]
        },
        "asyncCaptureLimit": 5,
        "asyncCompareLimit": 50,
        "debug": false,
        "debugWindow": false
        }`;

    
        //agregar informacion base
        fs.writeFileSync(backstopFile,contenido_base, 'utf8',(error) => {
            if(error){
                console.error('Error al escribir en el archivo:', error);
      return;
            }    
        })

        //Guardamos en una variable la lectura del archivo que queremos cambiar
        let jsonData = fs.readFileSync(backstopFile, 'utf8');
        //Parseamos el archivo para poder trabajar con el 
        jsonData = JSON.parse(jsonData);

        //lugar donde vamos agregar los string
        jsonData.scenarios = [];

        //por cada archivo png agregamos un escenario
        archivos.forEach((archivo, index) => {
            //esto lo hacemos para separar el nombre por "_"
            const parts = archivo.split('_');
            //esto es para capturar el nombre que esta entre la parte dos y parte 4
            const label = parts.length >= 4 ? parts[2] : `escenario${index + 1}`;
            //esto es para capturar el nombre que esta entre la parte 3 y parte 4
            const paso = parts.length >= 4 ? parts[3] : `escenario${index + 1}`;

            jsonData.scenarios.push({
              "label": label,
              "url": `.\\${path.join(pathScreenshot, archivo)}`,
              "reference": `./${path.join(pathScreenshotv4, archivo)}`,
              "delay": 0,
              "hideSelectors": [],
              "removeSelectors": [],
              "hoverSelector": "",
              "clickSelector": "",
              "postInteractionWait": 0,
              "selectors": [],
              "selectorExpansion": true,
              "expect": 0,
              "misMatchThreshold": 0.1,  
              "requireSameDimensions": true
              // Agrega aquí otras propiedades del nuevo escenario según sea necesario
            });
          });

        // volvemnos a convertir el archivo paarseado a json.  
          const newData = JSON.stringify(jsonData, null, 2);
            fs.writeFileSync(backstopFile, newData);

       
        

    })

})