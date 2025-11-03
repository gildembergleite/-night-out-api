import { Router } from "express";
import {
  login,
  cadastro,
  listarAdministradores,
  buscarAdministradorPorId,
  cadastrarADM,
  editarADM,
  deletarADM,
} from "../../controller/adm/admLCController";

import { protect } from "../../../middleware/authMiddleware";

const AdmRoutes = Router();

AdmRoutes.post("/login", login);

AdmRoutes.post("/cadastro", cadastro);

AdmRoutes.get("/", protect, listarAdministradores);

AdmRoutes.get("/:id", protect, buscarAdministradorPorId);

AdmRoutes.post("/cadastrar", protect, cadastrarADM);

AdmRoutes.put("/:id", protect, editarADM);

AdmRoutes.delete("/:id", protect, deletarADM);

export default AdmRoutes;