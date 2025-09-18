import { Router } from "express";
import { cadastro, login } from "../controller/usuarioLoginController";

const UsuarioRoutes = Router();

UsuarioRoutes.post("/", login);
UsuarioRoutes.post("/cadastro", cadastro);

export default UsuarioRoutes;
