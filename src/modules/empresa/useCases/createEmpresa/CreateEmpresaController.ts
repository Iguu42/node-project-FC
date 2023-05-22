import { CreateEmpresaUseCase } from './CreateEmpresaUseCase';
import { Request, Response } from "express";

export class CreateEmpresaController {
    async handle(req: Request, res: Response) {
        const { nome } = req.body;

        const createEmpresaUseCase = new CreateEmpresaUseCase();

        const result = await createEmpresaUseCase.execute({ nome });

        return res.status(201).json(result);
    }
}