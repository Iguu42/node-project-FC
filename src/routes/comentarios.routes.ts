import { DeletarComentarioController } from "../modules/pedidos/comentarios/DeletarComentarioController";
import { GetComentariosController } from "../modules/pedidos/comentarios/GetComentariosController";
import { ResponderComentarioController } from "../modules/pedidos/comentarios/ResponderComentarioController";
import { CriarComentarioController } from "./../modules/pedidos/comentarios/CriarComentarioController";
import { Router } from "express";

const comentariosRoutes = Router();

comentariosRoutes.post("", new CriarComentarioController().handle);
comentariosRoutes.delete("/:id", new DeletarComentarioController().handle);
comentariosRoutes.get("/:id", new GetComentariosController().handle);
comentariosRoutes.post("/:id_comentario", new ResponderComentarioController().handle);

export { comentariosRoutes };







