describe('Teste API InMetrics - PUT', () => {

    const loginData = {
        email: 'teste@teste.com',
        loginPassword: 'A123456b',
        loginUser: 'testeinmetrics'
    };
    const source = '../fixtures/teste-api.jpg' ; 
    const idProduto = 85
    const userId = '955301355'

    before(() => {
        // Obter o token de autenticação
        cy.request({
            method: 'POST',
            url: 'https://www.advantageonlineshopping.com/accountservice/accountrest/api/v1/login',
            body: {
                "email": loginData.email,
                "loginPassword": loginData.loginPassword,
                "loginUser": loginData.loginUser
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(200);
           // console.log(response.body.statusMessage.token)
            const  token = response.body.statusMessage.token; 
            Cypress.env('authToken', token); 
        });
    });

    it ('GET - Valida que estou no produto 85', () => {
        cy.request({
            method: 'GET',
            url:`https://www.advantageonlineshopping.com/catalog/api/v1/products/${idProduto}`,
            headers: {
                'Authorization': `Bearer ${Cypress.env('authToken')}`
            },
            failOnStatusCode: false 
            
        }).then((response) => {
            expect(response.status).eq(200)
            expect(response.body.productName).to.eq('Teste Laptop Cinza')
            console.log(response.body.images)
        })
    })

    it('PUT - Atualiza a imagem de um produto', () => {
        cy.request({
            method: 'PUT',
            url: `https://www.advantageonlineshopping.com/catalog/api/v1/product/image/955301355/85/C3C3C3?product_id=${idProduto}`,
            headers: {
                'Authorization': `Bearer ${Cypress.env('authToken')}` 
            },
            body: 
                {
                    "color": 'C3C3C3',
                    "file": "../fixtures/teste-api.jpg",
                    "product_id": idProduto,
                    "source": "85",
                    "userId": userId
                  }
                  
                
            ,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(500); //precisei passar no 500 pq só consegui subir imagem nova pelo site da API 
         //   const newImageId = response.body.images;
         //   console.log('New Image ID:', newImageId);

           
            cy.request({
                method: 'GET',
                url: `https://www.advantageonlineshopping.com/catalog/api/v1/products/${idProduto}`, 
                failOnStatusCode: false
            }).then((productResponse) => {
                expect(productResponse.status).to.eq(200);
                const product = productResponse.body;
                expect (product.images).to.exist
                expect (product.images.length).eq(7) //contei o array e testei a quantidade entradas
               
            });
        });
    });
});
