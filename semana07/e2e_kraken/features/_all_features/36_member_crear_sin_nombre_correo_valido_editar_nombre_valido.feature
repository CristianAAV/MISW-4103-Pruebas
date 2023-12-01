Feature: _crear_member_sin_nombre_email_valido

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

  And I wait for 2 seconds

  When I click on the new members button
  And I wait for 2 seconds
  Then I should have a form to enter members information

  When I enter member valor email
  And I wait for 2 seconds



  And I click Save members
  

  Then I should have a saved member
  And I wait for 5 seconds

  
  When I select the members section
  And I wait for 2 seconds

  When I click on the members exist button
  And I wait for 2 seconds 
  
  When I enter member valor name
  And I wait for 2 seconds

  And I click Save members
  

  Then I should have a saved member
  And I wait for 5 seconds
