import { Administrador } from "@prisma/client";
import { AdministradorDTO } from "../types/administrador_dtos/administradorDTO";

export async function toForm(artistaDTO: Administrador): Promise<Partial<AdministradorDTO>> {
    return {
     cargo: artistaDTO.cargo,
     permissao_nivel: artistaDTO.permissao_nivel,
     usuario: []
    };
}
export async function toModel(administradorDTO: AdministradorDTO): Promise<Partial<Administrador>> {
    return {
        cargo: administradorDTO.cargo,
        permissao_nivel: administradorDTO.permissao_nivel,
    };
}