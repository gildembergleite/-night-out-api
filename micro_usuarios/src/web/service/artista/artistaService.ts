import { prisma } from "../../libs/prismaClient";
import { ArtistaDTO } from "../../types/artista_dtos/artistaDTO";

export async function cadastro(dados: {
  nome: string;
  email: string;
  senha: string;
  telefone?: string;
  nome_artista: string;
  genero_musical: string;
  cache_min: string;
  descricao?: string;
  portifolio?: string;
}): Promise<any> {
  const novoArtista = await prisma.artista.create({
    data: {
      nome_artista: dados.nome_artista,
      genero_musical: dados.genero_musical,
      cache_min: dados.cache_min,
      descricao: dados.descricao,
      portifolio: dados.portifolio,
      usuario: {
        create: {
          nome: dados.nome,
          email: dados.email,
          senha_hash: dados.senha,
          telefone: dados.telefone,
          tipo: "ARTISTA",
        },
      },
    },
    include: {
      usuario: true,
    },
  });

  return {
    id: novoArtista.id_usuario,
    nome: novoArtista.usuario.nome,
    email: novoArtista.usuario.email,
    telefone: novoArtista.usuario.telefone,
    nome_artista: novoArtista.nome_artista,
    genero_musical: novoArtista.genero_musical,
    cache_min: novoArtista.cache_min,
    descricao: novoArtista.descricao,
    portifolio: novoArtista.portifolio,
  };
}

export async function login(email: string, senha: string) {
  const artista = await prisma.artista.findFirst({
    where: {
      usuario: {
        email,
        senha_hash: senha,
        tipo: "ARTISTA",
      },
    },
    include: {
      usuario: true,
    },
  });

  if (!artista) {
    return null;
  }

  return {
    message: "Artista logado com sucesso",
    artista: {
      id: artista.id_usuario,
      nome: artista.usuario.nome,
      email: artista.usuario.email,
      telefone: artista.usuario.telefone,
      nome_artista: artista.nome_artista,
      genero_musical: artista.genero_musical,
      cache_min: artista.cache_min,
      descricao: artista.descricao,
      portifolio: artista.portifolio,
    },
  };
}

export async function listarArtistas() {
  const lista = await prisma.artista.findMany({
    include: {
      usuario: true,
    },
  });

  return lista.map((artista) => ({
    id: artista.id_usuario,
    nome: artista.usuario.nome,
    email: artista.usuario.email,
  }));
}

export async function buscarArtistaPorId(id: string) {
  const artista = await prisma.artista.findUnique({
    where: { id_usuario: id },
    include: {
      usuario: true,
    },
  });

  if (!artista) {
    return null;
  }

  return artista;
}

export async function cadastrarArtista(artistaDTO: ArtistaDTO) {
  const novoArtista = await prisma.artista.create({
    data: {
      nome_artista: artistaDTO.nome_artista,
      genero_musical: artistaDTO.genero_musical,
      cache_min: artistaDTO.cache_min,
      descricao: artistaDTO.descricao,
      portifolio: artistaDTO.portifolio,
      usuario: {
        create: {
          nome: artistaDTO.usuario[0].nome,
          email: artistaDTO.usuario[0].email,
          senha_hash: artistaDTO.usuario[0].senha_hash,
          telefone: artistaDTO.usuario[0].telefone,
          tipo: "ARTISTA",
        },
      },
    },
    include: { usuario: true },
  });

  return novoArtista;
}

export async function editarArtista(
  id_artista: string,
  artistaDTO: ArtistaDTO
) {
  const artistaAtualizado = await prisma.artista.update({
    where: { id_usuario: id_artista },
    data: {
      nome_artista: artistaDTO.nome_artista,
      genero_musical: artistaDTO.genero_musical,
      cache_min: artistaDTO.cache_min,
      descricao: artistaDTO.descricao,
      portifolio: artistaDTO.portifolio,
      usuario: {
        update: {
          nome: artistaDTO.usuario[0].nome,
          email: artistaDTO.usuario[0].email,
          senha_hash: artistaDTO.usuario[0].senha_hash,
          telefone: artistaDTO.usuario[0].telefone,
        },
      },
    },
    include: { usuario: true },
  });

  return artistaAtualizado;
}

export async function deletarArtista(id_artista: string) {
  if (!id_artista) {
    throw new Error("ID do artista é obrigatório para deletar.");
  }

  return await prisma.artista.delete({
    where: { id_usuario: id_artista },
  });
}
