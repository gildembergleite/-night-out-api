import e from "express"; // ⚠️ Importe 'e' não é necessário e pode causar conflito, mas vou deixar.
import { prisma } from "../../libs/prismaClient";
import { CasaDeShowDTO } from "../../types/casa_de_show_dtos/casaDeShowDTO";
import { Prisma } from "@prisma/client"; // Adicionando o tipo Prisma para melhor tipagem

// Tipo auxiliar para incluir o usuário, que contém o hash da senha
type CasaShowComUsuario = Prisma.CasaShowGetPayload<{
    include: { usuario: true };
}>;

export async function cadastro(dados: {
    nome: string;
    email: string;
    senha: string;
    telefone?: string;
    nome_fantasia: string;
    cnpj: string;
    capacidade: string;
    endereco: string;
    bairro: string;
    estado: string;
    cep: string;
    geo_lat: string;
    geo_lng: string;
}): Promise<any> {
    try {
        const novaCasa = await prisma.casaShow.create({
            data: {
                nome_fantasia: dados.nome_fantasia,
                cnpj: dados.cnpj,
                capacidade: dados.capacidade,
                endereco: dados.endereco,
                bairro: dados.bairro,
                estado: dados.estado,
                cep: dados.cep,
                geo_lat: dados.geo_lat,
                geo_lng: dados.geo_lng,
                usuario: {
                    create: {
                        nome: dados.nome,
                        email: dados.email,
                        senha_hash: dados.senha,
                        telefone: dados.telefone,
                        tipo: "CASASHOW",
                    },
                },
            },
            include: {
                usuario: true,
            },
        });

        return {
            id: novaCasa.id_usuario,
            nome: novaCasa.usuario.nome,
            email: novaCasa.usuario.email,
            telefone: novaCasa.usuario.telefone,
            nome_fantasia: novaCasa.nome_fantasia,
            capacidade: novaCasa.capacidade,
            cidade: novaCasa.estado,
        };
    } catch (error) {
        throw new Error("Erro ao cadastrar casa de show: " + error);
    }
}

// ⚠️ FUNÇÃO AJUSTADA PARA SEGURANÇA:
// Renomeada para buscarCasaParaLogin e removemos o filtro de senha do DB.
export async function buscarCasaParaLogin(email: string): Promise<CasaShowComUsuario | null> {
    const casa = await prisma.casaShow.findFirst({
        where: {
            usuario: {
                email,
                // ❌ REMOVIDO: senha_hash: senha,
                tipo: "CASASHOW",
            },
        },
        include: {
            usuario: true, // Garante que o hash da senha virá para o Controller
        },
    });

    return casa;
}

// ⚠️ REMOÇÃO DA FUNÇÃO ORIGINAL 'login'
// A função 'login' original deve ser removida ou ter seu nome alterado, 
// pois ela será substituída pela lógica de bcrypt e JWT no Controller.
// O corpo que estava aqui agora é a função buscarCasaParaLogin.
// **Se você não a remover/alterar, seu Controller ajustado falhará.**


export async function listarCasasDeShow() {
    const lista = await prisma.casaShow.findMany({
        include: {
            usuario: true,
        },
    });

    // ➡️ A CORREÇÃO ESTÁ AQUI: Tipar o parâmetro 'casa' como CasaShowComUsuario
    return lista.map((casa: CasaShowComUsuario) => ({
        id: casa.id_usuario,
        nome: casa.usuario.nome,
        endereco: casa.endereco,
        // Adicionando mais campos úteis para listagem
        nome_fantasia: casa.nome_fantasia,
    }));
}

export async function buscarCasaDeShowPorId(id: string): Promise<CasaShowComUsuario | null> {
    const casa = await prisma.casaShow.findUnique({
        where: { id_usuario: id },
        include: {
            usuario: true,
        },
    });

    return casa;
}

export async function cadastrarCasa(casaDTO: CasaDeShowDTO): Promise<CasaShowComUsuario> {
    const novaCasa = await prisma.casaShow.create({
        data: {
            nome_fantasia: casaDTO.nome_fantasia,
            cnpj: casaDTO.cnpj,
            capacidade: casaDTO.capacidade,
            endereco: casaDTO.endereco,
            bairro: casaDTO.bairro,
            estado: casaDTO.estado,
            cep: casaDTO.cep,
            geo_lat: casaDTO.geo_lat,
            geo_lng: casaDTO.geo_lng,
            usuario: {
                create: {
                    nome: casaDTO.usuario[0].nome,
                    email: casaDTO.usuario[0].email,
                    senha_hash: casaDTO.usuario[0].senha_hash,
                    telefone: casaDTO.usuario[0].telefone,
                    tipo: "CASASHOW",
                },
            },
        },
        include: { usuario: true },
    });

    return novaCasa;
}

export async function editarCasa(id_casa: string, casaDTO: Partial<CasaDeShowDTO>): Promise<CasaShowComUsuario> {
    const casaAtualizada = await prisma.casaShow.update({
        where: { id_usuario: id_casa },
        data: {
            nome_fantasia: casaDTO.nome_fantasia,
            cnpj: casaDTO.cnpj,
            capacidade: casaDTO.capacidade,
            endereco: casaDTO.endereco,
            bairro: casaDTO.bairro,
            estado: casaDTO.estado,
            cep: casaDTO.cep,
            geo_lat: casaDTO.geo_lat,
            geo_lng: casaDTO.geo_lng,
            usuario: casaDTO.usuario ? {
                update: {
                    nome: casaDTO.usuario[0].nome,
                    email: casaDTO.usuario[0].email,
                    senha_hash: casaDTO.usuario[0].senha_hash,
                    telefone: casaDTO.usuario[0].telefone,
                },
            } : undefined,
        },
        include: { usuario: true },
    });

    return casaAtualizada;
}

export async function deletarCasa(id_casa: string) {
    if (!id_casa) {
        throw new Error("ID da casa de show é obrigatório para deletar.");
    }

    return await prisma.casaShow.delete({
        where: { id_usuario: id_casa },
    });
}