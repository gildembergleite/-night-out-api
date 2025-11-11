import { Router } from "express";
import {
  buscarCasaDeShowPorId,
  cadastrarCasa,
  cadastro,
  deletarCasa,
  editarCasa,
  listarCasasDeShow
} from "../../controller/casa_de_show/casaDeShowLCController";

import { protect } from "../../../core/middleware/authMiddleware";

const CasaRoutes = Router();



CasaRoutes.post("/cadastro", cadastro);

CasaRoutes.get("/", protect, listarCasasDeShow);

CasaRoutes.get("/:id", protect, buscarCasaDeShowPorId);

CasaRoutes.post("/cadastrar", protect, cadastrarCasa);

CasaRoutes.put("/:id", protect, editarCasa);

CasaRoutes.delete("/:id", protect, deletarCasa);

export default CasaRoutes;