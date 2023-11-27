Feature: Realizar Login

@user1 @web
Scenario: Como administrador quiero crear y editar un post
  Given I navigate to page "<URL>"
  And I screenshotV5 "Escenario13" "step01"
  And I wait for 1 seconds
  When I login to ghost "<EMAIL>" "<PASSWORD>"
  And I screenshotV5 "Escenario13" "step02"
  And I wait for 1 seconds
  Then I should be logged
  And I screenshotV5 "Escenario13" "step03"

  When I select the posts section
  And I screenshotV5 "Escenario13" "step04"
  And I wait for 1 seconds
  Then I should have a new post button
  And I screenshotV5 "Escenario13" "step05"

  When I click on the new post button
  And I screenshotV5 "Escenario13" "step06"
  And I wait for 1 seconds
  Then I should have a title to enter post information
  And I screenshotV5 "Escenario13" "step07"

  When I enter post name
  And I screenshotV5 "Escenario13" "step08"
  And I wait for 1 seconds
  And I click post descripton
  And I screenshotV5 "Escenario13" "step09"
  And I wait for 1 seconds
  And I click Publish
  And I screenshotV5 "Escenario13" "step10"
  And I screenshotV5 "Escenario13" "step11"
  And I wait for 1 seconds
  And I click final review
  And I screenshotV5 "Escenario13" "step12"
  And I screenshotV5 "Escenario13" "step13"
  And I wait for 1 seconds
  And I click publish post
  And I screenshotV5 "Escenario13" "step14"
  And I screenshotV5 "Escenario13" "step15"
  And I wait for 5 seconds
  And I click edit post
  And I screenshotV5 "Escenario13" "step16"
  And I wait for 1 seconds
  And I enter post descripton
  And I screenshotV5 "Escenario13" "step17"
  And I wait for 2 seconds
