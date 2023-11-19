Feature: My feature

 @user2 @web
 Scenario: Iniciar crear y editar un pages
    Given I navigate to page "<URL>"
  And I wait for 1 seconds
  When I login to ghost "<EMAIL>" "<PASSWORD>"
  And I screenshotV5 "Escenario09" "step01"
  And I wait for 1 seconds
  Then I should be logged
  And I screenshotV5 "Escenario09" "step02"

  And I wait for 7 seconds
  Then I should be on the admin section
  And I screenshotV5 "Escenario09" "step03"
  When I click on the page
  And I screenshotV5 "Escenario09" "step04"
  And I wait for 2 seconds
  And I click on the new pages
  And I screenshotV5 "Escenario09" "step05"
  And I wait for 2 seconds
  And I click on the redact message inputbox
  And I screenshotV5 "Escenario09" "step06"
  And I wait for 2 seconds
  And I enter text "Hola mundo"
  And I screenshotV5 "Escenario09" "step07"
  And I wait for 2 seconds
  And I redact text
  And I screenshotV5 "Escenario09" "step08"
  And I wait for 2 seconds
  And I Publisher
  And I screenshotV5 "Escenario09" "step09"
  And I wait for 2 seconds
  And I Publisher final
  And I screenshotV5 "Escenario09" "step10"
  And I wait for 2 seconds
  And I Publisher final2
  And I screenshotV5 "Escenario09" "step11"
  And I wait for 2 seconds
  And I should have a new Pages
  And I screenshotV5 "Escenario09" "step12"
  And I wait for 2 seconds
  And I back edit
  And I screenshotV5 "Escenario09" "step13"
  And I wait for 2 seconds
  And I new edit
  And I screenshotV5 "Escenario09" "step14"
  And I enter text "Texto editado"
  And I screenshotV5 "Escenario09" "step15"
  And I wait for 2 seconds
  And I update
  And I screenshotV5 "Escenario09" "step16"
  And I wait for 1 seconds
  Then I should see a notification with the message "Updated"
  And I screenshotV5 "Escenario09" "step17"
  And I wait for 2 seconds
  

