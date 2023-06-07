import { GetPedidoPorNumeroController } from '../modules/pedidos/buscarPedidoPorNumero/GetPedidoPorNumeroController';
import { Router } from "express";

const pedidoRoutes = Router();

pedidoRoutes.get("/:numbers", new GetPedidoPorNumeroController().handle);
export { pedidoRoutes };