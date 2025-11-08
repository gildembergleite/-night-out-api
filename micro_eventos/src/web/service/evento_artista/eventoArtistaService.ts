import { prisma } from "../../libs/prismClient";
import { EventoArtistaDTO } from "../../types/evento_artista_dtos/eventoArtistaDTO";

export async function criarEventoArtista(dados: EventoArtistaDTO) {
    const novoEventoArtista = await prisma.eventoArtista.create({
        data: {
            id_evento: dados.id_evento,
            id_usuario: dados.id_usuario,
            funcao: dados.funcao,
            contrato_acordado: dados.contrato_acordado,
            cache_final: dados.cache_final,
            created_final: dados.created_final,
            evento: {
                create: dados.evento?.map((e) => ({
                    id_evento: e.id_evento,
                    id_usuario: e.id_usuario,
                    titulo: e.titulo,
                    descricao: e.descricao,
                    data_inicio: e.data_inicio,
                    data_fim: e.data_fim,
                    local: e.local,
                    status: e.status ?? "DISPONÍVEL",
                })),
            },
        },
    });

    return {
        message: "Evento artista criado com sucesso",
        eventoArtista: novoEventoArtista,
    };
}

export async function listarEventoArtista({ offset, limit }: { offset: number; limit: number }) {
    const eventosArtistas = await prisma.eventoArtista.findMany({});

    return eventosArtistas.map((e: any) => ({
        id_evento: e.id_evento,
        id_usuario: e.id_usuario,
        funcao: e.funcao,
        contrato_acordado: e.contrato_acordado,
        cache_final: e.cache_final,
        created_final: e.created_final,
    }));
}

export async function buscarEventoArtistaPorId(id: string) {
    const eventoArtista = await prisma.eventoArtista.findUnique({
        where: { id_evento: id },
    });

    if(!eventoArtista) {
        return null;
    }

    return eventoArtista;
}

export async function atualizarEventoArtista(id: string, dados: Partial<EventoArtistaDTO>) {
    const eventoArtistaExistente = await prisma.eventoArtista.findUnique({
        where: { id_evento: id },
    });

    if(!eventoArtistaExistente) {
        throw new Error("Evento artista não encontrado");
    }

    const eventoArtistaAtualizado = await prisma.eventoArtista.update({
        where: { id_evento: id },
        data: {
            id_evento: dados.id_evento ?? eventoArtistaExistente.id_evento,
            id_usuario: dados.id_usuario ?? eventoArtistaExistente.id_usuario,
            funcao: dados.funcao ?? eventoArtistaExistente.funcao,
            contrato_acordado: dados.contrato_acordado ?? eventoArtistaExistente.contrato_acordado,
            cache_final: dados.cache_final ?? eventoArtistaExistente.cache_final,
            created_final: dados.created_final ?? eventoArtistaExistente.created_final,
        },
    });

    return {
        message: "Evento artista atualizado com sucesso",
        eventoArtista: eventoArtistaAtualizado,
    };
}

export async function deletarEventoArtista(id: string) {
    if(!id) {
        throw new Error("ID do evento artista é obrigatório para deletar");
    }

    const eventoArtista = await prisma.eventoArtista.findUnique({
        where: { id_evento: id },
    });

    if(!eventoArtista) {
        throw new Error("Evento artista não encontrado");
    }

    await prisma.eventoArtista.delete({
        where: { id_evento: id },
    });

    return {
        message: "Evento artista deletado com sucesso"
    };
}