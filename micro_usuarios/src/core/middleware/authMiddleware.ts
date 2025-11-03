import type { Request, Response, NextFunction, RequestHandler } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";


const JWT_SECRET = 'SEGREDO_SUPER_FORTE_DO_JWT'; 

export interface CustomRequest extends Request {
  user?: {
    id: string;
    email: string;
  };
}

interface DecodedToken extends JwtPayload {
    id: string;
    email: string;
}

export const protect: RequestHandler = (
  req: CustomRequest, 
  res: Response,
  next: NextFunction
) => {
  let token: string | undefined;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      
      token = req.headers.authorization.split(" ")[1];
       
      const decoded = jwt.verify(token, JWT_SECRET) as DecodedToken; 
     
      req.user = { id: decoded.id, email: decoded.email };

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