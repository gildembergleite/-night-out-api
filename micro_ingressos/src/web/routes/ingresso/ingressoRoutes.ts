import { Router } from "express";
import {
  criarIngresso,
  listarIngressos,
  buscarIngressoPorId,
  editarIngresso,
  checkinIngresso,
} from "../../controller/ingresso/ingressoLCController";

const IngressoRoutes = Router();

IngressoRoutes.post("/", criarIngresso);
IngressoRoutes.get("/", listarIngressos);
IngressoRoutes.get("/:id", buscarIngressoPorId);
IngressoRoutes.put("/:id", editarIngresso);
IngressoRoutes.post("/:id/checkin", checkinIngresso);

export default IngressoRoutes;
