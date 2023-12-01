module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      const version = config.env.VERSION || 5.71;
      const params = {
        5.71:{
          url: 'http://localhost:3571/ghost',
          email: 'equipo15@uniandes.edu.co',
          password: 'equ11po@15'
        },
        5.74:{
          url: 'http://localhost:3574/ghost',
          email: 'equipo15@uniandes.edu.co',
          password: 'equ11po@15'
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
  },
};