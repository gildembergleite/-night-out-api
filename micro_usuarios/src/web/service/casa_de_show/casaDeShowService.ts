import e from "express";
import { prisma } from "../../libs/prismaClient";
import { CasaDeShowDTO } from "../../types/casa_de_show_dtos/casaDeShowDTO";

export async function cadastro(dados: {
  nome: string;
  email: string;
  senha: string;
  telefone?: string;
  nome_fantasia: string;
  cnpj: string;
  capacidade: string;
  endereco: string;
  bairro: string;
  estado: string;
  cep: string;
  geo_lat: string;
  geo_lng: string;
}): Promise<any> {
  try {
    const novaCasa = await prisma.casaShow.create({
      data: {
        nome_fantasia: dados.nome_fantasia,
        cnpj: dados.cnpj,
        capacidade: dados.capacidade,
        endereco: dados.endereco,
        bairro: dados.bairro,
        estado: dados.estado,
        cep: dados.cep,
        geo_lat: dados.geo_lat,
        geo_lng: dados.geo_lng,
        usuario: {
          create: {
            nome: dados.nome,
            email: dados.email,
            senha_hash: dados.senha,
            telefone: dados.telefone,
            tipo: "CASASHOW",
          },
        },
      },
      include: {
        usuario: true,
      },
    });

    return {
      id: novaCasa.id_usuario,
      nome: novaCasa.usuario.nome,
      email: novaCasa.usuario.email,
      telefone: novaCasa.usuario.telefone,
      nome_fantasia: novaCasa.nome_fantasia,
      capacidade: novaCasa.capacidade,
      cidade: novaCasa.estado,
    };
  } catch (error) {
    throw new Error("Erro ao cadastrar casa de show: " + error);
  }
}

export async function login(email: string, senha: string) {
  const casa = await prisma.casaShow.findFirst({
    where: {
      usuario: {
        email,
        senha_hash: senha,
        tipo: "CASASHOW",
      },
    },
    include: {
      usuario: true,
    },
  });

  if (!casa) {
    return null;
  }

  return {
    message: "Casa de show logada com sucesso",
    casa: {
      id: casa.id_usuario,
      nome: casa.usuario.nome,
      email: casa.usuario.email,
      telefone: casa.usuario.telefone,
      nome_fantasia: casa.nome_fantasia,
    },
  };
}

export async function listarCasasDeShow() {
  const lista = await prisma.casaShow.findMany({
    include: {
      usuario: true,
    },
  });

  return lista.map((casa) => ({
    id: casa.id_usuario,
    nome: casa.usuario.nome,
    endereco: casa.endereco,
  }));
}

export async function buscarCasaDeShowPorId(id: string) {
  const casa = await prisma.casaShow.findUnique({
    where: { id_usuario: id },
    include: {
      usuario: true,
    },
  });

  if (!casa) {
    return null;
  }

  return casa;
}

export async function cadastrarCasa(casaDTO: CasaDeShowDTO) {
  const novaCasa = await prisma.casaShow.create({
    data: {
      nome_fantasia: casaDTO.nome_fantasia,
      cnpj: casaDTO.cnpj,
      capacidade: casaDTO.capacidade,
      endereco: casaDTO.endereco,
      bairro: casaDTO.bairro,
      estado: casaDTO.estado,
      cep: casaDTO.cep,
      geo_lat: casaDTO.geo_lat,
      geo_lng: casaDTO.geo_lng,
      usuario: {
        create: {
          nome: casaDTO.usuario[0].nome,
          email: casaDTO.usuario[0].email,
          senha_hash: casaDTO.usuario[0].senha_hash,
          telefone: casaDTO.usuario[0].telefone,
          tipo: "CASASHOW",
        },
      },
    },
    include: { usuario: true },
  });

  return novaCasa;
}

export async function editarCasa(id_casa: string, casaDTO: CasaDeShowDTO) {
  const casaAtualizada = await prisma.casaShow.update({
    where: { id_usuario: id_casa },
    data: {
      nome_fantasia: casaDTO.nome_fantasia,
      cnpj: casaDTO.cnpj,
      capacidade: casaDTO.capacidade,
      endereco: casaDTO.endereco,
      bairro: casaDTO.bairro,
      estado: casaDTO.estado,
      cep: casaDTO.cep,
      geo_lat: casaDTO.geo_lat,
      geo_lng: casaDTO.geo_lng,
      usuario: {
        update: {
          nome: casaDTO.usuario[0].nome,
          email: casaDTO.usuario[0].email,
          senha_hash: casaDTO.usuario[0].senha_hash,
          telefone: casaDTO.usuario[0].telefone,
        },
      },
    },
    include: { usuario: true },
  });

  return casaAtualizada;
}

export async function deletarCasa(id_casa: string) {
  if (!id_casa) {
    throw new Error("ID da casa de show é obrigatório para deletar.");
  }

  return await prisma.casaShow.delete({
    where: { id_usuario: id_casa },
  });
}
