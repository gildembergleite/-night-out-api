import type { RequestHandler } from "express";
import * as relatorioService from "../../service/relatorio/relatorioService";
import type { RelatorioDTO } from "../../types/relatorio_dtos/relatorioDTO";

export const gerarRelatorio: RequestHandler = async (req, res) => {
  try {
    const dados: RelatorioDTO = req.body;

    const resultado = await relatorioService.gerarRelatorio(dados);

    res.status(201).json(resultado);
  } catch (e: any) {
    res.status(500).json({ message: `Erro ao gerar relatório: ${e.message}` });
  }
};

export const listarRelatorios: RequestHandler = async (req, res) => {
  try {
    const lista = await relatorioService.listarRelatorios();
    res.status(200).json(lista);
  } catch (e: any) {
    res.status(500).json({ message: `Erro ao listar relatórios: ${e.message}` });
  }
};

export const buscarRelatorioPorId: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const relatorio = await relatorioService.buscarRelatorioPorId(id);

    if (!relatorio) {
      res.status(404).json({ message: "Relatório não encontrado" });
      return;
    }

    res.status(200).json(relatorio);
  } catch (e: any) {
    res.status(500).json({ message: `Erro ao buscar relatório: ${e.message}` });
  }
};

export const exportarRelatorioExcel: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const workbook = await relatorioService.exportarRelatorioParaExcel(id);

    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      `attachment; filename=relatorio-${id}.xlsx`
    );

    await workbook.xlsx.write(res);
    res.end();
  } catch (e: any) {
    res.status(500).json({ message: `Erro ao exportar relatório: ${e.message}` });
  }
};

