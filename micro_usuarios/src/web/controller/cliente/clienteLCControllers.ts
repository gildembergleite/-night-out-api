import type { RequestHandler } from "express";
import * as clienteService from "../../service/cliente/clienteService";

export const login: RequestHandler = async (req, res) => {
  try {
    const email = String(req.body.email);
    const senha = String(req.body.senha);

    const result = await clienteService.login(email, senha);

    if (!result) {
      res.status(401).json({ message: "Email ou senha inválidos!" });
      return;
    }

    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({ message: `Erro de login: ${e}` });
  }
};

export const cadastro: RequestHandler = async (req, res) => {
  try {
    const {
      nome,
      email,
      senha,
      telefone,
      apelido,
      preferencias,
      data_nascimento,
    } = req.body;

    const novoCliente = await clienteService.cadastro({
      nome,
      email,
      senha,
      telefone,
      apelido,
      preferencias,
      data_nascimento,
    });

    res.status(201).json({
      message: "Cliente cadastrado com sucesso!",
      cliente: novoCliente,
    });
  } catch (e) {
    res.status(500).json({ message: `Erro no cadastro: ${e}` });
  }
};

export const listarClientes: RequestHandler = async (req, res) => {
  try {
    const lista = await clienteService.listarClientes();
    res.status(200).json(lista);
  } catch (e) {
    res.status(500).json({ message: `Erro ao listar clientes: ${e}` });
  }
};

export const buscarClientePorId: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const cliente = await clienteService.buscarClientePorId(id);

    if (!cliente) {
      res.status(404).json({ message: "Cliente não encontrado." });
      return;
    }

    res.status(200).json(cliente);
  } catch (e) {
    res.status(500).json({ message: `Erro ao buscar cliente: ${e}` });
  }
};

export const cadastrarCliente: RequestHandler = async (req, res) => {
  try {
    const clienteDTO = req.body;
    const novoCliente = await clienteService.cadastrarCliente(clienteDTO);

    res.status(201).json({
      message: "Cliente cadastrado com sucesso!",
      cliente: novoCliente,
    });
  } catch (e) {
    res.status(500).json({ message: `Erro ao cadastrar cliente: ${e}` });
  }
};

export const editarCliente: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const clienteDTO = req.body;

    const clienteAtualizado = await clienteService.editarCliente(
      id,
      clienteDTO
    );
    res.status(200).json({
      message: "Cliente atualizado com sucesso!",
      cliente: clienteAtualizado,
    });
  } catch (e) {
    res.status(500).json({ message: `Erro ao editar cliente: ${e}` });
  }
};
