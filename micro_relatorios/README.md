# Microserviço de Relatórios

Microserviço responsável por gerar relatórios persistentes a partir dos dados dos microserviços de Eventos e Usuários.

## 🚀 Configuração

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz do microserviço:

```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/nightout_relatorios"
PORT=3003
MICRO_EVENTOS_URL=http://localhost:3002
MICRO_USUARIOS_URL=http://localhost:3000
SERVICE_TOKEN=opcional_token_para_autenticacao_entre_microservicos
```

### Instalação

```bash
npm install
npx prisma migrate dev
npm run dev
```

## 📊 Endpoints

### POST /relatorio
Gera um novo relatório persistente.

**Body:**
```json
{
  "tipo_relatorio": "EVENTOS",
  "nome_relatorio": "Relatório de Eventos - Janeiro 2024",
  "descricao": "Eventos criados em janeiro de 2024",
  "parametros": {
    "data_inicio": "2024-01-01T00:00:00Z",
    "data_fim": "2024-01-31T23:59:59Z",
    "status": "DISPONÍVEL"
  },
  "formato": "JSON",
  "criado_por": "admin-id"
}
```

**Tipos de Relatório Disponíveis:**
- `EVENTOS` - Relatório de eventos
- `USUARIOS` - Relatório de usuários
- `PROPOSTAS` - Relatório de propostas (artistas e casas)
- `ARTISTAS` - Relatório de artistas
- `CASAS_SHOW` - Relatório de casas de show
- `EVENTOS_POR_PERIODO` - Eventos filtrados por período
- `USUARIOS_POR_TIPO` - Usuários agrupados por tipo

**Resposta:**
```json
{
  "message": "Relatório gerado com sucesso!",
  "relatorio": {
    "id_relatorio": "uuid",
    "tipo_relatorio": "EVENTOS",
    "nome_relatorio": "Relatório de Eventos - Janeiro 2024",
    "status": "GERADO",
    "formato": "JSON",
    "createdAt": "2024-01-15T10:00:00Z"
  },
  "dados": { ... }
}
```

### GET /relatorio
Lista todos os relatórios gerados.

**Resposta:**
```json
[
  {
    "id_relatorio": "uuid",
    "tipo_relatorio": "EVENTOS",
    "nome_relatorio": "Relatório de Eventos - Janeiro 2024",
    "status": "GERADO",
    "formato": "JSON",
    "createdAt": "2024-01-15T10:00:00Z"
  }
]
```

### GET /relatorio/:id
Busca um relatório específico por ID.

**Resposta:**
```json
{
  "id_relatorio": "uuid",
  "tipo_relatorio": "EVENTOS",
  "nome_relatorio": "Relatório de Eventos - Janeiro 2024",
  "dados": {
    "total": 10,
    "eventos": [ ... ],
    "resumo": { ... }
  },
  "parametros": { ... },
  "status": "GERADO",
  "formato": "JSON"
}
```

### GET /relatorio/:id/excel
Exporta um relatório para Excel (.xlsx).

**Resposta:** Arquivo Excel para download

## 📝 Exemplos de Uso

### Gerar Relatório de Eventos
```bash
curl -X POST http://localhost:3003/relatorio \
  -H "Content-Type: application/json" \
  -d '{
    "tipo_relatorio": "EVENTOS",
    "nome_relatorio": "Eventos do Mês",
    "parametros": {
      "data_inicio": "2024-01-01T00:00:00Z",
      "data_fim": "2024-01-31T23:59:59Z"
    }
  }'
```

### Gerar Relatório de Usuários por Tipo
```bash
curl -X POST http://localhost:3003/relatorio \
  -H "Content-Type: application/json" \
  -d '{
    "tipo_relatorio": "USUARIOS_POR_TIPO",
    "nome_relatorio": "Distribuição de Usuários",
    "parametros": {}
  }'
```

### Exportar Relatório para Excel
```bash
curl -X GET http://localhost:3003/relatorio/{id}/excel \
  --output relatorio.xlsx
```

## 🔧 Estrutura do Projeto

```
micro_relatorios/
├── src/
│   ├── app.ts                          # Aplicação Express
│   ├── core/
│   │   ├── prisma/
│   │   │   └── schema.prisma          # Schema do banco de dados
│   │   └── validations/               # Validações com Zod
│   └── web/
│       ├── controller/                 # Controllers
│       ├── routes/                     # Rotas
│       ├── service/                    # Lógica de negócio
│       ├── libs/                       # Clientes HTTP para outros microserviços
│       └── types/                      # DTOs e tipos
```

## 🔐 Autenticação

O microserviço pode se comunicar com outros microserviços usando um token de serviço configurado na variável `SERVICE_TOKEN`. Se os microserviços de destino exigirem autenticação, configure esta variável.

## 📬 Coleção Postman

Uma coleção completa do Postman está disponível com todos os endpoints pré-configurados:

### Como Importar

1. **Abra o Postman**
2. **Clique em "Import"** (canto superior esquerdo)
3. **Selecione o arquivo** `postman_collection.json`
4. **Importe também o environment** `postman_environment.json` (opcional, mas recomendado)
5. **Selecione o environment** "Micro Relatórios - Local" no dropdown superior direito

### Endpoints Incluídos

A coleção contém exemplos para todos os tipos de relatórios:
- ✅ Gerar Relatório - Eventos (com e sem filtros)
- ✅ Gerar Relatório - Usuários
- ✅ Gerar Relatório - Usuários por Tipo
- ✅ Gerar Relatório - Propostas
- ✅ Gerar Relatório - Artistas
- ✅ Gerar Relatório - Casas de Show
- ✅ Gerar Relatório - Eventos por Período
- ✅ Listar Todos os Relatórios
- ✅ Buscar Relatório por ID
- ✅ Exportar Relatório para Excel

Todos os endpoints já vêm com exemplos de body configurados e prontos para uso!

## 📦 Dependências Principais

- **express** - Framework web
- **prisma** - ORM para banco de dados
- **exceljs** - Geração de arquivos Excel
- **axios** - Cliente HTTP para comunicação com outros microserviços
- **zod** - Validação de schemas
- **dayjs** - Manipulação de datas

