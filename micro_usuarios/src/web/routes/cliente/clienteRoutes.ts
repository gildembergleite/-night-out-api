import { Router } from "express";
import {
  buscarClientePorId,
  cadastrarCliente,
  cadastro,
  editarCliente,
  deletarCliente,
  listarClientes
} from "../../controller/cliente/clienteLCControllers";

import { protect } from "../../../core/middleware/authMiddleware";

const ClienteRoutes = Router();



ClienteRoutes.post("/cadastro", cadastro);

ClienteRoutes.get("/", protect, listarClientes);

ClienteRoutes.get("/:id", protect, buscarClientePorId);

ClienteRoutes.post("/cadastrar", protect, cadastrarCliente);

ClienteRoutes.put("/:id", protect, editarCliente);

ClienteRoutes.delete("/:id", protect, deletarCliente);

export default ClienteRoutes;