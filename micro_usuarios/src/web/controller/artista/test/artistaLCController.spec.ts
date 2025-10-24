import { listarArtistas } from "./../artistaLCController";
import * as artistaService from "../../../service/artista/artistaService";
import e, { Request, Response, NextFunction } from "express";
import * as artistaLCController from "../../../controller/artista/artistaLCController";
import { UsuarioTipo } from "@prisma/client";
import { partialUtil } from "zod/v3/helpers/partialUtil.cjs";
import { json } from "stream/consumers";

describe("listar Artistas", () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let mockNext: NextFunction;
  let statusMock: jest.Mock;
  let jsonMock: jest.Mock;

  beforeEach(() => {
    mockRequest = {};
    jsonMock = jest.fn();
    statusMock = jest.fn().mockReturnThis();
    mockResponse = {
      status: statusMock,
      json: jsonMock,
    };

    mockNext = jest.fn();
  });

  test("Deve listar artistas com sucesso e retornar status 200", async () => {
    const mockLista = [
      { id: "1", nome: "Artista 1", email: "artista@email.com" },
      { id: "2", nome: "Artista 2", email: "artista2@email.com" },
    ];

    jest.spyOn(artistaService, "listarArtistas").mockResolvedValue(mockLista);

    await artistaLCController.listarArtistas(
      mockRequest as Request,
      mockResponse as Response,
      mockNext
    );

    expect(statusMock).toHaveBeenCalledWith(200);
    expect(jsonMock).toHaveBeenCalledWith(mockLista);
  });

  test("deve retornar erro 500 quando o serviço lança exceção", async () => {
    jest
      .spyOn(artistaService, "listarArtistas")
      .mockRejectedValue(new Error("Erro interno do servidor"));

    await artistaLCController.listarArtistas(
      mockRequest as Request,
      mockResponse as Response,
      mockNext
    );

    expect(statusMock).toHaveBeenCalledWith(500);
    expect(jsonMock).toHaveBeenCalledWith({
      message: expect.stringContaining(
        "Erro ao listar artistas: Error: Erro interno do servidor"
      ),
    });
  });
});

describe("Buscar Artista por ID", () => {
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

  test("Deve buscar artista por ID com sucesso a ratornar status 200", async () => {
    const mockArtista = {
      id_usuario: "88bfb4c9-30b1-4e21-ad63-143541e72f4b",
      nome_artista: "João Silva",
      genero_musical: "Sertanejo",
      cache_min: "1500.00",
      descricao:
        "Cantor sertanejo com mais de 5 anos de experiência em shows ao vivo.",
      portifolio: "https://soundcloud.com/joaosilva",
      verificado: false,
      createdAt: new Date("2025-10-24T01:05:39.304Z"),
      updatedAt: new Date("2025-10-24T01:05:39.304Z"),
      usuario: {
        id_usuario: "88bfb4c9-30b1-4e21-ad63-143541e72f4b",
        nome: "João Silva",
        email: "joaosilva@example.com",
        senha_hash: "12345678",
        tipo: UsuarioTipo.ARTISTA,
        telefone: "(85) 99999-9999",
        createdAt: new Date("2025-10-24T01:05:39.304Z"),
        updatedAt: new Date("2025-10-24T01:05:39.304Z"),
      },
    };

    jest
      .spyOn(artistaService, "buscarArtistaPorId")
      .mockResolvedValue(mockArtista);

    await artistaLCController.buscarArtistaPorId(
      mockRequest as Request,
      mockResponse as Response,
      mockNext
    );

    expect(mockStatus).toHaveBeenCalledWith(200);
    expect(mockJson).toHaveBeenCalledWith(mockArtista);
  });

  test("deve retornar erro 404 quando o artista não for encontrado", async () => {
    jest.spyOn(artistaService, "buscarArtistaPorId").mockResolvedValue(null);

    await artistaLCController.buscarArtistaPorId(
      mockRequest as Request,
      mockResponse as Response,
      mockNext
    );

    expect(mockStatus).toHaveBeenCalledWith(404);
    expect(mockJson).toHaveBeenCalledWith({
      message: expect.stringContaining("Artista não encontrado."),
    });
  });

  test("deve retornar erro 500 quando o serviço lança exceção", async () => {
    jest
      .spyOn(artistaService, "buscarArtistaPorId")
      .mockRejectedValue(new Error("Erro interno do servidor"));

    await artistaLCController.buscarArtistaPorId(
      mockRequest as Request,
      mockResponse as Response,
      mockNext
    );

    expect(mockStatus).toHaveBeenCalledWith(500);
    expect(mockJson).toHaveBeenCalledWith({
      message: expect.stringContaining(
        "Erro ao buscar artista: Error: Erro interno do servidor"
      ),
    });
  });
});

