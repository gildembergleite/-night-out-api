import { PropostaArtistaDTO } from "../types/proposta_artista_dtos/propostaArtistaDTO";
import { PropostaArtista } from "../../models/PropostaArtista";
export async function toForm(evento: PropostaArtista): Promise<Partial<PropostaArtistaDTO>> {
    return {
        id_proposta_artista: evento.id,
        id_casa: evento.id_casa,
        id_evento: evento.id_evento,
        data_proposta: evento.data_proposta,
        data_evento: evento.data_evento,
        valor_ofertado: evento.valor_ofertado,
        status: evento.status,
        termos: evento.termos,
        evento : []
    }
}
export async function toModel(propostaArtistaDTO: PropostaArtistaDTO): Promise<Partial<PropostaArtista>> {
    return {
        id: propostaArtistaDTO.id_proposta_artista,
        id_casa: propostaArtistaDTO.id_casa,
        id_evento: propostaArtistaDTO.id_evento,
        data_proposta: propostaArtistaDTO.data_proposta,
        data_evento: propostaArtistaDTO.data_evento,
        valor_ofertado: propostaArtistaDTO.valor_ofertado,
        status: propostaArtistaDTO.status,
        termos: propostaArtistaDTO.termos,
    }
}