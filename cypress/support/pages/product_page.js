Cypress.Commands.add('product_detail', () => {
    cy.get('.roboto-regular.ng-scope.ng-scope.ng-scope.ng-scope.product_specifications')
    .should('be.visible')
    .should('have.text', 'PRODUCT SPECIFICATIONS')
})

Cypress.Commands.add('click_add_cart', () => {
    cy.get('.fixedBtn')
        .click()

})
