import { prisma } from "../../libs/prismaClient";

export async function buscarUsuarioParaLogin(email: string) {
  const usuario = await prisma.usuario.findFirst({
    where: { email },
  });

  return usuario;
}