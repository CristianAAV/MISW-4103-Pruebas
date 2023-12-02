import { faker } from '@faker-js/faker';

describe('Funcionalidad de publicar posts', () => {
    const SECCION = 'posts';
    const ESCENARIO = '08-post-con-solo-titulo'
  
    beforeEach('Realizar Login', () => {
      cy.hacerLoginCorrecto();
      cy.screenshot(`${ESCENARIO}_step01`); 
    });

    it('Escenario 14: Crear post con titulo', () => {    
        cy.navegarSeccion(SECCION);
        cy.get(`a[href="#/editor/post/"]`).first().click({ force: true });
        cy.screenshot(`${ESCENARIO}_step02`);

        //Ingresar datos principales del nuevo tpost
        const postTitle = faker.string.alpha(20).toLocaleLowerCase();
        cy.get('[data-test-editor-title-input]').type(postTitle);
        cy.screenshot(`${ESCENARIO}_step03`);

        cy.get(`.kg-prose`).click({ force: true });
        cy.screenshot(`${ESCENARIO}_step04`);

        cy.get('button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger').click({ force: true });
        cy.screenshot(`${ESCENARIO}_step05`);
    
        cy.get('button.gh-btn.gh-btn-black.gh-btn-large').click({ force: true });
        cy.screenshot(`${ESCENARIO}_step06`);

        cy.get('button.gh-btn.gh-btn-large.gh-btn-pulse.ember-view').click({ force: true });
        cy.screenshot(`${ESCENARIO}_step07`);
   
  });
})