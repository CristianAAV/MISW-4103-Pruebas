Feature: Realizar Login 

@user1 @web
Scenario: Como administrador quiero hacer login a ghost
  Given I navigate to page "<URL1>"
  And I wait for 2 seconds
  And I screenshotV4 "Escenario00" "step01"

  When I enter login email "<EMAIL>"
  And I wait for 1 seconds
  And I enter the password "<PASSWORD>"
  And I wait for 1 seconds
  And I screenshotV4 "Escenario00" "step02"

  And I submit login
  And I wait for 3 seconds
  And I screenshotV4 "Escenario00" "step03"
  Then I should be logged