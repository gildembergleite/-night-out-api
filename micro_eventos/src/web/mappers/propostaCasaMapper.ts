import { Propostacasa } from "../../models/Propostacasa";
import type { PropostaCasaDTO } from "../types/proposta_casa_dtos/propostaCasaDTO";
export async function toForm(propostaCasa: Propostacasa) : Promise<Partial<PropostaCasaDTO>> {
    return {
    id_proposta_casa: propostaCasa.id,
    id_artista: propostaCasa.id_artista,
    id_evento: propostaCasa.id_evento,
    data_proposta: propostaCasa.data_proposta,
    data_evento: propostaCasa.data_evento,
    valor_ofertado: propostaCasa.valor_ofertado,
    status: propostaCasa.status,
    termos: propostaCasa.termos,
    evento : []

}
}
export async function toModel(propostaCasaDTO:PropostaCasaDTO) : Promise<Partial<Propostacasa>> {
    return {
    id: propostaCasaDTO.id_proposta_casa,
    id_artista: propostaCasaDTO.id_artista,
    id_evento: propostaCasaDTO.id_evento, 
    data_proposta: propostaCasaDTO.data_proposta,
    data_evento: propostaCasaDTO.data_evento,
    valor_ofertado: propostaCasaDTO.valor_ofertado,
    status: propostaCasaDTO.status,
    termos: propostaCasaDTO.termos,
    }
}