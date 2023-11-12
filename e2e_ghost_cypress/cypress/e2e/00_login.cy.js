import { Params } from '../../params';

describe('Como administrador quiero hacer login con credenciales correctas', () => {


 /**/
  //Escenario 1.5
  /**/
  it('Hacer login con las credenciales correctas', () => {
    cy.hacerLoginCorrecto();
    cy.screenshot(`login_credenciales_correctas`);
  });
  /**/
})