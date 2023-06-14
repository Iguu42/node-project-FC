# Backend:

## Documentação Swagger: 
https://node-project-fc-production.up.railway.app/api-docs/

## Buscar todos os pedidos: 
https://node-project-fc-production.up.railway.app/pedidos/all

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

https://node-project-fc-production.up.railway.app/pedidos/all/{status aqui}


Exemplo de request: 

https://node-project-fc-production.up.railway.app/pedidos/all/Picking

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

https://node-project-fc-production.up.railway.app/pedido/{Número do pedido}

Exemplo de request: 

https://node-project-fc-production.up.railway.app/pedido/09741835

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


## Criar comentário em pedido: 

[Post]
https://node-project-fc-production.up.railway.app/comentarios

Obs: Passar id do pedido e o conteúdo da mensagem no body da requisição

Ex:

```
[
    {
        "idPedido": "83352426",
        "conteudo": "Status - Pedido na doca"
    }
]
```
Retorno esperado:

```
{
	"message": "Comentário criado com sucesso"
}
```


## Deletar comentário de um pedido:

[DELETE]
https://node-project-fc-production.up.railway.app/comentarios/{ID do comentário}

Exemplo de requisição:
https://node-project-fc-production.up.railway.app/comentarios/1

Retorno esperado:
```
{
    "message": "Comentário deletado com sucesso"
}
```

## Buscar comentários de um pedido:

[GET]
https://node-project-fc-production.up.railway.app/comentarios/{ID do pedido}

Exemplo de requisição:
https://node-project-fc-production.up.railway.app/comentarios/44462855

Retorno esperado:
```
[
	{
		"id_comentario": 1,
		"data_criacao": "2023-06-10T18:21:11.942Z",
		"conteudo": "oidsadasii",
		"id_pedido": "44462855",
		"comentario_pai_id": null
	},
	{
		"id_comentario": 3,
		"data_criacao": "2023-06-10T18:21:27.695Z",
		"conteudo": "alooooasdasdasdooooo",
		"id_pedido": "44462855",
		"comentario_pai_id": 1
	},
	{
		"id_comentario": 4,
		"data_criacao": "2023-06-10T18:22:01.109Z",
		"conteudo": "alooooasdasd5635464asdooooo",
		"id_pedido": "44462855",
		"comentario_pai_id": 1
	},
	{
		"id_comentario": 5,
		"data_criacao": "2023-06-10T18:22:23.240Z",
		"conteudo": "teste2",
		"id_pedido": "44462855",
		"comentario_pai_id": null
	},
	{
		"id_comentario": 7,
		"data_criacao": "2023-06-10T18:23:08.552Z",
		"conteudo": "teste2",
		"id_pedido": "44462855",
		"comentario_pai_id": 5
	}
]
```

## Responder comentário:

[POST]
https://node-project-fc-production.up.railway.app/comentarios/{ID do comentário}

Exemplo de requisição:
https://node-project-fc-production.up.railway.app/comentarios/2

Obs: Passar id do pedido e o conteúdo da resposta no body da requisição

```
{
    "resposta": "aloooooo",
    "id_pedido": 3
}
```


Retorno esperado:
```
{
    "message": "Comentário respondido com sucesso"
}
```
