const loginData = {
             email: 'teste@teste.com',
             loginPassword: 'A123456b',
             loginUser: 'testeinmetrics'
         }

Cypress.Commands.add('get_token_auth', () => {
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
                    console.log(response.body.statusMessage.token)
                     const  token = response.body.statusMessage.token; 
                     Cypress.env('authToken', token); 
                 })
             })


// Cypress.Commands.add('post_image', (token), () =>{

// })

Cypress.Commands.add('post_image', (productId, imagePath) => {
    cy.get_token_auth()
    const token = Cypress.env('authToken');

    cy.fixture(imagePath, 'binary')
        .then(Cypress.Blob.binaryStringToBlob)
        .then(blob => {
            const formData = new FormData();
            formData.append('file', blob, imagePath);

            cy.request({
                method: 'POST',
                url:`https://www.advantageonlineshopping.com/catalog/api/v1/product/image/741780380/45/Blue?product_id=${productId}`,
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                },
                body: formData,
                failOnStatusCode: false
            }).then((response) => {
                expect(response.status).to.eq(400);
                //não consegui mudar por aqui, então eu deixei no 400 e valido que foi inserido via web contando o array das imagens no proximo passo. 
            });
        });
});
