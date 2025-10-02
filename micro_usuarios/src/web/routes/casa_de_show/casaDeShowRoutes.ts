import { Router } from "express";
import * as casaController from "../../controller/casa_de_show/casaDeShowLCController";

const router = Router();

router.post("/cadastro", casaController.cadastro);
router.post("/login", casaController.login);

export default router;
