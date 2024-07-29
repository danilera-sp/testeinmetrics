//Funções obtidas na pagina de resultados

//JavasCript
export default{
 
    //precisei criar pq não fecha no automatico a janelinha de busca. 
    fecha_busca(){
        cy.get('.autoCompleteCover>div')
        .click()
    },
    
    //seleciona o primeiro produto apresentado após realizar uma busca
    primeiro_produto(){
        cy.get(':nth-child(1) > :nth-child(4) > .productName')
            .should('be.visible')
            .click()
    }
}




//Cypress 
Cypress.Commands.add('results_busca', (prd_find)=>{
    cy.get('#searchResultLabel')
    .should('be.visible')
    .should('contain.text', 'Search result:')
    .and('contain.text', prd_find)
})