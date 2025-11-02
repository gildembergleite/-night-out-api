import type { PropostaCasaDTO } from "../proposta_casa_dtos/propostaCasaDTO";
import type { PropostaArtistaDTO } from "../proposta_artista_dtos/propostaArtistaDTO";
import type { EventoArtistaDTO } from "../evento_artista_dtos/eventoArtistaDTO";
export interface EventoDTO {
  id_evento?: string;
  id_usuario: string;
  titulo: string;
  descricao: string;
  data_inicio: Date;
  data_fim: Date;
  local: string;
  status: string;

  propostasCasa: PropostaCasaDTO[];
  propostasArtista: PropostaArtistaDTO[];
  eventoArtistas: EventoArtistaDTO[];
}
