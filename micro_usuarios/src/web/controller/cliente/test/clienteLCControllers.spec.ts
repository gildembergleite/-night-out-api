import type { Request, Response, NextFunction } from "express";
import * as clienteController from "../clienteLCControllers";
import * as clienteService from "../../../service/cliente/clienteService";

describe("ClienteController", () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let mockNext: NextFunction;
  let statusMock: jest.Mock;
  let jsonMock: jest.Mock;

  beforeEach(() => {
    mockRequest = {};
    jsonMock = jest.fn();
    statusMock = jest.fn().mockReturnValue({ json: jsonMock });
    mockResponse = { status: statusMock } as unknown as Response;
    mockNext = jest.fn();
    jest.clearAllMocks();
  });

  test("listarClientes deve retornar lista de clientes com status 200", async () => {
    const clientesMock = [{ id: "1", nome: "Carlos" }];
    jest.spyOn(clienteService, "listarClientes").mockResolvedValue(clientesMock);

    await clienteController.listarClientes(
      mockRequest as Request,
      mockResponse as Response,
      mockNext
    );

    expect(statusMock).toHaveBeenCalledWith(200);
    expect(jsonMock).toHaveBeenCalledWith(clientesMock);
  });

  test("listarClientes deve retornar erro 500 ao ocorrer exceção", async () => {
    jest
      .spyOn(clienteService, "listarClientes")
      .mockRejectedValue(new Error("Erro"));

    await clienteController.listarClientes(
      mockRequest as Request,
      mockResponse as Response,
      mockNext
    );

    expect(statusMock).toHaveBeenCalledWith(500);
    expect(jsonMock).toHaveBeenCalledWith({
      message: expect.stringContaining("Erro ao listar clientes"),
    });
  });

  test("buscarClientePorId deve retornar cliente com status 200", async () => {
    mockRequest = { params: { id: "1" } };
    const clienteMock = { id: "1", nome: "Carlos" };
    jest
      .spyOn(clienteService, "buscarClientePorId")
      .mockResolvedValue(clienteMock);

    await clienteController.buscarClientePorId(
      mockRequest as Request,
      mockResponse as Response,
      mockNext
    );

    expect(statusMock).toHaveBeenCalledWith(200);
    expect(jsonMock).toHaveBeenCalledWith(clienteMock);
  });

  test("buscarClientePorId deve retornar 404 se cliente não encontrado", async () => {
    mockRequest = { params: { id: "99" } };
    jest.spyOn(clienteService, "buscarClientePorId").mockResolvedValue(null);

    await clienteController.buscarClientePorId(
      mockRequest as Request,
      mockResponse as Response,
      mockNext
    );

    expect(statusMock).toHaveBeenCalledWith(404);
    expect(jsonMock).toHaveBeenCalledWith({
      message: "Cliente não encontrado.",
    });
  });

  test("buscarClientePorId deve retornar erro 500 se ocorrer exceção", async () => {
    mockRequest = { params: { id: "1" } };
    jest
      .spyOn(clienteService, "buscarClientePorId")
      .mockRejectedValue(new Error("Erro"));

    await clienteController.buscarClientePorId(
      mockRequest as Request,
      mockResponse as Response,
      mockNext
    );

    expect(statusMock).toHaveBeenCalledWith(500);
    expect(jsonMock).toHaveBeenCalledWith({
      message: expect.stringContaining("Erro ao buscar cliente"),
    });
  });

  test("cadastrarCliente deve retornar cliente criado com status 201", async () => {
    const clienteMock = { nome: "Carlos" };
    mockRequest = { body: clienteMock };
    jest
      .spyOn(clienteService, "cadastrarCliente")
      .mockResolvedValue(clienteMock);

    await clienteController.cadastrarCliente(
      mockRequest as Request,
      mockResponse as Response,
      mockNext
    );

    expect(statusMock).toHaveBeenCalledWith(201);
    expect(jsonMock).toHaveBeenCalledWith({
      message: "Cliente cadastrado com sucesso!",
      cliente: clienteMock,
    });
  });

  test("cadastrarCliente deve retornar erro 500 se ocorrer exceção", async () => {
    mockRequest = { body: {} };
    jest
      .spyOn(clienteService, "cadastrarCliente")
      .mockRejectedValue(new Error("Erro"));

    await clienteController.cadastrarCliente(
      mockRequest as Request,
      mockResponse as Response,
      mockNext
    );

    expect(statusMock).toHaveBeenCalledWith(500);
    expect(jsonMock).toHaveBeenCalledWith({
      message: expect.stringContaining("Erro ao cadastrar cliente"),
    });
  });

  test("editarCliente deve retornar cliente atualizado com status 200", async () => {
    mockRequest = {
      params: { id: "1" },
      body: { nome: "Carlos Atualizado" },
    };
    const clienteAtualizado = { id: "1", nome: "Carlos Atualizado" };
    jest
      .spyOn(clienteService, "editarCliente")
      .mockResolvedValue(clienteAtualizado);

    await clienteController.editarCliente(
      mockRequest as Request,
      mockResponse as Response,
      mockNext
    );

    expect(statusMock).toHaveBeenCalledWith(200);
    expect(jsonMock).toHaveBeenCalledWith({
      message: "Cliente atualizado com sucesso!",
      cliente: clienteAtualizado,
    });
  });

  test("editarCliente deve retornar erro 500 se ocorrer exceção", async () => {
    mockRequest = { params: { id: "1" }, body: {} };
    jest
      .spyOn(clienteService, "editarCliente")
      .mockRejectedValue(new Error("Erro"));

    await clienteController.editarCliente(
      mockRequest as Request,
      mockResponse as Response,
      mockNext
    );

    expect(statusMock).toHaveBeenCalledWith(500);
    expect(jsonMock).toHaveBeenCalledWith({
      message: expect.stringContaining("Erro ao editar cliente"),
    });
  });
});
