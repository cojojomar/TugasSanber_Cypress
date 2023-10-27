import homePage from "../pageObject/homePage"
import Login from "../pageObject/loginPage"


describe('Add Item to Cart', () => {
  const login = new Login()
  const homepage = new homePage()
    
  beforeEach(() => {
    cy.visit('/',{ pageLoadTimeout: 120000 })
    login.inputUsername('standard_user')
    login.inputPassword('secret_sauce')
    login.clickLogin()
})
  it('Succesfully Add Item to Cart', () => {
    homepage.clickAddToCart()
    homepage.removeButton()
  })
})