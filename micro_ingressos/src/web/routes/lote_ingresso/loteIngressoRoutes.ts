import { Router } from "express";
import {
  criarLote,
  listarLotes,
  buscarLotePorId,
  atualizarLote,
  deletarLote,
} from "../../controller/lote_ingresso/loteIngressoLCController";

const LoteIngressoRoutes = Router();

LoteIngressoRoutes.post("/", criarLote);
LoteIngressoRoutes.get("/", listarLotes);
LoteIngressoRoutes.get("/:id_lote", buscarLotePorId);
LoteIngressoRoutes.put("/:id_lote", atualizarLote);
LoteIngressoRoutes.delete("/:id_lote", deletarLote);

export default LoteIngressoRoutes;
