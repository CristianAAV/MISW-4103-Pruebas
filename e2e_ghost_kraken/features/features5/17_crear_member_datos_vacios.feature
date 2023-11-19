
Feature: crear pagina

@user1 @web
Scenario: Como administrador quiero hacer login a ghost
Given I navigate to page "<URL>"
  And I wait for 2 seconds
  And I screenshotV5 "Escenario17" "step01"
  When I login to ghost "<EMAIL>" "<PASSWORD>"
  And I wait for 2 seconds
  And I screenshotV5 "Escenario17" "step02"
  Then I should be logged
  And I screenshotV5 "Escenario17" "step03"
  
  When I select the members section
  And I wait for 2 seconds
  And I screenshotV5 "Escenario17" "step04"
  Then I should have a new members button
  And I screenshotV5 "Escenario17" "step05"

  When I click on the new members button
  And I wait for 2 seconds
  And I screenshotV5 "Escenario17" "step06"
  Then I should have a form to enter members information


  And I wait for 2 seconds
  And I screenshotV5 "Escenario17" "step07"
  When I click Save members
  And I wait for 2 seconds
  Then I screenshotV5 "Escenario17" "step08"
  And I should have a error in email
  And I wait for 2 seconds
  And I screenshotV5 "Escenario17" "step09"
  Then I should have a color red in save Botton
  And I wait for 5 seconds
  And I screenshotV5 "Escenario17" "step10"
