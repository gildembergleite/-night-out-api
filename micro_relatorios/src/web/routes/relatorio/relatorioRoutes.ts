import { Router } from "express";
import {
    buscarRelatorioPorId,
    exportarRelatorioExcel,
    gerarRelatorio,
    listarRelatorios,
} from "../../controller/relatorio/relatorioLCController";

const RelatorioRoutes = Router();

RelatorioRoutes.post("/", gerarRelatorio);
RelatorioRoutes.get("/", listarRelatorios);
RelatorioRoutes.get("/:id", buscarRelatorioPorId);
RelatorioRoutes.get("/:id/excel", exportarRelatorioExcel);

export default RelatorioRoutes;

