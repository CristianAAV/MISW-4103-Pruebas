Feature: My feature

  @user3 @web
Scenario: Iniciar ghost ( partiendo que existe un page) eliminamos un page
  Given I navigate to page "http://localhost:3001/ghost/#/signin"
  And I wait for 5 seconds
  When I enter identification "o.manco@uniandes.edu.co"
  And I wait for 2 seconds
  And I enter password "_wj3S_zM4*c.bUv"
  And I wait for 2 seconds
  And I click next
  And I wait for 7 seconds
  Then I should be on the admin section
  When I click on the page
  And I wait for 2 seconds
  And I click list page
  And I wait for 2 seconds
  And I click button settings menu
  And I wait for 2 seconds
  And I click button delete page
  And I wait for 2 seconds
  And I click button delete page confirmation
  And I wait for 2 seconds

 