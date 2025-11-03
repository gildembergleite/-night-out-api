import { NextFunction, Request, Response } from "express";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

export class AppError extends Error {
  public readonly statusCode: number;
  constructor(message: string, statusCode = 400) {
    super(message);
    this.statusCode = statusCode;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export function errorHandler(err: any, req: Request, res: Response, next: NextFunction): void {
  console.error("Erro capturado:", err);

  if (err instanceof AppError) {
    res.status(err.statusCode).json({ message: err.message });
    return;
  }

  if (err instanceof PrismaClientKnownRequestError) {
    if (err.code === "P2002") {
      const target = (err.meta?.target as string[])?.[0] || "campo";
      let message = "Conflito: valor duplicado detectado.";
      if (target === "email") message = "O email informado já está em uso.";
      if (target === "telefone") message = "O telefone informado já está em uso.";
      if (target === "senha_hash") message = "A senha informada já foi usada.";
      res.status(409).json({ message });
      return;
    }
  }

  if (err instanceof Error) {
    res.status(500).json({ message: err.message });
    return;
  }

  res.status(500).json({ message: "Erro interno no servidor." });
}