describe("Cadastrar Artista", () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let mockNext: NextFunction;
  let mockStatus: jest.Mock;
  let mockJson: jest.Mock;

  beforeEach(() => {
    mockRequest = {
      body: {
        nome_artista: "João Silva",
        genero_musical: "Sertanejo",
        cache_min: 1500.0,
        descricao:
          "Cantor sertanejo com repertório variado e experiência em eventos corporativos e festas.",
        portifolio: "https://www.instagram.com/joaosilvaoficial",
        usuario: [
          {
            nome: "João Silva",
            email: "joaosilva@example.com",
            senha_hash: "12345678",
            telefone: "85 99999-9999",
          },
        ],
      },
    };

    mockJson = jest.fn();
    mockStatus = jest.fn().mockReturnThis();
    mockResponse = {
      status: mockStatus,
      json: mockJson,
    };
    mockNext = jest.fn();
  });

  test("Deve cadastrar artista com sucesso e retornar status 201", async () => {
    const mockArtista = {
      id_artista: "1",
      id_usuario: "10",
      nome_artista: "João Silva",
      genero_musical: "Sertanejo",
      cache_min: "1500.0",
      descricao:
        "Cantor sertanejo com repertório variado e experiência em eventos corporativos e festas.",
      portifolio: "https://www.instagram.com/joaosilvaoficial",
      verificado: false,
      createdAt: new Date("2025-10-19T21:13:42.568Z"),
      updatedAt: new Date("2025-10-19T21:13:42.568Z"),
      usuario: {
        id_usuario: "10",
        nome: "João Silva",
        email: "joaosilva@example.com",
        senha_hash: "12345678",
        telefone: "85999999999",
        tipo: UsuarioTipo.ARTISTA,
        createdAt: new Date("2025-10-19T21:13:42.568Z"),
        updatedAt: new Date("2025-10-19T21:13:42.568Z"),
      },
    };

    jest
      .spyOn(artistaService, "cadastrarArtista")
      .mockResolvedValue(mockArtista);

    await artistaLCController.cadastrarArtista(
      mockRequest as Request,
      mockResponse as Response,
      mockNext
    );

    expect(mockStatus).toHaveBeenCalledWith(201);
    expect(mockJson).toHaveBeenCalledWith({
      message: "Artista cadastrado com sucesso!",
      artista: mockArtista,
    });
  });

  test("Deve retornar erro 500 quando o serviço lança exceção", async () => {
    jest
      .spyOn(artistaService, "cadastrarArtista")
      .mockRejectedValue(new Error("Erro interno do servidor"));

    await artistaLCController.cadastrarArtista(
      mockRequest as Request,
      mockResponse as Response,
      mockNext
    );

    expect(mockStatus).toHaveBeenCalledWith(500);
    expect(mockJson).toHaveBeenCalledWith({
      message: expect.stringContaining(
        "Erro ao cadastrar artista: Error: Erro interno do servidor"
      ),
    });
  });
});

