import axios from "axios";

const MICRO_EVENTOS_URL = process.env.MICRO_EVENTOS_URL || "http://localhost:3002";
const MICRO_USUARIOS_URL = process.env.MICRO_USUARIOS_URL || "http://localhost:3000";

const X_API_KEY = process.env.X_API_KEY;

export const eventosClient = axios.create({
  baseURL: MICRO_EVENTOS_URL,
  timeout: 10000,
  headers: X_API_KEY ? { "X-API-KEY": X_API_KEY } : {},
});

export const usuariosClient = axios.create({
  baseURL: MICRO_USUARIOS_URL,
  timeout: 10000,
  headers: X_API_KEY ? { "X-API-KEY": X_API_KEY } : {},
});
