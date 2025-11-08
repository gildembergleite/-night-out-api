import cors from "cors";
import express from "express";

import AdmRoutes from "./web/routes/adm/admRoutes";
import artistaRoutes from "./web/routes/artista/artistaRoutes";
import AuthRoutes from "./web/routes/auth/authRoutes";
import casaDeShowRoutes from "./web/routes/casa_de_show/casaDeShowRoutes";
import clienteRoutes from "./web/routes/cliente/clienteRoutes";

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5174", "http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
  })
);

app.use(express.json());

app.use("/auth", AuthRoutes);
app.use("/adm", AdmRoutes);
app.use("/cliente", clienteRoutes);
app.use("/casaDeShow", casaDeShowRoutes);
app.use("/artista", artistaRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
