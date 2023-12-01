
Feature: crear pagina

@user1 @web
Scenario: Como administrador quiero hacer login a ghost
Given I navigate to page "<URL>"
  And I wait for 2 seconds
  When I login to ghost "<EMAIL>" "<PASSWORD>"
  And I wait for 2 seconds
  Then I should be logged
  
  When I select the members section
  And I wait for 2 seconds
  Then I should have a new members button

  When I click on the new members button
  And I wait for 2 seconds
  Then I should have a form to enter members information

  When I enter member delete Email
  And I wait for 2 seconds
  And I enter member delete name
  And I wait for 2 seconds
  And I click Save members
  And I wait for 3 seconds
  And I select the members section
  And I wait for 2 seconds
  When I should have a members exits on the list
  And I wait for 2 seconds
  When I click on the members exist button
  And I wait for 2 seconds
  Then I should have a form to enter members information
  And I wait for 2 seconds
  When I click config members exits
  And I wait for 2 seconds
  When I click delete members exits
  And I wait for 2 seconds
  When I click delete members confirm exits
  And I wait for 5 seconds
  