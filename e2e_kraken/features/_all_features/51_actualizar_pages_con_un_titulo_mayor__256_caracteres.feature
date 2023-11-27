Feature: My feature

 @user4 @web
 Scenario: Verificar creación de pages con un titulo de 255 caracteres
   Given I navigate to page "<URL>"
  And I wait for 1 seconds
  When I login to ghost "<EMAIL>" "<PASSWORD>"
  And I wait for 1 seconds
  Then I should be logged
  And I wait for 5 seconds
  Then I should be on the admin section
  When I click on the page

  And I wait for 2 seconds
  And I seleccion menu list
  And I wait for 2 seconds
  And I seleccion menu list published
  And I wait for 2 seconds
  And I click list page

  And I redact text 
  And I wait for 2 seconds

  And I click on the redact message inputbox 256
  And I wait for 2 seconds 
  And I redact text 

  And I update
  And I wait for 2 seconds
  Then I should have error
  And I wait for 2 seconds
  


