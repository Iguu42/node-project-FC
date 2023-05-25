import { Router } from 'express';
import { pedidosRoutes } from './pedidos.routes';
import { pedidoRoutes } from './pedido.routes';


const routes = Router();

routes.use("/pedidos", pedidosRoutes);

routes.use("/pedido", pedidoRoutes);

export { routes };