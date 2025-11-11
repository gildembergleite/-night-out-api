import type { RequestHandler } from 'express';
import * as propostaArtistaService from "../../service/proposta_artista/propostaArtistaService";
import type { PropostaArtistaDTO } from "../../types/proposta_artista_dtos/propostaArtistaDTO";

export const criarPropostaArtista: RequestHandler = async (req, res) => {
    try {
        const dados: PropostaArtistaDTO = req.body;

        const novaPropostaArtista = await propostaArtistaService.criarPropostaArtista(dados);

        res.status(201).json({
            message: "Proposta artista criado com sucesso",
            propostaArtista: novaPropostaArtista,
        });
    } catch (e) {
        res.status(500).json({message: `Erro ao criar proposta artista: ${e}`});
    }
}

export const listarPropostaArtista: RequestHandler = async (req, res) => {
    const { page = 1, pageSize = 10 } = req.query;
    const offset = (Number(page) - 1) * Number(pageSize);
    
    try {
        const lista = await propostaArtistaService.listarPropostaArtista({
            offset,
            limit: Number(pageSize),
        });
        res.status(200).json(lista);
    } catch (e) {
        res.status(500).json({message: `Erro ao listar proposta artista: ${e}`});
    }
}

export const buscarPropostaArtistaPorId: RequestHandler = async (req, res) => {
    try {
        const {id} = req.params;
        const propostaArtista = await propostaArtistaService.buscarPropostaArtista(id);

        if(!propostaArtista) {
            res.status(404).json({message: "Proposta artista não encontrado"});
            return;
        }

        res.status(200).json(propostaArtista);
    } catch (e) {
        res.status(500).json({message: `Erro ao buscar proposta artista: ${e}`});
    }
}

export const editarPropostaArtista: RequestHandler = async (req, res) => {
    try {
        const {id} = req.params;
        const dados: Partial<PropostaArtistaDTO> = req.body;

        const propostaArtistaAtualizado = await propostaArtistaService.atualizarPropostaArtista(id, dados);

        res.status(200).json({
            message: "Proposta artista atualizado",
            propostaArtista: propostaArtistaAtualizado,
        });
    } catch (e) {
        res.status(500).json({message: `Erro ao editar proposta artista: ${e}`});
    }
}