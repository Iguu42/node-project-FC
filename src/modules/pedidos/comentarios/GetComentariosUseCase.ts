import { prisma } from "../../../prisma/client";

export class GetComentariosUseCase {
  async getComentarios(idPedido: string): Promise<any> {
    const comentarios = await prisma.comentario.findMany({
      where: {
        id_pedido: idPedido
      },
    });
    return comentarios;
  }
}