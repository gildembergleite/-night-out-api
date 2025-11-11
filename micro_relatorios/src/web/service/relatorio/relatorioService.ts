import dayjs from "dayjs";
import ExcelJS from "exceljs";
import { eventosClient, usuariosClient } from "../../libs/microservicesClient";
import { prisma } from "../../libs/prismClient";
import { RelatorioDTO } from "../../types/relatorio_dtos/relatorioDTO";

export async function gerarRelatorio(dados: RelatorioDTO) {
  const TIPO_RELATORIO = [
    "EVENTOS",
    "USUARIOS",
    "PROPOSTAS",
    "ARTISTAS",
    "CASAS_SHOW",
    "EVENTOS_POR_PERIODO",
    "USUARIOS_POR_TIPO",
  ];

  if (!TIPO_RELATORIO.includes(dados.tipo_relatorio)) {
    throw new Error(`Tipo de relatório não suportado: ${dados.tipo_relatorio}`);
  }

  try {
    const relatorio = await prisma.relatorio.create({
      data: {
        tipo_relatorio: dados.tipo_relatorio,
        nome_relatorio: dados.nome_relatorio,
        descricao: dados.descricao,
        parametros: JSON.stringify(dados.parametros),
        dados: JSON.stringify(dados),
        status: "PROCESSANDO",
        formato: dados.formato || "JSON",
        criado_por: dados.criado_por,
        data_inicio: dados.parametros.data_inicio
          ? new Date(dados.parametros.data_inicio)
          : null,
        data_fim: dados.parametros.data_fim
          ? new Date(dados.parametros.data_fim)
          : null,
      },
    });

    let dadosRelatorio: any;

    switch (dados.tipo_relatorio) {
      case "EVENTOS":
        dadosRelatorio = await gerarRelatorioEventos(dados.parametros);
        break;
      case "USUARIOS":
        dadosRelatorio = await gerarRelatorioUsuarios(dados.parametros);
        break;
      case "PROPOSTAS":
        dadosRelatorio = await gerarRelatorioPropostas(dados.parametros);
        break;
      case "ARTISTAS":
        dadosRelatorio = await gerarRelatorioArtistas(dados.parametros);
        break;
      case "CASAS_SHOW":
        dadosRelatorio = await gerarRelatorioCasasShow(dados.parametros);
        break;
      case "EVENTOS_POR_PERIODO":
        dadosRelatorio = await gerarRelatorioEventosPorPeriodo(
          dados.parametros
        );
        break;
      case "USUARIOS_POR_TIPO":
        dadosRelatorio = await gerarRelatorioUsuariosPorTipo(dados.parametros);
        break;
      default:
        throw new Error(
          `Tipo de relatório não suportado: ${dados.tipo_relatorio}`
        );
    }

    const relatorioAtualizado = await prisma.relatorio.update({
      where: { id_relatorio: relatorio.id_relatorio },
      data: {
        dados: JSON.stringify(dadosRelatorio),
        status: "GERADO",
      },
    });

    return {
      message: "Relatório gerado com sucesso!",
      relatorio: relatorioAtualizado,
      dados: dadosRelatorio,
    };
  } catch (error: any) {
    if (error.message && error.message.includes("Tipo de relatório")) {
      throw error;
    }

    const relatorios = await prisma.relatorio.findMany({
      where: { nome_relatorio: dados.nome_relatorio },
      orderBy: { createdAt: "desc" },
      take: 1,
    });

    if (relatorios.length > 0) {
      await prisma.relatorio.update({
        where: { id_relatorio: relatorios[0].id_relatorio },
        data: { status: "ERRO" },
      });
    }

    throw new Error(`Erro ao gerar relatório: ${error.message}`);
  }
}

async function gerarRelatorioEventos(parametros: any) {
  try {
    const response = (await eventosClient.get("/evento")) as { data: any[] };
    let eventos: any[] = response.data;

    if (parametros.data_inicio) {
      eventos = eventos.filter(
        (e: any) => new Date(e.data_inicio) >= new Date(parametros.data_inicio)
      );
    }
    if (parametros.data_fim) {
      eventos = eventos.filter(
        (e: any) => new Date(e.data_inicio) <= new Date(parametros.data_fim)
      );
    }
    if (parametros.status) {
      eventos = eventos.filter((e: any) => e.status === parametros.status);
    }
    if (parametros.id_usuario) {
      eventos = eventos.filter(
        (e: any) => e.id_usuario === parametros.id_usuario
      );
    }

    const eventosEnriquecidos = await Promise.all(
      eventos.map(async (evento: any) => {
        let usuario = null;
        const endpoints = [
          `/cliente/${evento.id_usuario}`,
          `/artista/${evento.id_usuario}`,
          `/casaDeShow/${evento.id_usuario}`,
        ];
        for (const endpoint of endpoints) {
          try {
            const response = (await usuariosClient
              .get(endpoint)
              .catch(() => null)) as { data?: any } | null;
            if (response?.data) {
              usuario = response.data;
              break;
            }
          } catch {}
        }
        return {
          ...evento,
          usuario: usuario,
        };
      })
    );

    return {
      total: eventosEnriquecidos.length,
      eventos: eventosEnriquecidos,
      resumo: {
        por_status: contarPorStatus(eventosEnriquecidos, "status"),
      },
    };
  } catch (error: any) {
    throw new Error(`Erro ao buscar eventos: ${error.message}`);
  }
}

