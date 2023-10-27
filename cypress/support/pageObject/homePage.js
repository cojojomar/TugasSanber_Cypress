class homePage {
    addToCart(){
        cy.get('#add-to-cart-sauce-labs-backpack').should('be.visible');
    }
    removeButton(){
        cy.get('#remove-sauce-labs-backpack').should('be.visible');
    }
    clickCartIcon(){
        cy.get('#shopping_cart_container').click();
    }
    clickAddToCart(){
        cy.get('#add-to-cart-sauce-labs-backpack').click();
    }
    clickRemoveButton(){
        cy.get('#remove-sauce-labs-backpack').click()
    }
    Validation(validWord){
        cy.contains(validWord).should('contain',validWord)
    }

}

export default homePage;