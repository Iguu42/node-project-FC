import { prisma } from "../../../prisma/client";

export class ResponderComentarioUseCase{
    public responderComentario = async (id_comentario: number, id_pedido: number, resposta: string) => {

        const novaResposta = await prisma.comentario.create({
          data: {
            id_pedido: id_pedido,
            conteudo: resposta,
            comentario_pai_id: id_comentario
          }
        });
    
        return novaResposta;
      }
}