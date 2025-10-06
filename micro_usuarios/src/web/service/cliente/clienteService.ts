import { prisma } from "../../libs/prismaClient";
import { ClienteDTO } from "../../types/cliente_dtos/clienteDTO";

export async function login(email: string, senha: string) {
  const cliente = await prisma.cliente.findFirst({
    where: {
      usuario: {
        email,
        senha_hash: senha,
        tipo: "CLIENTE",
      },
    },
    include: {
      usuario: true,
    },
  });

  if (!cliente) {
    return null;
  }

  return {
    message: "Cliente logado com sucesso",
    cliente: {
      id: cliente.id_usuario,
      nome: cliente.usuario.nome,
      email: cliente.usuario.email,
      telefone: cliente.usuario.telefone,
      apelido: cliente.apelido,
      preferencias: cliente.preferencias,
      data_nascimento: cliente.data_nascimento,
    },
  };
}

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
          senha_hash: dados.senha,
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

export async function listarClientes() {
  const listaClientes = await prisma.cliente.findMany({
    include: { usuario: true },
  });

  return listaClientes.map((cliente) => ({
    id: cliente.id_usuario,
    nome: cliente.usuario.nome,
    email: cliente.usuario.email,
    telefone: cliente.usuario.telefone,
    apelido: cliente.apelido,
    preferencias: cliente.preferencias,
    data_nascimento: cliente.data_nascimento,
  }));
}

export async function buscarClientePorId(id: string) {
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
          senha_hash: clienteDTO.usuario[0].senha_hash,
          telefone: clienteDTO.usuario[0].telefone,
          tipo: "CLIENTE",
        },
      },
    },
    include: { usuario: true },
  });

  return novoCliente;
}

export async function editarCliente(id_cliente: string, clienteDTO: ClienteDTO) {
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

export async function deletarCliente(id_cliente: string) {
  const cliente = await prisma.cliente.findUnique({
    where: { id_usuario: id_cliente },
    include: { usuario: true },
  });

  if (!cliente) throw new Error("Cliente não encontrado.");

  await prisma.usuario.delete({
    where: { id_usuario: cliente.usuario.id_usuario },
  });

  await prisma.cliente.delete({
    where: { id_usuario: id_cliente },
  });

  return { message: "Cliente deletado com sucesso!" };
}


