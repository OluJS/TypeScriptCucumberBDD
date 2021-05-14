import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import HomePage from '../../pages/homePage'

Given('a Visitor navigates to the home page',()=>{
    HomePage.visitHomePage()

})

Then('the Visitor can see that the business card image had loaded', () =>{
    HomePage.checkImageHasLoaded()
})