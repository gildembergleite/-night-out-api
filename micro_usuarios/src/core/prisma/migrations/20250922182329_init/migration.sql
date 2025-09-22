/*
  Warnings:

  - You are about to drop the column `created_at` on the `Artista` table. All the data in the column will be lost.
  - You are about to drop the column `artistaId` on the `CasaDeShow` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `CasaDeShow` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `Cliente` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `Artista` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `CasaDeShow` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Cliente` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."CasaDeShow" DROP CONSTRAINT "CasaDeShow_artistaId_fkey";

-- AlterTable
ALTER TABLE "public"."Artista" DROP COLUMN "created_at",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "public"."CasaDeShow" DROP COLUMN "artistaId",
DROP COLUMN "created_at",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "public"."Cliente" DROP COLUMN "created_at",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "public"."Administrador" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "cargo" TEXT NOT NULL,
    "permissao_notes" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Administrador_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."_ArtistaCasaDeShow" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_ArtistaCasaDeShow_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Administrador_userId_key" ON "public"."Administrador"("userId");

-- CreateIndex
CREATE INDEX "_ArtistaCasaDeShow_B_index" ON "public"."_ArtistaCasaDeShow"("B");

-- AddForeignKey
ALTER TABLE "public"."Administrador" ADD CONSTRAINT "Administrador_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_ArtistaCasaDeShow" ADD CONSTRAINT "_ArtistaCasaDeShow_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."Artista"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_ArtistaCasaDeShow" ADD CONSTRAINT "_ArtistaCasaDeShow_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."CasaDeShow"("id") ON DELETE CASCADE ON UPDATE CASCADE;