async function gerarRelatorioUsuarios(parametros: any) {
  try {
    const usuarios: Array<{
      id?: string | number;
      nome?: string;
      email?: string;
      tipo_usuario?: string;
      telefone?: string;
      [key: string]: any;
    }> = [];

    try {
      const response = (await usuariosClient
        .get("/cliente", {
          params: { page: 1, pageSize: 10000 },
        })
        .catch(() => null)) as { data?: any[] } | null;
      if (response?.data && Array.isArray(response.data)) {
        usuarios.push(
          ...response.data.map((u: any) => ({ ...u, tipo_usuario: "cliente" }))
        );
      }
    } catch (error) {
      console.warn("Não foi possível buscar clientes:", error);
    }

    try {
      const response = (await usuariosClient
        .get("/artista", {
          params: { page: 1, pageSize: 10000 },
        })
        .catch(() => null)) as { data?: any[] } | null;
      if (response?.data && Array.isArray(response.data)) {
        usuarios.push(
          ...response.data.map((u: any) => ({ ...u, tipo_usuario: "artista" }))
        );
      }
    } catch (error) {
      console.warn("Não foi possível buscar artistas:", error);
    }

    try {
      const response = (await usuariosClient
        .get("/casaDeShow", {
          params: { page: 1, pageSize: 10000 },
        })
        .catch(() => null)) as { data?: any[] } | null;
      if (response?.data && Array.isArray(response.data)) {
        usuarios.push(
          ...response.data.map((u: any) => ({
            ...u,
            tipo_usuario: "casaDeShow",
          }))
        );
      }
    } catch (error) {
      console.warn("Não foi possível buscar casas de show:", error);
    }

    try {
      const response = (await usuariosClient
        .get("/adm", {
          params: { page: 1, pageSize: 10000 },
        })
        .catch(() => null)) as { data?: any[] } | null;
      if (response?.data && Array.isArray(response.data)) {
        usuarios.push(
          ...response.data.map((u: any) => ({ ...u, tipo_usuario: "adm" }))
        );
      }
    } catch (error) {
      console.warn("Não foi possível buscar administradores:", error);
    }

    let usuariosFiltrados = usuarios;
    if (parametros.tipo_usuario) {
      usuariosFiltrados = usuariosFiltrados.filter(
        (u: any) => u.tipo_usuario === parametros.tipo_usuario
      );
    }

    return {
      total: usuariosFiltrados.length,
      usuarios: usuariosFiltrados,
      resumo: {
        por_tipo: contarPorStatus(usuariosFiltrados, "tipo_usuario"),
      },
    };
  } catch (error: any) {
    throw new Error(`Erro ao buscar usuários: ${error.message}`);
  }
}

async function gerarRelatorioPropostas(parametros: any) {
  try {
    const [propostasArtista, propostasCasa] = await Promise.all([
      eventosClient.get("/propostaArtista").catch(() => ({ data: [] })),
      eventosClient.get("/propostaCasa").catch(() => ({ data: [] })),
    ]);

    let propostas: Array<{
      id_proposta_artista?: string | number;
      id_proposta_casa?: string | number;
      tipo?: string;
      data_proposta?: string;
      data_evento?: string;
      valor_ofertado?: number;
      status?: string;
      [key: string]: any;
    }> = [
      ...(propostasArtista.data || []).map((p: any) => ({
        ...p,
        tipo: "ARTISTA",
      })),
      ...(propostasCasa.data || []).map((p: any) => ({ ...p, tipo: "CASA" })),
    ];

    if (parametros.status) {
      propostas = propostas.filter((p: any) => p.status === parametros.status);
    }
    if (parametros.data_inicio) {
      propostas = propostas.filter(
        (p: any) =>
          new Date(p.data_proposta) >= new Date(parametros.data_inicio)
      );
    }
    if (parametros.data_fim) {
      propostas = propostas.filter(
        (p: any) => new Date(p.data_proposta) <= new Date(parametros.data_fim)
      );
    }

    return {
      total: propostas.length,
      propostas,
      resumo: {
        por_status: contarPorStatus(propostas, "status"),
        por_tipo: contarPorStatus(propostas, "tipo"),
      },
    };
  } catch (error: any) {
    throw new Error(`Erro ao buscar propostas: ${error.message}`);
  }
}

