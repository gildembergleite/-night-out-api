import { prisma } from "../../libs/prismaClient";
import { AdministradorDTO } from "../../types/administrador_dtos/administradorDTO";
import { Prisma } from "@prisma/client";

// Tipo auxiliar para incluir o usuário, que contém o hash da senha
type AdministradorComUsuario = Prisma.AdministradorGetPayload<{
    include: { usuario: true };
}>;

// 1. FUNÇÃO DE CADASTRO
// Recebe a senha JÁ HASHADA do Controller.
export async function cadastro(dados: {
    nome: string;
    email: string;
    senha: string; // Este campo é agora o 'senha_hash'
    telefone?: string;
    cargo: string;
    permissao_nivel: string;
}): Promise<any> {
    
    // O erro anterior foi resolvido garantindo que 'cargo' e 'permissao_nivel' 
    // são passados aqui.
    const novoAdministrador = await prisma.administrador.create({
        data: {
            cargo: dados.cargo,
            permissao_nivel: dados.permissao_nivel,
            usuario: {
                create: {
                    nome: dados.nome,
                    email: dados.email,
                    senha_hash: dados.senha, // Usa o hash
                    telefone: dados.telefone,
                    tipo: "ADMINISTRADOR",
                },
            },
        },
        include: {
            usuario: true,
        },
    });

    return {
        id: novoAdministrador.id_usuario,
        nome: novoAdministrador.usuario.nome,
        email: novoAdministrador.usuario.email,
        telefone: novoAdministrador.usuario.telefone,
        cargo: novoAdministrador.cargo,
        permissao_nivel: novoAdministrador.permissao_nivel,
        createdAt: novoAdministrador.usuario.createdAt,
    };
}

// 2. FUNÇÃO DE LOGIN (AJUSTADA)
// Função crucial para o login: busca o ADM (e o hash da senha) pelo email.
export async function buscarAdministradorParaLogin(email: string): Promise<AdministradorComUsuario | null> {
    const administrador = await prisma.administrador.findFirst({
        where: {
            usuario: {
                email,
                tipo: "ADMINISTRADOR",
            },
        },
        include: {
            usuario: true, // Inclui o hash da senha
        },
    });

    return administrador;
}


// A função 'login' original foi removida e substituída pela 'buscarAdministradorParaLogin', 
// movendo a lógica de comparação de senha e geração de token para o Controller.
// O restante das funções de CRUD (listar, buscarPorId, cadastrarADM, editarADM, deletarADM) permanece o mesmo.


export async function listarAdministradores() {
    const lista = await prisma.administrador.findMany({
        include: {
            usuario: true,
        },
    });

    return lista.map(
        (admin: AdministradorComUsuario) => ({ // Usando o tipo auxiliar para melhor tipagem
            id: admin.id_usuario,
            nome: admin.usuario.nome,
            email: admin.usuario.email,
            cargo: admin.cargo,
            permissao_nivel: admin.permissao_nivel,
        })
    );
}

export async function buscarAdministradorPorId(id: string): Promise<AdministradorComUsuario | null> {
    const adm = await prisma.administrador.findUnique({
        where: { id_usuario: id },
        include: {
            usuario: true,
        },
    });

    return adm;
}

export async function cadastrarADM(admDTO: AdministradorDTO): Promise<AdministradorComUsuario> {
    const novoADM = await prisma.administrador.create({
        data: {
            cargo: admDTO.cargo,
            permissao_nivel: admDTO.permissao_nivel,
            usuario: {
                create: {
                    nome: admDTO.usuario[0].nome,
                    email: admDTO.usuario[0].email,
                    senha_hash: admDTO.usuario[0].senha_hash,
                    telefone: admDTO.usuario[0].telefone,
                    tipo: "ADMINISTRADOR",
                },
            },
        },
        include: { usuario: true },
    });

    return novoADM;
}

export async function editarADM(
    id_administrador: string,
    admDTO: Partial<AdministradorDTO>
): Promise<AdministradorComUsuario> {
    const admAtualizado = await prisma.administrador.update({
        where: { id_usuario: id_administrador },
        data: {
            cargo: admDTO.cargo,
            permissao_nivel: admDTO.permissao_nivel,
            usuario: admDTO.usuario ? {
                update: {
                    nome: admDTO.usuario[0].nome,
                    email: admDTO.usuario[0].email,
                    // Se a senha vier para update, deve estar hasheada
                    senha_hash: admDTO.usuario[0].senha_hash, 
                    telefone: admDTO.usuario[0].telefone,
                },
            } : undefined,
        },
        include: { usuario: true },
    });

    return admAtualizado;
}

export async function deletarADM(id_administrador: string) {
    if (!id_administrador) {
        throw new Error("ID do administrador é obrigatório para deletar.");
    }

    // Você precisará deletar o usuário associado também, dependendo da sua regra CASCADE.
    // Se o CASCADE estiver configurado no schema, a exclusão do ADM será suficiente.
    return await prisma.administrador.delete({
        where: { id_usuario: id_administrador },
    });
}