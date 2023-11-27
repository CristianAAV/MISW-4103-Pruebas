describe('Funcionalidad de publicar posts', () => {
    const ESCENARIO = 'post_creando_un_tag';
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

    it('Escenario 15 pseudoaleatorio: Crear post creando un tag', () => {    
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

        cy.get('#tag-input').click();
        cy.finalizarPaso(`${ESCENARIO}_step06`);

        const postTag = dataPool.tag;
        cy.get('#tag-input').type(postTag);
        cy.finalizarPaso(`${ESCENARIO}_step07`);

        cy.get('button.settings-menu-toggle.gh-btn.gh-btn-editor.gh-btn-icon.icon-only.gh-btn-action-icon').click();
        cy.finalizarPaso(`${ESCENARIO}_step08`);

        cy.get('button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger').click();
        cy.finalizarPaso(`${ESCENARIO}_step09`);
    
        cy.get('button.gh-btn.gh-btn-black.gh-btn-large').click();
        cy.finalizarPaso(`${ESCENARIO}_step10`);

        cy.get('button.gh-btn.gh-btn-large.gh-btn-pulse.ember-view').click();
        cy.finalizarPaso(`${ESCENARIO}_step11`);
    
    });
})

    
    