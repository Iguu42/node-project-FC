import { GetPedidosPorFiltroController } from './../modules/pedidos/filtrosPedidos/GetPedidosPorFiltroController';

import { GetAllPedidosController } from "../modules/pedidos/BuscarTodosPedidos/GetAllPedidosController";
import { Router } from "express";

const pedidosRoutes = Router();

pedidosRoutes.get("/all", new GetAllPedidosController().handle);
pedidosRoutes.get("/all/:filtro", new GetPedidosPorFiltroController().handle)
export { pedidosRoutes };