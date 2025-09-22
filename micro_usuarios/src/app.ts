import express from "express";
import AdmRoutes from "./web/routes/adm/admRoutes";

const app = express();

app.use(express.json());
app.use("/adm", AdmRoutes)

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
