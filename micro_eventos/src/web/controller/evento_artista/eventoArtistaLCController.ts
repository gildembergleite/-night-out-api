import type { RequestHandler } from "express";
import * as eventoArtistaService from "../../service/evento_artista/eventoArtistaService";
import type { EventoArtistaDTO } from "../../types/evento_artista_dtos/eventoArtistaDTO";

export const criarEventoArtista: RequestHandler = async (req, res) => {
  try {
    const dados: EventoArtistaDTO = req.body;

    const novoEventoArtista = await eventoArtistaService.criarEventoArtista(
      dados
    );

    res.status(201).json({
      message: "Evento artista criado com sucesso",
      eventoArtista: novoEventoArtista,
    });
  } catch (e) {
    res.status(500).json({ message: `Erro ao criar evento artista: ${e}` });
  }
};

export const listarEventoArtista: RequestHandler = async (req, res) => {
  const { page = 1, pageSize = 10 } = req.query;
  const offset = (Number(page) - 1) * Number(pageSize);

  try {
    const lista = await eventoArtistaService.listarEventoArtista({
      offset,
      limit: Number(pageSize),
    });
    res.status(200).json(lista);
  } catch (e) {
    res.status(500).json({ message: `Erro ao listar evento artista: ${e}` });
  }
};

export const buscarEventoArtistaPorId: RequestHandler = async (req, res) => {
  try {
    const { id_evento, id_usuario } = req.params;

    const eventoArtista = await eventoArtistaService.buscarEventoArtistaPorId(
      id_evento,
      id_usuario
    );

    if (!eventoArtista) {
      res.status(404).json({ message: "Evento artista não encontrado" });
      return;
    }

    res.status(200).json(eventoArtista);
  } catch (e) {
    res.status(500).json({ message: `Erro ao buscar evento artista: ${e}` });
  }
};

export const editarEventoArtista: RequestHandler = async (req, res) => {
  try {
    const { id_evento, id_usuario } = req.params;
    const dados: Partial<EventoArtistaDTO> = req.body;

    const eventoArtistaAtualizado =
      await eventoArtistaService.atualizarEventoArtista(
        id_evento,
        id_usuario,
        dados
      );

    res.status(200).json({
      message: "Evento artista atualizado",
      eventoArtista: eventoArtistaAtualizado,
    });
  } catch (e) {
    res.status(500).json({ message: `Erro ao editar evento artista: ${e}` });
  }
};
