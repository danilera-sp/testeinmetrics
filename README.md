# Documentação de Testes Automatizados com Cypress e Cucumber

## Visão Geral
Este repositório demonstra um conjunto de testes automatizados projetados para a plataforma Advantage Online Shopping, conforme solicitado pela equipe da InMetrics. Utilizando as ferramentas Cypress e Cucumber, este projeto evidencia meus conhecimentos em automação de testes e validação de sistemas.
Este trabalho reflete minha capacidade de aplicar técnicas de automação e meu conhecimento técnico, resultando em uma cobertura das funcionalidades solicitadas.


## Resultado dos Testes Manuais
Os testes manuais estão documentados em um arquivo PDF, disponível na pasta `Testes Manuais`.

## Estrutura do Projeto
- **Feature Files**: Contêm os cenários de teste escritos em linguagem Gherkin.
- **Step Definitions**: Implementam as etapas dos testes usando Cypress.
- **API Tests**: Validam a integração e a funcionalidade das APIs da plataforma.

## Requisitos
- **Node.js** (>= 12.x)
- **npm** (>= 6.x)
- **Cypress** (>= 12.x)
- **Cucumber** (>= 8.x)

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
   - Na interface do Test Runner, selecione os testes desejados para executar.

### Testes de API

1. **Executar Testes de API**:

    ```sh
    npx cypress run --spec 'cypress/integration/api/*.spec.js'
    ```

## Licença
Este projeto está licenciado sob a [Licença MIT](LICENSE).

## Contato
Para mais informações, entre em contato com a equipe da InMetrics através do e-mail: contato@inmetrics.com.br.
