import { listarAdministradores } from "../admLCController";
import * as admService from "../../../service/adm/admService";
import { Request, Response, NextFunction } from "express";
import * as admController from "../../../controller/adm/admLCController";
import { UsuarioTipo } from "@prisma/client";

describe("Listar Administradores", () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let mockNext: NextFunction;
  let statusMock: jest.Mock;
  let jsonMock: jest.Mock;

  beforeEach(() => {
    mockRequest = {};
    statusMock = jest.fn().mockReturnThis();
    jsonMock = jest.fn();
    mockResponse = {
      status: statusMock,
      json: jsonMock,
    };
    mockNext = jest.fn();
  });

  test("deve retornar a lista de administradores com status 200", async () => {
    const mockLista = [
      { id: "1", nome: "Carlos", email: "carlos@teste.com" },
      { id: "2", nome: "Diego", email: "diego@teste.com" },
    ];

    jest
      .spyOn(admService, "listarAdministradores")
      .mockResolvedValue(mockLista);

    await listarAdministradores(
      mockRequest as Request,
      mockResponse as Response,
      mockNext
    );

    expect(statusMock).toHaveBeenCalledWith(200);
    expect(jsonMock).toHaveBeenCalledWith(mockLista);
  });

  test("deve retornar erro 500 quando o serviço lança exceção", async () => {
    jest
      .spyOn(admService, "listarAdministradores")
      .mockRejectedValue(new Error("Falha ao listar"));

    await listarAdministradores(
      mockRequest as Request,
      mockResponse as Response,
      mockNext
    );

    expect(statusMock).toHaveBeenCalledWith(500);
    expect(jsonMock).toHaveBeenCalledWith({
      message: expect.stringContaining("Erro ao listar administradores"),
    });
  });
});

describe("buscarAdministradorPorId", () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let mockNext: NextFunction;
  let statusMock: jest.Mock;
  let jsonMock: jest.Mock;

  beforeEach(() => {
    mockRequest = { params: { id: "1" } };
    statusMock = jest.fn().mockReturnThis();
    jsonMock = jest.fn();

    mockResponse = {
      status: statusMock,
      json: jsonMock,
    };

    mockNext = jest.fn();
  });

  test("deve retornar o administrador com status 200", async () => {
    const mockAdm = {
      id_usuario: "1",
      cargo: "Gerente de Sistema",
      permissao_nivel: "ADMIN_MASTER",
      createdAt: new Date("2025-10-19T21:13:42.568Z"),
      updatedAt: new Date("2025-10-19T21:13:42.568Z"),
      usuario: {
        id_usuario: "1",
        nome: "Carlos Eduardo",
        email: "carlos@example.com",
        senha_hash: "123456",
        tipo: UsuarioTipo.ADMINISTRADOR,
        telefone: "85999999999",
        createdAt: new Date("2025-10-19T21:13:42.568Z"),
        updatedAt: new Date("2025-10-19T21:13:42.568Z"),
      },
    };

    jest
      .spyOn(admService, "buscarAdministradorPorId")
      .mockResolvedValue(mockAdm);

    await admController.buscarAdministradorPorId(
      mockRequest as Request,
      mockResponse as Response,
      mockNext
    );

    expect(statusMock).toHaveBeenCalledWith(200);
    expect(jsonMock).toHaveBeenCalledWith(mockAdm);
  });

  test("deve retornar 404 quando o administrador não for encontrado", async () => {
    jest.spyOn(admService, "buscarAdministradorPorId").mockResolvedValue(null);

    await admController.buscarAdministradorPorId(
      mockRequest as Request,
      mockResponse as Response,
      mockNext
    );

    expect(statusMock).toHaveBeenCalledWith(404);
    expect(jsonMock).toHaveBeenCalledWith({
      message: "Administrador não encontrado.",
    });
  });

  test("deve retornar 500 quando ocorrer um erro interno no serviço", async () => {
    jest
      .spyOn(admService, "buscarAdministradorPorId")
      .mockRejectedValue(new Error("Erro no banco de dados"));

    await admController.buscarAdministradorPorId(
      mockRequest as Request,
      mockResponse as Response,
      mockNext
    );

    expect(statusMock).toHaveBeenCalledWith(500);
    expect(jsonMock).toHaveBeenCalledWith(
      expect.objectContaining({
        message: expect.stringContaining("Erro ao buscar administrador"),
      })
    );
  });
});

