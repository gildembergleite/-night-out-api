-- CreateTable
CREATE TABLE "public"."Eventos" (
    "id_evento" TEXT NOT NULL,
    "id_casa" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "data_inicio" TEXT NOT NULL,
    "data_fim" TEXT NOT NULL,
    "idade_minima" TEXT NOT NULL,
    "visibilidade" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "created_at" TEXT NOT NULL,
    "updated_at" TEXT NOT NULL,

    CONSTRAINT "Eventos_pkey" PRIMARY KEY ("id_evento")
);