-- CreateEnum
CREATE TYPE "UsuarioTipo" AS ENUM ('CLIENTE', 'ARTISTA', 'ADMINISTRADOR', 'CASASHOW');

-- CreateTable
CREATE TABLE "Usuario" (
    "id_usuario" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha_hash" TEXT NOT NULL,
    "tipo" "UsuarioTipo" NOT NULL,
    "telefone" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id_usuario")
);

-- CreateTable
CREATE TABLE "Cliente" (
    "id_usuario" TEXT NOT NULL,
    "apelido" TEXT,
    "preferencias" TEXT,
    "data_nascimento" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("id_usuario")
);

-- CreateTable
CREATE TABLE "Artista" (
    "id_usuario" TEXT NOT NULL,
    "nome_artista" TEXT NOT NULL,
    "genero_musical" TEXT NOT NULL,
    "cache_min" TEXT NOT NULL,
    "descricao" TEXT,
    "portifolio" TEXT,
    "verificado" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Artista_pkey" PRIMARY KEY ("id_usuario")
);

-- CreateTable
CREATE TABLE "Administrador" (
    "id_usuario" TEXT NOT NULL,
    "cargo" TEXT NOT NULL,
    "permissao_nivel" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Administrador_pkey" PRIMARY KEY ("id_usuario")
);

-- CreateTable
CREATE TABLE "CasaShow" (
    "id_usuario" TEXT NOT NULL,
    "nome_fantasia" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "capacidade" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "geo_lat" TEXT NOT NULL,
    "geo_lng" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CasaShow_pkey" PRIMARY KEY ("id_usuario")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- AddForeignKey
ALTER TABLE "Cliente" ADD CONSTRAINT "Cliente_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Artista" ADD CONSTRAINT "Artista_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Administrador" ADD CONSTRAINT "Administrador_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CasaShow" ADD CONSTRAINT "CasaShow_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;
