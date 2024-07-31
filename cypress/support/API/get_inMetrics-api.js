
        Cypress.Commands.add('api_busca_produto', () => {
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
        Cypress.Commands.add('get_find_products', () => {
        cy.request({
            method: 'GET',
            url:'https://www.advantageonlineshopping.com/catalog/api/v1/products',
            failOnStatusCode: false
        }).as('api_search')

        cy.get('@api_search')
            .then((response) => {
                expect (response.status).equal(200)
        })

        })

        Cypress.Commands.add('get_busca_um_id', (id_item) =>{
        cy.request({
            method: 'GET',
            url:`https://www.advantageonlineshopping.com/catalog/api/v1/products/${id_item}`,
            failOnStatusCode: false
        }).as('api_search1')
            cy.get('@api_search1')
                .then((response) => {
                    console.log(response, 'teste')
                    expect (response.status).equal(200)
                })
        })

        Cypress.Commands.add('get_busca_um_item', (item_procurado) =>{
        cy.request({
            method: 'GET',
            url:`https://www.advantageonlineshopping.com/catalog/api/v1/products/search?name=${item_procurado}&quantityPerEachCategory=-1`,
            failOnStatusCode: false
        }).as('api_search1')
            cy.get('@api_search1')
                .then((response) => {
                    console.log(response, 'teste')
                    expect (response.status).equal(200)
                })
        })

        Cypress.Commands.add('valida_tamanho', () => {
        cy.get('@api_search1')
        .then((response) => {
            const resp_body = response.body
            expect (response.status).equal(200)
            expect (resp_body[0].products.length).eq(1)
        })
        })


        Cypress.Commands.add('apresenta_produto', (item_recebido) => {
        cy.get('@api_search1')
        .then((response) => {
            const resp_body = response.body
            expect (response.status).equal(200)
            expect (resp_body[0].products[0].productName)
                .to.include(item_recebido)
        })
        })

        Cypress.Commands.add('valida_prod_unico', () => {
        cy.get('@api_search1')
        .then((response) => {
            const resp_body = response.body
            expect (response.status).equal(200)
            expect (resp_body[0].products.length).eq(1)
        })
        })

        Cypress.Commands.add('valida200_ok', () => {
                cy.get('@api_search1')
                .then((response) => {
                    expect (response.status).equal(200)
        })
        })

        Cypress.Commands.add('valida_imagens_add', () =>{
            cy.request({
                method: 'GET',
                url:`https://www.advantageonlineshopping.com/catalog/api/v1/products/45`,
                failOnStatusCode: false
            }).as('api_search1')
               cy.get('@api_search1')
                    .then((response) => {
                        console.log(response.body.images.length)
                        expect (response.body.images.length).to.be.greaterThan(1)
        
                    })
        })