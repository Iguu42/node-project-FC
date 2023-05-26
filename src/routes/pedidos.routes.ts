import { GetPedidoPorCpfController } from '../modules/pedidos/buscarPedidosPorCPF/GetPedidoPorCpfController';
import { GetAllPedidosControllerr } from '../modules/pedidos/buscarTodosPedidos/GetAllPedidosController';
import { Router } from "express";

const pedidosRoutes = Router();

pedidosRoutes.get("/all", new GetAllPedidosControllerr().handle);
pedidosRoutes.get("/:cpf", new GetPedidoPorCpfController().handle);
export { pedidosRoutes };