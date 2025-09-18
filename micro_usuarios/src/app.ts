import express from "express";
import UsuarioRoutes from "./web/routes/usuarioRoutes";

const app = express();

app.use(express.json());
app.use("/user", UsuarioRoutes)

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
