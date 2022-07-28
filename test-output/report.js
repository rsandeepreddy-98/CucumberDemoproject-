$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "To Test the login Functionality of Application",
  "description": "",
  "id": "to-test-the-login-functionality-of-application",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Checking with valid credentials",
  "description": "",
  "id": "to-test-the-login-functionality-of-application;checking-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user launches chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enter the url \"https://admin-demo.nopcommerce.com/login?ReturnUrl\u003d%2Fadmin%2F\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters username as \"admin@yourstore.com\" and password as \"admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinationCheck.user_launches_chrome_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "https://admin-demo.nopcommerce.com/login?ReturnUrl\u003d%2Fadmin%2F",
      "offset": 20
    }
  ],
  "location": "StepDefinationCheck.user_enter_the_url(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 25
    },
    {
      "val": "admin",
      "offset": 63
    }
  ],
  "location": "StepDefinationCheck.user_enters_username_as_and_password_as(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinationCheck.user_clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinationCheck.close_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Validating the credentials with mutliple data",
  "description": "",
  "id": "to-test-the-login-functionality-of-application;validating-the-credentials-with-mutliple-data",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "user launches chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "user enter the url \"https://admin-demo.nopcommerce.com/login?ReturnUrl\u003d%2Fadmin%2F\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user enters username as \"\u003cemail\u003e\" and password as \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "if login fails grab the error text displayed on screen",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "close browser",
  "keyword": "And "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "to-test-the-login-functionality-of-application;validating-the-credentials-with-mutliple-data;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 20,
      "id": "to-test-the-login-functionality-of-application;validating-the-credentials-with-mutliple-data;;1"
    },
    {
      "cells": [
        "admin@yourstore.com",
        "admin"
      ],
      "line": 21,
      "id": "to-test-the-login-functionality-of-application;validating-the-credentials-with-mutliple-data;;2"
    },
    {
      "cells": [
        "admin@yourstore.com",
        "admin123"
      ],
      "line": 22,
      "id": "to-test-the-login-functionality-of-application;validating-the-credentials-with-mutliple-data;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 21,
  "name": "Validating the credentials with mutliple data",
  "description": "",
  "id": "to-test-the-login-functionality-of-application;validating-the-credentials-with-mutliple-data;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "user launches chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "user enter the url \"https://admin-demo.nopcommerce.com/login?ReturnUrl\u003d%2Fadmin%2F\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user enters username as \"admin@yourstore.com\" and password as \"admin\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "if login fails grab the error text displayed on screen",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinationCheck.user_launches_chrome_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "https://admin-demo.nopcommerce.com/login?ReturnUrl\u003d%2Fadmin%2F",
      "offset": 20
    }
  ],
  "location": "StepDefinationCheck.user_enter_the_url(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 25
    },
    {
      "val": "admin",
      "offset": 63
    }
  ],
  "location": "StepDefinationCheck.user_enters_username_as_and_password_as(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinationCheck.user_clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinationCheck.if_login_fails_grab_the_error_text_displayed_on_screen()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinationCheck.close_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 22,
  "name": "Validating the credentials with mutliple data",
  "description": "",
  "id": "to-test-the-login-functionality-of-application;validating-the-credentials-with-mutliple-data;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "user launches chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "user enter the url \"https://admin-demo.nopcommerce.com/login?ReturnUrl\u003d%2Fadmin%2F\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user enters username as \"admin@yourstore.com\" and password as \"admin123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "if login fails grab the error text displayed on screen",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinationCheck.user_launches_chrome_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "https://admin-demo.nopcommerce.com/login?ReturnUrl\u003d%2Fadmin%2F",
      "offset": 20
    }
  ],
  "location": "StepDefinationCheck.user_enter_the_url(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 25
    },
    {
      "val": "admin123",
      "offset": 63
    }
  ],
  "location": "StepDefinationCheck.user_enters_username_as_and_password_as(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinationCheck.user_clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinationCheck.if_login_fails_grab_the_error_text_displayed_on_screen()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinationCheck.close_browser()"
});
formatter.result({
  "status": "skipped"
});
});