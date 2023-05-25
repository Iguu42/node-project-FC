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
                        nome_completo: true
                    }
                }
            }
        });

        if (!pedido) {
            return null;
        }

        const pedidoFormatado = {
            id_pedido: pedido.id_pedido,
            numero_pedido: pedido.numero,
            data_pedido_realizado: pedido.data_pedido_realizado,
            cliente_nome_completo: pedido.cliente.nome_completo
        };

        return pedidoFormatado;
    }
}
