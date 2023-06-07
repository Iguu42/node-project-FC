import { Request, Response } from "express";
import { GetPedidosDataUseCase } from "./GetPedidosPorDataUseCase";

export class GetPedidosDataController {
    async handle(req: Request, res: Response) {

        const getPedidosDataUseCase = new GetPedidosDataUseCase();

        const {datarealizado} = req.params;
        
        const results = await getPedidosDataUseCase.allPedidosData(datarealizado);
        
        if(results?.length === 0) {
          return res.status(404).json({
            message: `Não foi possível encontrar pedidos realizados com a data informada ${datarealizado}`
          });
        }
        else {
          return res.status(200).json(results);
        } 

    
    }
}