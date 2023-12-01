describe('Funcionalidad de publicar posts', () => {
    const ESCENARIO = 'post_con_solo_descripcion_y_preview';
    const SECCION = 'posts';
    let dataPool = {}
  
    beforeEach('Realizar Login', () => {
      cy.hacerLoginCorrecto();
      cy.finalizarPaso(`${ESCENARIO}_step01`);
  
      //Escoger el archivo de pruebas
      const archivoDatosPrueba = 'post_pool_apriori.json';
      cy.fixture(archivoDatosPrueba).then((datosCargados) => {
        dataPool = datosCargados;
      });    
    });

    it('Escenario 12 apriori: Crear post con solo descripcion y preview', () => {    
        cy.navegarSeccion(SECCION);
        cy.get(`a[href="#/editor/post/"]`).first().click();
        cy.finalizarPaso(`${ESCENARIO}_step02`);

        cy.get('[data-test-editor-title-input]').first().click();
        cy.finalizarPaso(`${ESCENARIO}_step03`);

        //Ingresar datos principales del nuevo tpost
        const postDescription = dataPool.descripcion_1;
        cy.get(`.kg-prose`).type(postDescription);
        cy.finalizarPaso(`${ESCENARIO}_step04`);

        cy.get('button.gh-btn.gh-btn-editor.gh-editor-preview-trigger').click();
        cy.finalizarPaso(`${ESCENARIO}_step05`);
    });
})

    
    