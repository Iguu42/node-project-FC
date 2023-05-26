import {
  pedido,
  pedido_status,
  nota_fiscal,
  pagamento,
  produto,
  cliente
} from '@prisma/client'
import { prisma } from '../../../prisma/client'

export class GetPedidosDataUseCase {
  async allPedidosData(data: String): Promise<any[] | null> {
    const pedidos = await prisma.pedido.findMany({
      where: {
        data_pedido_realizado: {
          gte: new Date(`${data}`),
          lt: new Date(`${data}T23:59:59Z`)
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
    })

    if (!pedidos) {
      return null
    }

    const pedidosFormatados = pedidos.map(pedido => ({
      status_pedido: pedido.pedido_status.status_pedido,
      pedido: pedido.cliente.cpf,
      numero_nota_fiscal: pedido.nota_fiscal.numero_nota,
      data_pedido_realizado: pedido.data_pedido_realizado,
      nome_cliente: pedido.cliente.nome_completo,
      tipo_pagamento: pedido.pagamento.tipo_pagamento,
      valor_e_parcela: `${pedido.pagamento.parcela}x - R$${pedido.pagamento?.valor}`,
      nome_produto: pedido.produto.nome_produto,
      quantidade_produto: pedido.produto.quantidade
    }))

    return pedidosFormatados
  }
}
