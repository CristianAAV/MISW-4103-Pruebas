const fs = require('fs');

//  screenshot  para version 5.71
const ScreenshotV5 = async (driver, scenario, step) => {
    if (!fs.existsSync(`./screenshots/Ghost5/bitmaps_test`)) {
        fs.mkdirSync(`./screenshots/Ghost5/bitmaps_test`, { recursive: true });
    }
       // Agrega strings fijos anidados a la variable 'step'
        const nameVariableBakcstop2 = 'backstop_default_' + scenario +'_'+ step +'_0_document_0_default';     
        await driver.saveScreenshot(`./screenshots/Ghost5/bitmaps_test/${nameVariableBakcstop2}.png`);

}


//screenshot para version 4.44
const ScreenshotV4 = async (driver, scenario, step) => {
    if (!fs.existsSync(`./screenshots/Ghost4/bitmaps_reference`)) {
        fs.mkdirSync(`./screenshots/Ghost4/bitmaps_reference`, { recursive: true });
    }
       // Agrega strings fijos anidados a la variable 'step'
        const nameVariableBakcstop =  'backstop_default_' + scenario +'_'+ step + '_0_document_0_default'; 
        await driver.saveScreenshot(`./screenshots/Ghost4/bitmaps_reference/${nameVariableBakcstop}.png`);

}

module.exports = {
    ScreenshotV4,
    ScreenshotV5
}