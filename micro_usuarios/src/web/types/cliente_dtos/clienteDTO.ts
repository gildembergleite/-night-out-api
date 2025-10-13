import { UsuarioDTO } from "../usuario_dtos/usuarioDTO";

export interface ClienteDTO {
  apelido: string;
  preferencias: string;
  data_nascimento: Date;

  usuario: UsuarioDTO[];
}
