import * as casaDeShowService from "../../../service/casa_de_show/casaDeShowService";
import  { Request, Response, NextFunction } from "express";
import * as casaDeShowController from "../../../controller/casa_de_show/casaDeShowLCController";
import { UsuarioTipo } from "@prisma/client";

describe("listarCasasDeShow", () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let mockNext: NextFunction;
  let jsonMock: jest.Mock;
  let statusMock: jest.Mock;

  beforeEach(() => {
    mockRequest = {};
    jsonMock = jest.fn();
    statusMock = jest.fn().mockReturnThis();
    mockResponse = {
      json: jsonMock,
      status: statusMock,
    };
    mockNext = jest.fn();
  });

  test("deve listar casas de show com sucesso", async () => {
    const listaMock = [
      { id: "1", nome: "Casa A", endereco: "Endereço A" },
      { id: "2", nome: "Casa B", endereco: "Endereço B" },
    ];

    jest
      .spyOn(casaDeShowService, "listarCasasDeShow")
      .mockResolvedValue(listaMock);

    await casaDeShowController.listarCasasDeShow(
      mockRequest as Request,
      mockResponse as Response,
      mockNext
    );

    expect(statusMock).toHaveBeenCalledWith(200);
    expect(jsonMock).toHaveBeenCalledWith(listaMock);
  });

  test("deve retornar erro 500 quando ocorrer exceção no serviço", async () => {
    jest
      .spyOn(casaDeShowService, "listarCasasDeShow")
      .mockRejectedValue(
        new Error("Erro ao listar casas de show: Error: Erro no serviço")
      );

    await casaDeShowController.listarCasasDeShow(
      mockRequest as Request,
      mockResponse as Response,
      mockNext
    );

    expect(statusMock).toHaveBeenCalledWith(500);
    expect(jsonMock).toHaveBeenCalledWith({
      message: expect.stringContaining(
        "Erro ao listar casas de show: Error: Erro ao listar casas de show: Error: Erro no serviço"
      ),
    });
  });
});

describe("listarCasasDeShowPorId", () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let mockNext: NextFunction;
  let jsonMock: jest.Mock;
  let statusMock: jest.Mock;

  beforeEach(() => {
    mockRequest = { params: { id: "1" } };
    jsonMock = jest.fn();
    statusMock = jest.fn().mockReturnThis();
    mockResponse = {
      json: jsonMock,
      status: statusMock,
    };
    mockNext = jest.fn();
  });

  test("deve listar casa de show por ID com sucesso com status 200", async () => {
    const mockCasaShow = {
      id_casashow: "1",
      id_usuario: "10",
      nome_fantasia: "Arena Fortaleza",
      cnpj: "12345678000199",
      capacidade: "2500",
      endereco: "Av. Beira Mar, 1500",
      bairro: "Meireles",
      estado: "CE",
      cep: "60165121",
      geo_lat: "-3.71722",
      geo_lng: "-38.5433",
      createdAt: new Date("2025-10-23T21:13:42.568Z"),
      updatedAt: new Date("2025-10-23T21:13:42.568Z"),
      usuario: {
        id_usuario: "10",
        nome: "Carlos Eduardo",
        email: "carlos@example.com",
        senha_hash: "hashedpassword123",
        telefone: "85988887777",
        tipo: UsuarioTipo.CASASHOW,
        createdAt: new Date("2025-10-23T21:13:42.568Z"),
        updatedAt: new Date("2025-10-23T21:13:42.568Z"),
      },
    };

    jest
      .spyOn(casaDeShowService, "buscarCasaDeShowPorId")
      .mockResolvedValue(mockCasaShow);

    await casaDeShowController.buscarCasaDeShowPorId(
      mockRequest as Request,
      mockResponse as Response,
      mockNext
    );

    expect(statusMock).toHaveBeenCalledWith(200);
    expect(jsonMock).toHaveBeenCalledWith(mockCasaShow);
  });

  test("deve retornar erro 404 quando casa de show não for encontrada", async () => {
    jest
      .spyOn(casaDeShowService, "buscarCasaDeShowPorId")
      .mockResolvedValue(null);

    await casaDeShowController.buscarCasaDeShowPorId(
      mockRequest as Request,
      mockResponse as Response,
      mockNext
    );

    expect(statusMock).toHaveBeenCalledWith(404);
    expect(jsonMock).toHaveBeenCalledWith({
      message: "Casa de show não encontrada.",
    });
  });

  test("deve retornar erro 500 quando ocorrer exceção no serviço", async () => {
    jest
      .spyOn(casaDeShowService, "buscarCasaDeShowPorId")
      .mockRejectedValue(new Error("Erro no serviço"));

    await casaDeShowController.buscarCasaDeShowPorId(
      mockRequest as Request,
      mockResponse as Response,
      mockNext
    );

    expect(statusMock).toHaveBeenCalledWith(500);
    expect(jsonMock).toHaveBeenCalledWith({
      message: expect.stringContaining(
        "Erro ao buscar casa de show: Error: Erro no serviço"
      ),
    });
  });
});

