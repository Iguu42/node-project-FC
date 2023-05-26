import { Request, Response } from "express";
import { GetPedidosDataUseCase } from "./GetPedidosPorDataUseCase";
import { format } from 'date-fns';

export class GetPedidosDataController {
    async handle(req: Request, res: Response) {


        const getPedidosDataUseCase = new GetPedidosDataUseCase();

        const {datarealizado} = req.params;
        const data = new Date(datarealizado);
        const dataFormatada = format(data, "dd/MM/yyyy");
        
        const results = await getPedidosDataUseCase.allPedidosData(dataFormatada);
        
        if(!results) {
          return res.status(404).json({
            message: `Não foi possível encontrar pedidos realizados com a data informada ${data}`
          });
        }
        else {
          console.log("tem dados" + results.length)
          return res.status(200).json(results);
        } 

    
    }
}