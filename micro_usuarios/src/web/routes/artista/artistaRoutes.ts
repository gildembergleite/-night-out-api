import { Router } from "express";
import {
  buscarArtistaPorId,
  cadastrarArtista,
  cadastro,
  deletarArtista,
  editarArtista,
  listarArtistas
} from "../../controller/artista/artistaLCController";

import { protect } from "../../../core/middleware/authMiddleware";

const ArtistaRoutes = Router();

// ArtistaRoutes.post("/login", login);

ArtistaRoutes.post("/cadastro", cadastro);

ArtistaRoutes.get("/", protect, listarArtistas);

ArtistaRoutes.get("/:id", protect, buscarArtistaPorId);

ArtistaRoutes.post("/cadastrar", protect, cadastrarArtista);

ArtistaRoutes.put("/:id", protect, editarArtista);

ArtistaRoutes.delete("/:id", protect, deletarArtista);

export default ArtistaRoutes;