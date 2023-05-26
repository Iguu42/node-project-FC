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

        const pedidosFormatados = pedidos.map((pedido) => ({
            numero: pedido.numero,
            status_pedido: pedido.pedido_status.status_pedido,
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
