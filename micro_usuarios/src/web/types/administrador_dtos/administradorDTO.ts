import { UsuarioDTO } from "../usuario_dtos/usuarioDTO";

export interface AdministradorDTO {
  id_usuario: string;
  cargo: string;
  permissao_nivel: string;
  createdAt: Date;
  updatedAt: Date;

  usuario: UsuarioDTO[];
}
