import { GetPedidoPorCpfUseCase } from "./GetPedidoPorCpfUseCase";
import { Request, Response } from "express";

export class GetPedidoPorCpfController {
    async handle(req: Request, res: Response) {
        const { cpf } = req.params;

        const getPedidoPorCpfUseCase = new GetPedidoPorCpfUseCase();

        if (cpf) {
            const pedidos = await getPedidoPorCpfUseCase.getPedidoPorCpf(cpf);

            if (!pedidos) {
                return res.status(404).json({ message: "Pedido não encontrado." });
            }

            return res.status(200).json(pedidos);
        }

        const result = await getPedidoPorCpfUseCase.getPedidoPorCpf;

        return res.status(200).json(result);
    }
}
