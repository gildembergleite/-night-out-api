import type { EventoDTO } from "../evento_dtos/eventoDTO";

export interface EventoArtistaDTO {
  id_evento: string;
  id_usuario: string;
  funcao: string;
  contrato_acordado: string;
  cache_final: string;
  created_final: string;

  evento: EventoDTO[];
}
