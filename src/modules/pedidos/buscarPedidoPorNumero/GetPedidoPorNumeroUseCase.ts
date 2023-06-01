import { pedido, pedido_status, nota_fiscal, pagamento, produto, cliente } from "@prisma/client";
import { prisma } from "../../../prisma/client";

export class GetPedidoPorNumeroUseCase {
    async getPedidoPorNumero(numero: string): Promise<any | null> {
        const pedido = await prisma.pedido.findFirst({
            where: {
                numero
            },
            include: {
                cliente: {
                    select: {
                        nome_completo: true,
                        cpf: true,
                        telefone: true,
                        email: true,
                        endereco: true
                    }
                }, produto: {
                    select: {
                        nome_produto: true,
                        referencia: true,
                        descricao: true,
                        quantidade: true,
                        valor: true,

                    }
                },
                pagamento: {
                    select: {
                        tipo_pagamento: true,
                        parcela: true,
                        id_transacao: true
                    }
                },
                pedido_status: {
                    select: {
                        status_pedido: true,
                        status_erro: true
                    }
                }

            }
        });

        if (!pedido) {
            return null;
        }

        const produtosFormatados: { nome: string; referencia: string; descricao: string; quantidade: number; valor_produto: number; valor_total_produto: number; }[] = [];
        pedido.produto.forEach((produto) => {
            const produtoFormatado = {
                nome: produto.nome_produto,
                referencia: produto.referencia,
                descricao: produto.descricao,
                quantidade: produto.quantidade,
                valor_produto: produto.valor,
                valor_total_produto: produto.valor * produto.quantidade
            };

            produtosFormatados.push(produtoFormatado);
        });
        const moment = require('moment');
        const pedidoFormatado = {
            cpf: pedido.cliente.cpf,
            nome: pedido.cliente.nome_completo,
            contato: pedido.cliente.telefone,
            email: pedido.cliente.email,
            endereco: pedido.cliente.endereco,
            numeroDoPedido: pedido.numero,
            produtos: produtosFormatados,
            tipo_pagamento: pedido.pagamento.tipo_pagamento,
            parcelas: pedido.pagamento.parcela,
            id_transacao: pedido.pagamento.id_transacao,
            dataDaCompra: moment(pedido.data_pedido_realizado).format('DD/MM/YYYY'),
            status_pedido: pedido.pedido_status.status_pedido,
            status_erro: pedido.pedido_status.status_erro
        };

        return pedidoFormatado;
    }
}