import bcrypt from "bcryptjs";
import type { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import * as clienteService from "../../service/cliente/clienteService";

const JWT_SECRET = "SEGREDO_SUPER_FORTE_DO_JWT";

export const login: RequestHandler = async (req, res) => {
  try {
    const email = String(req.body.email);
    const senha = String(req.body.senha);

    const cliente = await clienteService.buscarClienteParaLogin(email);

    if (!cliente) {
      res.status(401).json({ message: "Email ou senha inválidos!" });
      return;
    }

    const isMatch = await bcrypt.compare(senha, cliente.usuario.senha_hash);

    if (!isMatch) {
      res.status(401).json({ message: "Email ou senha inválidos!" });
      return;
    }

    const token = jwt.sign(
      { id: cliente.id_usuario, email: cliente.usuario.email },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({
      message: "Login realizado com sucesso!",
      token: token,
      clienteId: cliente.id_usuario,
    });
  } catch (e) {
    console.error("Erro no login:", e);
    res.status(500).json({ message: `Erro de login interno.` });
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

    const salt = await bcrypt.genSalt(10);

    const senha_hash = await bcrypt.hash(senha, salt);

    const novoCliente = await clienteService.cadastro({
      nome,
      email,
      senha: senha_hash,
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
    console.error("Erro no cadastro:", e);

    res.status(500).json({ message: `Erro no cadastro interno.` });
  }
};

export const listarClientes: RequestHandler = async (req, res) => {
  try {
    const { page = 1, pageSize = 10 } = req.query;
    const offset = (Number(page) - 1) * Number(pageSize);

    const lista = await clienteService.listarClientes({
      offset,
      limit: Number(pageSize),
    });

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

export const deletarCliente: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    await clienteService.deletarCliente(id);

    res.status(204).send();
  } catch (e) {
    res.status(500).json({ message: `Erro ao deletar cliente: ${e}` });
  }
};
