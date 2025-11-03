import { Router } from "express";
import {
  login,
  cadastro,
  listarCasasDeShow,
  buscarCasaDeShowPorId,
  cadastrarCasa,
  editarCasa,
  deletarCasa,
} from "../../controller/casa_de_show/casaDeShowLCController";

import { protect } from "../../../middleware/authMiddleware";

const CasaRoutes = Router();

CasaRoutes.post("/login", login);
CasaRoutes.post("/cadastro", cadastro);

CasaRoutes.get("/", protect, listarCasasDeShow);
CasaRoutes.get("/:id", protect, buscarCasaDeShowPorId);
CasaRoutes.post("/cadastrar", protect, cadastrarCasa);
CasaRoutes.put("/:id", protect, editarCasa);
CasaRoutes.delete("/:id", protect, deletarCasa);

export default CasaRoutes;