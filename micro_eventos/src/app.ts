import express from "express";
import cors from "cors";
import eventoRoutes from "./web/routes/evento/eventoRoutes";
import eventoArtistaRoutes from "./web/routes/evento_artista/eventoArtistaRoutes";
import propostaArtistaRoutes from "./web/routes/proposta_artista/propostaArtistaRoutes";
import propostaCasaRoutes from "./web/routes/proposta_casa/propostaCasaRoutes";
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

app.use("/evento", eventoRoutes);
app.use("/eventoArtista", eventoArtistaRoutes);
app.use("/propostaArtista", propostaArtistaRoutes);
app.use("/propostaCasa", propostaCasaRoutes);

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log(`Microserviço de Eventos rodando na porta ${PORT}`);
});
