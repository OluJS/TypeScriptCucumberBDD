import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import LoginHubPage from "../../pages/loginHubPage"
import LoginPage from "../../pages/loginPage"

Given('a Visitor navigates to the login page',()=>{
    LoginPage.visitLoginPage()

})

When('a Visitor logs in with the {string} username and {string} password',(username, password)=>{
    LoginPage.enterUsername(username)
    LoginPage.enterPassword(password)
    LoginPage.clickLogin()

})

Then('the Visitor will see two accounts',()=>{
    LoginHubPage.canSeeTwoAccounts()

})

And('the Visitor logs out', () =>{
    LoginHubPage.signOut()

})

And('the Visitor can see the greeting message', () =>{
    LoginHubPage.canSeeGreetingMessage()
})

Then('the Visitor will see an error message', ()=>{
    LoginPage.showErrorMessage()
})