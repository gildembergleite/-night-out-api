import { Router } from "express";
import {
  criarPagamento,
  listarPagamentos,
  buscarPagamentoPorId,
  atualizarPagamento,
  deletarPagamento,
} from "../../controller/pagamento_ingresso/pagamentoIngressoLCController";

const PagamentoIngressoRoutes = Router();

PagamentoIngressoRoutes.post("/", criarPagamento);
PagamentoIngressoRoutes.get("/", listarPagamentos);
PagamentoIngressoRoutes.get("/:id_pagamento", buscarPagamentoPorId);
PagamentoIngressoRoutes.put("/:id_pagamento", atualizarPagamento);
PagamentoIngressoRoutes.delete("/:id_pagamento", deletarPagamento);

export default PagamentoIngressoRoutes;
