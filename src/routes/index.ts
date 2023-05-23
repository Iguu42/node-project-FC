import { Router } from 'express';
import { empresaRoutes } from './empresa.routes';
const routes = Router();

routes.use("/empresa", empresaRoutes);

export { routes };