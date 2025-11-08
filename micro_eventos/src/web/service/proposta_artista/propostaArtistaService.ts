import { prisma } from "../../libs/prismClient";
import { PropostaArtistaDTO } from "../../types/proposta_artista_dtos/propostaArtistaDTO";

export async function criarPropostaArtista(dados: PropostaArtistaDTO) {
  const novaPropostaArtista = await prisma.propostaArtista.create({
    data: {
      id_proposta_artista: dados.id_proposta_artista,
      id_casa: dados.id_casa,
      id_evento: dados.id_evento,
      data_proposta: dados.data_proposta,
      data_evento: dados.data_evento,
      valor_ofertado: dados.valor_ofertado,
      status: dados.status ?? "DISPONÍVEL",
      termos: dados.termos,
    },
  });

  return {
    message: "Proposta artista criada com sucesso!",
    propostaArtista: novaPropostaArtista,
  };
}

export async function listarPropostaArtista({
  offset,
  limit,
}: {
  offset: number;
  limit: number;
}) {
  const propostaArtista = await prisma.propostaArtista.findMany({
    skip: offset,
    take: limit,
  });

  return propostaArtista.map((e: any) => ({
    id_proposta_artista: e.id_proposta_artista,
    id_casa: e.id_casa,
    id_evento: e.id_evento,
    data_proposta: e.data_proposta,
    data_evento: e.data_evento,
    valor_ofertado: e.valor_ofertado,
    status: e.status,
    termos: e.termos,
  }));
}

export async function buscarPropostaArtista(id: string) {
  const propostaArtista = await prisma.propostaArtista.findUnique({
    where: { id_proposta_artista: id },
  });

  if (!propostaArtista) {
    return null;
  }

  return propostaArtista;
}

export async function atualizarPropostaArtista(
  id: string,
  dados: Partial<PropostaArtistaDTO>
) {
  const propostaArtistaExistente = await prisma.propostaArtista.findUnique({
    where: { id_proposta_artista: id },
  });

  if (!propostaArtistaExistente) {
    throw new Error("Proposta artista não encontrado");
  }

  const propostaArtistaAtualizado = await prisma.propostaArtista.update({
    where: { id_proposta_artista: id },
    data: {
      id_proposta_artista:
        dados.id_proposta_artista ??
        propostaArtistaExistente.id_proposta_artista,
      id_casa: dados.id_casa ?? propostaArtistaExistente.id_casa,
      id_evento: dados.id_evento ?? propostaArtistaExistente.id_evento,
      data_proposta:
        dados.data_proposta ?? propostaArtistaExistente.data_proposta,
      data_evento: dados.data_evento ?? propostaArtistaExistente.data_evento,
      valor_ofertado:
        dados.valor_ofertado ?? propostaArtistaExistente.valor_ofertado,
      termos: dados.termos ?? propostaArtistaExistente.termos,
    },
  });

  return {
    message: "Proposta artista atualizado com sucesso",
    propostaArtista: propostaArtistaAtualizado,
  };
}

export async function deletarPropostaArtista(id: string) {
  if (!id) {
    throw new Error("ID da proposta artista é obrigatório para deletar");
  }

  const propostaArtista = await prisma.propostaArtista.findUnique({
    where: { id_proposta_artista: id },
  });

  if (!propostaArtista) {
    throw new Error("Proposta artista não encontrado");
  }

  await prisma.propostaArtista.delete({
    where: { id_proposta_artista: id },
  });

  return {
    message: "Proposta artista deletado",
  };
}
