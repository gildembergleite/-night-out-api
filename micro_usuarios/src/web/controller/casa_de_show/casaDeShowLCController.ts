import type { RequestHandler } from "express";
import * as casaService from "../../service/casa_de_show/casaDeShowService";

export const login: RequestHandler = async (req, res) => {
  try {
    const email = String(req.body.email);
    const password = String(req.body.password);

    const result = await casaService.login(email, password);

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
      nome_fantasia,
      cpf,
      capacidade,
      cep,
      logradouro,
      numero,
      complemento,
      bairro,
      cidade,
      uf,
      geo_lat,
      geo_lng,
    } = req.body;

    const novaCasa = await casaService.cadastro({
      name,
      email,
      password,
      hash,
      phone,
      nome_fantasia,
      cpf,
      capacidade,
      cep,
      logradouro,
      numero,
      complemento,
      bairro,
      cidade,
      uf,
      geo_lat,
      geo_lng,
    });

    res.status(201).json({
      message: "Casa de show cadastrada com sucesso!",
      usuario: novaCasa,
    });
  } catch (e) {
    res.status(500).json({ message: `Erro no cadastro: ${e}` });
  }
};
