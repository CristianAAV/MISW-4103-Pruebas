Feature: Realizar Login 

@user1 @web
Scenario: Como administrador quiero hacer login a ghost
  Given I navigate to page "<URL>"
  And I wait for 1 seconds
  When I login to ghost "<EMAIL>" "<PASSWORD>"
  And I wait for 1 seconds
  Then I should be logged
  And I screenshotV5 "Escenario05" "step01"
 
  When I select the tags section
  And I wait for 1 seconds
  Then I should have a new tag button
  And I screenshotV5 "Escenario05" "step02"

  When I click on the new tag button
  And I wait for 1 seconds
  Then I should have a form to enter tag information
  And I screenshotV5 "Escenario05" "step03"

  When I enter tag name
  And I wait for 1 seconds
  And I enter tag descripton
  And I wait for 1 seconds
  And I click Save
  And I wait for 1 seconds
  And I screenshotV5 "Escenario05" "step04"

  And I select the tags section
  And I wait for 1 seconds
  Then I should have a new tag on the list
  And I screenshotV5 "Escenario05" "step05"

  When I select the created tag
  And I wait for 1 seconds
  And I modify the tittle of the created tag
  And I wait for 1 seconds
  And I screenshotV5 "Escenario05" "step06"

  And I click Save
  And I wait for 1 seconds
  Then I should have the modified tag on the list
  And I screenshotV5 "Escenario05" "step07"
