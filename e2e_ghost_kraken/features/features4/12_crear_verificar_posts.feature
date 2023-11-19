Feature: Realizar Login

@user1 @web
Scenario: Como administrador quiero publicar un post
  Given I navigate to page "<URL1>"
  And I screenshotV4 "Escenario12" "step01"
  And I wait for 1 seconds
  When I login to ghost "<EMAIL>" "<PASSWORD>"
  And I screenshotV4 "Escenario12" "step02"
  And I wait for 1 seconds
  Then I should be logged
  And I screenshotV4 "Escenario12" "step03"
  
  When I select the posts section
  And I screenshotV4 "Escenario12" "step04"
  And I wait for 1 seconds
  Then I should have a new post button
  And I screenshotV4 "Escenario12" "step05"

  When I click on the new post button
  And I screenshotV4 "Escenario12" "step06"
  And I wait for 1 seconds
  Then I should have a title to enter post information
  And I screenshotV4 "Escenario12" "step07"

  When I enter post name
  And I screenshotV4 "Escenario12" "step08"
  And I wait for 1 seconds
  And I click post descripton 1
  And I screenshotV4 "Escenario12" "step09"
  And I wait for 1 seconds
  And I click Publish 1
  And I screenshotV4 "Escenario12" "step10"
  And I wait for 1 seconds
  And I click Publish 2
  And I screenshotV4 "Escenario12" "step11"
  And I wait for 1 seconds
  And I click publish post 1
  And I screenshotV4 "Escenario12" "step12"
  And I wait for 5 seconds
  Then I should have a new post on the list
  And I screenshotV4 "Escenario12" "step13"
  And I wait for 5 seconds