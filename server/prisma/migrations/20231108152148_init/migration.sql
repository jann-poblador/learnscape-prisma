/*
  Warnings:

  - A unique constraint covering the columns `[confirmLoginCode]` on the table `Profile` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "confirmLoginCode" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Profile_confirmLoginCode_key" ON "Profile"("confirmLoginCode");
