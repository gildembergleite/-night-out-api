import { prisma } from "../../libs/prismaClient";

export async function cadastro(dados: {
  name: string;
  email: string;
  password: string;
  hash: string;
  phone: string;
  nome_artistico: string;
  genero_musical: string;
  cache_min: string;
  bio: string;
  url_portfolio: string;
}): Promise<any> {
  try {
    const novoArtista = await prisma.artista.create({
      data: {
        nome_artistico: dados.nome_artistico,
        genero_musical: dados.genero_musical,
        cache_min: dados.cache_min,
        bio: dados.bio,
        url_portfolio: dados.url_portfolio,
        user: {
          create: {
            name: dados.name,
            email: dados.email,
            password: dados.password,
            hash: dados.hash,
            phone: dados.phone,
          },
        },
      },
      include: {
        user: true,
      },
    });

    return {
      id: novoArtista.id,
      name: novoArtista.user.name,
      email: novoArtista.user.email,
      phone: novoArtista.user.phone,
      nome_artistico: novoArtista.nome_artistico,
      genero_musical: novoArtista.genero_musical,
      bio: novoArtista.bio,
      url_portfolio: novoArtista.url_portfolio,
    };
  } catch (error) {
    throw new Error("Erro ao cadastrar artista: " + error);
  }
}

export async function login(email: string, password: string) {
  const artista = await prisma.artista.findFirst({
    where: {
      user: {
        email,
        password,
      },
    },
    include: {
      user: true,
    },
  });

  if (!artista) {
    return null;
  }

  return {
    message: "Artista logado com sucesso",
    artista: {
      id: artista.id,
      name: artista.user.name,
      email: artista.user.email,
      phone: artista.user.phone,
      nome_artistico: artista.nome_artistico,
    },
  };
}
