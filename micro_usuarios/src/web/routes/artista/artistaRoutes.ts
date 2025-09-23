import { Router } from "express";
import * as artistaController from "../../controller/artista/artistaLCController";

const router = Router();

router.post("/cadastro", artistaController.cadastro);
router.post("/login", artistaController.login);

export default router;
