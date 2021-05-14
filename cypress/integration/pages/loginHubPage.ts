import WebLocators from '../locators/webLocators'
const URL = "hhttp://demo.testfire.net/bank/main.jsp"

class LoginHubPage{

    // Check for greeting message
    static canSeeGreetingMessage(){
        cy.get(WebLocators.GREETING_MESSAGE).should('be.visible')
    }

    /* Checking multiple child elements, unwrapping them, mapping them to their
    value and comparing arrays */
    static canSeeTwoAccounts(){
        cy.get('#listAccounts').find('option').then(options => {
            const actual = [...options].map(o => o.value)
            expect(actual).to.deep.eq(['800000', '800001'])
          })
    }

    // Clicking the sign out button
    static signOut(){
        cy.get(WebLocators.SIGN_OUT_BUTTON).click()
    }

}

export default LoginHubPage;