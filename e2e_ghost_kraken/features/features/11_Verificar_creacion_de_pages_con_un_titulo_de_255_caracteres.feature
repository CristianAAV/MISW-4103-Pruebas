Feature: My feature

 @user4 @web
 Scenario: Verificar creación de pages con un titulo de 255 caracteres
Given I navigate to page "<URL>"
  And I wait for 2 seconds
  When I login to ghost "<EMAIL>" "<PASSWORD>"
  And I wait for 2 seconds
  Then I should be logged

  And I wait for 2 seconds
  Then I should be on the admin section
  When I click on the page
  And I wait for 2 seconds
  And I click on the new pages
  And I wait for 2 seconds
  And I click on the redact message inputbox
  And I wait for 2 seconds
  And I enter text "Hola mundo"
  And I wait for 2 seconds
  And I redact text
  And I wait for 2 seconds
  And I click on the redact message inputbox
  And I enter text "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed varius mauris nec nisi feugiat, ut tristique erat aliquam. Vivamus id quam at quam tempus interdum. Suspendisse vel semper nulla, a ullamcorper ipsum. Etiam eu mauris eu arcu interdum ultrices. Proin imperdiet ullamcorper enim, eu sollicitudin eros tincidunt sit amet. Nam ut nunc eget quam cursus fringilla. Integer quis urna ut neque fermentum dignissim non in nisl. In hac habitasse platea dictumst. Phasellus laoreet, neque eu feugiat scelerisque, erat turpis hendrerit mauris, in hendrerit justo orci eget dolor. Integer laoreet tellus in nisi fringilla, id convallis velit consequat."
  And I wait for 2 seconds
  And I Publisher
  And I wait for 2 seconds
  And I should have error
  And I wait for 2 seconds
  

  


