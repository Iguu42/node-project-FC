import { Request, Response } from "express";
import { CriarComentarioUseCase } from "./CriarComentarioUseCase";

export class CriarComentarioController {

  async handle(req: Request, res: Response) {
    const [{ idPedido, conteudo }] = req.body;

    const criarComentarioUseCase = new CriarComentarioUseCase();

    try {
      await criarComentarioUseCase.criarComentario(idPedido, conteudo);
      return res.status(201).json({ message: "Comentário criado com sucesso" });
    } catch (error) {
      console.error("Erro ao criar comentário:", error);
      return res.status(500).json({ message: "Erro ao criar comentário" });
    }
  }
}



