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

const ArtistaRoutes = Router();

ArtistaRoutes.post("/login", login);
ArtistaRoutes.post("/cadastro", cadastro);
ArtistaRoutes.get("/", listarArtistas);
ArtistaRoutes.get("/:id", buscarArtistaPorId);
ArtistaRoutes.post("/cadastrar", cadastrarArtista);
ArtistaRoutes.put("/:id", editarArtista);
ArtistaRoutes.delete("/:id", deletarArtista);

export default ArtistaRoutes;
