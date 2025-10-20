import express from "express";
import AdmRoutes from "./web/routes/adm/admRoutes";
import clienteRoutes from "./web/routes/cliente/clienteRoutes";
import artistaRoutes from "./web/routes/artista/artistaRoutes";
import casaDeShowRoutes from "./web/routes/casa_de_show/casaDeShowRoutes";
import 'dotenv/config';

const app = express();

app.use(express.json());
app.use("/adm", AdmRoutes);
app.use("/cliente", clienteRoutes);
app.use("/casaDeShow", casaDeShowRoutes);
app.use("/artista", artistaRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
