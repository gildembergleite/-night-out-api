import bcrypt from "bcryptjs";
import type { Request, RequestHandler, Response } from "express";
import jwt from "jsonwebtoken";
import { asyncHandler } from "../../../core/middleware/asyncHandler";
import { AppError } from "../../../core/middleware/validacao";
import * as admService from "../../service/adm/admService";

const JWT_SECRET = process.env.JWT_SECRET || "SEGREDO_SUPER_FORTE_DO_JWT";

export const login: RequestHandler = asyncHandler(async (req: Request, res: Response) => {
  const email = String(req.body.email);
  const senha = String(req.body.senha);
  const administrador = await admService.buscarAdministradorParaLogin(email);

  if (!administrador) throw new AppError("Email ou senha inválidos!", 401);

  const isMatch = await bcrypt.compare(senha, administrador.usuario.senha_hash);
  if (!isMatch) throw new AppError("Email ou senha inválidos!", 401);

  const token = jwt.sign(
    { id: administrador.id_usuario, email: administrador.usuario.email, tipo: administrador.usuario.tipo },
    JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.status(200).json({
    message: "Login realizado com sucesso!",
    token: token,
    administradorId: administrador.id_usuario,
  });
});

export const cadastro: RequestHandler = asyncHandler(async (req: Request, res: Response) => {
  const { nome, email, senha, telefone, cargo, permissao_nivel } = req.body;

  const telefoneLimpo = telefone ? telefone.replace(/\D/g, "") : "";
  if (telefoneLimpo && (telefoneLimpo.length < 10 || telefoneLimpo.length > 11))
    throw new AppError("O telefone deve conter 10 ou 11 dígitos numéricos.", 400);

  const salt = await bcrypt.genSalt(10);
  const senha_hash = await bcrypt.hash(senha, salt);

  const novoAdministrador = await admService.cadastro({
    nome,
    email,
    senha: senha_hash,
    telefone,
    cargo,
    permissao_nivel,
  });

  res.status(201).json({
    message: "Administrador cadastrado com sucesso!",
    usuario: novoAdministrador,
  });
});

export const listarAdministradores: RequestHandler = asyncHandler(async (req: Request, res: Response) => {
  const { page = 1, pageSize = 10 } = req.query;
  const offset = (Number(page) - 1) * Number(pageSize);
  
  const lista = await admService.listarAdministradores({
    offset,
    limit: Number(pageSize),
  });

  res.status(200).json(lista);
});

export const buscarAdministradorPorId: RequestHandler = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const adm = await admService.buscarAdministradorPorId(id);
  if (!adm) throw new AppError("Administrador não encontrado.", 404);
  res.status(200).json(adm);
});

export const cadastrarADM: RequestHandler = asyncHandler(async (req: Request, res: Response) => {
  const admDTO = req.body;
  const novoADM = await admService.cadastrarADM(admDTO);
  res.status(201).json({
    message: "Administrador cadastrado com sucesso!",
    administrador: novoADM,
  });
});

export const editarADM: RequestHandler = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const admDTO = req.body;
  const admAtualizado = await admService.editarADM(id, admDTO);
  res.status(200).json({
    message: "Administrador atualizado com sucesso!",
    administrador: admAtualizado,
  });
});

export const deletarADM: RequestHandler = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  await admService.deletarADM(id);
  res.status(200).json({
    message: "Administrador deletado com sucesso!",
  });
});