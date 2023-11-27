describe('Funcionalidad de publicar posts', () => {
    const ESCENARIO = 'post_con_fecha_invalida';
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

    it('Escenario 13 pseudoaleatorio: Crear post con fecha invalida', () => {    
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
    
        //const postfecha = dataPool.fecha;
        cy.get(`.gh-date-time-picker-date `).clear();
        cy.finalizarPaso(`${ESCENARIO}_step06`);

        const postfecha = dataPool.fecha;
        cy.get(`.gh-date-time-picker-date `).type(postfecha);
        cy.finalizarPaso(`${ESCENARIO}_step07`);

        cy.get(`#custom-excerpt`).click();
        cy.finalizarPaso(`${ESCENARIO}_step08`);

        cy.get('.gh-date-time-picker-error').click();
        cy.finalizarPaso(`${ESCENARIO}_step09`);

        //cy.get('button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger').click();
        //cy.finalizarPaso(`${ESCENARIO}_step09`);

    });
})
