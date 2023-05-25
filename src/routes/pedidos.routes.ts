import { GetAllPedidosController } from './../modules/pedidos/useCases/BuscarTodosPedidos/GetAllPedidosController';
import { Router } from "express";

const pedidoRoutes = Router();

pedidoRoutes.get("/all", new GetAllPedidosController().handle);

export { pedidoRoutes };