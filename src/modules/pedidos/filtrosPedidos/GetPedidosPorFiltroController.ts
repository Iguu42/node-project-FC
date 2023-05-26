import { GetPedidosPorFiltroUseCase } from "./GetPedidosPorFiltroUseCase";
import { Request, Response } from "express";

export class GetPedidosPorFiltroController {
    async handle(req: Request, res: Response) {

        const getPedidosPorFiltroUseCase = new GetPedidosPorFiltroUseCase();

        const result = await getPedidosPorFiltroUseCase.execute();

        return res.status(200).json(result);
    }
}
