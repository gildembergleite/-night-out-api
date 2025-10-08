import type { RequestHandler } from "express";
import * as casaService from "../../service/casa_de_show/casaDeShowService";

export const login: RequestHandler = async (req, res) => {
  try {
    const email = String(req.body.email);
    const senha = String(req.body.senha);

    const result = await casaService.login(email, senha);

    if (!result) {
      res.status(401).json({ message: "Email ou senha inválidos!" });
      return;
    }

    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({ message: `Erro de login: ${e}` });
  }
};

export const cadastro: RequestHandler = async (req, res) => {
  try {
    const {
      nome,
      email,
      senha,
      telefone,
      nome_fantasia,
      cnpj,
      capacidade,
      endereco,
      bairro,
      estado,
      cep,
      geo_lat,
      geo_lng,
    } = req.body;

    const novaCasa = await casaService.cadastro({
      nome,
      email,
      senha,
      telefone,
      nome_fantasia,
      cnpj,
      capacidade,
      endereco,
      bairro,
      estado,
      cep,
      geo_lat,
      geo_lng,
    });

    res.status(201).json({
      message: "Casa de show cadastrada com sucesso!",
      casa: novaCasa,
    });
  } catch (e) {
    res.status(500).json({ message: `Erro no cadastro: ${e}` });
  }
};

export const listarCasasDeShow: RequestHandler = async (req, res) => {
  try {
    const lista = await casaService.listarCasasDeShow();
    res.status(200).json(lista);
  } catch (e) {
    res.status(500).json({ message: `Erro ao listar casas de show: ${e}` });
  }
};

export const buscarCasaDeShowPorId: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const casa = await casaService.buscarCasaDeShowPorId(id);

    if (!casa) {
      res.status(404).json({ message: "Casa de show não encontrada." });
      return;
    }

    res.status(200).json(casa);
  } catch (e) {
    res.status(500).json({ message: `Erro ao buscar casa de show: ${e}` });
  }
};

export const cadastrarCasa: RequestHandler = async (req, res) => {
  try {
    const casaDTO = req.body;
    const novaCasa = await casaService.cadastrarCasa(casaDTO);

    res.status(201).json({
      message: "Casa de show cadastrada com sucesso!",
      casa: novaCasa,
    });
  } catch (e) {
    res.status(500).json({ message: `Erro ao cadastrar casa de show: ${e}` });
  }
};

export const editarCasa: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const casaDTO = req.body;

    const casaAtualizada = await casaService.editarCasa(id, casaDTO);
    res.status(200).json({
      message: "Casa de show atualizada com sucesso!",
      casa: casaAtualizada,
    });
  } catch (e) {
    res.status(500).json({ message: `Erro ao editar casa de show: ${e}` });
  }
};

export const deletarCasa: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    await casaService.deletarCasa(id);

    res.status(200).json({ message: "Casa de show deletada com sucesso!" });
  } catch (e) {
    res.status(500).json({ message: `Erro ao deletar casa de show: ${e}` });
  }
};
