import type { NextFunction, Request, RequestHandler, Response } from "express";

const API_KEY = process.env.X_API_KEY || process.env.API_KEY;

export const validateApiKey: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const apiKey = req.headers["x-api-key"];

  if (!API_KEY) {
    console.warn("Aviso: X_API_KEY não configurada nas variáveis de ambiente");
    return res.status(500).json({ 
      message: "Erro de configuração do servidor. API Key não configurada." 
    });
  }

  if (!apiKey) {
    return res.status(401).json({ 
      message: "Acesso negado. x-api-key não fornecido." 
    });
  }

  if (apiKey !== API_KEY) {
    return res.status(403).json({ 
      message: "Acesso negado. x-api-key inválido." 
    });
  }

  next();
};

