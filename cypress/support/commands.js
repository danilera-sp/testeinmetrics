// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
    Cypress.Commands.add('valida_home',() =>{
        cy.visit('/')
            .get('#laptopsTxt')
            .should('be.visible')

    }),

    Cypress.Commands.add('adiciona_carrinho', ()=>{
        
        cy.get('#Description')
            .should('have.text','HP ENVY X360 - 15T LAPTOP ')


    }),

   // Cypress.Commands.add('', (){
    Cypress.Commands.add('click_na_lupa',() =>{
        cy.get('#searchSection')
            .should('be.visible')
            .click()
    })
    //})
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

