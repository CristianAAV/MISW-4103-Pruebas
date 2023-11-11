import { Params } from '../../params';

describe('Como administrador quiero hacer login con credenciales correctas', () => {
  //Escenario 1
  /**/
  it('Hacer login con las credenciales correctas', () => {
    cy.hacerLoginCorrecto();
    cy.screenshot(`login_credenciales_correctas`);
  });
  /**/

  //Escenario 2
  /**/
  it('Hacer login con las credenciales vacias', () => {
    cy.hacerLoginIncorrecto();
    cy.screenshot(`login_credenciales_vacias`);
  });
 /**/

  //Escenario 3
 /**/
  it('Hacer login con el password vacio', () => {
    cy.hacerLoginIncorrecto(Params.email);
    cy.screenshot(`login_credenciales_vacias`);
  });
 /**/
})