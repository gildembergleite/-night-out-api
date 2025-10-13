import { prisma } from "../../libs/prismaClient";
import { PagamentoIngressoDTO } from "../../types/pagamento_ingresso_dtos/pagamentoIngressoDTO";

export async function criarPagamentoIngresso(dados: PagamentoIngressoDTO) {
  const novoPagamento = await prisma.pagamentoIngresso.create({
    data: {
      id_pagamento: dados.id_pagamento,
      id_ingresso: dados.id_ingresso,
      metodo: dados.metodo,
      status: dados.status ?? "PENDENTE",
      valor: dados.valor,
    },
    include: {
      ingresso: true,
    },
  });

  return {
    message: "Pagamento do ingresso criado com sucesso",
    pagamento: novoPagamento,
  };
}

export async function listarPagamentosIngresso() {
  const pagamentos = await prisma.pagamentoIngresso.findMany({
    include: {
      ingresso: true,
    },
  });

  return pagamentos.map((p: (typeof pagamentos)[0]) => ({
    id_pagamento: p.id_pagamento,
    id_ingresso: p.id_ingresso,
    metodo: p.metodo,
    status: p.status,
    valor: p.valor,
    createdAt: p.createdAt,
    ingresso: {
      id_usuario: p.ingresso.id_usuario,
      codigo_qr: p.ingresso.codigo_qr,
      status: p.ingresso.status,
    },
  }));
}

export async function buscarPagamentoPorId(id_pagamento: string) {
  const pagamento = await prisma.pagamentoIngresso.findUnique({
    where: { id_pagamento },
    include: { ingresso: true },
  });

  if (!pagamento) {
    return null;
  }

  return pagamento;
}

export async function atualizarPagamentoIngresso(
  id_pagamento: string,
  dados: Partial<PagamentoIngressoDTO>
) {
  const pagamentoExistente = await prisma.pagamentoIngresso.findUnique({
    where: { id_pagamento },
  });

  if (!pagamentoExistente) {
    throw new Error("Pagamento não encontrado.");
  }

  const pagamentoAtualizado = await prisma.pagamentoIngresso.update({
    where: { id_pagamento },
    data: {
      metodo: dados.metodo ?? pagamentoExistente.metodo,
      status: dados.status ?? pagamentoExistente.status,
      valor: dados.valor ?? pagamentoExistente.valor,
    },
    include: { ingresso: true },
  });

  return {
    message: "Pagamento atualizado com sucesso",
    pagamento: pagamentoAtualizado,
  };
}

export async function deletarPagamentoIngresso(id_pagamento: string) {
  if (!id_pagamento) {
    throw new Error("ID do pagamento é obrigatório para deletar.");
  }

  const pagamento = await prisma.pagamentoIngresso.findUnique({
    where: { id_pagamento },
  });

  if (!pagamento) {
    throw new Error("Pagamento não encontrado.");
  }

  await prisma.pagamentoIngresso.delete({
    where: { id_pagamento },
  });

  return { message: "Pagamento deletado com sucesso" };
}
