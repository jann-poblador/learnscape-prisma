/*
  Warnings:

  - You are about to drop the `Activity` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Admin` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Classroom` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Student` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `StudentActivity` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Teacher` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_StudentClassroom` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Activity" DROP CONSTRAINT "Activity_adminId_fkey";

-- DropForeignKey
ALTER TABLE "Activity" DROP CONSTRAINT "Activity_teacherId_fkey";

-- DropForeignKey
ALTER TABLE "Classroom" DROP CONSTRAINT "Classroom_adminId_fkey";

-- DropForeignKey
ALTER TABLE "Classroom" DROP CONSTRAINT "Classroom_teacherId_fkey";

-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_adminId_fkey";

-- DropForeignKey
ALTER TABLE "StudentActivity" DROP CONSTRAINT "StudentActivity_activityId_fkey";

-- DropForeignKey
ALTER TABLE "StudentActivity" DROP CONSTRAINT "StudentActivity_studentId_fkey";

-- DropForeignKey
ALTER TABLE "_StudentClassroom" DROP CONSTRAINT "_StudentClassroom_A_fkey";

-- DropForeignKey
ALTER TABLE "_StudentClassroom" DROP CONSTRAINT "_StudentClassroom_B_fkey";

-- DropTable
DROP TABLE "Activity";

-- DropTable
DROP TABLE "Admin";

-- DropTable
DROP TABLE "Classroom";

-- DropTable
DROP TABLE "Profile";

-- DropTable
DROP TABLE "Student";

-- DropTable
DROP TABLE "StudentActivity";

-- DropTable
DROP TABLE "Teacher";

-- DropTable
DROP TABLE "_StudentClassroom";

-- DropEnum
DROP TYPE "Act_Category";

-- DropEnum
DROP TYPE "Role";
