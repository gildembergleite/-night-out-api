import { Router } from "express";
import {
  login,
  cadastro,
  listarClientes,
  buscarClientePorId,
  cadastrarCliente,
  editarCliente,
} from "../../controller/cliente/clienteLCControllers";

import { protect } from "../../../middleware/authMiddleware";

const ClienteRoutes = Router();

ClienteRoutes.post("/login", login);

ClienteRoutes.post("/cadastro", cadastro);

ClienteRoutes.get("/", protect, listarClientes);

ClienteRoutes.get("/:id", protect, buscarClientePorId);

ClienteRoutes.post("/cadastrar", protect, cadastrarCliente);

ClienteRoutes.put("/:id", protect, editarCliente);

export default ClienteRoutes;