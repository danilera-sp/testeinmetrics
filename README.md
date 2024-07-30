# Documentação de Testes Automatizados com Cypress e Cucumber

## Visão Geral
Este repositório contém um conjunto de testes automatizados propostos pela equipe da InMetrics na plataforma Advantage Online Shopping, desenvolvido com Cypress e Cucumber. O objetivo é demonstrar a aplicação de um modo abrangente e demonstrar conhecimentos técnicos em automação e testes, focando em aspectos críticos da funcionalidade de e-commerce. Os testes incluem a busca de produtos, a adição de itens ao carrinho e a validação dos produtos no processo de checkout, evidenciando a capacidade de assegurar a qualidade e a funcionalidade da plataforma de forma eficiente e eficaz.


## Estrutura do Projeto
- **Feature Files**: Definem os cenários de teste em linguagem Gherkin.
- **Step Definitions**: Implementam as etapas do teste usando Cypress.
- **API Tests**: Validam a integração e a funcionalidade das APIs da plataforma.

## Requisitos
- Node.js (>= 12.x)
- npm (>= 6.x)
- Cypress (>= 12.x)
- Cucumber (>= 8.x)

## Configuração do Ambiente

1. **Clonar o Repositório**:

    ```sh
    git clone https://github.com/danilera-sp/testeinmetrics
    cd testeinmetrics
    ```

2. **Instalar Dependências**:

    ```sh
    npm install
    ```

## Execução dos Testes

### Testes de Web

1. **Abrir o Cypress Test Runner**:

    ```sh
    npx cypress open
    ```

2. **Selecionar e Executar Testes**:
   - Na interface do Test Runner
