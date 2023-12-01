const fs = require('fs');
const { exec } = require('child_process');

// Arreglo de escenarios
const escenarios = [  { scenario: 'Escenario10', steps: ['step01', 'step02','step03','step04','step05','step06','step07','step08','step09','step10'] },
{ scenario: 'Escenario12', steps: ['step01', 'step02','step03','step04','step05','step06','step07','step08','step09','step10','step11','step12','step13'] },
{ scenario: 'Escenario15', steps: ['step01', 'step02','step03','step04','step05','step06','step07','step08','step09','step10','step11','step12','step13','step14'] },
{ scenario: 'Escenario16', steps: ['step01', 'step02','step03','step04','step05','step06','step07','step08','step09','step10','step11','step12'] },
{ scenario: 'Escenario17', steps: ['step01', 'step02','step03','step04','step05','step06','step07','step08','step09','step10']  },
{ scenario: 'Escenario18', steps: ['step01', 'step02','step03','step04','step05','step06','step07','step08','step09','step10','step11','step12']  },
{ scenario: 'Escenario20', steps: ['step01', 'step02','step03','step04','step05','step06','step07','step08','step09','step10','step11']  }
];

// Objeto base para backstop.json
const backstopConfig = {
  "id": "backstop_default",
  "viewports": [
    {
      "name": "default",
      "width": 1483,
      "height": 931
    }
  ],
  "scenarios": [],

  "paths": {
    "bitmaps_reference": "./screenshots/Ghost4/bitmaps_reference/",
    "bitmaps_test": ".\\screenshots\\Ghost5\\bitmaps_test\\",
    "engine_scripts":"./screenshots",
    "html_report": "./screenshots",
    "ci_report": "./screenshots"
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
  };


// Agregar escenarios al objeto base
escenarios.forEach(({ scenario, steps }) => {
  steps.forEach((step, index) => {
    const nameVariableBackstop2 = `backstop_default_${scenario}_${step}_0_document_0_default`;
    const nameVariableBackstop = `backstop_default_${scenario}_${step}_0_document_0_default`;

    const scenarioObj = {
      "label": `${scenario}_${step}`,
      "url": `.\\screenshots\\Ghost5\\bitmaps_test\\${nameVariableBackstop2}.png`,
      "reference": `./screenshots/Ghost4/bitmaps_reference/${nameVariableBackstop}.png`,
      "delay": 0,
      "hideSelectors": [],
      "removeSelectors": [],
      "hoverSelector": "",
      "clickSelector": "",
      "postInteractionWait": 0,
      "selectors": [],
      "selectorExpansion": true,
      "expect": 0,
      "misMatchThreshold": 10,
      "requireSameDimensions": true
    };

    backstopConfig.scenarios.push(scenarioObj);
  });
});

// Convertir objeto a formato JSON y guardarlo en un archivo
const jsonString = JSON.stringify(backstopConfig, null, 2);
fs.writeFileSync('backstop.json', jsonString);

console.log('backstop.json generado con éxito.');

// Ejecutar BackstopJS
exec('backstop test', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error en la ejecución de BackstopJS: ${error.message}`);
    return;
  }
  console.log(`Salida de BackstopJS:\n${stdout}`);
});