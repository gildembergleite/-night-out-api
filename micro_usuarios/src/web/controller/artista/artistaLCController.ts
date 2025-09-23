import type { RequestHandler } from "express";
import * as artistaService from "../../service/artista/artistaService";

export const login: RequestHandler = async (req, res) => {
  try {
    const email = String(req.body.email);
    const password = String(req.body.password);

    const result = await artistaService.login(email, password);

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
      name,
      email,
      password,
      hash,
      phone,
      nome_artistico,
      genero_musical,
      cache_min,
      bio,
      url_portfolio,
    } = req.body;

    const novoUsuario = await artistaService.cadastro({
      name,
      email,
      password,
      hash,
      phone,
      nome_artistico,
      genero_musical,
      cache_min,
      bio,
      url_portfolio,
    });

    res.status(201).json({
      message: "Artista cadastrado com sucesso!",
      usuario: novoUsuario,
    });
  } catch (e) {
    res.status(500).json({ message: `Erro no cadastro: ${e}` });
  }
};
