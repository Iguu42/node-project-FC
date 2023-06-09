import { prisma } from "../../../prisma/client";

export class DeletarComentarioUseCase {

  public excluirComentario = async (id_comentario: number) => {
    await prisma.comentario.delete({
      where: {
        id_comentario: id_comentario
      }
    });
  }
}







