Feature: Realizar Login 

@user1 @web
Scenario: Como administrador quiero hacer login a ghost
  Given I navigate to page "<URL1>"
  And I wait for 1 seconds
  And I screenshotV4 "Escenario02" "step01"

  When I login to ghost "<EMAIL>" "<PASSWORD>"
  And I wait for 1 seconds
  Then I should be logged
  And I screenshotV4 "Escenario02" "step02"
  
  When I select the tags section
  And I wait for 1 seconds
  Then I should have a new tag button
  And I screenshotV4 "Escenario02" "step03"

  When I click on the new tag button
  And I wait for 1 seconds
  Then I should have a form to enter tag information
  And I screenshotV4 "Escenario02" "step04"

  When I enter tag name
  And I wait for 1 seconds
  And I screenshotV4 "Escenario02" "step05"

  And I enter an invalid color
  And I wait for 1 seconds
  And I screenshotV4 "Escenario02" "step06"

  When I click Save
  And I wait for 1 seconds
  Then I should have a retry button
  And I screenshotV4 "Escenario02" "step07"
