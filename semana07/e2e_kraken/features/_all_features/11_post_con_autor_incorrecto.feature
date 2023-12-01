Feature: Realizar Login

@user1 @web
Scenario: Como administrador quiero publicar un post con un autor incorrecto
  Given I navigate to page "<URL>"
  And I wait for 1 seconds

  When I login to ghost "<EMAIL>" "<PASSWORD>"
  And I wait for 1 seconds
  Then I should be logged

  When I select the posts section
  And I wait for 1 seconds
  Then I should have a new post button

  When I click on the new post button
  And I wait for 1 seconds
  Then I should have a title to enter post information

  When I enter post name2
  And I wait for 1 seconds
  And I click post descripton
  And I wait for 1 seconds
  And I enter post descripton2
  And I click setting
  And I wait for 2 seconds
  And I click remove autor
  And I wait for 1 seconds
  And I enter autor
  And I wait for 2 seconds
  And I click setting
  And I wait for 2 seconds
  And I click Publish
  And I wait for 1 seconds
  Then I should have author error

