Feature: To Test the login Functionality of Application

  Scenario: Checking with valid credentials
    Given user launches chrome browser
    When user enter the url "https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F"
    When user enters username as "admin@yourstore.com" and password as "admin"
    And user clicks on login button
    And close browser

   Scenario Outline: Validating the credentials with mutliple data
   Given user launches chrome browser
   When user enter the url "https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F"
   When user enters username as "<email>" and password as "<password>"
   And user clicks on login button
   Then if login fails grab the error text displayed on screen
   And close browser
   
    Examples: 
    
      | email | password | 
      | admin@yourstore.com |     admin | 
      | admin@yourstore.com |     admin123 | 