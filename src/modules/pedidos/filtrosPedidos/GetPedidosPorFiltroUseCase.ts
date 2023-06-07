import { pedido, pedido_status, nota_fiscal, pagamento, produto, cliente } from "@prisma/client";
import { prisma } from "../../../prisma/client";

export class GetPedidosPorFiltroUseCase {
    async execute(filtro: any): Promise<any[]> {
        const pedidos = await prisma.pedido.findMany({
            where: {
                pedido_status: {
                    status_pedido: filtro
                }
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
                produto: {
                    select: {
                        valor: true,
                        quantidade: true
                    }
                },
            }
        });

        const moment = require('moment');

        const pedidosFormatados = pedidos.map((pedido) => {
            const valorTotal = pedido.produto.reduce((total, produto) => {
                return total + (produto.valor * produto.quantidade);
            }, 0);

            return {
                cpf: pedido.cliente.cpf,
                nome: pedido.cliente.nome_completo,
                numeroDoPedido: pedido.numero,
                status_erro: pedido.pedido_status.status_erro,
                valorTotal: valorTotal,
                dataDaCompra: moment(pedido.data_pedido_realizado).format('DD/MM/YYYY'),
                status_pedido: pedido.pedido_status.status_pedido,
            };
        });

        return pedidosFormatados;

    }
}
