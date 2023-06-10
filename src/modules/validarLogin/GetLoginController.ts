import { Request, Response } from "express";
import { GetLoginUseCase } from "./GetLoginUseCase";

export class GetLoginController {
    async handle(req: Request, res: Response) {
        const { email, senha } = req.body;
        const getLoginUseCase = new GetLoginUseCase();
        try {
            const isValidCredentials = await getLoginUseCase.execute(email, senha);

            if (isValidCredentials) {
                return res.status(200).json({ validate: true });
            } else {
                return res.status(401).json({ validate: false });
            }
        } catch (error) {
            return res.status(500).json({ message: "Erro interno do servidor" });
        }
    }
}
