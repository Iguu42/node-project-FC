import { GetLoginController } from './../modules/validarLogin/GetLoginController';
import { Router } from "express";

const loginRoutes = Router();

loginRoutes.post("", new GetLoginController().handle);

export { loginRoutes };