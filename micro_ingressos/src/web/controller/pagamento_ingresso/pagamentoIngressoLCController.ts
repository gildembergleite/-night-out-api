import type { RequestHandler } from "express";
import * as pagamentoService from "../../service/pagamento_ingresso/pagamentoIngressoService";
import type { PagamentoIngressoDTO } from "../../types/pagamento_ingresso_dtos/pagamentoIngressoDTO";

export const criarPagamento: RequestHandler = async (req, res) => {
  try {
    const dados: PagamentoIngressoDTO = req.body;

    const resultado = await pagamentoService.criarPagamentoIngresso(dados);

    res.status(201).json(resultado);
  } catch (e) {
    res.status(500).json({ message: `Erro ao criar pagamento: ${e}` });
  }
};

export const listarPagamentos: RequestHandler = async (req, res) => {
  try {
    const pagamentos = await pagamentoService.listarPagamentosIngresso();
    res.status(200).json(pagamentos);
  } catch (e) {
    res.status(500).json({ message: `Erro ao listar pagamentos: ${e}` });
  }
};

export const buscarPagamentoPorId: RequestHandler = async (req, res) => {
  try {
    const { id_pagamento } = req.params;
    const pagamento = await pagamentoService.buscarPagamentoPorId(id_pagamento);

    if (!pagamento) {
      res.status(404).json({ message: "Pagamento não encontrado." });
      return;
    }

    res.status(200).json(pagamento);
  } catch (e) {
    res.status(500).json({ message: `Erro ao buscar pagamento: ${e}` });
  }
};

export const atualizarPagamento: RequestHandler = async (req, res) => {
  try {
    const { id_pagamento } = req.params;
    const dados: Partial<PagamentoIngressoDTO> = req.body;

    const resultado = await pagamentoService.atualizarPagamentoIngresso(
      id_pagamento,
      dados
    );

    res.status(200).json(resultado);
  } catch (e) {
    res.status(500).json({ message: `Erro ao atualizar pagamento: ${e}` });
  }
};

export const deletarPagamento: RequestHandler = async (req, res) => {
  try {
    const { id_pagamento } = req.params;

    const resultado = await pagamentoService.deletarPagamentoIngresso(id_pagamento);

    res.status(200).json(resultado);
  } catch (e) {
    res.status(500).json({ message: `Erro ao deletar pagamento: ${e}` });
  }
};
