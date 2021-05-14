Feature: Login Functionality

    As a developer
    I want to verify the login and logout functionality
    So that customers are able to access their account

    Scenario: Valid Login
        Given a Visitor navigates to the login page
        When a Visitor logs in with the 'admin' username and 'admin' password
        And the Visitor can see the greeting message
        Then the Visitor will see two accounts
        And the Visitor logs out

    Scenario Outline: Invalid Login
        Given a Visitor navigates to the login page
        When a Visitor logs in with the '<username>' username and '<password>' password
        Then the Visitor will see an error message 
            Examples:
                | username | password |
                | admi     | admin    |
                | admin    | admi     |