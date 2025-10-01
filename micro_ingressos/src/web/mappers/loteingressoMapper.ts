import { LoteIngresso } from "@prisma/client";
import { LoteIngressoDTO } from "../types/lote_ingresso_dtos/loteIngressoDTO";

export async function toForm(
  loteingresso: LoteIngresso
): Promise<Partial<LoteIngressoDTO>> {
  return {
    id_lote: loteingresso.id,
    id_evento: loteingresso.id_evento,
    nome: loteingresso.nome,
    preco: loteingresso.preco,
    quantidade: loteingresso.quantidade,
    qtd_vendida: loteingresso.qtd_vendida,
    data_inicio: loteingresso.data_inicio,
    data_fim: loteingresso.data_fim,
    ingresso: [],
  };
}
export async function toModel(
  loteingressoDTO: LoteIngressoDTO
): Promise<Partial<LoteIngresso>> {
  return {
    id: loteingressoDTO.id_lote,
    id_evento: loteingressoDTO.id_evento,
    nome: loteingressoDTO.nome,
    preco: loteingressoDTO.preco,
    quantidade: loteingressoDTO.quantidade,
    qtd_vendida: loteingressoDTO.qtd_vendida,
    data_inicio: loteingressoDTO.data_inicio,
    data_fim: loteingressoDTO.data_fim,
  };
}
