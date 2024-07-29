//Funções obtidas na pagina home que serão utilizadas nos steps 

//funções cypress 

Cypress.Commands.add('clica_na_lupita',() =>{
    cy.get('#searchSection')
        .should('be.visible')
        .click()
})

Cypress.Commands.add('digita_item_na_busca', (item_busca) =>{
    cy.get('#autoComplete')
        .should('be.enabled')
        .click()
        cy.get('#autoComplete')
        .should('be.enabled')
        .type(item_busca)
    cy.get('.searchPopUp')
        .should('be.visible')
        .should('contain.text', item_busca)
});



//funções javascript
export default {
    access_home() {
    cy.visit('/')
        .get('.logo>a')
        //.get('#laptopsTxt')
        .should('be.visible')
    },
   
    press_enter_na_busca(){
        cy.get('#autoComplete')
        .type('{enter}')
    }
}




