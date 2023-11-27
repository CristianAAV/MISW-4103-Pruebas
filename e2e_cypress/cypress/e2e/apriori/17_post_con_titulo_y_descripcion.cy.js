describe('Funcionalidad de publicar posts', () => {
    const ESCENARIO = 'post_con_descripcion_y_con_titulo';
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

    it('Escenario 17 apriori: Crear post con descripcion y con titulo', () => {    
        cy.navegarSeccion(SECCION);
        cy.get(`a[href="#/editor/post/"]`).first().click();
        cy.finalizarPaso(`${ESCENARIO}_step02`);

        //Ingresar datos principales del nuevo tpost
        const postTitle = dataPool.titulo_1;
        cy.get('[data-test-editor-title-input]').type(postTitle);
        cy.finalizarPaso(`${ESCENARIO}_step03`);

        const postDescription = dataPool.descripcion_1;
        cy.get(`.kg-prose`).type(postDescription);
        cy.finalizarPaso(`${ESCENARIO}_step04`);

        cy.get('button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger').click();
        cy.finalizarPaso(`${ESCENARIO}_step05`);
    
        cy.get('button.gh-btn.gh-btn-black.gh-btn-large').click();
        cy.finalizarPaso(`${ESCENARIO}_step06`);

        cy.get('button.gh-btn.gh-btn-large.gh-btn-pulse.ember-view').click();
        cy.finalizarPaso(`${ESCENARIO}_step07`);
    
    });
})

    
    