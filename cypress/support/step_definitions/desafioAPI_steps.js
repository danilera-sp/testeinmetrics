import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import '../API/get_inMetrics-api'
import '../API/put_inMetrics-api'

Given('que o usuário possui acesso à API de busca de produtos', () => {
    cy.get_find_products()
})

Given('que o usuário possui acesso à API e esta autenticado', () => {
    cy.get_token_auth()
})

When('o usuário enviar uma requisição GET para o site com o parâmetro {string}', (item_procurado) => {
    cy.get_busca_um_item(item_procurado)
    cy.valida200_ok()
})

When(`o usuário enviar uma requisição POST solicitando alteração da produto id {string}`, (id_procurado) => {
    cy.post_image(id_procurado,id_procurado)
})

Then(`o sistema deve retornar uma lista com o produto {string} buscado`, (item_listado) => {
    cy.apresenta_produto(item_listado)
})

Then('a lista deve conter somente um produto', ()=> {
    cy.valida_prod_unico()
})

Then('o sistema deve retornar json informando quantidade de imagens', () => {
    cy.valida_imagens_add()
})

Then('o status code da resposta deve ser 200', () => {
    cy.valida200_ok()
})
