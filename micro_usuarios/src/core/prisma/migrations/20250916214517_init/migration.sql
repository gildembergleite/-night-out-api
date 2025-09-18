-- CreateTable
CREATE TABLE "public"."User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "hash" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Artista" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "nome_artistico" TEXT NOT NULL,
    "genero_musical" TEXT NOT NULL,
    "cache_min" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "url_portfolio" TEXT NOT NULL,
    "verificado" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Artista_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."CasaDeShow" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "artistaId" TEXT,
    "nome_fantasia" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "capacidade" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "logradouro" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "complemento" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "uf" TEXT NOT NULL,
    "geo_lat" TEXT NOT NULL,
    "geo_lng" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CasaDeShow_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Cliente" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "apelido" TEXT NOT NULL,
    "preferencias" TEXT NOT NULL,
    "data_nascimento" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Artista_userId_key" ON "public"."Artista"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "CasaDeShow_userId_key" ON "public"."CasaDeShow"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_userId_key" ON "public"."Cliente"("userId");

-- AddForeignKey
ALTER TABLE "public"."Artista" ADD CONSTRAINT "Artista_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CasaDeShow" ADD CONSTRAINT "CasaDeShow_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CasaDeShow" ADD CONSTRAINT "CasaDeShow_artistaId_fkey" FOREIGN KEY ("artistaId") REFERENCES "public"."Artista"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Cliente" ADD CONSTRAINT "Cliente_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
