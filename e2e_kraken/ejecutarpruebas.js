const { exec } = require('child_process');
const fs = require('fs-extra');
const path = require('path');

const sourceDirectory = './features/_all_features';
const destinationDirectory = './features';
const krakenCommand = 'npx kraken-node run';

async function getFeatureFiles(directory) {
  const files = await fs.readdir(directory);
  return files.filter(file => file.endsWith('.feature'));
}

async function runFeature(feature) {
  const featurePath = path.join(destinationDirectory, feature);
  const command = `${krakenCommand} ${featurePath} --format message`;

  // Copiar archivo
  await fs.copy(path.join(sourceDirectory, feature), featurePath);

  return new Promise((resolve, reject) => {
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

async function runFeaturesAutomatically() {
  const featuresToRun = await getFeatureFiles(sourceDirectory);

  for (const feature of featuresToRun) {
    await runFeature(feature);

    // Eliminar archivo después de ejecutar
    const featurePath = path.join(destinationDirectory, feature);
    await fs.remove(featurePath);
  }
}

runFeaturesAutomatically().catch((error) => {
  console.error('Error al ejecutar las características:', error);
});