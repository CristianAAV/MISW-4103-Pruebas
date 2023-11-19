Feature: My feature

 @user1 @web
 Scenario: Iniciar crear y editar un pages
  Given I navigate to page "<URL1>"
  And I wait for 1 seconds
  When I login to ghost "<EMAIL>" "<PASSWORD>"
  And I screenshotV4 "Escenario09" "step01"
  And I wait for 1 seconds
  Then I should be logged
  And I screenshotV4 "Escenario09" "step02"
  
  And I wait for 7 seconds
  Then I should be on the admin section v4
  And I screenshotV4 "Escenario09" "step03"
  When I click on the page 
  And I screenshotV4 "Escenario09" "step04"
  And I wait for 2 seconds
  And I click on the new pages
  And I screenshotV4 "Escenario09" "step05"
  And I wait for 2 seconds
  And I click on the redact message inputbox
  And I screenshotV4 "Escenario09" "step06"
  And I wait for 2 seconds
  And I enter text "Hola mundo"
  And I screenshotV4 "Escenario09" "step07"
  And I wait for 2 seconds
  And I redact text v4
  And I screenshotV4 "Escenario09" "step08"
  And I wait for 2 seconds
  And I Publisher v4
  And I screenshotV4 "Escenario09" "step09"
  And I wait for 2 seconds
  And I Publisher final v4
  And I screenshotV4 "Escenario09" "step10"
  And I screenshotV4 "Escenario09" "step11"
  And I wait for 2 seconds
  Then I should see the confirmation message
  And I screenshotV4 "Escenario09" "step12"
  And I wait for 2 seconds
  And I redact text v4
  And I screenshotV4 "Escenario09" "step13"
  And I enter text "actualizacion"
  And I screenshotV4 "Escenario09" "step14"
  And I wait for 1 seconds
  And I update v4
  And I screenshotV4 "Escenario09" "step15"
  And I wait for 1 seconds
  And I confirmation update v4
  And I screenshotV4 "Escenario09" "step16"
  And I wait for 2 seconds
  Then I should see a notification with the message "Updated"
  And I screenshotV4 "Escenario09" "step17"
  And I wait for 2 seconds
  