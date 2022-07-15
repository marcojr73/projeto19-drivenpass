/*
  Warnings:

  - You are about to drop the column `CreatedAt` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "CreatedAt",
ALTER COLUMN "createdAt" SET DATA TYPE TEXT;
