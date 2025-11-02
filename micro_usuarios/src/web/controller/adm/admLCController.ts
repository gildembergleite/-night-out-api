import type { RequestHandler } from "express";
import * as admService from "../../service/adm/admService";

export const login: RequestHandler = async (req, res) => {
  try {
    const email = String(req.body.email);
    const senha = String(req.body.senha);

    const result = await admService.login(email, senha);

    if (!result) {
      res.status(401).json({ message: "Email ou senha inválidos!" });
      return;
    }

    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      message: `Erro de login: ${e}`,
    });
  }
};

export const cadastro: RequestHandler = async (req, res) => {
  try {
    const { nome, email, senha, telefone, cargo, permissao_nivel } = req.body;

    const novoUsuario = await admService.cadastro({
      nome,
      email,
      senha,
      telefone,
      cargo,
      permissao_nivel,
    });

    res.status(201).json({
      message: "Administrador cadastrado com sucesso!",
      usuario: novoUsuario,
    });
  } catch (e) {
    res.status(500).json({
      message: `Erro no cadastro: ${e}`,
    });
  }
};

export const listarAdministradores: RequestHandler = async (req, res) => {
  try {
    const lista = await admService.listarAdministradores();
    res.status(200).json(lista);
  } catch (e) {
    res.status(500).json({
      message: `Erro ao listar administradores: ${e}`,
    });
  }
};

export const buscarAdministradorPorId: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const adm = await admService.buscarAdministradorPorId(id);

    if (!adm) {
      res.status(404).json({ message: "Administrador não encontrado." });
      return;
    }

    res.status(200).json(adm);
  } catch (e) {
    res.status(500).json({
      message: `Erro ao buscar administrador: ${e}`,
    });
  }
};

export const cadastrarADM: RequestHandler = async (req, res) => {
  try {
    const admDTO = req.body;
    const novoADM = await admService.cadastrarADM(admDTO);

    res.status(201).json({
      message: "Administrador cadastrado com sucesso!",
      administrador: novoADM,
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      message: `Erro ao cadastrar administrador: ${e}`,
    });
  }
};

export const editarADM: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const admDTO = req.body;

    const admAtualizado = await admService.editarADM(id, admDTO);
    res.status(200).json({
      message: "Administrador atualizado com sucesso!",
      administrador: admAtualizado,
    });
  } catch (e) {
    res.status(500).json({
      message: `Erro ao editar administrador: ${e}`,
    });
  }
};

export const deletarADM: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    await admService.deletarADM(id);

    res.status(200).json({
      message: "Administrador deletado com sucesso!",
    });
  } catch (e) {
    res.status(500).json({
      message: `Erro ao deletar administrador: ${e}`,
    });
  }
};
