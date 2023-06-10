import { pedido, comentario } from "@prisma/client";
import { prisma } from "../../../prisma/client";

export class CriarComentarioUseCase {

  async criarComentario(idPedido: string, conteudo: string): Promise<any> {

    try {
      const comentario = await prisma.comentario.create({
        data: {
          id_pedido: idPedido,
          conteudo: conteudo
        }
      });

      console.log('Comentário criado:', comentario);
    } catch (error) {
      console.error('Erro ao criar comentário:', error);
    }
  }
}