describe("cadastroCasaDeShow", () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let mockNext: NextFunction;
  let jsonMock: jest.Mock;
  let statusMKock: jest.Mock;

  beforeEach(() => {
    mockRequest = {
      body: {
        id_casashow: "1",
        id_usuario: "10",
        nome_fantasia: "Arena Fortaleza",
        cnpj: "12345678000199",
        capacidade: "2500",
        endereco: "Av. Beira Mar, 1500",
        bairro: "Meireles",
        estado: "CE",
        cep: "60165121",
        geo_lat: "-3.71722",
        geo_lng: "-38.5433",
        createdAt: new Date("2025-10-23T21:13:42.568Z"),
        updatedAt: new Date("2025-10-23T21:13:42.568Z"),
        usuario: {
          id_usuario: "10",
          nome: "Carlos Eduardo",
          email: "carlos@example.com",
          senha_hash: "hashedpassword123",
          telefone: "85988887777",
          tipo: UsuarioTipo.CASASHOW,
          createdAt: new Date("2025-10-23T21:13:42.568Z"),
          updatedAt: new Date("2025-10-23T21:13:42.568Z"),
        },
      },
    };

    statusMKock = jest.fn().mockReturnThis();
    jsonMock = jest.fn();
    mockResponse = {
      status: statusMKock,
      json: jsonMock,
    };
    mockNext = jest.fn();
  });

  test("deve cadastrar casa de show com sucesso", async () => {
    const mockCasaCadastrada = {
      id_casashow: "1",
      id_usuario: "10",
      nome_fantasia: "Arena Fortaleza",
      cnpj: "12345678000199",
      capacidade: "2500",
      endereco: "Av. Beira Mar, 1500",
      bairro: "Meireles",
      estado: "CE",
      cep: "60165121",
      geo_lat: "-3.71722",
      geo_lng: "-38.5433",
      createdAt: new Date("2025-10-23T21:13:42.568Z"),
      updatedAt: new Date("2025-10-23T21:13:42.568Z"),
      usuario: {
        id_usuario: "10",
        nome: "Carlos Eduardo",
        email: "carlos@example.com",
        senha_hash: "hashedpassword123",
        telefone: "85988887777",
        tipo: UsuarioTipo.CASASHOW,
        createdAt: new Date("2025-10-23T21:13:42.568Z"),
        updatedAt: new Date("2025-10-23T21:13:42.568Z"),
      },
    };

    jest
      .spyOn(casaDeShowService, "cadastrarCasa")
      .mockResolvedValue(mockCasaCadastrada);

    await casaDeShowController.cadastrarCasa(
      mockRequest as Request,
      mockResponse as Response,
      mockNext
    );

    expect(statusMKock).toHaveBeenCalledWith(201);
    expect(jsonMock).toHaveBeenCalledWith({
      message: "Casa de show cadastrada com sucesso!",
      casa: mockCasaCadastrada,
    });
  });

  test("deve retornar erro 500 quando ocorrer exceção no serviço", async () => {
    jest
      .spyOn(casaDeShowService, "cadastrarCasa")
      .mockRejectedValue(new Error("Erro no serviço"));

    await casaDeShowController.cadastrarCasa(
      mockRequest as Request,
      mockResponse as Response,
      mockNext
    );

    expect(statusMKock).toHaveBeenCalledWith(500);
    expect(jsonMock).toHaveBeenCalledWith({
      message: expect.stringContaining(
        "Erro ao cadastrar casa de show: Error: Erro no serviço"
      ),
    });
  });
});

