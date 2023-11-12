Feature: Realizar Login 

@user1 @web
Scenario: Como administrador quiero hacer login a ghost
  Given I navigate to page "<URL>"
  And I wait for 1 seconds
  When I login to ghost "<EMAIL>" "<PASSWORD>"
  And I wait for 5 seconds
  Then I should be logged
  
  When I select the tags section
  And I wait for 1 seconds
  Then I should have a new tag button

  When I click on the new tag button
  And I wait for 1 seconds
  Then I should have a form to enter tag information

  When I enter tag name
  And I wait for 1 seconds
  And I enter tag descripton
  And I wait for 1 seconds
  And I click Save
  And I wait for 1 seconds
  And I select the tags section
  And I wait for 1 seconds
  Then I should have a new tag on the list

  When I select the created tag
  And I wait for 1 seconds
  And I delete the tag
  And I wait for 2 seconds
  Then I confirm the delete operation
