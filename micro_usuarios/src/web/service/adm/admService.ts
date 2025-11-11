import { Prisma } from "../../../core/generated/prisma";
import { prisma } from "../../libs/prismaClient";
import { AdministradorDTO } from "../../types/administrador_dtos/administradorDTO";

type AdministradorComUsuario = Prisma.AdministradorGetPayload<{
  include: { usuario: true };
}>;

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
    include: { usuario: true },
  });

  return {
    id: novoAdministrador.id_usuario,
    nome: novoAdministrador.usuario.nome,
    email: novoAdministrador.usuario.email,
    telefone: novoAdministrador.usuario.telefone,
    cargo: novoAdministrador.cargo,
    permissao_nivel: novoAdministrador.permissao_nivel,
    createdAt: novoAdministrador.usuario.createdAt,
  };
}

export async function buscarAdministradorParaLogin(email: string): Promise<AdministradorComUsuario | null> {
  const administrador = await prisma.administrador.findFirst({
    where: {
      usuario: { email, tipo: "ADMINISTRADOR" },
    },
    include: { usuario: true },
  });

  return administrador;
}

export async function listarAdministradores({ offset, limit }: { offset: number; limit: number }) {
  const lista = await prisma.administrador.findMany({
    include: { usuario: true },
    skip: offset,
    take: limit,
  });

  return lista.map((admin: AdministradorComUsuario) => ({
    id: admin.id_usuario,
    nome: admin.usuario.nome,
    email: admin.usuario.email,
    cargo: admin.cargo,
    permissao_nivel: admin.permissao_nivel,
  }));
}

export async function buscarAdministradorPorId(id: string): Promise<AdministradorComUsuario | null> {
  return await prisma.administrador.findUnique({
    where: { id_usuario: id },
    include: { usuario: true },
  });
}

export async function cadastrarADM(admDTO: AdministradorDTO): Promise<AdministradorComUsuario> {
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

  return novoADM;
}

export async function editarADM(id_administrador: string, admDTO: Partial<AdministradorDTO>): Promise<AdministradorComUsuario> {
  return await prisma.administrador.update({
    where: { id_usuario: id_administrador },
    data: {
      cargo: admDTO.cargo,
      permissao_nivel: admDTO.permissao_nivel,
      usuario: admDTO.usuario
        ? {
            update: {
              nome: admDTO.usuario[0].nome,
              email: admDTO.usuario[0].email,
              senha_hash: admDTO.usuario[0].senha_hash,
              telefone: admDTO.usuario[0].telefone,
            },
          }
        : undefined,
    },
    include: { usuario: true },
  });
}

export async function deletarADM(id_administrador: string) {
  return await prisma.administrador.delete({
    where: { id_usuario: id_administrador },
  });
}

export async function buscarPorEmail(email: string) {
  return await prisma.usuario.findUnique({ where: { email } });
}

export async function buscarPorSenha(senha_hash: string) {
  return await prisma.usuario.findFirst({ where: { senha_hash } });
}

export async function buscarPorTelefone(telefone: string) {
  return await prisma.usuario.findFirst({ where: { telefone } });
}