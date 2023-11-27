describe('Funcionalidad de publicar posts', () => {
    const ESCENARIO = 'post_con_solo_titulo_largo';
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

    it('Escenario 16 apriori: Crear post con titulo largo', () => {    
        cy.navegarSeccion(SECCION);
        cy.get(`a[href="#/editor/post/"]`).first().click();
        cy.finalizarPaso(`${ESCENARIO}_step02`);

        //Ingresar datos principales del nuevo tpost
        const postTitle1 = dataPool.titulo_1;
        cy.get('[data-test-editor-title-input]').type(postTitle1);
        cy.finalizarPaso(`${ESCENARIO}_step03`);

        cy.get(`.kg-prose`).click();
        cy.finalizarPaso(`${ESCENARIO}_step04`);

        const postTitle2 = dataPool.titulo_2;
        cy.get('[data-test-editor-title-input]').type(postTitle2);
        cy.finalizarPaso(`${ESCENARIO}_step05`);

        cy.get('button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger').click();
        cy.finalizarPaso(`${ESCENARIO}_step06`);
        
        cy.get('.gh-alert-content').click();
        cy.finalizarPaso(`${ESCENARIO}_step07`);
   
  });
})