describe("editarCasaDeShow", () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let mockNext: NextFunction;
  let jsonMock: jest.Mock;
  let statusMock: jest.Mock;

  beforeEach(() => {
    mockRequest = {
      params: { id: "1" },
      body: {
        id_casashow: "1",
        nome_fantasia: "Arena Fortaleza",
        cnpj: "12345678000199",
        capacidade: 2500,
        endereco: "Av. Beira Mar, 1500",
        bairro: "Meireles",
        estado: "CE",
        cep: "60165121",
        geo_lat: "-3.71722",
        geo_lng: "-38.5433",
        createdAt: new Date("2025-10-19T21:13:42.568Z"),
        updatedAt: new Date("2025-10-19T21:13:42.568Z"),
        usuario: {
          id_usuario: "1",
          nome: "Carlos Eduardo",
          email: "carlos@example.com",
          senha_hash: "hashedpassword123",
          telefone: "85988887777",
          tipo: "CASASHOW",
          createdAt: new Date("2025-10-19T21:13:42.568Z"),
          updatedAt: new Date("2025-10-19T21:13:42.568Z"),
        },
      },
    };
    statusMock = jest.fn().mockReturnThis();
    jsonMock = jest.fn();
    mockResponse = {
      status: statusMock,
      json: jsonMock,
    };

    mockNext = jest.fn();
  });

  test("deve editar casa de show com sucesso com status 200", async () => {
    const mockCasaEditada = {
      id_casashow: "1",
      id_usuario: "10",
      nome_fantasia: "Arena Fortaleza",
      cnpj: "12345678000199",
      capacidade: "2500",
      endereco: "Av. Beira Mar, 1500",
      bairro: "Meireles",
      estado: "CE",
      cep: "60165121",
      geo_lat: "-3.71722",
      geo_lng: "-38.5433",
      createdAt: new Date("2025-10-23T21:13:42.568Z"),
      updatedAt: new Date("2025-10-23T21:13:42.568Z"),
      usuario: {
        id_usuario: "10",
        nome: "Carlos Eduardo",
        email: "carlos@example.com",
        senha_hash: "hashedpassword123",
        telefone: "85988887777",
        tipo: UsuarioTipo.CASASHOW,
        createdAt: new Date("2025-10-23T21:13:42.568Z"),
        updatedAt: new Date("2025-10-23T21:13:42.568Z"),
      },
    };

    jest
      .spyOn(casaDeShowService, "editarCasa")
      .mockResolvedValue(mockCasaEditada);

    await casaDeShowController.editarCasa(
      mockRequest as Request,
      mockResponse as Response,
      mockNext
    );

    expect(statusMock).toHaveBeenCalledWith(200);
    expect(jsonMock).toHaveBeenCalledWith({
      message: expect.stringContaining("Casa de show atualizada com sucesso!"),
      casa: mockCasaEditada,
    });
  });

  test("deve retornar erro 404 quando casa de show não for encontrada", async () => {
    jest
      .spyOn(casaDeShowService, "buscarCasaDeShowPorId")
      .mockResolvedValue(null);

    await casaDeShowController.buscarCasaDeShowPorId(
      mockRequest as Request,
      mockResponse as Response,
      mockNext
    );

    expect(statusMock).toHaveBeenCalledWith(404);
    expect(jsonMock).toHaveBeenCalledWith({
      message: "Casa de show não encontrada.",
    });
  });

  test("deve retornar erro 500 quando ocorrer exceção no serviço", async () => {
    jest
      .spyOn(casaDeShowService, "editarCasa")
      .mockRejectedValue(new Error("Erro no serviço"));

    await casaDeShowController.editarCasa(
      mockRequest as Request,
      mockResponse as Response,
      mockNext
    );

    expect(statusMock).toHaveBeenCalledWith(500);
    expect(jsonMock).toHaveBeenCalledWith({
      message: expect.stringContaining(
        "Erro ao editar casa de show: Error: Erro no serviço"
      ),
    });
  });
});

