import { Router } from 'express';
import { empresaRoutes } from './empresa.routes';
import { pedidoRoutes } from './pedidos.routes';


const routes = Router();

routes.use("/empresa", empresaRoutes);
routes.use("/pedidos", pedidoRoutes);

export { routes };