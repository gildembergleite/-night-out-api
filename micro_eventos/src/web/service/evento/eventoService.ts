import { prisma } from "../../libs/prismClient";
import { EventoDTO } from "../../types/evento_dtos/eventoDTO";

export async function criarEvento(dados: EventoDTO) {
    const novoEvento = await prisma.evento.create({
        data: {
            id_usuario: dados.id_usuario,
            titulo: dados.titulo,
            descricao: dados.descricao,
            data_inicio: dados.data_inicio,
            data_fim: dados.data_fim,
            local: dados.local,
            status: dados.status ?? "DISPONÍVEL",
        },
    });

    return {
        message: "Evento criado com sucesso!",
        evento: novoEvento,
    };
}

export async function listarEvento() {
    const eventos = await prisma.evento.findMany({});

    return eventos.map((e: any) => ({
        id_evento: e.id_evento,
        id_usuario: e.id_usuario,
        titulo: e.titulo,
        descricao: e.descricao,
        data_inicio: e.data_inicio,
        data_fim: e.data_fim,
        local: e.local,
    }));
}

export async function buscarEventoPorId(id: string) {
    const evento = await prisma.evento.findUnique({
        where: { id_evento: id },
    });

    if(!evento) {
        return null;
    }

    return evento;
}

export async function atualizarEvento(id: string, dados: Partial<EventoDTO>) {
    const eventoAtualizado = await prisma.evento.update({
        where: { id_evento: id },
        data: dados,
    });

    return {
        message: "Evento atualizado com sucesso",
        evento: eventoAtualizado
    };
}

export async function deletarEvento(id: string) {
    if(!id) {
        throw new Error("ID do evento é obrigatório para deletar");
    }

    const evento = await prisma.evento.findUnique({
        where: { id_evento: id },
    });

    if(!evento) {
        throw new Error("Evento não encontrado");
    }

    await prisma.evento.delete({
        where: { id_evento: id },
    });

    return {
        message: "Evento deletado com sucesso"
    };
}