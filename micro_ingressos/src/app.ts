import express from "express";
import cors from "cors";
import ingressoRoutes from "./web/routes/ingresso/ingressoRoutes";
import loteIngressoRoutes from "./web/routes/lote_ingresso/loteIngressoRoutes";
import pagamentoIngressoRoutes from "./web/routes/pagamento_ingresso/pagamentoIngressoRoutes";
import "dotenv/config";

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
  })
);

app.use(express.json());

app.use("/ingresso", ingressoRoutes);
app.use("/loteIngresso", loteIngressoRoutes);
app.use("/pagamentoIngresso", pagamentoIngressoRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`🎟️ Microserviço de Ingressos rodando na porta ${PORT}`);
});
