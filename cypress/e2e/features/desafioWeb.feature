Feature: Desafio Web
    Eu como candidato pretendo apresentar meus conhecimentos tecnicos em automação e testes 
    Apresento o Framework solicitado nos arquivo .doc e conforme solicitado, esta automação esta apta a:
    fazer busca de um produto
    Selecionar e incluir um ou mais produtos no mesmo no carrinho
    validar os produtos incluidos no carrinho apresentados na tela de pagamento, para realizar uma compra.



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
    Then o sistema deve apresentar uma popup mostando o produto no carrinho

  Scenario: Verificar produtos no carrinho na tela de pagamento
    Given que eu adicionei um produto ao carrinho
    When eu navego para a tela de pagamento
    Then eu devo ver todos os produtos que foram adicionados ao carrinho
  


