import type eventoDTO = require("../types/evento_dtos/eventoDTO");
import { Evento } from "@prisma/client";

export async function toForm(Evento:Evento) : Promise<Partial<eventoDTO.EventoDTO>> {
    return {
        id_evento: Evento.id,
        id_usuario: Evento.id_usuario,
        titulo: Evento.titulo,
        descricao: Evento.descricao,
        data_inicio: Evento.data_inicio,
        data_fim: Evento.data_fim,
        local : Evento.local,
        status : Evento.status,
    
} 
}
export async function toModel(eventoDTO:eventoDTO.EventoDTO) : Promise<Partial<Evento>> {
    return {
        id: eventoDTO.id_evento,
        id_usuario: eventoDTO.id_usuario,
        titulo: eventoDTO.titulo,
        descricao: eventoDTO.descricao, 
        data_inicio: eventoDTO.data_inicio,
        data_fim: eventoDTO.data_fim,
        local : eventoDTO.local,
        status : eventoDTO.status,
    }
    }