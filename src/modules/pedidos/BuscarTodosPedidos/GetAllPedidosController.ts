import { GetAllPedidosUseCase } from "./GetAllPedidosUseCase";
import { Request, Response } from "express";

export class GetAllPedidosController {
    async handle(req: Request, res: Response) {

        const getAllPedidosUseCase = new GetAllPedidosUseCase();

        const result = await getAllPedidosUseCase.execute();
        res.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate');
        return res.status(200).json(result);
    }
}
