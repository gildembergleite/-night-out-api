import { prisma } from "../../libs/prismaClient";
import { AdministradorDTO } from "../../types/administrador_dtos/administradorDTO";

export async function cadastro(dados: {
  nome: string;
  email: string;
  senha: string;
  telefone?: string;
  cargo: string;
  permissao_nivel: string;
}): Promise<any> {
  const novoAdministrador = await prisma.administrador.create({
    data: {
      cargo: dados.cargo,
      permissao_nivel: dados.permissao_nivel,
      usuario: {
        create: {
          nome: dados.nome,
          email: dados.email,
          senha_hash: dados.senha,
          telefone: dados.telefone,
          tipo: "ADMINISTRADOR",
        },
      },
    },
    include: {
      usuario: true,
    },
  });

  return {
    id: novoAdministrador.id_usuario,
    nome: novoAdministrador.usuario.nome,
    email: novoAdministrador.usuario.email,
    telefone: novoAdministrador.usuario.telefone,
    createdAt: novoAdministrador.usuario.createdAt,
  };
}

export async function login(email: string, senha: string) {
  const administrador = await prisma.administrador.findFirst({
    where: {
      usuario: {
        email,
        senha_hash: senha,
        tipo: "ADMINISTRADOR",
      },
    },
    include: {
      usuario: true,
    },
  });

  if (!administrador) {
    return null;
  }

  return {
    message: "Administrador logado com sucesso",
    administrador: {
      id: administrador.id_usuario,
      nome: administrador.usuario.nome,
      email: administrador.usuario.email,
      telefone: administrador.usuario.telefone,
    },
  };
}

export async function listarAdministradores() {
  const lista = await prisma.administrador.findMany({
    include: {
      usuario: true,
    },
  });

  return lista.map(
    (admin: {
      id_usuario: string;
      usuario: { nome: string; email: string };
    }) => ({
      id: admin.id_usuario,
      nome: admin.usuario.nome,
      email: admin.usuario.email,
    })
  );
}

export async function buscarAdministradorPorId(id: string) {
  const adm = await prisma.administrador.findUnique({
    where: { id_usuario: id },
    include: {
      usuario: true,
    },
  });

  if (!adm) {
    return null;
  }

  return adm;
}

export async function cadastrarADM(admDTO: AdministradorDTO) {
  const novoADM = await prisma.administrador.create({
    data: {
      cargo: admDTO.cargo,
      permissao_nivel: admDTO.permissao_nivel,
      usuario: {
        create: {
          nome: admDTO.usuario[0].nome,
          email: admDTO.usuario[0].email,
          senha_hash: admDTO.usuario[0].senha_hash,
          telefone: admDTO.usuario[0].telefone,
          tipo: "ADMINISTRADOR",
        },
      },
    },
    include: { usuario: true },
  });

  if (!novoADM) throw new Error("Administrador não encontrado");

  return novoADM;
}

export async function editarADM(
  id_administrador: string,
  admDTO: Partial<AdministradorDTO>
) {
  const admAtualizado = await prisma.administrador.update({
    where: { id_usuario: id_administrador },
    data: {
      cargo: admDTO.cargo,
      permissao_nivel: admDTO.permissao_nivel,
      usuario: admDTO.usuario ? {
        update: {
          nome: admDTO.usuario[0].nome,
          email: admDTO.usuario[0].email,
          senha_hash: admDTO.usuario[0].senha_hash,
          telefone: admDTO.usuario[0].telefone,
        },
      } : undefined,
    },
    include: { usuario: true },
  });

  return admAtualizado;
}

export async function deletarADM(id_administrador: string) {
  if (!id_administrador) {
    throw new Error("ID do administrador é obrigatório para deletar.");
  }

  return await prisma.administrador.delete({
    where: { id_usuario: id_administrador },
  });
}
