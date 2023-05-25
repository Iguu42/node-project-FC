import { Router } from 'express';
import { empresaRoutes } from './empresa.routes';
import { pedidosRoutes } from './pedidos.routes';
import { pedidoRoutes } from './pedido.routes';


const routes = Router();

routes.use("/empresa", empresaRoutes);

routes.use("/pedidos", pedidosRoutes);

routes.use("/pedido", pedidoRoutes);

export { routes };