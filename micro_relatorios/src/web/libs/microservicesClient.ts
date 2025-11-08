import axios from "axios";

const MICRO_EVENTOS_URL = process.env.MICRO_EVENTOS_URL || "http://localhost:3002";
const MICRO_USUARIOS_URL = process.env.MICRO_USUARIOS_URL || "http://localhost:3000";

// Token de autenticação opcional para comunicação entre microserviços
const SERVICE_TOKEN = process.env.SERVICE_TOKEN;

export const eventosClient = axios.create({
  baseURL: MICRO_EVENTOS_URL,
  timeout: 10000,
  headers: SERVICE_TOKEN ? { Authorization: `Bearer ${SERVICE_TOKEN}` } : {},
});

export const usuariosClient = axios.create({
  baseURL: MICRO_USUARIOS_URL,
  timeout: 10000,
  headers: SERVICE_TOKEN ? { Authorization: `Bearer ${SERVICE_TOKEN}` } : {},
});

