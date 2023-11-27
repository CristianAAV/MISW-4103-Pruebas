Feature: My feature

@user1 @web
Scenario: Iniciar y crear un nuevo pages
   Given I navigate to page "<URL1>"
  And I wait for 1 seconds
  When I login to ghost "<EMAIL>" "<PASSWORD>"
  And I screenshotV4 "Escenario08" "step01"
  And I wait for 1 seconds
  Then I should be logged
  And I screenshotV4 "Escenario08" "step02"
  And I wait for 7 seconds
  Then I should be on the admin section v4
  And I screenshotV4 "Escenario08" "step03"
  When I click on the page 
  And I screenshotV4 "Escenario08" "step04"
  And I wait for 2 seconds
  And I click on the new pages
  And I screenshotV4 "Escenario08" "step05"
  And I wait for 2 seconds
  And I click on the redact message inputbox
  And I wait for 2 seconds
  And I enter text "Hola mundo"
  And I screenshotV4 "Escenario08" "step06"
  And I wait for 2 seconds
  And I redact text v4
  And I wait for 2 seconds
  And I Publisher v4
  And I screenshotV4 "Escenario08" "step07"
  And I wait for 2 seconds
  And I Publisher final v4
  And I screenshotV4 "Escenario08" "step08"
  And I screenshotV4 "Escenario08" "step09"
  And I wait for 2 seconds
  Then I should see the confirmation message
  And I screenshotV4 "Escenario08" "step10"
  And I wait for 2 seconds

