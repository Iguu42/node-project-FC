import { Request, Response } from "express";
import { ResponderComentarioUseCase } from "./ResponderComentarioUseCase";

export class ResponderComentarioController{
    async handle(request: Request, response: Response): Promise<Response>{
        const { id_comentario } = request.params;
        const { resposta, id_pedido } = request.body;
        const responderComentarioUseCase = new ResponderComentarioUseCase();

        try {
            await responderComentarioUseCase.responderComentario(parseInt(id_comentario), id_pedido, resposta);
            return response.status(200).json({ message: "Comentário respondido com sucesso" });
        } catch (error) {
            console.error("Erro ao responder comentário:", error);
            return response.status(500).json({ message: "Erro ao responder comentário" });
        }
    }
}