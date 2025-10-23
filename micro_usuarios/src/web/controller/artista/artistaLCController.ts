import type { RequestHandler } from "express";
import * as artistaService from "../../service/artista/artistaService";

export const login: RequestHandler = async (req, res) => {
  try {
    const email = String(req.body.email);
    const senha = String(req.body.senha);

    const result = await artistaService.login(email, senha);

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
      nome_artista,
      genero_musical,
      cache_min,
      descricao,
      portifolio,
    } = req.body;

    const novoUsuario = await artistaService.cadastro({
      nome,
      email,
      senha,
      telefone,
      nome_artista,
      genero_musical,
      cache_min,
      descricao,
      portifolio,
    });

    res.status(201).json({
      message: "Artista cadastrado com sucesso!",
      usuario: novoUsuario,
    });
  } catch (e) {
    res.status(500).json({ message: `Erro no cadastro: ${e}` });
  }
};

export const listarArtistas: RequestHandler = async (req, res) => {
  try {
    const lista = await artistaService.listarArtistas();
    res.status(200).json(lista);
  } catch (e) {
    res.status(500).json({ message: `Erro ao listar artistas: ${e}` });
  }
};

export const buscarArtistaPorId: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const artista = await artistaService.buscarArtistaPorId(id);

    if (!artista) {
      res.status(404).json({ message: "Artista não encontrado." });
      return;
    }

    res.status(200).json(artista);
  } catch (e) {
    res.status(500).json({ message: `Erro ao buscar artista: ${e}` });
  }
};

export const cadastrarArtista: RequestHandler = async (req, res) => {
  try {
    const artistaDTO = req.body;
    const novoArtista = await artistaService.cadastrarArtista(artistaDTO);

    res.status(201).json({
      message: "Artista cadastrado com sucesso!",
      artista: novoArtista,
    });
  } catch (e) {
    res.status(500).json({ message: `Erro ao cadastrar artista: ${e}` });
  }
};

export const editarArtista: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const artistaDTO = req.body;

    const artistaAtualizado = await artistaService.editarArtista(
      id,
      artistaDTO
    );
    res.status(200).json({
      message: "Artista atualizado com sucesso!",
      artista: artistaAtualizado,
    });
  } catch (e) {
    res.status(500).json({ message: `Erro ao editar artista: ${e}` });
  }
};

export const deletarArtista: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    await artistaService.deletarArtista(id);

    res.status(200).json({ message: "Artista deletado com sucesso!" });
  } catch (e) {
    res.status(500).json({ message: `Erro ao deletar artista: ${e}` });
  }
};