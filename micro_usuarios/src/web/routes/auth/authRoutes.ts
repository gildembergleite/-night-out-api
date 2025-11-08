import { Router } from "express";
import {
  login
} from "../../controller/auth/authLCController";


const AuthRoutes = Router();

AuthRoutes.post("/login", login);

export default AuthRoutes;