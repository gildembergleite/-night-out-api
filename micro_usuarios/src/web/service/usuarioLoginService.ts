import { User } from "@prisma/client";
import { prisma } from "../libs/prismaClient";

export async function login(name: string, password: string) {
  const message = "Usuario logado com sucesso";

  const user = await prisma.user.findFirst({ where: { name, password } });

  if (!user) {
    return console.log("O usuario não existe ou foi inserido incorretamente");
  }

  return message;
}


export async function cadastro(dados: User): Promise<Partial<User>> {
  try {
    const novoUsuario = await prisma.user.create({
      data: {
        name: dados.name,
        email: dados.email,
        password: dados.password,
        hash: dados.hash,
        phone: dados.phone,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    return {
      id: novoUsuario.id,
      name: novoUsuario.name,
      email: novoUsuario.email,
      phone: novoUsuario.phone,
      createdAt: novoUsuario.createdAt,
    };
  } catch (error) {
    throw new Error("Erro ao cadastrar usuário: " + error);
  }
}