import { UsuarioDTO } from "../usuario_dtos/usuarioDTO";

export interface ClienteDTO {
  id_usuario: string;
  apelido: string;
  preferencias: string;
  data_nascimento: Date;

  usuario: UsuarioDTO[];
}
