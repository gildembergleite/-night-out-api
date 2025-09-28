import { Administrador } from "@prisma/client";
import { prisma } from "../../libs/prismaClient";

export async function login(email: string, password: string) {
  const message = "Administrador logado com sucesso";

  const administrador = await prisma.administrador.findFirst({
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

  if (!administrador) {
    return console.log(
      "O administrador não existe ou foi inserido incorretamente"
    );
  }

  return message;
}

export async function cadastro(dados: {
  name: string;
  email: string;
  password: string;
  hash: string;
  phone: string;
  cargo: string;
  permissao_notes: string;
}): Promise<any> {
  try {
    const novoAdministrador = await prisma.administrador.create({
      data: {
        cargo: dados.cargo,
        permissao_notes: dados.permissao_notes,
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
      id: novoAdministrador.id,
      name: novoAdministrador.user.name,
      email: novoAdministrador.user.email,
      phone: novoAdministrador.user.phone,
      createdAt: novoAdministrador.user.createdAt,
    };
  } catch (error) {
    throw new Error("Erro ao cadastrar administrador: " + error);
  }
}
