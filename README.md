# Backend:

## Buscar todos os pedidos: 
https://backend-node-fc-rise-up.cyclic.app/pedidos/all

Retorno esperado:

```
[
    {
        "cpf": "54627413097",
        "nome": "Igor Vitor",
        "numeroDoPedido": "09741835",
        "valorTotal": 1000,
        "status_erro": false,
        "dataDaCompra": "26/05/2023",
        "status_pedido": "Picking"
    },
    {
        "cpf": "54627413097",
        "nome": "Igor Vitor",
        "numeroDoPedido": "03860724",
        "valorTotal": 500,
        "status_erro": true,
        "dataDaCompra": "26/05/2023",
        "status_pedido": "NaoEntregue"
    }
]
```
## Buscar todos os pedidos por um status específico: 
Todos os status:
 - FATURADO
 - PICKING
 - NAOENTREGUE
 - TRANSPORTE
 - ANTIFRAUDE
 - CAPTURA
 - ENTREGUE

https://backend-node-fc-rise-up.cyclic.app/pedidos/all/{status aqui}


Exemplo de request: 

https://backend-node-fc-rise-up.cyclic.app/pedidos/all/Picking

Retorno esperado:
````
[
    {
        "cpf": "54627413097",
        "nome": "Igor Vitor",
        "numeroDoPedido": "09741835",
        "valorTotal": 1000,
        "status_erro": false,
        "dataDaCompra": "26/05/2023",
        "status_pedido": "PICKING",
        "status_erro": false
    }
]
````

## Buscar pedido específico: 

https://backend-node-fc-rise-up.cyclic.app/pedido/{Número do pedido}

Exemplo de request: 

https://backend-node-fc-rise-up.cyclic.app/pedido/09741835

Retorno esperado:

```
{
    "cpf": "89411101674",
    "nome": "Igor Félix ",
    "contato": "081997300313",
    "email": "igorFelix@gmail.com",
    "endereco": "Rua José De Alcantara, 41B. Curado IV, Jaboatão dos Guararapes, PE.",
    "numeroDoPedido": "83352426",
    "produtos": [
        {
            "nome": "Cadeira de madeira",
            "referencia": "0009002987",
            "descricao": "Cadeira de madeira",
            "quantidade": 3,
            "valor_produto": 130,
            "valor_total_produto": 390
        },
        {
            "nome": "Serra Mármore Bosch ",
            "referencia": "0012723862",
            "descricao": "Serra Mármore Bosch ",
            "quantidade": 1,
            "valor_produto": 300,
            "valor_total_produto": 300
        }
    ],
    "tipo_pagamento": "Cartão de Crédito - VISA",
    "parcelas": 3,
    "id_transacao": "073250768",
    "dataDaCompra": "31/05/2023",
    "status_erro": false
}
```
