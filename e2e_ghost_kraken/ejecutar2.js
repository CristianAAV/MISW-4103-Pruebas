const { exec } = require('child_process');

// Lista de rutas a tus archivos de características (features)
const features = [
    '../features/tag.feature',
    '../features/wscenario15.feature',
  // Agrega más rutas según sea necesario
];

// Función para ejecutar un feature
function runFeature(feature) {
  return new Promise((resolve, reject) => {
    const command = `npx kraken-node run ${feature} --format message`;

    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error al ejecutar la característica ${feature}:`, stderr);
        reject(error);
      } else {
        console.log(`Característica ${feature} ejecutada exitosamente`);
        resolve();
      }
    });
  });
}

// Función para ejecutar features secuencialmente
async function runFeaturesSequentially() {
  for (const feature of features) {
    await runFeature(feature);
  }
}

// Ejecutar las características secuencialmente
runFeaturesSequentially()
  .then(() => {
    console.log('Todas las características se ejecutaron exitosamente');
  })
  .catch((error) => {
    console.error('Error al ejecutar características:', error);
  });