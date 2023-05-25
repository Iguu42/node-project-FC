import { GetAllPedidosController } from '../modules/pedidos/BuscarTodosPedidos/GetAllPedidosController';
import { Router } from "express";

const pedidoRoutes = Router();

pedidoRoutes.get("/all", new GetAllPedidosController().handle);

export { pedidoRoutes };