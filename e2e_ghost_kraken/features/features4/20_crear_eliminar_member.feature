
Feature: crear pagina

@user1 @web
Scenario: Como administrador quiero hacer login a ghost
Given I navigate to page "<URL1>"
  And I wait for 2 seconds
  And I screenshotV4 "Escenario20" "step01"
  When I login to ghost "<EMAIL>" "<PASSWORD>"
  And I wait for 2 seconds
  And I screenshotV4 "Escenario20" "step02"
  Then I should be logged
  And I screenshotV4 "Escenario20" "step03"
  
  When I select the members section
  And I wait for 2 seconds
  And I screenshotV4 "Escenario20" "step04"
  
  When I should have a members exits on the list
  And I wait for 2 seconds
  And I screenshotV4 "Escenario20" "step05"
  When I click on the members exist button
  And I wait for 2 seconds
  And I screenshotV4 "Escenario20" "step06"
  Then I should have a form to enter members information
  And I wait for 2 seconds
  And I screenshotV4 "Escenario20" "step07"
  When I click config exits members
  And I wait for 2 seconds
  And I screenshotV4 "Escenario20" "step08"
  When I click delete exits members
  And I wait for 2 seconds
  And I screenshotV4 "Escenario20" "step09"
  When I click delete members exits confirm
  And I wait for 5 seconds
  And I screenshotV4 "Escenario20" "step10"
  Then I member delete
  And I wait for 5 seconds
  And I screenshotV4 "Escenario20" "step11"

  