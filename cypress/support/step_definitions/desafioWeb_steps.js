const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import home_page from '../pages/home_page';
import results_page from '../pages/results_page';


beforeEach('Ajustes', ()=>{
    cy.viewport(1920,1080)
})


    Given('que eu estou na página inicial do site Advantage Online Shopping', ()=>{
        //to validando com a palavra laptop que aparece logo na pagina inicial.
       home_page.access_home()
    })

    Given('clico na lupa de busca', () =>{
        cy.clica_na_lupita()
    })

    Given('que eu estou na página de resultados clico no primeiro produto apresentado',()=>{
        home_page.access_home()
        cy.clica_na_lupita()
        cy.digita_item_na_busca('laptop')
        home_page.press_enter_na_busca()
        results_page.fecha_busca()
        results_page.primeiro_produto()
    })

    Given('a tela com as informações detalhadas do produto são apresentadas',() => {
        cy.product_detail()
    })

    Given('que eu adicionei um produto ao carrinho',() => {
        home_page.access_home()
        cy.clica_na_lupita()
        cy.digita_item_na_busca('laptop')
        home_page.press_enter_na_busca()
        results_page.fecha_busca()
        results_page.primeiro_produto()
        cy.click_add_cart()
    })

    When('digito {string} na barra de busca', (item_procurado) => {
        cy.digita_item_na_busca(item_procurado)
    })
    When('pressiono a tecla enter para buscar', () =>{
        home_page.press_enter_na_busca()
    })

    When('eu seleciono a quantidade de itens',() => {
        cy.get('.plus')
            .should('be.visible')
            .click()
        cy.get('.minus')
           // .should('be.visile')
            .click()
       // cy.get('.ng-pristine.ng-valid.ng-touched')
        cy.get(':nth-child(2) > .ng-pristine')
             .then((elemento) => {
             elemento.text()
             console.log (elemento)
             })
           
        
    })

    When('eu clico no botão Adicionar ao Carrinho',() => {
        cy.get('.fixedBtn')
        //    .should('be.visible')
        //    .should('be.clickable')
            .click()

    })

    When('eu removo um item do carrinho', () => {
        cy.get('.removeProduct.iconCss.iconX')
            .should('be.visible')
            .click()
    })

    When('eu navego para a tela de pagamento', () => {
        cy.get('#shoppingCartLink').click()
        cy.get('#checkOutButton').click()
        cy.get('.roboto-regular.ng-scope.roboto-regular.ng-scope.roboto-regular.sticky')
            .should('have.text', 'ORDER PAYMENT')
    })


    Then('eu devo ver uma lista {string}', (item_encontrado) =>{
        results_page.fecha_busca()
        cy.results_busca(item_encontrado)
    })

    Then('o sistema deve apresentar uma popup mostando o produto no carrinho', () => {
        cy.get('#shoppingCartLink > span:nth-child(2)')
            .should('have.text', '1').screenshot()

        cy.get('#shoppingCartLink').trigger('mouseover')
        cy.wait(1200)
        cy.screenshot()
    })

    Then('eu devo ver todos os produtos que foram adicionados ao carrinho', () => {
        cy.get('.itemsCount')
            .should('have.text', '1 ITEM')
        
        cy.get('#userCart')
            .should('contain', '')
            cy.get('#shoppingCartLink > span:nth-child(2)')
                .should('have.text', '1')
    })