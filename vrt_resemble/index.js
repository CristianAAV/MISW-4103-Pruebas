const config = require("./config.json");
const compareImages = require("resemblejs/compareImages")
const fs = require('fs');
const {options, params } = config;
const {resultsPath
  ,  pathImagesGhostV4
  ,  pathImagesGhostV5
  , escenariosVrt
  , porcentajeDiferencia } = params;
const GHOSTV4 = getLastPart(pathImagesGhostV4)
const GHOSTV5 = getLastPart(pathImagesGhostV5)


/*****************************************************************************/
function divComparacion(info){
  return `<div class=" browser" id="test0">
    <div class=" btitle">
        <h2>Analisis de imagenes:</h2>
        <style type="text/css">
        .tg  {border-collapse:collapse;border-spacing:0;}
        .tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
          overflow:hidden;padding:10px 5px;word-break:normal;}
        .tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
          font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
        .tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}
        </style>
        <table class="tg">
        <thead>
          <tr>
            <th class="tg-0pky">Escenario</th>
            <th class="tg-0pky"><span style="font-weight:400;font-style:normal"</span>${info.escenario}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="tg-0pky">Paso</td>
            <td class="tg-0pky">${info.step}</td>
          </tr>
          <tr>
            <td class="tg-0pky">Version 1</td>
            <td class="tg-0pky"><span style="font-weight:400;font-style:normal"></span>${info.v1}</td>
          </tr>
          <tr>
            <td class="tg-0pky">Version 2</td>
            <td class="tg-0pky"><span style="font-weight:400;font-style:normal"></span>${info.v2}</td>
          </tr>
          <tr>
            <td class="tg-0pky">Path Version 1</td>
            <td class="tg-0pky"><span style="font-weight:400;font-style:normal"></span>${info.pathImageV1}</td>
          </tr>
          <tr>
            <td class="tg-0pky"><span style="font-weight:400;font-style:normal">Path Version 2</span></td>
            <td class="tg-0pky"><span style="font-weight:400;font-style:normal"></span>${info.pathImageV2}</td>
          </tr>
          <tr>
            <td class="tg-0pky"><span style="font-weight:400;font-style:normal">RawMisMatchPercentage</span></td>
            <td class="tg-0pky"><span style="font-weight:400;font-style:normal"></span>${info.rawMisMatchPercentage}</td>
          </tr>
          <tr>
            <td class="tg-0pky"><span style="font-weight:400;font-style:normal">MisMatchPercentage</span></td>
            <td class="tg-0pky"><span style="font-weight:400;font-style:normal"></span>${info.misMatchPercentage}</td>
          </tr>
          <tr>
            <td class="tg-0pky"><span style="font-weight:400;font-style:normal">DiffBounds</span></td>
            <td class="tg-0pky"><span style="font-weight:400;font-style:normal"></span>${JSON.stringify(info.diffBounds)}</td>
          </tr>
          <tr>
            <td class="tg-0pky"><span style="font-weight:400;font-style:normal">AnalysisTime</span></td>
            <td class="tg-0pky"><span style="font-weight:400;font-style:normal"></span>${info.analysisTime}</td>
          </tr>
        </tbody>
        </table>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">${info.v1}</span>
        <img class="img2" src="${info.pathImageV1}" id="refImage" label="Reference">
      </div>
      <div class="imgcontainer">
        <span class="imgname">${info.v2}</span>
        <img class="img2" src="${info.pathImageV2}" id="testImage" label="Test">
      </div>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Diff</span>
        <img class="imgfull" src="${info.pathImageComparision}" id="diffImage" label="Diff">
      </div>
    </div>
  </div>`  
}
/*****************************************************************************/
/*****************************************************************************/
function createReport(datetime, resInfo){
  return `
  <html>
      <head>
          <title> VRT Report </title>
          <link href="index.css" type="text/css" rel="stylesheet">
      </head>
      <body>
          <h1>Analisis de Regresion Visual con ResembleJS - GRUPO 15</h1>
          <p>Fecha y hora de Ejecucion: ${datetime}</p>
          <div id="visualizer">
              ${Object.keys(resInfo).map(key => divComparacion(/*key, */resInfo[key]))}
          </div>
      </body>
  </html>`
}
/*****************************************************************************/
/*****************************************************************************/
function setFolders(pathImagesV4, pathImagesV5, resImagesPath){
  try {
    fs.rmSync(resultsPath, { recursive: true, force: true })
    fs.cpSync(pathImagesV4, `${resImagesPath}/${GHOSTV4}`, {recursive: true,});
    fs.cpSync(pathImagesV5, `${resImagesPath}/${GHOSTV5}`, {recursive: true,});
    fs.copyFileSync('./util/index.css', `./results/index.css`);
    fs.mkdirSync(`${resImagesPath}/comparision`);

  } catch (error) {
    console.log(error.message);
  }  
}
/*****************************************************************************/
/*****************************************************************************/

