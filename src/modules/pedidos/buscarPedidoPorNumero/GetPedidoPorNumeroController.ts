import { GetPedidoPorNumeroUseCase } from "./GetPedidoPorNumeroUseCase";
import { Request, Response } from "express";

export class GetPedidoPorNumeroController {
    async handle(req: Request, res: Response) {
        const { numbers } = req.params;

        const getPedidoPorNumeroUseCase = new GetPedidoPorNumeroUseCase();

        if (numbers) {
            const pedido = await getPedidoPorNumeroUseCase.getPedidoPorNumero(numbers);

            if (!pedido) {
                return res.status(404).json({ message: "Pedido não encontrado." });
            }

            return res.status(200).json(pedido);
        }

        const result = await getPedidoPorNumeroUseCase.getPedidoPorNumero;

        return res.status(200).json(result);
    }
}
