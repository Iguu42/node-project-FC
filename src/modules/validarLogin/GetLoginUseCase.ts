import { prisma } from "../../prisma/client";
import { login } from "@prisma/client";

export class GetLoginUseCase {
    async execute(email: string, senha: string): Promise<any> {
        const user = await prisma.login.findFirst({
            where: {
                email,
            },
        });

        if (!user) {
            return false
        };
        if (senha !== user.senha || email !== user.email) {
            return false;
        }
        return true;
    }
}
