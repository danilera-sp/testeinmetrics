describe('Teste API InMetrics - PUT', () => {

    const loginData = {
        email: 'teste@teste.com',
        loginPassword: 'A123456b',
        loginUser: 'testeinmetrics'
    };
    const source = '../fixtures/teste-api.jpg' ; 
   
    const userId = '710740848'

    before(() => {
        // Obter o token de autenticação
        cy.request({
            method: 'POST',
            url: 'https://www.advantageonlineshopping.com/accountservice/accountrest/api/v1/login',
            body: {
                "email": "teste@teste.com",
                "loginPassword": "A123456b",
                "loginUser": "testeinmetrics"
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(200);
            console.log(response.body.statusMessage.token)
            const  token = response.body.statusMessage.token; 
            Cypress.env('authToken', token); // Opcional: Armazene o token em variável de ambiente
        });
    });

    it('PUT - Atualiza a imagem de um produto', () => {
        cy.request({
            method: 'PUT',
            url: 'https://www.advantageonlineshopping.com/catalog/api/v1/product/image/710740848/10/red?product_id=1',
            headers: {
                'Authorization': `Bearer ${Cypress.env('authToken')}` // Inclua o token de autenticação
            },
            body: 
                {
                    "color": 'red',
                    "file": "../fixtures/teste-api.jpg",
                    "product_id": "1",
                    "source": "10",
                    "userId": "710740848"
                  }
                  
                
            ,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(200); // Verifique o status code
            const newImageId = response.body.imageId; // Supondo que a resposta contenha um ID de imagem novo
            console.log('New Image ID:', newImageId);

            // Verifique se a imagem foi atualizada corretamente
            cy.request({
                method: 'GET',
                url: `https://www.advantageonlineshopping.com/catalog/api/v1/products/${productId}`, // Endpoint para obter detalhes do produto
                failOnStatusCode: false
            }).then((productResponse) => {
                expect(productResponse.status).to.eq(200);
                const product = productResponse.body;
                expect(product.images).to.include(newImageId); // Verifique se o novo ID de imagem está presente na resposta
            });
        });
    });
});
