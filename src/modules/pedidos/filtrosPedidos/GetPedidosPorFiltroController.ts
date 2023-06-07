import { GetPedidosPorFiltroUseCase } from "./GetPedidosPorFiltroUseCase";
import { Request, Response } from "express";

export class GetPedidosPorFiltroController {
    async handle(req: Request, res: Response) {
        const { filtro } = req.params;

        const getPedidosPorFiltroUseCase = new GetPedidosPorFiltroUseCase();

        if (filtro) {
            const pedido = await getPedidosPorFiltroUseCase.execute(filtro.toUpperCase());

            if (!pedido) {
                return res.status(404).json({ message: "Filtro não encontrado." });
            }

            return res.status(200).json(pedido);
        }

        const result = await getPedidosPorFiltroUseCase.execute(filtro);

        return res.status(200).json(result);
    }
}
