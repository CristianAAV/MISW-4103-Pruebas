Feature: Realizar Login 

@user1 @web
Scenario: Como administrador quiero hacer login a ghost
  Given I navigate to page "<URL>"
  And I wait for 2 seconds
  When I enter login email "<EMAIL>"
  And I wait for 1 seconds
  And I enter the password "<PASSWORD>"
  And I wait for 1 seconds
  And I submit login
  And I wait for 3 seconds
  Then I should have a nav-bar with functions