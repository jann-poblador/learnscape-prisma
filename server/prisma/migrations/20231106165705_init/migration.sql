/*
  Warnings:

  - You are about to drop the column `studentId` on the `Profile` table. All the data in the column will be lost.
  - You are about to drop the column `teacherId` on the `Profile` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_studentId_fkey";

-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_teacherId_fkey";

-- DropIndex
DROP INDEX "Profile_studentId_key";

-- DropIndex
DROP INDEX "Profile_teacherId_key";

-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "studentId",
DROP COLUMN "teacherId";
