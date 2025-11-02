import type { RequestHandler } from 'express';
import * as eventoService from "../../service/evento/eventoService";
import type { EventoDTO } from "../../types/evento_dtos/eventoDTO";

export const criarEvento: RequestHandler = async (req, res) => {
    try {
        const dados: EventoDTO = req.body;

        const novoEvento = await eventoService.criarEvento(dados);

        res.status(201).json(novoEvento);
    } catch (e) {
        res.status(500).json({message: `Erro ao criar evento: ${e}`});
    }
};

export const listarEvento: RequestHandler = async (req, res) => {
    try {
        const lista = await eventoService.listarEvento();
        res.status(200).json(lista);
    } catch (e) {
        res.status(500).json({message: `Erro ao listar ingressos: ${e}`})
    }
};

export const buscarEventoPorId: RequestHandler = async (req, res) => {
    try {
        const {id} = req.params;
        const evento = await eventoService.buscarEventoPorId(id);

        if(!evento) {
            res.status(404).json({message: "Evento não encontrado"});
            return;
        }

        res.status(200).json(evento);
    } catch (e) {
        res.status(500).json({message: `Erro ao buscar evento: ${e}`});
    }
};

export const editarEvento: RequestHandler = async (req, res) => {
    try {
        const {id} = req.params;
        const dados: Partial<EventoDTO> = req.body;

        const eventoAtualizado = await eventoService.atualizarEvento(id, dados);

        res.status(200).json(eventoAtualizado);
    } catch (e) {
        res.status(500).json({message: `Erro ao editar evento: ${e}`});
    }
};