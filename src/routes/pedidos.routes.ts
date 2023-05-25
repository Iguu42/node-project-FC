import { GetPedidoPorCpfController } from '../modules/pedidos/buscarPedidosPorCPF/GetPedidoPorCpfController';
//import { GetAllPedidosController } from '../modules/pedidos/buscarTodosPedidos/GetAllPedidosController';
import { Router } from "express";

const pedidosRoutes = Router();

//pedidosRoutes.get("/all", new GetAllPedidosController().handle);
pedidosRoutes.get("/:cpf", new GetPedidoPorCpfController().handle);
export { pedidosRoutes };