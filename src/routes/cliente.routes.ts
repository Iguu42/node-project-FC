import { GetPedidoPorCpfController } from '../modules/pedidos/buscarPedidosPorCPF/GetPedidoPorCpfController';
import { Router } from "express";

const clienteRoutes = Router();

clienteRoutes.get("/:cpf", new GetPedidoPorCpfController().handle);
export { clienteRoutes };