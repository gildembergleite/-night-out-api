import { Ingresso } from "@prisma/client"; // Update the path as needed
import type { IngressoDTO } from "../types/ingresso_dtos/ingressoDTO"; // Update the path to where IngressoDTO is defined

export async function toForm(
  ingresso: Ingresso
): Promise<Partial<IngressoDTO>> {
  return {
    id_ingresso: ingresso.id,
    id_lote: ingresso.id_lote,
    id_usuario: ingresso.id_usuario,
    codigo_qr: ingresso.codigo_qr,
    status: ingresso.status,
    checkin_em: ingresso.checkin_em,
  };
}
export async function toModel(
  ingressoDTO: IngressoDTO
): Promise<Partial<Ingresso>> {
  return {
    id: ingressoDTO.id_ingresso,
    id_lote: ingressoDTO.id_lote,
    id_usuario: ingressoDTO.id_usuario,
    codigo_qr: ingressoDTO.codigo_qr,
    status: ingressoDTO.status,
    checkin_em: ingressoDTO.checkin_em,
  };
}
