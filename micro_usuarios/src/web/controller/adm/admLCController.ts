import type { RequestHandler } from "express";
import * as admLoginService from "../../service/adm/admService";

export const login: RequestHandler = async (req, res) => {
  try {
    const email = String(req.body.email);
    const password = String(req.body.password);

    const result = await admLoginService.login(email, password);

    if (!result) {
      res.status(401).json({ message: "Email ou senha inválidos!" });
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
    const { name, email, password, hash, phone, cargo, permissao_notes } =
      req.body;

    const novoUsuario = await admLoginService.cadastro({
      name,
      email,
      password,
      hash,
      phone,
      cargo,
      permissao_notes,
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
