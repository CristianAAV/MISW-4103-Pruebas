describe('Funcionalidad de publicar posts', () => {
    const ESCENARIO = 'post_con_autor';
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

    it('Escenario 11 apriori: Crear post sin autor', () => {    
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

        cy.get('button.settings-menu-toggle.gh-btn.gh-btn-editor.gh-btn-icon.icon-only.gh-btn-action-icon').click();
        cy.finalizarPaso(`${ESCENARIO}_step05`);

        cy.get('.ember-power-select-multiple-remove-btn').click();
        cy.finalizarPaso(`${ESCENARIO}_step06`);

        const postAutor = dataPool.autor;
        cy.get('#author-list').type(postAutor);
        cy.finalizarPaso(`${ESCENARIO}_step06`);

        cy.get('button.settings-menu-toggle.gh-btn.gh-btn-editor.gh-btn-icon.icon-only.gh-btn-action-icon').click();
        cy.finalizarPaso(`${ESCENARIO}_step07`);

        cy.get('button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger').click();
        cy.finalizarPaso(`${ESCENARIO}_step08`);

        cy.get('.gh-alert').click();
        cy.finalizarPaso(`${ESCENARIO}_step09`);
    
    });
})

    
    