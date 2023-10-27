class Login{

    inputUsername(username){
        cy.get('input[id="user-name"]').type(username)
    }
    inputPassword(password){
        cy.get('input[id="password"]').type(password)
    }
    clickLogin(){
        cy.get('input[id="login-button"]').click()
    }

}

export default Login;