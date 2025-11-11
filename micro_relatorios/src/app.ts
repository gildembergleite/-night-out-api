import cors from "cors";
import "dotenv/config";
import express from "express";
import relatorioRoutes from "./web/routes/relatorio/relatorioRoutes";

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
  })
);

app.use(express.json());

app.use("/relatorio", relatorioRoutes);

const PORT = process.env.PORT || 3003;

app.listen(PORT, () => {
  console.log(`Microserviço de Relatórios rodando na porta ${PORT}`);
});