describe("cadastrarAdm", () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let mockNext: NextFunction;
  let statusMock: jest.Mock;
  let jsonMock: jest.Mock;

  beforeEach(() => {
    mockRequest = {
      body: {
        cargo: "Gerente de Sistema",
        permissao_nivel: "ADMIN_MASTER",
        usuario: [
          {
            nome: "Diego Eduardo",
            email: "diego@example.com",
            senha_hash: "123456",
            telefone: "85999999999",
          },
        ],
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

  test("deve cadastrar um novo administrador e retornar status 201", async () => {
    const mockAdm = {
      id_usuario: "1",
      cargo: "Gerente de Sistema",
      permissao_nivel: "ADMIN_MASTER",
      createdAt: new Date("2025-10-19T21:13:42.568Z"),
      updatedAt: new Date("2025-10-19T21:13:42.568Z"),
      usuario: {
        id_usuario: "1",
        nome: "Diego Eduardo",
        email: "diego@example.com",
        senha_hash: "123456",
        telefone: "85999999999",
        tipo: UsuarioTipo.ADMINISTRADOR,
        createdAt: new Date("2025-10-19T21:13:42.568Z"),
        updatedAt: new Date("2025-10-19T21:13:42.568Z"),
      },
    };

    jest.spyOn(admService, "cadastrarADM").mockResolvedValue(mockAdm);

    await admController.cadastrarADM(
      mockRequest as Request,
      mockResponse as Response,
      mockNext
    );

    expect(statusMock).toHaveBeenCalledWith(201);
    expect(jsonMock).toHaveBeenCalledWith({
      message: "Administrador cadastrado com sucesso!",
      administrador: mockAdm,
    });
  });

  test("deve retornar 500 quando ocorrer um erro interno no serviço", async () => {
    jest
      .spyOn(admService, "cadastrarADM")
      .mockRejectedValue(new Error("Erro interno no servidor"));

    await admController.cadastrarADM(
      mockRequest as Request,
      mockResponse as Response,
      mockNext
    );

    expect(statusMock).toHaveBeenCalledWith(500);
    expect(jsonMock).toHaveBeenCalledWith(
      expect.objectContaining({
        message: expect.stringContaining("Erro ao cadastrar administrador"),
      })
    );
  });
});

describe("editarAdministrador", () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let mockNext: NextFunction;
  let statusMock: jest.Mock;
  let jsonMock: jest.Mock;

  beforeEach(() => {
    mockRequest = {
      params: { id: "1" },
      body: {
        cargo: "Gerente de Sistema",
        permissao_nivel: "ADMIN_MASTER",
        usuario: [
          {
            nome: "Diego Eduardo",
            email: "diego@example.com",
            senha_hash: "123456",
            telefone: "85999999999",
          },
        ],
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

  test("deve editar administrador com status 200", async () => {
    const mockNovoAdm = {
      id_usuario: "1",
      cargo: "Gerente de Sistema",
      permissao_nivel: "ADMIN_MASTER",
      createdAt: new Date("2025-10-19T21:13:42.568Z"),
      updatedAt: new Date("2025-10-19T21:13:42.568Z"),
      usuario: {
        id_usuario: "1",
        nome: "Diego Eduardo",
        email: "diego@example.com",
        senha_hash: "123456",
        telefone: "85999999999",
        tipo: UsuarioTipo.ADMINISTRADOR,
        createdAt: new Date("2025-10-19T21:13:42.568Z"),
        updatedAt: new Date("2025-10-19T21:13:42.568Z"),
      },
    };

    jest.spyOn(admService, "editarADM").mockResolvedValue(mockNovoAdm);

    await admController.editarADM(
      mockRequest as Request,
      mockResponse as Response,
      mockNext
    );

    expect(statusMock).toHaveBeenCalledWith(200);
    expect(jsonMock).toHaveBeenCalledWith({
      message: "Administrador atualizado com sucesso!",
      administrador: mockNovoAdm,
    });
  });

  test("deve retornar 404 quando o administrador não for encontrado", async () => {
    jest.spyOn(admService, "buscarAdministradorPorId").mockResolvedValue(null);

    await admController.buscarAdministradorPorId(
      mockRequest as Request,
      mockResponse as Response,
      mockNext
    );

    expect(statusMock).toHaveBeenCalledWith(404);
    expect(jsonMock).toHaveBeenCalledWith({
      message: "Administrador não encontrado.",
    });
  });

  test("deve retornar 500 quando ocorrer um erro interno no serviço", async () => {
    jest
      .spyOn(admService, "editarADM")
      .mockRejectedValue(new Error("Erro interno no servidor"));

    await admController.editarADM(
      mockRequest as Request,
      mockResponse as Response,
      mockNext
    );

    expect(statusMock).toHaveBeenCalledWith(500);
    expect(jsonMock).toHaveBeenCalledWith(
      expect.objectContaining({
        message: expect.stringContaining("Erro ao editar administrador"),
      })
    );
  });
});

describe("deletarADM", () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let mockNext: NextFunction;
  let statusMock: jest.Mock;
  let jsonMock: jest.Mock;

  beforeEach(() => {
    mockRequest = { params: { id: "1" } };
    statusMock = jest.fn().mockReturnThis();
    jsonMock = jest.fn();
    mockResponse = {
      status: statusMock,
      json: jsonMock,
    };
    mockNext = jest.fn();
  });

  test("deve deletar um administrador e retornar status 200", async () => {
    const mockAdmDeletado = {
      id_usuario: "1",
      cargo: "Gerente de Sistema",
      permissao_nivel: "ADMIN_MASTER",
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    jest.spyOn(admService, "deletarADM").mockResolvedValue(mockAdmDeletado);

    await admController.deletarADM(
      mockRequest as Request,
      mockResponse as Response,
      mockNext
    );

    expect(statusMock).toHaveBeenCalledWith(200);
    expect(jsonMock).toHaveBeenCalledWith({
      message: "Administrador deletado com sucesso!",
    });
  });

  test("deve retornar 404 quando o administrador não for encontrado", async () => {
    jest.spyOn(admService, "buscarAdministradorPorId").mockResolvedValue(null);

    await admController.buscarAdministradorPorId(
      mockRequest as Request,
      mockResponse as Response,
      mockNext
    );

    expect(statusMock).toHaveBeenCalledWith(404);
    expect(jsonMock).toHaveBeenCalledWith({
      message: "Administrador não encontrado.",
    });
  });

  test("deve retornar 500 quando ocorrer um erro interno no serviço", async () => {
    jest
      .spyOn(admService, "deletarADM")
      .mockRejectedValue(new Error("Erro interno no servidor"));

    await admController.deletarADM(
      mockRequest as Request,
      mockResponse as Response,
      mockNext
    );

    expect(statusMock).toHaveBeenCalledWith(500);
    expect(jsonMock).toHaveBeenCalledWith(
      expect.objectContaining({
        message: expect.stringContaining("Erro ao deletar administrador"),
      })
    );
  });
});
