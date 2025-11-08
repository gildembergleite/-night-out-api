import { Router } from 'express';
import {
    criarEventoArtista,
    listarEventoArtista,
    buscarEventoArtistaPorId,
    editarEventoArtista,
} from "../../controller/evento_artista/eventoArtistaLCController";

const EventoArtistaRoutes = Router();

EventoArtistaRoutes.post("/", criarEventoArtista);
EventoArtistaRoutes.get("/", listarEventoArtista);
EventoArtistaRoutes.get("/:id", buscarEventoArtistaPorId);
EventoArtistaRoutes.put("/:id", editarEventoArtista);

export default EventoArtistaRoutes;