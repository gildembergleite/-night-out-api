import { Router } from "express";
import {
  buscarAdministradorPorId,
  cadastro,
  deletarADM,
  editarADM,
  listarAdministradores
} from "../../controller/adm/admLCController";

import { validateApiKey } from "../../../core/middleware/apiKeyMiddleware";
import { isAdmin, protect } from "../../../core/middleware/authMiddleware";

const AdmRoutes = Router();

// AdmRoutes.post("/login", login);

AdmRoutes.post("/cadastro", validateApiKey, cadastro);

AdmRoutes.get("/", protect, isAdmin, listarAdministradores);

AdmRoutes.get("/:id", protect, isAdmin, buscarAdministradorPorId);

// AdmRoutes.post("/cadastrar", protect, cadastrarADM);

AdmRoutes.put("/:id", protect, isAdmin, editarADM);

AdmRoutes.delete("/:id", protect, isAdmin, deletarADM);

export default AdmRoutes;