describe("editar Artista", () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let mockNext: NextFunction;
  let mockStatus: jest.Mock;
  let mockJson: jest.Mock;

  beforeEach(() => {
    mockRequest = {
      params: { id: "1" },
      body: {
        nome_artista: "João Silva",
        genero_musical: "Sertanejo",
        cache_min: 1500.0,
        descricao:
          "Cantor sertanejo com repertório variado e experiência em eventos corporativos e festas.",
        portifolio: "https://www.instagram.com/joaosilvaoficial",
        usuario: [
          {
            nome: "João Silva",
            email: "joaosilva@example.com",
            senha_hash: "12345678",
            telefone: "85 99999-9999",
          },
        ],
      },
    };
    mockJson = jest.fn();
    mockStatus = jest.fn().mockReturnThis();
    mockResponse = {
      status: mockStatus,
      json: mockJson,
    };
    mockNext = jest.fn();
  });

  test("Deve editar artista com sucesso e retornar status 200", async () => {
    const mockNovoArtista = {
      id_artista: "1",
      id_usuario: "10",
      nome_artista: "João Silva",
      genero_musical: "Sertanejo",
      cache_min: "1500.0",
      descricao:
        "Cantor sertanejo com repertório variado e experiência em eventos corporativos e festas.",
      portifolio: "https://www.instagram.com/joaosilvaoficial",
      verificado: false,
      createdAt: new Date("2025-10-19T21:13:42.568Z"),
      updatedAt: new Date("2025-10-19T21:13:42.568Z"),
      usuario: {
        id_usuario: "10",
        nome: "João Silva",
        email: "joaosilva@example.com",
        senha_hash: "12345678",
        telefone: "85999999999",
        tipo: UsuarioTipo.ARTISTA,
        createdAt: new Date("2025-10-19T21:13:42.568Z"),
        updatedAt: new Date("2025-10-19T21:13:42.568Z"),
      },
    };

    jest
      .spyOn(artistaService, "editarArtista")
      .mockResolvedValue(mockNovoArtista);

    await artistaLCController.editarArtista(
      mockRequest as Request,
      mockResponse as Response,
      mockNext
    );

    expect(mockStatus).toHaveBeenCalledWith(200);
    expect(mockJson).toHaveBeenCalledWith({
      message: "Artista atualizado com sucesso!",
      artista: mockNovoArtista,
    });
  });

  test("deve retornar erro 404 quando o artista não for encontrado", async () => {
    jest.spyOn(artistaService, "buscarArtistaPorId").mockResolvedValue(null);

    await artistaLCController.buscarArtistaPorId(
      mockRequest as Request,
      mockResponse as Response,
      mockNext
    );

    expect(mockStatus).toHaveBeenCalledWith(404);
    expect(mockJson).toHaveBeenCalledWith({
      message: expect.stringContaining("Artista não encontrado."),
    });
  });

  test("Deve retornar erro 500 quando o serviço lança exceção", async () => {
    jest
      .spyOn(artistaService, "editarArtista")
      .mockRejectedValue(new Error("Erro interno do servidor"));

    await artistaLCController.editarArtista(
      mockRequest as Request,
      mockResponse as Response,
      mockNext
    );

    expect(mockStatus).toHaveBeenCalledWith(500);
    expect(mockJson).toHaveBeenCalledWith({
      message: expect.stringContaining(
        "Erro ao editar artista: Error: Erro interno do servidor"
      ),
    });
  });
});

describe("deletar Artista", () => {
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
    const mockArtistaDeletado = {
      cache_min: "1500.00",
      createdAt: new Date("2025-10-24T15:06:58.177Z"),
      descricao:
        "Cantor sertanejo com mais de 5 anos de experiência em shows ao vivo.",
      genero_musical: "Sertanejo",
      id_usuario: "88bfb4c9-30b1-4e21-ad63-143541e72f4b",
      nome_artista: "João Silva",
      portifolio: "https://soundcloud.com/joaosilva",
      updatedAt: new Date("2025-10-24T15:06:58.177Z"),
      verificado: false,
    };

    jest
      .spyOn(artistaService, "deletarArtista")
      .mockResolvedValue(mockArtistaDeletado);

    await artistaLCController.deletarArtista(
      mockRequest as Request,
      mockResponse as Response,
      mockNext
    );

    expect(mockStatus).toHaveBeenCalledWith(200);
    expect(mockJson).toHaveBeenCalledWith({
      message: "Artista deletado com sucesso!",
    });
  });

  test("deve retornar erro 404 quando o artista não for encontrado", async () => {
    jest.spyOn(artistaService, "buscarArtistaPorId").mockResolvedValue(null);

    await artistaLCController.buscarArtistaPorId(
      mockRequest as Request,
      mockResponse as Response,
      mockNext
    );

    expect(mockStatus).toHaveBeenCalledWith(404);
    expect(mockJson).toHaveBeenCalledWith({
      message: expect.stringContaining("Artista não encontrado."),
    });
  });

  test("Deve retornar erro 500 quando o serviço lança exceção", async () => {
    jest
      .spyOn(artistaService, "deletarArtista")
      .mockRejectedValue(new Error("Erro interno do servidor"));

    await artistaLCController.deletarArtista(
      mockRequest as Request,
      mockResponse as Response,
      mockNext
    );

    expect(mockStatus).toHaveBeenCalledWith(500);
    expect(mockJson).toHaveBeenCalledWith({
      message: expect.stringContaining(
        "Erro ao deletar artista: Error: Erro interno do servidor"
      ),
    });
  });
});
