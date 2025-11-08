import { z } from "zod";

export const relatorioDTOSchema = z.object({
  tipo_relatorio: z.enum([
    "EVENTOS",
    "USUARIOS",
    "PROPOSTAS",
    "VENDAS",
    "ARTISTAS",
    "CASAS_SHOW",
    "EVENTOS_POR_PERIODO",
    "USUARIOS_POR_TIPO",
  ]),
  nome_relatorio: z.string().min(1, "Nome do relatório é obrigatório"),
  descricao: z.string().optional(),
  parametros: z.object({
    data_inicio: z.string().optional(),
    data_fim: z.string().optional(),
    id_usuario: z.string().optional(),
    status: z.string().optional(),
    tipo_usuario: z.string().optional(),
  }).passthrough(),
  formato: z.enum(["JSON", "EXCEL"]).optional().default("JSON"),
  criado_por: z.string().optional(),
});

