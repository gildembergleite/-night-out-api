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

const AdmRoutes = Router();

AdmRoutes.post("/login", login);
AdmRoutes.post("/cadastro", cadastro);
AdmRoutes.get("/", listarAdministradores);
AdmRoutes.get("/:id", buscarAdministradorPorId);
AdmRoutes.post("/cadastrar", cadastrarADM);
AdmRoutes.put("/:id", editarADM);
AdmRoutes.delete("/:id", deletarADM);

export default AdmRoutes;
