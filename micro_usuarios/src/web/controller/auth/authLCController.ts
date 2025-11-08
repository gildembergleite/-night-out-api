import bcrypt from "bcryptjs";
import type { Request, RequestHandler, Response } from "express";
import jwt from "jsonwebtoken";
import { asyncHandler } from "../../../core/middleware/asyncHandler";
import { AppError } from "../../../core/middleware/validacao";
import * as authService from "../../service/auth/authService";

const JWT_SECRET = process.env.JWT_SECRET || "SEGREDO_SUPER_FORTE_DO_JWT";

export const login: RequestHandler = asyncHandler(async (req: Request, res: Response) => {
  const email = String(req.body.email);
  const senha = String(req.body.senha);
  const usuario = await authService.buscarUsuarioParaLogin(email);

  if (!usuario) throw new AppError("Email ou senha inválidos!", 401);

  const isMatch = await bcrypt.compare(senha, usuario.senha_hash);
  if (!isMatch) throw new AppError("Email ou senha inválidos!", 401);

  const token = jwt.sign(
    { id: usuario.id_usuario, email: usuario.email, tipo: usuario.tipo },
    JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.status(200).json({
    message: "Login realizado com sucesso!",
    token: token,
    tipo: usuario.tipo,
  });
});
