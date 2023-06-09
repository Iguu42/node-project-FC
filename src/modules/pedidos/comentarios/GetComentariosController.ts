import { Request, Response } from "express";
import { DeletarComentarioUseCase } from "./DeletarComentarioUseCase";
import { GetComentariosUseCase } from "./GetComentariosUseCase";

export class GetComentariosController{
    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const getComentariosUseCase = new GetComentariosUseCase();
        try {
            const comentarios = await getComentariosUseCase.getComentarios(parseInt(id));
            return res.status(200).json(comentarios);
        } catch (error) {
            console.error("Erro ao buscar comentários:", error);
            return res.status(500).json({ message: "Erro ao buscar comentários" });
        }
    }
}
