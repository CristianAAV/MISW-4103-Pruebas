Feature: My feature

@user1 @web
Scenario: Iniciar ghost ( partiendo que existe un page) eliminamos un page
    Given I navigate to page "<URL1>"
  And I screenshotV4 "Escenario10" "step01"
  And I wait for 1 seconds
  When I login to ghost "<EMAIL>" "<PASSWORD>"
  And I screenshotV4 "Escenario10" "step02"
  And I wait for 1 seconds
  Then I should be logged
  And I screenshotV4 "Escenario10" "step03"
  
  And I wait for 7 seconds
  Then I should be on the admin section v4
  And I screenshotV4 "Escenario10" "step04"
  When I click on the page 
  And I screenshotV4 "Escenario10" "step05"
  And I wait for 2 seconds
  And I click list page v4
  And I screenshotV4 "Escenario10" "step06"
  And I wait for 2 seconds
  And I click button settings menu
  And I screenshotV4 "Escenario10" "step07"
  And I wait for 2 seconds
  And I click button delete page v4
  And I screenshotV4 "Escenario10" "step08"
  And I wait for 2 seconds
  And I click button delete page confirmation
  And I screenshotV4 "Escenario10" "step09"
  And I wait for 2 seconds
  Then I should be able to see the main page of pages
  And I screenshotV4 "Escenario10" "step10"
  And I wait for 2 seconds

 