import { Prisma } from "../../../core/generated/prisma";
import { prisma } from "../../libs/prismaClient";
import { ClienteDTO } from "../../types/cliente_dtos/clienteDTO";


type ClienteComUsuario = Prisma.ClienteGetPayload<{
    include: { usuario: true };
}>;


export async function buscarClienteParaLogin(email: string): Promise<ClienteComUsuario | null> {
    const cliente = await prisma.cliente.findFirst({
        where: {
            usuario: {
                email,
                tipo: "CLIENTE",
            },
        },
        include: {
            usuario: true, // Incluir 'usuario' garante que o 'senha_hash' esteja disponível
        },
    });

    return cliente; 
}

// 2. FUNÇÃO DE CADASTRO
// Esta função recebe a senha JÁ HASHADA do Controller.
export async function cadastro(dados: {
    nome: string;
    email: string;
    senha: string;
    telefone?: string;
    apelido?: string;
    preferencias?: string;
    data_nascimento?: Date;
}): Promise<any> {

    const novoCliente = await prisma.cliente.create({
        data: {
            apelido: dados.apelido,
            preferencias: dados.preferencias,
            data_nascimento: dados.data_nascimento,
            usuario: {
                create: {
                    nome: dados.nome,
                    email: dados.email,
                    senha_hash: dados.senha, // Usa o hash
                    telefone: dados.telefone,
                    tipo: "CLIENTE",
                },
            },
        },
        include: {
            usuario: true,
        },
    });


    return {
        id: novoCliente.id_usuario,
        nome: novoCliente.usuario.nome,
        email: novoCliente.usuario.email,
        telefone: novoCliente.usuario.telefone,
        apelido: novoCliente.apelido,
        preferencias: novoCliente.preferencias,
        data_nascimento: novoCliente.data_nascimento,
        createdAt: novoCliente.usuario.createdAt,
    };
}



export async function listarClientes({ offset, limit }: { offset: number; limit: number }) {
    const listaClientes = await prisma.cliente.findMany({
        include: { usuario: true },
        skip: offset,
        take: limit,
    });
    
    return listaClientes.map((cliente: ClienteComUsuario) => ({
        id: cliente.id_usuario,
        nome: cliente.usuario.nome,
        email: cliente.usuario.email,
        telefone: cliente.usuario.telefone,
        apelido: cliente.apelido,
        preferencias: cliente.preferencias,
        data_nascimento: cliente.data_nascimento,
    }));
}


export async function buscarClientePorId(id: string): Promise<ClienteComUsuario | null> {
    
    const cliente = await prisma.cliente.findUnique({
        where: { id_usuario: id },
        include: { usuario: true },
    });

    return cliente;
}


export async function cadastrarCliente(clienteDTO: ClienteDTO) {
    
    const novoCliente = await prisma.cliente.create({
        data: {
            apelido: clienteDTO.apelido,
            preferencias: clienteDTO.preferencias,
            data_nascimento: clienteDTO.data_nascimento,
            usuario: {
                create: {
                    nome: clienteDTO.usuario[0].nome,
                    email: clienteDTO.usuario[0].email,
                    senha_hash: clienteDTO.usuario[0].senha_hash, // Deve ser o hash
                    telefone: clienteDTO.usuario[0].telefone,
                    tipo: "CLIENTE",
                },
            },
        },
        include: { usuario: true },
    });

    return novoCliente;
}


export async function editarCliente(
    id_cliente: string,
    clienteDTO: Partial<ClienteDTO>
): Promise<ClienteComUsuario> {
    try {

        const clienteAtualizado = await prisma.cliente.update({
            where: { id_usuario: id_cliente },
            data: {
                apelido: clienteDTO.apelido ?? undefined,
                preferencias: clienteDTO.preferencias ?? undefined,
                data_nascimento: clienteDTO.data_nascimento ?? undefined,
                usuario: clienteDTO.usuario
                    ? {
                          update: {
                              nome: clienteDTO.usuario[0]?.nome ?? undefined,
                              email: clienteDTO.usuario[0]?.email ?? undefined,
                              senha_hash: clienteDTO.usuario[0]?.senha_hash ?? undefined,
                              telefone: clienteDTO.usuario[0]?.telefone ?? undefined,
                          },
                      }
                    : undefined,
            },
            include: { usuario: true },
        });

        return clienteAtualizado;
    } catch (error) {
        throw new Error("Erro ao editar cliente: " + error);
    }
}

export async function deletarCliente(id_cliente: string) {
    if (!id_cliente) {
        throw new Error("ID do cliente é obrigatório para deletar.");
    }

    return await prisma.cliente.delete({
        where: { id_usuario: id_cliente },
    });
}