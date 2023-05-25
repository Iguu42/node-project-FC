import { GetAllPedidosUseCase } from "./GetAllPedidosUseCase";
import { Request, Response } from "express";

export class GetAllPedidosController {
    async handle(req: Request, res: Response) {

        const getAllPedidosUseCase = new GetAllPedidosUseCase();

        const result = await getAllPedidosUseCase.execute();

        return res.status(200).json(result);
    }
}
