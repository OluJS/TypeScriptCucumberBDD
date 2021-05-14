import WebLocators from '../locators/webLocators'
const URL = "http://demo.testfire.net/login.jsp"

class LoginPage{
    
    // Go to the login page
    static visitLoginPage(){
        cy.visit(URL)
    }

    // Type username into the username text field
    static enterUsername(name){
        cy.get(WebLocators.USERNAME).type(name)
    }

    // Type password into the username text field
    static enterPassword(password){
        cy.get(WebLocators.PASSWORD).type(password)
    }

    // Click the login button
    static clickLogin(){
        cy.get(WebLocators.LOGIN_BUTTON).click()
    }

    // Check for error message
    static showErrorMessage(){
        cy.get(WebLocators.ERROR_MESSAGE).contains("Login Failed: We're sorry, but this username or password was not found in our system. Please try again.")
    }

}

export default LoginPage;