describe ('Teste API InMetrics - GET',() =>{

    it('GET - Busca de um produto', () =>{

        cy.request({
            method: 'GET',
            url:'https://www.advantageonlineshopping.com/catalog/api/v1/products/search?name=HP%20Pavilion%2015t%20Touch%20Laptop&quantityPerEachCategory=-1',
            failOnStatusCode: false
        }).as('find_one')

        cy.get('@find_one')
            .then((response) => {
        const categories = response.body;
        const produtos = categories[0].products[0]
                expect (response.status).equal(200)
                console.log('Product Name:', produtos.productName)
                expect (produtos.productName).equal('HP Pavilion 15t Touch Laptop')


            })
    })

})