import { prisma } from "../../libs/prismaClient";
import { LoteIngressoDTO } from "../../types/lote_ingresso_dtos/loteIngressoDTO";

export async function criarLoteIngresso(dados: LoteIngressoDTO) {
  const novoLote = await prisma.loteIngresso.create({
    data: {
      id_evento: dados.id_evento,
      nome: dados.nome,
      preco: dados.preco,
      quantidade: dados.quantidade,
      qtd_vendida: dados.qtd_vendida ?? "0",
      data_inicio: dados.data_inicio,
      data_fim: dados.data_fim,
    },
  });

  return {
    message: "Lote de ingressos criado com sucesso!",
    lote: novoLote,
  };
}

export async function listarLotesIngresso() {
  const lotes = await prisma.loteIngresso.findMany({
    include: {
      ingressos: true,
    },
  });

  return lotes.map((l:any) => ({
    id_lote: l.id_lote,
    nome: l.nome,
    preco: l.preco,
    quantidade: l.quantidade,
    qtd_vendida: l.qtd_vendida,
    total_ingressos: l.ingressos.length,
  }));
}

export async function buscarLotePorId(id_lote: string) {
  const lote = await prisma.loteIngresso.findUnique({
    where: { id_lote },
    include: {
      ingressos: true,
    },
  });

  if (!lote) {
    return null;
  }

  return lote;
}

export async function atualizarLoteIngresso(
  id_lote: string,
  dados: Partial<LoteIngressoDTO>
) {
  const loteExistente = await prisma.loteIngresso.findUnique({
    where: { id_lote },
  });

  if (!loteExistente) {
    throw new Error("Lote não encontrado.");
  }

  const loteAtualizado = await prisma.loteIngresso.update({
    where: { id_lote },
    data: {
      nome: dados.nome ?? loteExistente.nome,
      preco: dados.preco ?? loteExistente.preco,
      quantidade: dados.quantidade ?? loteExistente.quantidade,
      qtd_vendida: dados.qtd_vendida ?? loteExistente.qtd_vendida,
      data_inicio: dados.data_inicio ?? loteExistente.data_inicio,
      data_fim: dados.data_fim ?? loteExistente.data_fim,
    },
    include: { ingressos: true },
  });

  return {
    message: "Lote atualizado com sucesso",
    lote: loteAtualizado,
  };
}

export async function deletarLoteIngresso(id_lote: string) {
  if (!id_lote) {
    throw new Error("ID do lote é obrigatório para deletar.");
  }

  const lote = await prisma.loteIngresso.findUnique({
    where: { id_lote },
  });

  if (!lote) {
    throw new Error("Lote não encontrado.");
  }

  await prisma.loteIngresso.delete({
    where: { id_lote },
  });

  return { message: "Lote deletado com sucesso" };
}
