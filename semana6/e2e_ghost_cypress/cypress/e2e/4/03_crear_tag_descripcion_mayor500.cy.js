import { faker } from '@faker-js/faker';

describe('Crear tags', () => {
    const ESCENARIO = 'escenario03'
    const seccion = 'tags';
    let tagName = '';

    beforeEach('Realizar Login', () => {
        cy.hacerLoginCorrecto();
        cy.screenshot(`${ESCENARIO}_step01`);
    });

    it('Escenario 3: Crear tag con una descripcion mayor a 500 caracteres', () => {    
        cy.navegarSeccion(seccion);
        cy.get(`a[href="#/${seccion}/new/"]`).first().click();
        cy.screenshot(`${ESCENARIO}_step02`);
    
        //Ingreso del nombre del tag
        tagName = faker.string.alpha(10).toLowerCase();
        cy.get('input[name="name"]').type(tagName);  
        cy.screenshot(`${ESCENARIO}_step03`);
        
        //Ingrsar una descripcion mayor a 500 caracteres
        const largeText = faker.string.alpha(700);
        cy.get('textarea[name="description"]').type(largeText);  
        cy.screenshot(`${ESCENARIO}_step04`);
    
        //guardar
        cy.get('section .view-actions button').click();
        cy.screenshot(`${ESCENARIO}_step05`);
        
        //verificar
        cy.get(`span`).contains(`Retry`).should('exist');    
        cy.screenshot(`${ESCENARIO}_step06`);
      });
    
    
 
    
})
  