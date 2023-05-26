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
        "dataDaCompra": "26/05/2023",
        "status_pedido": "Picking"
    },
    {
        "cpf": "54627413097",
        "nome": "Igor Vitor",
        "numeroDoPedido": "03860724",
        "valorTotal": 500,
        "dataDaCompra": "26/05/2023",
        "status_pedido": "NaoEntregue"
    }
]
```
## Buscar todos os pedidos por um status específico: 
Todos os status:
 - Faturado
 - Picking
 - NaoEntregue
 - Sincronizacao
 - Antifraude
 - Captura
 - Entregue

https://backend-node-fc-rise-up.cyclic.app/pedidos/all/{status aqui}

OBS: É necessário passar exatamente como está a cima com a primeira letra maiúscula.

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
        "dataDaCompra": "26/05/2023",
        "status_pedido": "Picking"
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
    "cpf": "54627413097",
    "nome": "Igor Vitor",
    "contato": "85974654",
    "email": "igorteste@gmail.com",
    "endereco": "teste",
    "numeroDoPedido": "09741835",
    "produto": "Cadeira de Praia",
    "referencia": "0041535676",
    "descricao": "cadeira de praia de ferro",
    "quantidade": 10,
    "valor_produto": 100,
    "valor_total_produto": 1000,
    "tipo_pagamento": "Cartão de Crédito - VISA",
    "parcelas": 2,
    "id_transacao": 214244276,
    "dataDaCompra": "26/05/2023"
}
```
