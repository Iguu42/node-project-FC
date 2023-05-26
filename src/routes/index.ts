import { Router } from 'express';
import { pedidosRoutes } from './pedidos.routes';
import { pedidoRoutes } from './pedido.routes';
import { clienteRoutes } from './cliente.routes';


const routes = Router();

routes.use("/pedidos", pedidosRoutes);
routes.use("/cliente", clienteRoutes);
routes.use("/pedido", pedidoRoutes);

export { routes };