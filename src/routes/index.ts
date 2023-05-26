import { Router } from 'express';
import { pedidosRoutes } from './pedidos.routes';
import { pedidoRoutes } from './pedido.routes';
import { clienteRoutes } from './cliente.routes';
import { pedidosPorData } from './pedidosData.routes';


const routes = Router();

routes.use("/pedidos", pedidosRoutes);
routes.use("/cliente", clienteRoutes);
routes.use("/pedido", pedidoRoutes);
routes.use("/pedidosteste", pedidosPorData );

export { routes };