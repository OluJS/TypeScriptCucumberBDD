import WebLocators from '../locators/webLocators'
const URL = "http://demo.testfire.net/"

class HomePage{

    // Go to the home page
    static visitHomePage(){
        cy.visit(URL)
    }

    // Check that an image has loaded and is visible
    static checkImageHasLoaded(){
        cy.xpath('//td[2]/table[1]/tbody[1]/tr[1]/td[2]')
        .find('img')
        .should('be.visible')
        .should('have.attr', 'src')
        .should('include','home2')

    }
}

export default HomePage;