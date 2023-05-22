import { CreateEmpresaController } from '../modules/empresa/useCases/createEmpresa/CreateEmpresaController';
import { Router } from "express";

const empresaRoutes = Router();

empresaRoutes.post("/", new CreateEmpresaController().handle);

export { empresaRoutes };