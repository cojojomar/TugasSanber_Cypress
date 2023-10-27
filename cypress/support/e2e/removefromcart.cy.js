import homePage from "../pageObject/homePage"
import Login from "../pageObject/loginPage"

describe('Remove From Cart', () => {
    const login = new Login()
    const homepage = new homePage()
      
    beforeEach(() => {
      cy.visit('/',{ pageLoadTimeout: 120000 })
      login.inputUsername('standard_user')
      login.inputPassword('secret_sauce')
      login.clickLogin()
      homepage.clickAddToCart()
  })
    it('Succesfully Remove Item From Cart', () => {
      homepage.clickRemoveButton()
      homepage.addToCart()
    })
  })