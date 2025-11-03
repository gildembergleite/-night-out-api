import { Router } from "express";
import {
  login,
  cadastro,
  listarArtistas,
  buscarArtistaPorId,
  cadastrarArtista,
  editarArtista,
  deletarArtista,
} from "../../controller/artista/artistaLCController";

import { protect } from "../../../middleware/authMiddleware";

const ArtistaRoutes = Router();

ArtistaRoutes.post("/login", login);

ArtistaRoutes.post("/cadastro", cadastro);

ArtistaRoutes.get("/", protect, listarArtistas);

ArtistaRoutes.get("/:id", protect, buscarArtistaPorId);

ArtistaRoutes.post("/cadastrar", protect, cadastrarArtista);

ArtistaRoutes.put("/:id", protect, editarArtista);

ArtistaRoutes.delete("/:id", protect, deletarArtista);

export default ArtistaRoutes;