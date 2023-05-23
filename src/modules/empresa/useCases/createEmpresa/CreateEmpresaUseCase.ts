import { AppError } from './../../../../errors/AppError';
import { Empresa } from '@prisma/client';
import { prisma } from '../../../../prisma/client';
import { CreateEmpresaDTO } from './../../dtos/CreateEmpresaDTO';


export class CreateEmpresaUseCase {
    async execute({ nome }: CreateEmpresaDTO): Promise<Empresa> {

        //Verificar se empresa existe (está como unique apenas para teste)
        const empresaAlreadyExists = await prisma.empresa.findUnique({
            where: {
                nome: nome
            }
        });

        if (empresaAlreadyExists) {
            throw new AppError("Empresa já existe!", 409);
        }

        //Criar a empresa
        const empresa = await prisma.empresa.create({
            data: { nome: nome }
        })
        return empresa;

    }
}