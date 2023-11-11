import { Params } from '../../params';
import { faker } from '@faker-js/faker';

describe('Funcionalidad de crear tags', () => {
  const seccion = 'tags';
  let tagName = '';
  beforeEach('Realizar Login', () => {
    cy.hacerLoginCorrecto();
  });
  
  //Escenario 1
  /**
  it('Escenario 1: Como administrador, quiero crear un tag', () => {    
    const ESCENARIO = 'escenario1'
    cy.navegarSeccion(seccion);
    cy.get(`a[href="#/${seccion}/new/"]`).first().click();
    cy.screenshot(`${ESCENARIO}_step_1`);

    tagName = faker.string.alpha(10).toLowerCase();
    cy.get('input[name="name"]').type(tagName);  
    cy.screenshot(`${ESCENARIO}_step_2`);


    cy.get('section .view-actions button').click();
    cy.screenshot(`${ESCENARIO}_step_3`);

    cy.navegarSeccion(seccion);
    cy.screenshot(`${ESCENARIO}_step_4`);

    //Debe existir el tag en la lista.
    cy.get(`a[href='#/tags/${tagName}/']`).should('exist');
  });
  **/
  /**
  it('Escenario 2: Como administrador, quiero crear y borrar un tag', () => {    
    const ESCENARIO = 'escenario2'
    cy.navegarSeccion(seccion);
    cy.get(`a[href="#/${seccion}/new/"]`).first().click();
    cy.screenshot(`${ESCENARIO}_step_1`);

    tagName = faker.string.alpha(10).toLowerCase();
    cy.get('input[name="name"]').type(tagName);  
    cy.screenshot(`${ESCENARIO}_step_2`);

    cy.get('section .view-actions button').click();
    cy.screenshot(`${ESCENARIO}_step_3`);

    cy.navegarSeccion(seccion);
    cy.screenshot(`${ESCENARIO}_step_4`);
    
    //Debe existir el tag en la lista.
    cy.get(`a[href='#/tags/${tagName}/']`).should('exist');

    //Seleccionar el tag creado
    cy.get(`a[href='#/tags/${tagName}/']`).first().click();
    cy.screenshot(`${ESCENARIO}_step_5`);
    
    //Click en borrar
    cy.contains(`Delete tag`).first().click();
    cy.wait(1000);
    cy.screenshot(`${ESCENARIO}_step_6`);

    //confirmar
    cy.wait(1000);
    cy.once('uncaught:exception', () => false);
    cy.get('.modal-footer .gh-btn.gh-btn-red').first().click();
    cy.screenshot(`${ESCENARIO}_step_7`);
    cy.wait(1000);

    //Verificar que no existe
    cy.get(`a[href='#/tags/${tagName}/']`).should('not.exist');
    cy.screenshot(`${ESCENARIO}_step_8`);
  });  
  **/
  /**
  it('Escenario 3: Como administrador, quiero crear y modificar el titulo de un tag', () => {    
    const ESCENARIO = 'escenario3'
    cy.navegarSeccion(seccion);
    //tagName = 'news'
    
    cy.get(`a[href="#/${seccion}/new/"]`).first().click();
    cy.screenshot(`${ESCENARIO}_step_1`);

    tagName = faker.string.alpha(10).toLowerCase();
    cy.get('input[name="name"]').type(tagName);  
    cy.screenshot(`${ESCENARIO}_step_2`);

    cy.get('section .view-actions button').click();
    cy.screenshot(`${ESCENARIO}_step_3`);

    cy.navegarSeccion(seccion);
    cy.screenshot(`${ESCENARIO}_step_4`);

    //Debe existir el tag en la lista.
    cy.get(`a[href='#/tags/${tagName}/']`).should('exist');

    //Seleccionar el tag creado
    cy.get(`a[href='#/tags/${tagName}/']`).first().click();
    cy.screenshot(`${ESCENARIO}_step_5`);

    //modificar el tag creado
    const newtagText =  `_modificado`
    cy.get('input[name="name"]').type(newtagText);  
    cy.screenshot(`${ESCENARIO}_step_6`);

    cy.get('section .view-actions button').click();
    cy.screenshot(`${ESCENARIO}_step_7`);

    cy.navegarSeccion(seccion);
    cy.screenshot(`${ESCENARIO}_step_4`);

    //Verificar que el nuevo tag existe
    cy.get(`h3`).contains(`${tagName}${newtagText}`).should('exist');    
  });
  **/
 /**
  it('Escenario 1: Crear tag con datos vacios', () => {    
    const ESCENARIO = 'escenario1'
    cy.navegarSeccion(seccion);
    cy.get(`a[href="#/${seccion}/new/"]`).first().click();
    cy.screenshot(`${ESCENARIO}_step_1`);

    //guardar con datos vacios
    cy.get('section .view-actions button').click();
    cy.screenshot(`${ESCENARIO}_step_2`);


    cy.get(`span`).contains(`Retry`).should('exist');    
    cy.screenshot(`${ESCENARIO}_step_3`);
  });
 **/
 /**
  it('Escenario 1: Crear tag con un color invalido', () => {    
    const ESCENARIO = 'escenario1'
    cy.navegarSeccion(seccion);
    cy.get(`a[href="#/${seccion}/new/"]`).first().click();
    cy.screenshot(`${ESCENARIO}_step_1`);

    //Ingreso del nombre del tag
    tagName = faker.string.alpha(10).toLowerCase();
    cy.get('input[name="name"]').type(tagName);  
    cy.screenshot(`${ESCENARIO}_step_2`);
    
    //Ingrsar color invalido
    cy.get('input[name="accent-color"]').first().type('xxxxxx');  
    cy.screenshot(`${ESCENARIO}_step_3`);

    //guardar
    cy.get('section .view-actions button').click();
    cy.screenshot(`${ESCENARIO}_step_4`);
    
    //verificar
    cy.get(`span`).contains(`Retry`).should('exist');    
    cy.screenshot(`${ESCENARIO}_step_5`);
  });
 **/
  /**
  it('Escenario 1: Crear tag con una descripcion mayor a 500 caracteres', () => {    
    const ESCENARIO = 'escenario1'
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
  **/

})
