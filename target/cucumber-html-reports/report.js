$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Facebook Login Page application",
  "description": "",
  "id": "facebook-login-page-application",
  "keyword": "Feature"
});
formatter.before({
  "duration": 79787780599,
  "status": "passed"
});
formatter.scenario({
  "line": 2,
  "name": "Check Login functionality with valid credentials",
  "description": "",
  "id": "facebook-login-page-application;check-login-functionality-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Navigate to Facebook Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enters username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "User redirected to Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "FacebookLogin.navigate_to_facebook_login_page()"
});
formatter.result({
  "duration": 14695402301,
  "status": "passed"
});
formatter.match({
  "location": "FacebookLogin.user_enters_username_and_password()"
});
formatter.result({
  "duration": 290905400,
  "status": "passed"
});
formatter.match({
  "location": "FacebookLogin.user_redirected_to_home_page()"
});
formatter.result({
  "duration": 50036865000,
  "status": "passed"
});
formatter.after({
  "duration": 693172800,
  "status": "passed"
});
});