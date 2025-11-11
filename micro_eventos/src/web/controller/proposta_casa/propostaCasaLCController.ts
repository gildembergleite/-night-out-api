import type { RequestHandler } from 'express';
import * as propostaCasaService from "../../service/proposta_casa/propostaCasaService";
import type { PropostaCasaDTO } from "../../types/proposta_casa_dtos/propostaCasaDTO";

export const criarPropostaCasa: RequestHandler = async (req, res) => {
    try {
        const dados: PropostaCasaDTO = req.body;

        const novaPropostaCasa = await propostaCasaService.criarPropostaCasa(dados);

        res.status(201).json({
            message: "Proposta casa criada com sucesso",
            propostaCasa: novaPropostaCasa,
        });
    } catch (e) {
        res.status(500).json({message: `Erro ao criar proposta casa: ${e}`});
    }
}

export const listarPropostaCasa: RequestHandler = async (req, res) => {
    const { page = 1, pageSize = 10 } = req.query;
    const offset = (Number(page) - 1) * Number(pageSize);

    try {
        const lista = await propostaCasaService.listarPropostaCasa({
            offset,
            limit: Number(pageSize),
        });
        res.status(200).json(lista);
    } catch (e) {
        res.status(500).json({message: `Erro ao listar proposta casa: ${e}`});
    }
}

export const buscarPropostaCasaPorId: RequestHandler = async (req, res) => {
    try {
        const {id} = req.params;
        const propostaCasa = await propostaCasaService.buscarPropostaCasa(id);

        if(!propostaCasa) {
            res.status(404).json({message: "Proposta casa não encontrado"});
            return;
        }

        res.status(200).json(propostaCasa);
    } catch (e) {
        res.status(500).json({message: `Erro ao buscar proposta casa: ${e}`});
    }
}

export const editarPropostaCasa: RequestHandler = async (req, res) => {
    try {
        const {id} = req.params;
        const dados: Partial<PropostaCasaDTO> = req.body;

        const propostaCasaAtualizado = await propostaCasaService.atualizarPropostaCasa(id, dados);

        res.status(200).json({
            message: "Proposta casa atualizado",
            propostaCasa: propostaCasaAtualizado,
        });
    } catch (e) {
        res.status(500).json({message: `Erro ao editar proposta casa: ${e}`});
    }
}