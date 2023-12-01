import { faker } from '@faker-js/faker';

describe('Crear tags', () => {
    const seccion = 'tags';
    let tagName = '';

    beforeEach('Realizar Login', () => {
        cy.hacerLoginCorrecto();
    });

    it('Escenario 3: Crear tag con una descripcion mayor a 500 caracteres', () => {    
        const ESCENARIO = 'escenario3'
        cy.navegarSeccion(seccion);
        cy.get(`a[href="#/${seccion}/new/"]`).first().click();
        cy.screenshot(`${ESCENARIO}_step_1`);
    
        //Ingreso del nombre del tag
        tagName = faker.string.alpha(10).toLowerCase();
        cy.get('input[name="name"]').type(tagName);  
        cy.screenshot(`${ESCENARIO}_step_2`);
        
        //Ingrsar una descripcion mayor a 500 caracteres
        const largeText = faker.string.alpha(700);
        cy.get('textarea[name="description"]').type(largeText);  
        cy.screenshot(`${ESCENARIO}_step_3`);
    
        //guardar
        cy.get('section .view-actions button').click();
        cy.screenshot(`${ESCENARIO}_step_4`);
        
        //verificar
        cy.get(`span`).contains(`Retry`).should('exist');    
        cy.screenshot(`${ESCENARIO}_step_5`);
      });
    
    
 
    
})
  