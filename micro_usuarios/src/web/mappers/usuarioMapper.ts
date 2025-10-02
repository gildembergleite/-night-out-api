import { Usuario } from "@prisma/client";

export async function toForm(usuario: Usuario): Promise<Partial<Usuario>> {
  return {
    id_usuario: usuario.id_usuario,
    nome: usuario.nome,
    email: usuario.email,
    senha_hash: usuario.senha_hash,
    tipo: usuario.tipo,
    telefone: usuario.telefone ?? undefined,
  };
}
export async function toModel(
  usuarioDTO: Partial<Usuario>
): Promise<Partial<Usuario>> {
  return {
    id_usuario: usuarioDTO.id_usuario,
    nome: usuarioDTO.nome,
    email: usuarioDTO.email,
    senha_hash: usuarioDTO.senha_hash,
    tipo: usuarioDTO.tipo,
    telefone: usuarioDTO.telefone ?? undefined,
  };
}
