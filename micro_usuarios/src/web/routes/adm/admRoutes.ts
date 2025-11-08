import { Router } from "express";
import {
  buscarAdministradorPorId,
  cadastrarADM,
  cadastro,
  deletarADM,
  editarADM,
  listarAdministradores
} from "../../controller/adm/admLCController";

import { validateApiKey } from "../../../core/middleware/apiKeyMiddleware";
import { protect } from "../../../core/middleware/authMiddleware";

const AdmRoutes = Router();

// AdmRoutes.post("/login", login);

AdmRoutes.post("/cadastro", validateApiKey, cadastro);

AdmRoutes.get("/", protect, listarAdministradores);

AdmRoutes.get("/:id", protect, buscarAdministradorPorId);

AdmRoutes.post("/cadastrar", protect, cadastrarADM);

AdmRoutes.put("/:id", protect, editarADM);

AdmRoutes.delete("/:id", protect, deletarADM);

export default AdmRoutes;