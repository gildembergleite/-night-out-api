import type { RequestHandler } from "express";
import * as loteService from "../../service/lote_ingresso/loteIngressoService";
import type { LoteIngressoDTO } from "../../types/lote_ingresso_dtos/loteIngressoDTO";

export const criarLote: RequestHandler = async (req, res) => {
  try {
    const dados: LoteIngressoDTO = req.body;

    const resultado = await loteService.criarLoteIngresso(dados);

    res.status(201).json(resultado);
  } catch (e) {
    res.status(500).json({ message: `Erro ao criar lote: ${e}` });
  }
};

export const listarLotes: RequestHandler = async (req, res) => {
  try {
    const lotes = await loteService.listarLotesIngresso();
    res.status(200).json(lotes);
  } catch (e) {
    res.status(500).json({ message: `Erro ao listar lotes: ${e}` });
  }
};

export const buscarLotePorId: RequestHandler = async (req, res) => {
  try {
    const { id_lote } = req.params;
    const lote = await loteService.buscarLotePorId(id_lote);

    if (!lote) {
      res.status(404).json({ message: "Lote não encontrado." });
      return;
    }

    res.status(200).json(lote);
  } catch (e) {
    res.status(500).json({ message: `Erro ao buscar lote: ${e}` });
  }
};

export const atualizarLote: RequestHandler = async (req, res) => {
  try {
    const { id_lote } = req.params;
    const dados: Partial<LoteIngressoDTO> = req.body;

    const resultado = await loteService.atualizarLoteIngresso(id_lote, dados);

    res.status(200).json(resultado);
  } catch (e) {
    res.status(500).json({ message: `Erro ao atualizar lote: ${e}` });
  }
};

export const deletarLote: RequestHandler = async (req, res) => {
  try {
    const { id_lote } = req.params;

    const resultado = await loteService.deletarLoteIngresso(id_lote);

    res.status(200).json(resultado);
  } catch (e) {
    res.status(500).json({ message: `Erro ao deletar lote: ${e}` });
  }
};
