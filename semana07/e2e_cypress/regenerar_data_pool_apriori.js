const fs = require('fs');
const axios = require('axios').default;
const {e2e} = require('./cypress.config')
const {folderPoolApriori, dataPoolApriori} = e2e["env"]

async function downloadPoolAprioriFile(url, folderPath, filePath) {
  try {
    const response = await axios.get(url);
    
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(`./${folderPath}`);
    }

    fs.writeFileSync(`./${folderPath}/${filePath}`, JSON.stringify(response.data));

  } catch (error) {
    console.error(error);
  }
}

(async()=>{
  for(nombreArchivo in dataPoolApriori){
    const {url, archivo} = dataPoolApriori[nombreArchivo];
    await downloadPoolAprioriFile(url, folderPoolApriori, archivo);
  }
})();

