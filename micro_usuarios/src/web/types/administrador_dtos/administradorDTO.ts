import { UsuarioDTO } from "../usuario_dtos/usuarioDTO";

export interface AdministradorDTO {
  cargo: string;
  permissao_nivel: string;
  createdAt?: Date;
  updatedAt?: Date;

  usuario: UsuarioDTO[];
}
