Feature: Realizar Login

@user1 @web
Scenario: Como administrador quiero crear un post y hacer el preview
  Given I navigate to page "<URL>"
  And I screenshotV5 "Escenario15" "step01"
  And I wait for 1 seconds
  When I login to ghost "<EMAIL>" "<PASSWORD>"
  And I screenshotV5 "Escenario15" "step02"
  And I wait for 1 seconds
  Then I should be logged
  And I screenshotV5 "Escenario15" "step03"
  
  When I select the posts section
  And I screenshotV5 "Escenario15" "step04"
  And I wait for 1 seconds
  Then I should have a new post button
  And I screenshotV5 "Escenario15" "step05"

  When I click on the new post button
  And I screenshotV5 "Escenario15" "step06"
  And I wait for 1 seconds
  Then I should have a title to enter post information
  And I screenshotV5 "Escenario15" "step07"

  When I enter post name
  And I screenshotV5 "Escenario15" "step08"
  And I wait for 1 seconds
  And I click post descripton
  And I screenshotV5 "Escenario15" "step09"
  And I wait for 1 seconds
  And I click Preview
  And I screenshotV5 "Escenario15" "step10"
  And I wait for 7 seconds
  And I click Publish
  And I wait for 1 seconds
  And I screenshotV5 "Escenario15" "step11"
  And I click final review
  And I wait for 1 seconds
  And I screenshotV5 "Escenario15" "step12"
  And I click publish post
  And I screenshotV5 "Escenario15" "step13"
  And I wait for 5 seconds
  Then I should have a new post on the list
  And I screenshotV5 "Escenario15" "step14"