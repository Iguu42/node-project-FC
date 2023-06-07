import { pedido, pedido_status, nota_fiscal, pagamento, produto, cliente } from "@prisma/client";
import { prisma } from "../../../prisma/client";

export class GetAllPedidosUseCase {
    async execute(): Promise<any[]> {
        const pedidos = await prisma.pedido.findMany({
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
                        status_erro: true,
                        problema_resolvido: true
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
                timestempDataDaCompra: pedido.data_pedido_realizado,
                problemaResolvido: pedido.pedido_status.problema_resolvido
            };
        });

        return pedidosFormatados;

    }
}
