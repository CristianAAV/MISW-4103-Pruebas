module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      const version = config.env.VERSION || 4;
      const params = {
        4:{
          url: 'http://localhost:3004/ghost',
          email: 'equipo15@uniandes.edu.co',
          password: 'equ11po@15'
        },
        5:{
          url: 'http://localhost:3005/ghost',
          email: 'equipo15@uniandes.edu.co',
          password: 'equ11po@15'
        }
      }

      config.baseUrl = params[version].url;
      config.env.email = params[version].email;
      config.env.password =  params[version].password;

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