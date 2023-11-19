Feature: Realizar Login 

@user1 @web
Scenario: Como administrador quiero hacer login a ghost
  Given I navigate to page "<URL1>"
  And I wait for 1 seconds
  When I login to ghost "<EMAIL>" "<PASSWORD>"
  And I wait for 1 seconds
  Then I should be logged
  And I screenshotV4 "Escenario06" "step01"
  
  When I select the tags section
  And I wait for 1 seconds
  Then I should have a new tag button
  And I screenshotV4 "Escenario06" "step02"

  When I click on the new tag button
  And I wait for 1 seconds
  Then I should have a form to enter tag information
  And I screenshotV4 "Escenario06" "step03"

  When I enter tag name
  And I wait for 1 seconds
  And I enter tag descripton
  And I wait for 1 seconds
  And I click Save
  And I screenshotV4 "Escenario06" "step04"

  And I wait for 1 seconds
  And I select the tags section
  And I wait for 1 seconds
  Then I should have a new tag on the list
  And I screenshotV4 "Escenario06" "step05"

  When I select the created tag
  And I wait for 1 seconds
  And I screenshotV4 "Escenario06" "step06"
  
  And I enter an invalid description
  And I wait for 1 seconds
  And I screenshotV4 "Escenario06" "step07"

  And I click Save
  And I wait for 1 seconds
  Then I should have a retry button
  And I screenshotV4 "Escenario06" "step08"

