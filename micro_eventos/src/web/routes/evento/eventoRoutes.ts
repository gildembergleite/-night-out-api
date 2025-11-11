import { Router } from 'express';
import {
    criarEvento,
    listarEvento,
    buscarEventoPorId,
    editarEvento,
    deletarEvento,
} from "../../controller/evento/eventoLCController";

const EventoRoutes = Router();

EventoRoutes.post("/", criarEvento);
EventoRoutes.get("/", listarEvento);
EventoRoutes.get("/:id", buscarEventoPorId);
EventoRoutes.put("/:id", editarEvento);
EventoRoutes.delete("/:id", deletarEvento);

export default EventoRoutes;