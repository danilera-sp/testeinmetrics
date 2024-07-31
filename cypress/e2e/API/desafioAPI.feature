Feature: Desafio Web
    Eu como candidato pretendo apresentar meus conhecimentos tecnicos em automação em testes de API em formato gherkin 
    Apresento o Framework solicitado no arquivo .doc e conforme solicitação, esta automação esta apta a:
    Via API :
    fazer busca de um produto exibir a lista de produtos, atualizar imagem do produto e validar alteração. 



  Scenario: Buscar produtos utilizando a API de busca
    Given que o usuário possui acesso à API de busca de produtos
    When o usuário enviar uma requisição GET para o site com o parâmetro "HP Pavilion 15t"
    Then o sistema deve retornar uma lista com o produto "HP Pavilion 15t" buscado
    And a lista deve conter somente um produto
    And o status code da resposta deve ser 200


  Scenario: Atualizar Imagem do produto
    Given que o usuário possui acesso à API e esta autenticado
    When o usuário enviar uma requisição POST solicitando alteração da produto id "45"
    Then o sistema deve retornar json informando quantidade de imagens
    And o status code da resposta deve ser 200
