Feature: My feature

  @user3 @web
Scenario: Iniciar ghost ( partiendo que existe un page) eliminamos un page
Given I navigate to page "<URL>"
  And I wait for 2 seconds
  When I login to ghost "<EMAIL>" "<PASSWORD>"
  And I wait for 2 seconds
  Then I should be logged
  
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

 