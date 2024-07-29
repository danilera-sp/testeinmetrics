Documentação de Testes Automatizados com Cypress e Cucumber
Visão Geral
Este repositório contém um conjunto de testes automatizados para a plataforma Advantage Online Shopping, desenvolvido com Cypress e Cucumber. O objetivo é demonstrar a aplicação de conhecimentos técnicos em automação e testes, focando em aspectos críticos da funcionalidade de e-commerce, incluindo a busca de produtos, a adição ao carrinho e a validação dos itens no checkout.

Estrutura do Projeto
Feature Files: Definem os cenários de teste em linguagem Gherkin.
Step Definitions: Implementam as etapas do teste usando Cypress.
API Tests: Validam a integração e a funcionalidade das APIs da plataforma.
Requisitos
Node.js (>= 12.x)
npm (>= 6.x)
Cypress (>= 12.x)
Cucumber (>= 8.x)
Configuração do Ambiente
Clonar o Repositório:

sh
Copy code
git clone https://github.com/seuusername/automation-testing.git
cd automation-testing
Instalar Dependências:

sh
Copy code
npm install
Execução dos Testes
Testes de Web
Abrir o Cypress Test Runner:

sh
Copy code
npx cypress open
Selecionar e Executar Testes:
Na interface do Test Runner, selecione os testes desejados para execução.

Testes de API
Para executar os testes de API em modo headless, utilize o seguinte comando:

sh
Copy code
npx cypress run --spec "cypress/integration/api_tests/*"
Estrutura dos Testes
Arquivo de Feature
O arquivo de feature define os cenários e passos para testar as funcionalidades principais do site. Ele é escrito na linguagem Gherkin para garantir clareza e facilidade de entendimento.

Feature: Desafio Web

gherkin
Copy code
Feature: Desafio Web
    Eu como candidato pretendo apresentar meus conhecimentos técnicos em automação e testes 
    Apresento o Framework solicitado nos arquivos .doc e conforme solicitado, esta automação está apta a:
    fazer busca de um produto
    Selecionar e incluir um ou mais produtos no carrinho
    Validar os produtos incluídos no carrinho apresentados na tela de pagamento, para realizar uma compra.

  Scenario: Buscar um produto específico
    Given que eu estou na página inicial do site Advantage Online Shopping
    And clico na lupa de busca
    And digito "laptop" na barra de busca
    When pressiono a tecla enter para buscar 
    Then eu devo ver uma lista "laptop"

  Scenario: Adicionar um produto ao carrinho
    Given que eu estou na página de resultados clico no primeiro produto apresentado
    And a tela com as informações detalhadas do produto são apresentadas
    When eu seleciono a quantidade de itens 
    And eu clico no botão Adicionar ao Carrinho
    Then o sistema deve apresentar uma popup mostrando o produto no carrinho

  Scenario: Verificar produtos no carrinho na tela de pagamento
    Given que eu adicionei um produto ao carrinho
    When eu navego para a tela de pagamento
    Then eu devo ver todos os produtos que foram adicionados ao carrinho
Definições de Etapas
As definições de etapas são implementadas em JavaScript usando o Cypress para interagir com a aplicação e verificar o comportamento esperado.

javascript
Copy code
const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import home_page from '../pages/home_page';
import results_page from '../pages/results_page';

beforeEach('Configurações Iniciais', ()=>{
    cy.viewport(1920,1080);
})

Given('que eu estou na página inicial do site Advantage Online Shopping', ()=>{
    home_page.access_home();
})

Given('clico na lupa de busca', () =>{
    cy.clica_na_lupita();
})

Given('que eu estou na página de resultados clico no primeiro produto apresentado',()=>{
    home_page.access_home();
    cy.clica_na_lupita();
    cy.digita_item_na_busca('laptop');
    home_page.press_enter_na_busca();
    results_page.fecha_busca();
    results_page.primeiro_produto();
})

Given('a tela com as informações detalhadas do produto são apresentadas',() => {
    cy.product_detail();
})

Given('que eu adicionei um produto ao carrinho',() => {
    home_page.access_home();
    cy.clica_na_lupita();
    cy.digita_item_na_busca('laptop');
    home_page.press_enter_na_busca();
    results_page.fecha_busca();
    results_page.primeiro_produto();
    cy.click_add_cart();
})

When('digito {string} na barra de busca', (item_procurado) => {
    cy.digita_item_na_busca(item_procurado);
})
When('pressiono a tecla enter para buscar', () =>{
    home_page.press_enter_na_busca();
})

When('eu seleciono a quantidade de itens',() => {
    cy.get('.plus')
        .should('be.visible')
        .click();
    cy.get('.minus')
        .click();
    cy.get(':nth-child(2) > .ng-pristine')
        .then((elemento) => {
        elemento.text();
        console.log(elemento);
        });
})

When('eu clico no botão Adicionar ao Carrinho',() => {
    cy.get('.fixedBtn')
        .click();
})

When('eu removo um item do carrinho', () => {
    cy.get('.removeProduct.iconCss.iconX')
        .should('be.visible')
        .click();
})

When('eu navego para a tela de pagamento', () => {
    cy.get('#shoppingCartLink').click();
    cy.get('#checkOutButton').click();
    cy.get('.roboto-regular.ng-scope.roboto-regular.ng-scope.roboto-regular.sticky')
        .should('have.text', 'ORDER PAYMENT');
})

Then('eu devo ver uma lista {string}', (item_encontrado) =>{
    results_page.fecha_busca();
    cy.results_busca(item_encontrado);
})

Then('o sistema deve apresentar uma popup mostrando o produto no carrinho', () => {
    cy.get('#shoppingCartLink > span:nth-child(2)')
        .should('have.text', '1').screenshot();
    cy.get('#shoppingCartLink').trigger('mouseover');
    cy.wait(1200);
    cy.screenshot();
})

Then('eu devo ver todos os produtos que foram adicionados ao carrinho', () => {
    cy.get('.itemsCount')
        .should('have.text', '1 ITEM');
    cy.get('#userCart')
        .should('contain', '');
    cy.get('#shoppingCartLink > span:nth-child(2)')
        .should('have.text', '1');
})