Feature: My feature

 @user2 @web
 Scenario: Iniciar crear y editar un pages
Given I navigate to page "<URL>"
  And I wait for 2 seconds
  When I login to ghost "<EMAIL>" "<PASSWORD>"
  And I wait for 2 seconds
  Then I should be logged

  And I wait for 2 seconds
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
  And I back edit
  And I wait for 2 seconds
  And I new edit
  And I enter text "Texto editado"
  And I wait for 2 seconds
  And I update
  And I wait for 4 seconds
