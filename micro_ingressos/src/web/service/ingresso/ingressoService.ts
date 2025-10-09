import { prisma } from "../../libs/prismaClient";
import { IngressoDTO } from "../../types/ingresso_dtos/ingressoDTO";

export async function criarIngresso(dados: IngressoDTO) {
  const novoIngresso = await prisma.ingresso.create({
    data: {
      id_ingresso: dados.id_ingresso,
      id_lote: dados.id_lote,
      id_usuario: dados.id_usuario,
      codigo_qr: dados.codigo_qr,
      checkin_em: dados.checkin_em,
      status: dados.status ?? "DISPONIVEL",
    },
  });

  return {
    message: "Ingresso criado com sucesso",
    ingresso: novoIngresso,
  };
}

export async function listarIngressos() {
  const ingressos = await prisma.ingresso.findMany({
    include: {
      lote: {
        include: {
          evento: true, // caso o lote tenha relação com evento
        },
      },
    },
  });

  return ingressos.map((i: any) => ({
    id_ingresso: i.id_ingresso,
    id_lote: i.id_lote,
    id_usuario: i.id_usuario,
    codigo_qr: i.codigo_qr,
    status: i.status,
    checkin_em: i.checkin_em,
    evento: i.lote?.evento ?? null,
  }));
}

export async function buscarIngressoPorId(id: string) {
  const ingresso = await prisma.ingresso.findUnique({
    where: { id_ingresso: id },
    include: {
      lote: {
        include: {
          evento: true,
        },
      },
    },
  });

  if (!ingresso) {
    return null;
  }

  return ingresso;
}

export async function atualizarIngresso(
  id: string,
  dados: Partial<IngressoDTO>
) {
  const ingressoExistente = await prisma.ingresso.findUnique({
    where: { id_ingresso: id },
  });

  if (!ingressoExistente) {
    throw new Error("Ingresso não encontrado.");
  }

  const ingressoAtualizado = await prisma.ingresso.update({
    where: { id_ingresso: id },
    data: {
      id_ingresso: dados.id_ingresso ?? ingressoExistente.id_ingresso,
      id_lote: dados.id_lote ?? ingressoExistente.id_lote,
      id_usuario: dados.id_usuario ?? ingressoExistente.id_usuario,
      codigo_qr: dados.codigo_qr ?? ingressoExistente.codigo_qr,
      status: dados.status ?? ingressoExistente.status,
      checkin_em: dados.checkin_em ?? ingressoExistente.checkin_em,
    },
  });

  return {
    message: "Ingresso atualizado com sucesso",
    ingresso: ingressoAtualizado,
  };
}

export async function deletarIngresso(id: string) {
  if (!id) {
    throw new Error("ID do ingresso é obrigatório para deletar.");
  }

  const ingresso = await prisma.ingresso.findUnique({
    where: { id_ingresso: id },
  });

  if (!ingresso) {
    throw new Error("Ingresso não encontrado.");
  }

  await prisma.ingresso.delete({
    where: { id_ingresso: id },
  });

  return { message: "Ingresso deletado com sucesso" };
}
export function checkinIngresso(id: any) {
    throw new Error("Function not implemented.");
}

export function editarIngresso(id: any, dados: Partial<IngressoDTO>) {
    throw new Error("Function not implemented.");
}

