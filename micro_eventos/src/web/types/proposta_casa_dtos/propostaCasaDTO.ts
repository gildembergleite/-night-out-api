import type { EventoDTO } from "../evento_dtos/eventoDTO";

export interface PropostaCasaDTO {
  id_proposta_casa: string;
  id_artista: string;
  id_evento: string;
  data_proposta: Date;
  data_evento: Date;
  valor_ofertado: string;
  status: string;
  termos: string;

  evento: EventoDTO[];
}
