module.exports = {
  e2e: {
    "baseUrl": 'http://localhost:3005/ghost',
    env:{
      "email": 'equipo15@uniandes.edu.co',
      "password":  'equ11po@15',
      "screenshot":false,
      "folderPoolApriori": "cypress/fixtures",
      "dataPoolApriori":[
        {
          "archivo":"tag_pool_apriori.json",
          "url": "https://my.api.mockaroo.com/tag_apriori.json?key=4b064d20"
        },
        {
          "archivo":"post_pool_apriori.json",
          "url": "https://my.api.mockaroo.com/post_apriori.json?key=bd800ef0"
        },
        {
          "archivo":"member_pool_apriori.json",
          "url": "https://my.api.mockaroo.com/member_pool_apriori.json?key=29e4e000"
        },
        {
          "archivo":"pages_pool_apriori.json",
          "url": "https://my.api.mockaroo.com/pages_apriori.json?key=4b6d9540"
        }
      ],
      "dataPoolPseudoAleatorio":{
        "tag": "https://my.api.mockaroo.com/tag_pseudo_aleatorio.json?key=4b064d20",
        "post": "https://my.api.mockaroo.com/post_pseudo_aleatorio.json?key=bd800ef0",
        "member": "https://my.api.mockaroo.com/member_pseudo_aleatorio.json?key=29e4e000",
        "pages": "https://my.api.mockaroo.com/pages_pseudo_aleatorio.json?key=4b6d9540"
      },
    },    
    setupNodeEvents(on, config) {      
      // implement node event listeners here
      const copiarImagen = (details) => {
        const fs = require('fs');   
        const path = require('path');
        
        const imageName = details.name.split('_');
        const escenario = imageName[0]
        const paso = imageName[1]

        const dirPath = path.join(__dirname, 'vrt')
        const imagenStepPath = path.join(dirPath, `${escenario}_${paso}.png`)

        if (!fs.existsSync(dirPath))
          fs.mkdirSync(dirPath, { recursive: true });

        fs.copyFileSync(`${details.path}`, imagenStepPath);
      };

      on('after:screenshot', copiarImagen);
    },
  },
};