async function gerarRelatorioArtistas(parametros: any) {
  try {
    const response = (await usuariosClient
      .get("/artista", {
        params: { page: 1, pageSize: 10000 },
      })
      .catch(() => ({ data: [] }))) as { data?: any[] };
    let artistas: Array<{
      id?: string | number;
      nome_artista?: string;
      genero_musical?: string;
      cache_min?: number;
      verificado?: boolean;
      [key: string]: any;
    }> = response.data || [];

    if (parametros.verificado !== undefined) {
      const artistasCompletos = await Promise.all(
        artistas.map(async (a: any) => {
          try {
            const detalhes = (await usuariosClient
              .get(`/artista/${a.id}`)
              .catch(() => null)) as { data?: any } | null;
            return detalhes?.data || a;
          } catch {
            return a;
          }
        })
      );
      artistas = artistasCompletos.filter(
        (a: any) => a.verificado === parametros.verificado
      );
    }

    return {
      total: artistas.length,
      artistas,
      resumo: {
        verificado: artistas.filter((a: any) => a.verificado).length,
        nao_verificado: artistas.filter((a: any) => !a.verificado).length,
      },
    };
  } catch (error: any) {
    throw new Error(`Erro ao buscar artistas: ${error.message}`);
  }
}

async function gerarRelatorioCasasShow(parametros: any) {
  try {
    const response = (await usuariosClient
      .get("/casaDeShow", {
        params: { page: 1, pageSize: 10000 },
      })
      .catch(() => ({ data: [] }))) as { data?: any[] };
    let casas: Array<{
      id?: string | number;
      nome?: string;
      email?: string;
      nome_fantasia?: string;
      cnpj?: string;
      capacidade?: number;
      endereco?: string;
      estado?: string;
      [key: string]: any;
    }> = response.data || [];

    const casasCompletas = await Promise.all(
      casas.map(async (c: any) => {
        try {
          const detalhes = (await usuariosClient
            .get(`/casaDeShow/${c.id}`)
            .catch(() => null)) as { data?: any } | null;
          return detalhes?.data || c;
        } catch {
          return c;
        }
      })
    );

    const casasFormatadas = casasCompletas
      .filter((c: any) => c !== null)
      .map((c: any) => ({
        id: c.id || c.id_usuario,
        nome: c.nome || c.usuario?.nome,
        email: c.email || c.usuario?.email,
        nome_fantasia: c.nome_fantasia,
        cnpj: c.cnpj,
        capacidade: c.capacidade,
        endereco: c.endereco,
        estado: c.estado,
      }));

    return {
      total: casasFormatadas.length,
      casas: casasFormatadas,
      resumo: {
        por_estado: contarPorStatus(casasFormatadas, "estado"),
      },
    };
  } catch (error: any) {
    throw new Error(`Erro ao buscar casas de show: ${error.message}`);
  }
}

async function gerarRelatorioEventosPorPeriodo(parametros: any) {
  const dataInicio =
    parametros.data_inicio || dayjs().subtract(30, "days").toISOString();
  const dataFim = parametros.data_fim || dayjs().toISOString();

  const eventos = await gerarRelatorioEventos({
    ...parametros,
    data_inicio: dataInicio,
    data_fim: dataFim,
  });

  return {
    ...eventos,
    periodo: {
      data_inicio: dataInicio,
      data_fim: dataFim,
    },
  };
}

async function gerarRelatorioUsuariosPorTipo(parametros: any) {
  const usuarios = await gerarRelatorioUsuarios(parametros);

  return {
    ...usuarios,
    detalhado: usuarios.resumo.por_tipo,
  };
}

function contarPorStatus(items: any[], campo: string): Record<string, number> {
  return items.reduce((acc: Record<string, number>, item: any) => {
    const valor = item[campo] || "N/A";
    acc[valor] = (acc[valor] || 0) + 1;
    return acc;
  }, {});
}

export async function listarRelatorios() {
  const relatorios = await prisma.relatorio.findMany({
    orderBy: { createdAt: "desc" },
  });

  return relatorios.map((r) => ({
    id_relatorio: r.id_relatorio,
    tipo_relatorio: r.tipo_relatorio,
    nome_relatorio: r.nome_relatorio,
    descricao: r.descricao,
    status: r.status,
    formato: r.formato,
    createdAt: r.createdAt,
    updatedAt: r.updatedAt,
  }));
}

