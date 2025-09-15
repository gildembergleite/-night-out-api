import type { RequestHandler } from "express";
import * as usuarioLoginService from "../service/usuarioLoginService";

export const login: RequestHandler = async (req, res) => {
  try {
    const name = String(req.body.name);
    const password = String(req.body.password);

    const result = await usuarioLoginService.login(name, password);

    if (!result) {
      res.status(401).json({ message: "Usuário ou senha inválidos" });
      return;
    }

    res.status(200).json({ message: result });
  } catch (e) {
    res.status(500).json({
      message: `Erro de login: ${e}`,
    });
  }
};

export const cadastro: RequestHandler = async (req, res) => {
  try {
    const { name, email, password, hash, phone } = req.body;

    const novoUsuario = await usuarioLoginService.cadastro({
      id: "",
      name,
      email,
      password,
      hash,
      phone,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    res.status(201).json({
      message: "Usuário cadastrado com sucesso",
      usuario: novoUsuario,
    });
  } catch (e) {
    res.status(500).json({
      message: `Erro no cadastro: ${e}`,
    });
  }
};
