import { GetAllPedidosController } from '../modules/pedidos/buscarTodosPedidos/GetAllPedidosController';
import { Router } from "express";

const pedidosRoutes = Router();

pedidosRoutes.get("/all", new GetAllPedidosController().handle);
export { pedidosRoutes };