export interface RelatorioDTO {
  tipo_relatorio: string;
  nome_relatorio: string;
  descricao?: string;
  parametros: {
    data_inicio?: string;
    data_fim?: string;
    id_usuario?: string;
    status?: string;
    tipo_usuario?: string;
    [key: string]: any;
  };
  formato?: string;
  criado_por?: string;
}

export interface RelatorioResponse {
  id_relatorio: string;
  tipo_relatorio: string;
  nome_relatorio: string;
  descricao?: string;
  status: string;
  formato: string;
  createdAt: Date;
  dados?: any;
}

