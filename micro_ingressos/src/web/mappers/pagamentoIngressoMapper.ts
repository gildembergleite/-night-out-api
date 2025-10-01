import { PagamentoIngressoDTO } from "../types/pagamento_ingresso_dtos/pagamentoIngressoDTO";
import { PagamentoIngresso } from "@prisma/client";
export async function toForm(pagamentoIngresso:PagamentoIngresso) : Promise<Partial<PagamentoIngressoDTO>> {
    return {
    id_pagamento: pagamentoIngresso.id,
    id_ingresso: pagamentoIngresso.id_ingresso,
    metodo : pagamentoIngresso.metodo, 
    status : pagamentoIngresso.status,
    valor : pagamentoIngresso.valor,
    ingresso : [], 
    }
    
}
export async function toModel(pagamentoIngressoDTO:PagamentoIngressoDTO) : Promise<Partial<PagamentoIngresso>> {
    return {
    id: pagamentoIngressoDTO.id_pagamento,
    id_ingresso: pagamentoIngressoDTO.id_ingresso,
    metodo : pagamentoIngressoDTO.metodo, 
    status : pagamentoIngressoDTO.status,
    valor : pagamentoIngressoDTO.valor,
    }
    }