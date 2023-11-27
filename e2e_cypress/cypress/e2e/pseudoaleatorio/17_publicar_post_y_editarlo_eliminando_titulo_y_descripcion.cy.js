describe('Funcionalidad de publicar posts', () => {
    const ESCENARIO = 'publicar_post_y_editarlo_eliminando_titulo_y_descripcion';
    const SECCION = 'posts';
    let dataPool = {}
  
    beforeEach('Realizar Login', () => {
      cy.hacerLoginCorrecto();
      cy.finalizarPaso(`${ESCENARIO}_step01`);
  
      //Escoger el archivo de pruebas
      const urlDataPool = Cypress.env('dataPoolPseudoAleatorio')["post"];
      cy.request(urlDataPool).then((response) => {
        dataPool = response.body;
      });    
    });

    it('Escenario 17 pseudoaleatorio: publicar un post y editarlo eliminando titulo y descripcion', () => {    
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

        cy.get('button.gh-btn-editor.gh-publish-back-button').click();
        cy.finalizarPaso(`${ESCENARIO}_step08`);

        cy.get('[data-test-editor-title-input]').clear();
        cy.finalizarPaso(`${ESCENARIO}_step09`);

        cy.get(`.kg-prose`).clear();
        cy.finalizarPaso(`${ESCENARIO}_step10`);

        cy.get('button.gh-btn.gh-btn-editor.gh-editor-save-trigger.green.ember-view').click();
        cy.finalizarPaso(`${ESCENARIO}_step11`);
    });
})

    
    