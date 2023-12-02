module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      const version = config.env.VERSION || 5.74;
      const params = {
        5.71:{
          url: 'http://localhost:3571/ghost',
          "email": 'equipo15@uniandes.edu.co',
          "password":  'equ11po@15',
        },
        5.74:{
          url: 'http://localhost:3574/ghost',
          "email": 'equipo15@uniandes.edu.co',
          "password":  'equ11po@15',
        },
        screenSize: {
          width: 480,
          height: 800
        }
      }
      config.baseUrl = params[version].url;
      config.env.email = params[version].email;
      config.env.password =  params[version].password;
      config.env.viewPortWidth = params['screenSize'].width;
      config.env.viewPortHeight = params['screenSize'].height;

      const copiarImagen = (details) => {
        const fs = require('fs');   
        const path = require('path');
        
        const imageName = details.name.split('_');
        const ghostVersion = version;
        const escenario = imageName[0]
        const paso = imageName[1]

        const dirPath = path.join(__dirname, 'vrt',`ghost_${ghostVersion}`)
        const imagenStepPath = path.join(dirPath, `${escenario}_${paso}.png`)

        if (!fs.existsSync(dirPath))
          fs.mkdirSync(dirPath, { recursive: true });

        fs.copyFileSync(`${details.path}`, imagenStepPath);
      };

      on('after:screenshot', copiarImagen)
     
      return config;
    },
    env:{
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
  },
};