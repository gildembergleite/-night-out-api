import { Router } from "express";
import { cadastro, login } from "../../controller/adm/admLCController";

const AdmRoutes = Router();

AdmRoutes.post("/", login);
AdmRoutes.post("/cadastro", cadastro);

export default AdmRoutes;
