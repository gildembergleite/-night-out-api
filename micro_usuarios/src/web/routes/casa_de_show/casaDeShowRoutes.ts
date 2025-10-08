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

const CasaRoutes = Router();

CasaRoutes.post("/login", login);
CasaRoutes.post("/cadastro", cadastro);
CasaRoutes.get("/", listarCasasDeShow);
CasaRoutes.get("/:id", buscarCasaDeShowPorId);
CasaRoutes.post("/cadastrar", cadastrarCasa);
CasaRoutes.put("/:id", editarCasa);
CasaRoutes.delete("/:id", deletarCasa);

export default CasaRoutes;
