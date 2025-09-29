import type ingressoDTO = require("../ingresso_dtos/ingressoDTO");

export interface PagamentoIngressoDTO {
  id_pagamento: string;
  id_ingresso: string;
  metodo: string;
  status: string;
  valor: string;

  ingresso: ingressoDTO.IngressoDTO[];
}
