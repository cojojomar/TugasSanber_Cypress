import homePage from "../pageObject/homePage"
import Login from "../pageObject/loginPage"

describe('Add Item to Cart', () => {
    const login = new Login()
    const homepage = new homePage()

  beforeEach(() => {
    cy.visit('/',{ pageLoadTimeout: 120000 })
})

it('Succesfully Login', () => {
    login.inputUsername('standard_user')
    login.inputPassword('secret_sauce')
    login.clickLogin()
    homepage.Validation('Products')
  }),

  it('Login use invalid data', () => {
    login.inputUsername('standard_user')
    login.inputPassword('cojocjocj')
    login.clickLogin()
    homepage.Validation('Epic sadface: Username and password do not match any user in this service')

  })
})