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
                        status_pedido: true
                    }
                },
                pagamento: {
                    select: {
                        valor: true,
                    }
                },
            }
        });

        const moment = require('moment');

        const pedidosFormatados = pedidos.map((pedido) => ({

            cpf: pedido.cliente.cpf,
            nome: pedido.cliente.nome_completo,
            numeroDoPedido: pedido.numero,
            valorTotal: pedido.pagamento.valor,
            dataDaCompra: moment(pedido.data_pedido_realizado).format('DD/MM/YYYY'),
            status_pedido: pedido.pedido_status.status_pedido
        }));
        return pedidosFormatados;
    }
}
