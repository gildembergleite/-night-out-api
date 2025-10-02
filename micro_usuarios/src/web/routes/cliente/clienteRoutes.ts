import { Router } from "express";
import * as clienteController from "../../controller/cliente/clienteLCControllers";

const router = Router();

router.post("/cadastro", clienteController.cadastro);

router.post("/login", clienteController.login);

export default router;
