import { prisma } from "../../libs/prismClient";
import { PropostaCasaDTO } from "../../types/proposta_casa_dtos/propostaCasaDTO";

export async function criarPropostaCasa(dados: PropostaCasaDTO) {
  const novaPropostaCasa = await prisma.propostaCasa.create({
    data: {
      id_proposta_casa: dados.id_proposta_casa,
      id_artista: dados.id_artista,
      id_evento: dados.id_evento,
      data_proposta: dados.data_proposta,
      data_evento: dados.data_evento,
      valor_ofertado: dados.valor_ofertado,
      status: dados.status ?? "DISPONÍVEL",
      termos: dados.termos,
    },
  });

  return {
    message: "Proposta casa criada com sucesso!",
    propostaCasa: novaPropostaCasa,
  };
}

export async function listarPropostaCasa({
  offset,
  limit,
}: {
  offset: number;
  limit: number;
}) {
  const propostaCasa = await prisma.propostaCasa.findMany({
    skip: offset,
    take: limit,
  });

  return propostaCasa.map((e: any) => ({
    id_proposta_casa: e.id_proposta_casa,
    id_artista: e.id_artista,
    id_evento: e.id_evento,
    data_proposta: e.data_proposta,
    data_evento: e.data_evento,
    valor_ofertado: e.valor_ofertado,
    status: e.status,
    termos: e.termos,
  }));
}

export async function buscarPropostaCasa(id: string) {
  const propostaCasa = await prisma.propostaCasa.findUnique({
    where: { id_proposta_casa: id },
  });

  if (!propostaCasa) {
    return null;
  }

  return propostaCasa;
}

export async function atualizarPropostaCasa(
  id: string,
  dados: Partial<PropostaCasaDTO>
) {
  const propostaCasaExistente = await prisma.propostaCasa.findUnique({
    where: { id_proposta_casa: id },
  });

  if (!propostaCasaExistente) {
    throw new Error("Proposta casa não encontrado");
  }

  const propostaCasaAtualizado = await prisma.propostaCasa.update({
    where: { id_proposta_casa: id },
    data: {
      id_proposta_casa:
        dados.id_proposta_casa ?? propostaCasaExistente.id_proposta_casa,
      id_artista: dados.id_artista ?? propostaCasaExistente.id_artista,
      id_evento: dados.id_evento ?? propostaCasaExistente.id_evento,
      data_proposta: dados.data_proposta ?? propostaCasaExistente.data_proposta,
      data_evento: dados.data_evento ?? propostaCasaExistente.data_evento,
      valor_ofertado:
        dados.valor_ofertado ?? propostaCasaExistente.valor_ofertado,
      status: dados.status ?? propostaCasaExistente.status,
      termos: dados.termos ?? propostaCasaExistente.termos,
    },
  });

  return {
    message: "Proposta casa atualizado com sucesso",
    propostaCasa: propostaCasaAtualizado,
  };
}

export async function deletarPropostaCasa(id: string) {
  if (!id) {
    throw new Error("ID da proposta casa é obrigatório para deletar");
  }

  const propostaCasa = await prisma.propostaCasa.findUnique({
    where: { id_proposta_casa: id },
  });

  if (!propostaCasa) {
    throw new Error("Proposta casa não encontrada");
  }

  await prisma.propostaCasa.delete({
    where: { id_proposta_casa: id },
  });

  return {
    message: "Proposta casa deletada com sucesso",
  };
}
