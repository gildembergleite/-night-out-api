import { Router } from "express";
import {
  login,
  cadastro,
  listarClientes,
  buscarClientePorId,
  cadastrarCliente,
  editarCliente,
} from "../../controller/cliente/clienteLCControllers";

const ClienteRoutes = Router();

ClienteRoutes.post("/login", login);
ClienteRoutes.post("/cadastro", cadastro);
ClienteRoutes.get("/", listarClientes);
ClienteRoutes.get("/:id", buscarClientePorId);
ClienteRoutes.post("/cadastrar", cadastrarCliente);
ClienteRoutes.put("/:id", editarCliente);

export default ClienteRoutes;
