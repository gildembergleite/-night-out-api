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
EventoArtistaRoutes.get("/:id_evento/:id_usuario", buscarEventoArtistaPorId);
EventoArtistaRoutes.put("/:id_evento/:id_usuario", editarEventoArtista);

export default EventoArtistaRoutes;