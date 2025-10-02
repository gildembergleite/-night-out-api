import { prisma } from "../../libs/prismaClient";

export async function cadastro(dados: {
  name: string;
  email: string;
  password: string;
  hash: string;
  phone: string;
  apelido: string;
  preferencias: string;
  data_nascimento: string;
}): Promise<any> {
  try {
    const novoCliente = await prisma.cliente.create({
      data: {
        apelido: dados.apelido,
        preferencias: dados.preferencias,
        data_nascimento: dados.data_nascimento,
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
      id: novoCliente.id,
      name: novoCliente.user.name,
      email: novoCliente.user.email,
      phone: novoCliente.user.phone,
      apelido: novoCliente.apelido,
      preferencias: novoCliente.preferencias,
      data_nascimento: novoCliente.data_nascimento,
      createdAt: novoCliente.user.createdAt,
    };
  } catch (error) {
    throw new Error("Erro ao cadastrar cliente: " + error);
  }
}

export async function login(email: string, password: string) {
  const cliente = await prisma.cliente.findFirst({
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

  if (!cliente) {
    return null;
  }

  return {
    message: "Cliente logado com sucesso",
    cliente: {
      id: cliente.id,
      name: cliente.user.name,
      email: cliente.user.email,
      phone: cliente.user.phone,
    },
  };
}
