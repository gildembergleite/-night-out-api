import { Prisma } from "../../../core/generated/prisma";
import { prisma } from "../../libs/prismaClient";
import { ArtistaDTO } from "../../types/artista_dtos/artistaDTO";

 
type ArtistaComUsuario = Prisma.ArtistaGetPayload<{
    include: { usuario: true };
}>;

export async function cadastro(dados: {
    nome: string;
    email: string;
    senha: string;
    telefone?: string;
    nome_artista: string;
    genero_musical: string;
    cache_min: string;
    descricao?: string;
    portifolio?: string;
}): Promise<any> {
    const novoArtista = await prisma.artista.create({
        data: {
            nome_artista: dados.nome_artista,
            genero_musical: dados.genero_musical,
            cache_min: dados.cache_min,
            descricao: dados.descricao,
            portifolio: dados.portifolio,
            usuario: {
                create: {
                    nome: dados.nome,
                    email: dados.email,
                    senha_hash: dados.senha,
                    telefone: dados.telefone,
                    tipo: "ARTISTA",
                },
            },
        },
        include: {
            usuario: true,
        },
    });

    return {
        id: novoArtista.id_usuario,
        nome: novoArtista.usuario.nome,
        email: novoArtista.usuario.email,
        telefone: novoArtista.usuario.telefone,
        nome_artista: novoArtista.nome_artista,
        genero_musical: novoArtista.genero_musical,
        cache_min: novoArtista.cache_min,
        descricao: novoArtista.descricao,
        portifolio: novoArtista.portifolio,
    };
}

 
export async function buscarArtistaParaLogin(email: string): Promise<ArtistaComUsuario | null> {
    const artista = await prisma.artista.findFirst({
        where: {
            usuario: {
                email,
                
                tipo: "ARTISTA",
            },
        },
        include: {
            usuario: true, 
        },
    });

    return artista;
}


export async function listarArtistas({ offset, limit }: { offset: number; limit: number }) {
    const lista = await prisma.artista.findMany({
        include: {
            usuario: true,
        },
        skip: offset,
        take: limit,
    });

   
    return lista.map((artista: ArtistaComUsuario) => ({
        id: artista.id_usuario,
        nome: artista.usuario.nome,
        email: artista.usuario.email,
        nome_artista: artista.nome_artista,
        genero_musical: artista.genero_musical,
    }));
}

export async function buscarArtistaPorId(id: string): Promise<ArtistaComUsuario | null> {
    const artista = await prisma.artista.findUnique({
        where: { id_usuario: id },
        include: {
            usuario: true,
        },
    });

    return artista;
}

export async function cadastrarArtista(artistaDTO: ArtistaDTO): Promise<ArtistaComUsuario> {
    const novoArtista = await prisma.artista.create({
        data: {
            nome_artista: artistaDTO.nome_artista,
            genero_musical: artistaDTO.genero_musical,
            cache_min: artistaDTO.cache_min,
            descricao: artistaDTO.descricao,
            portifolio: artistaDTO.portifolio,
            usuario: {
                create: {
                    nome: artistaDTO.usuario[0].nome,
                    email: artistaDTO.usuario[0].email,
                    senha_hash: artistaDTO.usuario[0].senha_hash,
                    telefone: artistaDTO.usuario[0].telefone,
                    tipo: "ARTISTA",
                },
            },
        },
        include: { usuario: true },
    });

    return novoArtista;
}

export async function editarArtista(
    id_artista: string,
    artistaDTO: Partial<ArtistaDTO> 
): Promise<ArtistaComUsuario> {
    const artistaAtualizado = await prisma.artista.update({
        where: { id_usuario: id_artista },
        data: {
            nome_artista: artistaDTO.nome_artista,
            genero_musical: artistaDTO.genero_musical,
            cache_min: artistaDTO.cache_min,
            descricao: artistaDTO.descricao,
            portifolio: artistaDTO.portifolio,
            usuario: artistaDTO.usuario ? { 
                update: {
                    nome: artistaDTO.usuario[0].nome,
                    email: artistaDTO.usuario[0].email,
                    senha_hash: artistaDTO.usuario[0].senha_hash,
                    telefone: artistaDTO.usuario[0].telefone,
                },
            } : undefined, 
        },
        include: { usuario: true },
    });

    return artistaAtualizado;
}

export async function deletarArtista(id_artista: string) {
    if (!id_artista) {
        throw new Error("ID do artista é obrigatório para deletar.");
    }

    return await prisma.artista.delete({
        where: { id_usuario: id_artista },
    });
}