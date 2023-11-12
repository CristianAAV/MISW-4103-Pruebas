Feature: My feature

@user1 @web
Scenario: Iniciar y crear un nuevo pages
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
  And I click on the new pages
  And I wait for 2 seconds
  And I click on the redact message inputbox
  And I wait for 2 seconds
  And I enter text "Hola mundo"
  And I wait for 2 seconds
  And I redact text
  And I wait for 2 seconds
  And I Publisher
  And I wait for 2 seconds
  And I Publisher final
  And I wait for 2 seconds
  And I Publisher final2
  And I wait for 2 seconds
  And I should have a new Pages
  And I wait for 2 seconds

