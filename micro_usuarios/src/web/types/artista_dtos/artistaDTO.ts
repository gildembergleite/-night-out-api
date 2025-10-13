import { UsuarioDTO } from "../usuario_dtos/usuarioDTO";

export interface ArtistaDTO {
  nome_artista: string;
  genero_musical: string;
  cache_min: string;
  descricao: string;
  portifolio: string;
  verificado: boolean;
  createdAt: Date;
  updatedAt: Date;

  usuario: UsuarioDTO[];
}
