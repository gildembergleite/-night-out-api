import { prisma } from "../../libs/prismaClient";

export async function cadastro(dados: {
  name: string;
  email: string;
  password: string;
  hash: string;
  phone: string;
  nome_fantasia: string;
  cpf: string;
  capacidade: string;
  cep: string;
  logradouro: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
  geo_lat: string;
  geo_lng: string;
}): Promise<any> {
  try {
    const novaCasa = await prisma.casaDeShow.create({
      data: {
        nome_fantasia: dados.nome_fantasia,
        cpf: dados.cpf,
        capacidade: dados.capacidade,
        cep: dados.cep,
        logradouro: dados.logradouro,
        numero: dados.numero,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.cidade,
        uf: dados.uf,
        geo_lat: dados.geo_lat,
        geo_lng: dados.geo_lng,
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
      id: novaCasa.id,
      name: novaCasa.user.name,
      email: novaCasa.user.email,
      phone: novaCasa.user.phone,
      nome_fantasia: novaCasa.nome_fantasia,
      cidade: novaCasa.cidade,
      capacidade: novaCasa.capacidade,
    };
  } catch (error) {
    throw new Error("Erro ao cadastrar casa de show: " + error);
  }
}

export async function login(email: string, password: string) {
  const casa = await prisma.casaDeShow.findFirst({
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

  if (!casa) {
    return null;
  }

  return {
    message: "Casa de show logada com sucesso",
    casa: {
      id: casa.id,
      name: casa.user.name,
      email: casa.user.email,
      phone: casa.user.phone,
      nome_fantasia: casa.nome_fantasia,
    },
  };
}
