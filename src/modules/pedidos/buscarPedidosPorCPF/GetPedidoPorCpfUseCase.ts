import { pedido, pedido_status, nota_fiscal, pagamento, produto, cliente } from "@prisma/client";
import { prisma } from "../../../prisma/client";

export class GetPedidoPorCpfUseCase {
    async getPedidoPorCpf(numero: string): Promise<any | null> {
        if (numero.length === 11) {
            const clienteCpf = await prisma.cliente.findFirst({
                where: {
                    cpf: numero
                }
            });

            if (clienteCpf) {
                const pedido = await prisma.pedido.findMany({
                    where: {
                        id_cliente: clienteCpf.id_cliente
                    },
                    include: {
                        cliente: {
                            select: {
                                nome_completo: true,
                                cpf: true
                            }
                        },
                        pedido_status: {
                            select: {
                                status_pedido: true,
                                status_erro: true
                            }
                        },
                        nota_fiscal: {
                            select: {
                                numero_nota: true
                            }
                        },
                        pagamento: {
                            select: {
                                tipo_pagamento: true,
                                valor: true,
                                parcela: true
                            }
                        },
                        produto: {
                            select: {
                                nome_produto: true,
                                quantidade: true
                            }
                        }
                    }
                });

                if (!pedido) {
                    return null;
                }

                const pedidosFormatados = pedido.map((pedido) => ({
                    numero: pedido.numero,
                    status_pedido: pedido.pedido_status.status_pedido,
                    status_erro: pedido.pedido_status.status_erro,
                    numero_nota_fiscal: pedido.nota_fiscal.numero_nota,
                    data_pedido_realizado: pedido.data_pedido_realizado,
                    nome_cliente: pedido.cliente.nome_completo,
                    cpf_cliente: pedido.cliente.cpf,
                    tipo_pagamento: pedido.pagamento.tipo_pagamento,
                    valor_e_parcela: `${pedido.pagamento.parcela}x - R$${pedido.pagamento?.valor}`,
                    nome_produto: pedido.produto.nome_produto,
                    quantidade_produto: pedido.produto.quantidade
                }));

                return pedidosFormatados;
            }
        }
    }
}
