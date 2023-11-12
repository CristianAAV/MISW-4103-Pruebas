const { exec } = require('child_process');

// Lista de rutas de las características (features) que deseas ejecutar
const features = [
  'tag.feature',
  'wscenario15.feature',
  // Agrega más rutas según sea necesario
];

// Función para ejecutar una característica
function runFeature(feature) {
  return new Promise((resolve, reject) => {
    const command = `npx kraken-node run ${JSON.stringify(feature)}`;

    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error al ejecutar la característica ../features/${feature}:`, stderr);
        reject(error);
      } else {
        console.log(`Característica ${feature} ejecutada exitosamente`);
        resolve();
      }
    });
  });
}

// Función para ejecutar todas las características secuencialmente
async function runFeaturesSequentially() {
  for (const feature of features) {
    console.log(`Ejecutando característica ${feature}`);
    await runFeature(feature);
  }
}

// Ejecuta todas las características secuencialmente
runFeaturesSequentially().catch((error) => {
  console.error('Error al ejecutar las características:', error);
});

