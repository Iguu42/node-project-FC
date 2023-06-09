import { Request, Response } from "express";
import { DeletarComentarioUseCase } from "./DeletarComentarioUseCase";

export class DeletarComentarioController {
    async handle(req: Request, res: Response) {
    const { id } = req.params;
    const deletarComentarioUseCase = new DeletarComentarioUseCase();
    
    try {
        await deletarComentarioUseCase.excluirComentario(parseInt(id));
        return res.status(200).json({ message: "Comentário deletado com sucesso" });
      } catch (error) {
        console.error("Erro ao deletar comentário:", error);
        return res.status(500).json({ message: "Erro ao deletar comentário" });
      }
  }
}