describe("deletar casa", () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let mockNext: NextFunction;
  let mockStatus: jest.Mock;
  let mockJson: jest.Mock;

  beforeEach(() => {
    mockRequest = { params: { id: "1" } };
    mockJson = jest.fn();
    mockStatus = jest.fn().mockReturnThis();
    mockResponse = {
      status: mockStatus,
      json: mockJson,
    };
    mockNext = jest.fn();
  });

  test("Deve deletar artista com sucesso e retornar status 200", async () => {
    const mockCasaDeletada = {
      id_casashow: "1",
      id_usuario: "10",
      nome_fantasia: "Arena Fortaleza",
      cnpj: "12345678000199",
      capacidade: "2500",
      endereco: "Av. Beira Mar, 1500",
      bairro: "Meireles",
      estado: "CE",
      cep: "60165121",
      geo_lat: "-3.71722",
      geo_lng: "-38.5433",
      createdAt: new Date("2025-10-23T21:13:42.568Z"),
      updatedAt: new Date("2025-10-23T21:13:42.568Z"),
      usuario: {
        id_usuario: "10",
        nome: "Carlos Eduardo",
        email: "carlos@example.com",
        senha_hash: "hashedpassword123",
        telefone: "85988887777",
        tipo: UsuarioTipo.CASASHOW,
        createdAt: new Date("2025-10-23T21:13:42.568Z"),
        updatedAt: new Date("2025-10-23T21:13:42.568Z"),
      },
    };

    jest
      .spyOn(casaDeShowService, "deletarCasa")
      .mockResolvedValue(mockCasaDeletada);

    await casaDeShowController.deletarCasa(
      mockRequest as Request,
      mockResponse as Response,
      mockNext
    );

    expect(mockStatus).toHaveBeenCalledWith(200);
    expect(mockJson).toHaveBeenCalledWith({
      message: "Casa de show deletada com sucesso!",
    });
  });

  test("deve retornar erro 404 quando casa de show não for encontrada", async () => {
    jest
      .spyOn(casaDeShowService, "buscarCasaDeShowPorId")
      .mockResolvedValue(null);

    await casaDeShowController.buscarCasaDeShowPorId(
      mockRequest as Request,
      mockResponse as Response,
      mockNext
    );

    expect(mockStatus).toHaveBeenCalledWith(404);
    expect(mockJson).toHaveBeenCalledWith({
      message: "Casa de show não encontrada.",
    });
  });

  test("Deve retornar erro 500 quando o serviço lança exceção", async () => {
    jest
      .spyOn(casaDeShowService, "deletarCasa")
      .mockRejectedValue(new Error("Erro interno do servidor"));

    await casaDeShowController.deletarCasa(
      mockRequest as Request,
      mockResponse as Response,
      mockNext
    );

    expect(mockStatus).toHaveBeenCalledWith(500);
    expect(mockJson).toHaveBeenCalledWith({
      message: expect.stringContaining(
        "Erro ao deletar casa de show: Error: Erro interno do servidor"
      ),
    });
  });
});
