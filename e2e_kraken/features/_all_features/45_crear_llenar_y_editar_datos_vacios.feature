Feature: My feature

 @user2 @web
 Scenario: Iniciar crear y editar un pages
    Given I navigate to page "<URL>"
  And I wait for 1 seconds
  When I login to ghost "<EMAIL>" "<PASSWORD>"
  And I wait for 1 seconds
  Then I should be logged
  And I wait for 7 seconds
  Then I should be on the admin section
  When I click on the page
  And I wait for 2 seconds
  And I click on the new pages
  And I wait for 2 seconds
  And I click on the redact message inputbox
  And I wait for 2 seconds
  
  And I wait for 3 seconds
  And I click text
  And I wait for 5 seconds
  And I Publisher
  And I wait for 3 seconds
  And I Publisher final
  And I wait for 2 seconds
  And I Publisher final2
  And I wait for 2 seconds
  And I should have a new Pages
  And I wait for 2 seconds
  And I back edit
  And I wait for 3 seconds
   And I clear edit title
  And I wait for 2 seconds 
 
  And I update
  And I wait for 1 seconds
  Then I should see a notification with the message "Updated"
  And I wait for 2 seconds
  