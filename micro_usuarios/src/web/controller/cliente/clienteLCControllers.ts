import type { RequestHandler } from "express";
import * as clienteService from "../../service/cliente/clienteService";

export const login: RequestHandler = async (req, res) => {
  try {
    const email = String(req.body.email);
    const password = String(req.body.password);

    const result = await clienteService.login(email, password);

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
    const {
      name,
      email,
      password,
      hash,
      phone,
      apelido,
      preferencias,
      data_nascimento,
    } = req.body;

    const novoUsuario = await clienteService.cadastro({
      name,
      email,
      password,
      hash,
      phone,
      apelido,
      preferencias,
      data_nascimento,
    });

    res.status(201).json({
      message: "Cliente cadastrado com sucesso!",
      usuario: novoUsuario,
    });
  } catch (e) {
    res.status(500).json({
      message: `Erro no cadastro: ${e}`,
    });
  }
};

