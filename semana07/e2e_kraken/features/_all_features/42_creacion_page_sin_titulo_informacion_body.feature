Feature: My feature

@user1 @web
Scenario: Iniciar y crear un nuevo pages
   Given I navigate to page "<URL>"
  And I wait for 1 seconds
  When I login to ghost "<EMAIL>" "<PASSWORD>"
  
  And I wait for 1 seconds
  Then I should be logged
 
  And I wait for 2 seconds
  Then I should be on the admin section
 
  When I click on the page
  
  And I wait for 2 seconds
  And I click on the new pages
 
  And I wait for 2 seconds
  And I redact text
  And I wait for 2 seconds
  And I Publisher
 
  And I wait for 2 seconds
  And I Publisher final
 
  And I wait for 2 seconds
  And I Publisher final2
  
  And I wait for 2 seconds
  Then I should have a new Pages

  And I wait for 2 seconds

