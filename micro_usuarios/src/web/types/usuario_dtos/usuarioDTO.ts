import { TipoUsuario } from "../../../core/enums/tipoUsuario";

export interface UsuarioDTO {
  id_usuario: string;
  nome: string;
  email: string;
  senha_hash: string;
  tipo: TipoUsuario;
  telefone: string;
}