/*****************************************************************************/
async function ejecutarVrt(resImagesPath){
  const filesFolderV1 = fs.readdirSync(`${resImagesPath}/${GHOSTV4}`);
  const filesFolderV2 = fs.readdirSync(`${resImagesPath}/${GHOSTV5}`);
  
  let resultInfo = {}
  for(i in filesFolderV1){
    const screenshotFileName = filesFolderV1[i];
    const pathImageV1 = `${resImagesPath}/${GHOSTV4}/${screenshotFileName}`;
    const pathImageV2 = `${resImagesPath}/${GHOSTV5}/${screenshotFileName}`;
    const pathImageComparision = `${resImagesPath}/comparision/${screenshotFileName}`;  
    const imageExists = filesFolderV2.includes(screenshotFileName);
    const infoScenario = screenshotFileName.replace('.png', '').split('_');
    const keyEscenario = `${infoScenario[0]}_${infoScenario[1]}`

    if(escenariosVrt.length > 0 && !escenariosVrt.includes(infoScenario[0])){
      continue
    }
    
    if (imageExists){
      const data = await compareImages(
        fs.readFileSync(pathImageV1),
        fs.readFileSync(pathImageV2),
        options
      );
      fs.writeFileSync(pathImageComparision, data.getBuffer());

      resultInfo[keyEscenario] = {
        escenario:infoScenario[0],
        step:infoScenario[1],
        v1:`${GHOSTV4}`, 
        v2:`${GHOSTV5}`,
        pathImageV1: pathImageV1.replace('results/', ''),
        pathImageV2: (imageExists ? pathImageV2.replace('results/', '') : null),
        pathImageComparision: (imageExists ? pathImageComparision.replace('results/', ''): null),
        isSameDimensions: data.isSameDimensions,
        dimensionDifference: data.dimensionDifference,
        rawMisMatchPercentage: data.rawMisMatchPercentage,
        misMatchPercentage: data.misMatchPercentage,
        diffBounds: data.diffBounds,
        analysisTime: data.analysisTime,
      }
    }else{
      resultInfo[keyEscenario] = {
        escenario:infoScenario[0],
        step:infoScenario[1],
        v1:`${GHOSTV4}`, 
        v2:`${GHOSTV5}`,
        pathImageV1: pathImageV1.replace('results/', ''),
        pathImageV2: null,
        pathImageComparision: null,
        isSameDimensions: null,
        dimensionDifference: null,
        rawMisMatchPercentage: null,
        misMatchPercentage: null,
        diffBounds: null,
        analysisTime: null,
      }
    }
    console.log(`Analizando escenario:${infoScenario[0]}: paso:${infoScenario[1]} (${imageExists?'existen ambas imagenes':'NO EXISTE'})`);
  }
  return resultInfo;
}


function  getLastPart (thePath){
  return thePath.substring(thePath.lastIndexOf('/') + 1)
}


async function processVrt(pathV1, pathV2){
  const fechaActual = new Date().toISOString().replace(/:/g,".");
  const resultsImagesPath =  `${resultsPath}/images`;
  setFolders(pathV1, pathV2, resultsImagesPath);
  const resultVrt = await ejecutarVrt(resultsImagesPath);

  for(nombreEscenario in resultVrt){
    const comparacion = resultVrt[nombreEscenario]

    if(porcentajeDiferencia > 0
      && comparacion.misMatchPercentage < porcentajeDiferencia){
      delete resultVrt[nombreEscenario]
    }
  }
  fs.writeFileSync(`./results/report.html`, createReport(fechaActual, resultVrt));
};

processVrt(pathImagesGhostV4, pathImagesGhostV5);
