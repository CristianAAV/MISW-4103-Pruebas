const { exec } = require('child_process');
const fs = require('fs-extra');
const path = require('path');

const sourceDirectory = './features/features5';
const destinationDirectory = './features';
const krakenCommand = 'npx kraken-node run';

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

async function runFeaturesSequentially(features) {
  for (const feature of features) {
    await runFeature(feature);

    // Eliminar archivo después de ejecutar
    const featurePath = path.join(destinationDirectory, feature);
    await fs.remove(featurePath);
  }
}

const featuresToRun = [
  '00_login.feature',
  '01_crear_tag_datos_vacios.feature',
  '02_crear_tag_color_invalido.feature',
  '03_crear_tag_descripcion_mayor500.feature',
  '04_crear_tag_datos_validos.feature',
  '05_modificar_tag_titulo.feature',
  '06_modificar_tag_descripcion_invalida.feature',
  '07_modificar_tag_eliminar.feature',
  '08_creacion_page.feature',
  '09_crear_y_editar.feature',
  '10_eliminar_page_o_draft.feature',
  '11_Verificar_creacion_de_pages_con_un_titulo_de_255_caracteres.feature',
  '12_crear_verificar_posts.feature',
  '13_crear_editar_post.feature',
  '14_crear_con_titulo_vacio_pero_con_descripcion.feature',
  '15_crear_preview_de_post.feature',
  '16_crear_member_datos_validos.feature',
  '17_crear_member_datos_vacios.feature',
  '18_crear_member_datos_repetidos.feature',
  '19_editar_member_exitente.feature',
  '20_crear_eliminar_member.feature'
  // Agrega más rutas según sea necesario
];

runFeaturesSequentially(featuresToRun).catch((error) => {
  console.error('Error al ejecutar las características:', error);
});