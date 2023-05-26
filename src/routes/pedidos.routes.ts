
import { GetAllPedidosController } from "../modules/pedidos/BuscarTodosPedidos/GetAllPedidosController";
import { Router } from "express";

const pedidosRoutes = Router();

pedidosRoutes.get("/all", new GetAllPedidosController().handle);
export { pedidosRoutes };