export async function buscarRelatorioPorId(id: string) {
  const relatorio = await prisma.relatorio.findUnique({
    where: { id_relatorio: id },
  });

  if (!relatorio) {
    return null;
  }

  return {
    ...relatorio,
    dados: relatorio.dados ? JSON.parse(relatorio.dados) : null,
    parametros: relatorio.parametros ? JSON.parse(relatorio.parametros) : null,
  };
}

export async function exportarRelatorioParaExcel(id: string) {
  const relatorio = await buscarRelatorioPorId(id);

  if (!relatorio) {
    throw new Error("Relatório não encontrado");
  }

  if (!relatorio.dados) {
    throw new Error("Relatório não possui dados para exportar");
  }

  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet(relatorio.nome_relatorio);

  worksheet.addRow(["Relatório:", relatorio.nome_relatorio]);
  worksheet.addRow(["Tipo:", relatorio.tipo_relatorio]);
  worksheet.addRow([
    "Data de Criação:",
    relatorio.createdAt.toLocaleString("pt-BR"),
  ]);
  worksheet.addRow([]);

  const dados = relatorio.dados;

  if (dados.eventos) {
    worksheet.addRow([
      "ID Evento",
      "Título",
      "Data Início",
      "Data Fim",
      "Local",
      "Status",
      "Usuário",
    ]);
    dados.eventos.forEach((evento: any) => {
      worksheet.addRow([
        evento.id_evento,
        evento.titulo,
        evento.data_inicio
          ? new Date(evento.data_inicio).toLocaleString("pt-BR")
          : "",
        evento.data_fim
          ? new Date(evento.data_fim).toLocaleString("pt-BR")
          : "",
        evento.local,
        evento.status,
        evento.usuario?.nome || evento.id_usuario,
      ]);
    });
  } else if (dados.usuarios) {
    worksheet.addRow(["ID Usuário", "Nome", "Email", "Tipo", "Telefone"]);
    dados.usuarios.forEach((usuario: any) => {
      worksheet.addRow([
        usuario.id_usuario || usuario.id,
        usuario.nome,
        usuario.email,
        usuario.tipo_usuario || usuario.tipo,
        usuario.telefone || "",
      ]);
    });
  } else if (dados.propostas) {
    worksheet.addRow([
      "ID Proposta",
      "Tipo",
      "Data Proposta",
      "Data Evento",
      "Valor Ofertado",
      "Status",
    ]);
    dados.propostas.forEach((proposta: any) => {
      worksheet.addRow([
        proposta.id_proposta_artista || proposta.id_proposta_casa,
        proposta.tipo,
        proposta.data_proposta
          ? new Date(proposta.data_proposta).toLocaleString("pt-BR")
          : "",
        proposta.data_evento
          ? new Date(proposta.data_evento).toLocaleString("pt-BR")
          : "",
        proposta.valor_ofertado,
        proposta.status,
      ]);
    });
  } else if (dados.artistas) {
    worksheet.addRow([
      "ID Artista",
      "Nome Artista",
      "Gênero Musical",
      "Cache Mínimo",
      "Verificado",
    ]);
    dados.artistas.forEach((artista: any) => {
      worksheet.addRow([
        artista.id_usuario || artista.id,
        artista.nome_artista,
        artista.genero_musical,
        artista.cache_min,
        artista.verificado ? "Sim" : "Não",
      ]);
    });
  } else if (dados.casas) {
    worksheet.addRow([
      "ID Casa",
      "Nome Fantasia",
      "CNPJ",
      "Capacidade",
      "Endereço",
      "Estado",
    ]);
    dados.casas.forEach((casa: any) => {
      worksheet.addRow([
        casa.id_usuario || casa.id,
        casa.nome_fantasia,
        casa.cnpj,
        casa.capacidade,
        casa.endereco,
        casa.estado,
      ]);
    });
  }

  if (dados.resumo) {
    worksheet.addRow([]);
    worksheet.addRow(["Resumo"]);
    Object.entries(dados.resumo).forEach(([chave, valor]) => {
      if (typeof valor === "object") {
        worksheet.addRow([chave]);
        Object.entries(valor as Record<string, any>).forEach(([k, v]) => {
          worksheet.addRow([`  ${k}`, v]);
        });
      } else {
        worksheet.addRow([chave, valor]);
      }
    });
  }

  const headerRow = worksheet.getRow(5);
  if (headerRow) {
    headerRow.font = { bold: true };
    headerRow.fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "FFE0E0E0" },
    };
  }

  return workbook;
}
