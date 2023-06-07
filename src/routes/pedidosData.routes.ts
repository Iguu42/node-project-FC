import { GetPedidosDataController } from "../modules/pedidos/buscarPedidosPorData/GetPedidosPorDataController";
import { Router } from "express";

const pedidosPorData = Router();

pedidosPorData.get("/:datarealizado", new GetPedidosDataController().handle);

export { pedidosPorData };