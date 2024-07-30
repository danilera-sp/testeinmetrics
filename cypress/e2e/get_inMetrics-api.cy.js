describe ('Teste API InMetrics - GET',() =>{

    it('GET - Busca de um produto', () =>{

        cy.request({
            method: 'GET',
            url:'https://www.advantageonlineshopping.com/catalog/api/v1/products/85',
            failOnStatusCode: false
        }).as('find_one')

        cy.get('@find_one')
            .then((response) => {
                expect (response.status).equal(200)
                console.log(response.body.productName)
                expect (response.body.productName).equal('Teste Laptop Cinza')


            })
    })

})