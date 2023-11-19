Feature: Realizar Login

@user1 @web
Scenario: Como administrador quiero publicar un post sin titulo y con comentario
  Given I navigate to page "<URL>"
  And I screenshotV5 "Escenario14" "step01"
  And I wait for 1 seconds
  When I login to ghost "<EMAIL>" "<PASSWORD>"
  And I screenshotV5 "Escenario14" "step02"
  And I wait for 1 seconds
  Then I should be logged
  And I screenshotV5 "Escenario14" "step03"
  
  When I select the posts section
  And I screenshotV5 "Escenario14" "step04"
  And I wait for 1 seconds
  Then I should have a new post button
  And I screenshotV5 "Escenario14" "step05"

  When I click on the new post button
  And I screenshotV5 "Escenario14" "step06"
  And I wait for 1 seconds
  And I shouldnt have a title to enter post information
  And I screenshotV5 "Escenario14" "step07"
  And I wait for 1 seconds
  And I click post descripton
  And I screenshotV5 "Escenario14" "step08"
  And I wait for 1 seconds
  And I enter post descripton
  And I screenshotV5 "Escenario14" "step09"
  And I wait for 1 seconds
  And I click Publish
  And I screenshotV5 "Escenario14" "step10"
  And I wait for 1 seconds
  And I click final review
  And I screenshotV5 "Escenario14" "step11"
  And I wait for 1 seconds
  And I click publish post
  And I screenshotV5 "Escenario14" "step12"
  And I wait for 5 seconds
  Then I should have a new post on the list
  And I screenshotV5 "Escenario14" "step13"