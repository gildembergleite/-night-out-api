import type ingressoDTO = require("../ingresso_dtos/ingressoDTO");

export interface LoteIngressoDTO {
  id_lote?: string;
  id_evento: string;
  nome: string;
  preco: string;
  quantidade: string;
  qtd_vendida?: string;
  data_inicio: Date;
  data_fim: Date;

  ingresso: ingressoDTO.IngressoDTO[];
}
