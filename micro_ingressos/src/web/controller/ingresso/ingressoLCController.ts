import type { RequestHandler } from "express";
import * as ingressoService from "../../service/ingresso/ingressoService";
import type { IngressoDTO } from "../../types/ingresso_dtos/ingressoDTO";

export const criarIngresso: RequestHandler = async (req, res) => {
  try {
    const dados: IngressoDTO = req.body;

    const novoIngresso = await ingressoService.criarIngresso(dados);

    res.status(201).json({
      message: "Ingresso criado com sucesso!",
      ingresso: novoIngresso,
    });
  } catch (e) {
    res.status(500).json({ message: `Erro ao criar ingresso: ${e}` });
  }
};

export const listarIngressos: RequestHandler = async (req, res) => {
  try {
    const lista = await ingressoService.listarIngressos();
    res.status(200).json(lista);
  } catch (e) {
    res.status(500).json({ message: `Erro ao listar ingressos: ${e}` });
  }
};

export const buscarIngressoPorId: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const ingresso = await ingressoService.buscarIngressoPorId(id);

    if (!ingresso) {
      res.status(404).json({ message: "Ingresso não encontrado." });
      return;
    }

    res.status(200).json(ingresso);
  } catch (e) {
    res.status(500).json({ message: `Erro ao buscar ingresso: ${e}` });
  }
};

export const editarIngresso: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const dados: Partial<IngressoDTO> = req.body;

    const ingressoAtualizado = await ingressoService.editarIngresso(id, dados);

    res.status(200).json({
      message: "Ingresso atualizado com sucesso!",
      ingresso: ingressoAtualizado,
    });
  } catch (e) {
    res.status(500).json({ message: `Erro ao editar ingresso: ${e}` });
  }
};

export const checkinIngresso: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;

   
    await ingressoService.checkinIngresso(id);

    
    res.status(200).json({
      message: "Check-in realizado com sucesso!",
    });
  } catch (e) {
    res.status(500).json({ message: `Erro ao fazer check-in: ${e}` });
  }
};
