import type { NextFunction, Request, RequestHandler, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";


const JWT_SECRET = process.env.JWT_SECRET || 'SEGREDO_SUPER_FORTE_DO_JWT'; 

export interface CustomRequest extends Request {
  user?: {
    id: string;
    email: string;
    tipo: string;
  };
}

interface DecodedToken extends JwtPayload {
    id: string;
    email: string;
    tipo: string;
}

export const protect: RequestHandler = (
  req: CustomRequest, 
  res: Response,
  next: NextFunction
) => {
  const apiKey = req.headers["x-api-key"];

  if (apiKey === process.env.X_API_KEY) return next();

  let token: string | undefined;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      
      token = req.headers.authorization.split(" ")[1];
       
      const decoded = jwt.verify(token, JWT_SECRET) as DecodedToken; 
     
      req.user = { id: decoded.id, email: decoded.email, tipo: decoded.tipo };

      next();

    } catch (error) {
   
      console.error("Erro de validação de token:", error);
      return res.status(401).json({ message: "Acesso negado. Token inválido." });
    }
  }


  if (!token) {
    return res.status(401).json({ message: "Acesso negado. Token não fornecido." });
  }
};


export const isAdmin: RequestHandler = (req: CustomRequest, res: Response, next: NextFunction) => {
  if (req.user?.tipo !== "ADMINISTRADOR") {
    return res.status(403).json({ message: "Acesso negado. Você não tem permissão para acessar esta rota." });
  }
  next();
};