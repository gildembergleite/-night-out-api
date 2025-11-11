
import { Administrador } from "../../../core/generated/prisma";
import { AdministradorDTO } from "../../types/administrador_dtos/administradorDTO";

export async function toForm(
  administradorData: Administrador
): Promise<Partial<AdministradorDTO>> {
  return {
    cargo: administradorData.cargo,
    permissao_nivel: administradorData.permissao_nivel,
    usuario: [],
  };
}
export async function toModel(
  administradorDTO: AdministradorDTO
): Promise<Partial<Administrador>> {
  return {
    cargo: administradorDTO.cargo,
    permissao_nivel: administradorDTO.permissao_nivel,
  };
}
