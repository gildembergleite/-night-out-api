import { Prisma } from "@prisma/client";
import { prisma } from "../../libs/prismaClient";
import { ClienteDTO } from "../../types/cliente_dtos/clienteDTO"; // Import Mantido

// Definição de tipo para o payload que inclui a relação com Usuario (para reuso)
type ClienteComUsuario = Prisma.ClienteGetPayload<{
    include: { usuario: true };
}>;

// 1. FUNÇÃO DE LOGIN
// Esta função é chamada pelo Controller para buscar o cliente e o hash da senha.
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
    senha: string; // Este campo é agora o 'senha_hash'
    telefone?: string;
    apelido?: string;
    preferencias?: string;
    data_nascimento?: Date;
}): Promise<any> {
    // ⚠️ A senha (dados.senha) DEVE ser o hash gerado pelo Controller.
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

    // Retorno DTO simplificado
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


// 3. FUNÇÃO DE LISTAR CLIENTES
export async function listarClientes() {
    const listaClientes = await prisma.cliente.findMany({
        include: { usuario: true },
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

// 4. FUNÇÃO DE BUSCAR POR ID
export async function buscarClientePorId(id: string): Promise<ClienteComUsuario | null> {
    
    const cliente = await prisma.cliente.findUnique({
        where: { id_usuario: id },
        include: { usuario: true },
    });

    return cliente;
}

// 5. FUNÇÃO DE CADASTRAR CLIENTE (Rota secundária)
// ⚠️ Se esta rota for usada, o Controller precisa garantir que o campo 'senha_hash' já vem hasheado no DTO.
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

// 6. FUNÇÃO DE EDITAR CLIENTE
export async function editarCliente(
    id_cliente: string,
    clienteDTO: ClienteDTO
): Promise<ClienteComUsuario> {
    
    // ⚠️ Se o campo 'senha_hash' vier preenchido, ele deve vir JÁ HASHADO do Controller.
    const clienteAtualizado = await prisma.cliente.update({
        where: { id_usuario: id_cliente },
        data: {
            apelido: clienteDTO.apelido,
            preferencias: clienteDTO.preferencias,
            data_nascimento: clienteDTO.data_nascimento,
            usuario: {
                update: {
                    nome: clienteDTO.usuario[0].nome,
                    email: clienteDTO.usuario[0].email,
                    senha_hash: clienteDTO.usuario[0].senha_hash,
                    telefone: clienteDTO.usuario[0].telefone,
                },
            },
        },
        include: { usuario: true },
    });

    return clienteAtualizado;
}