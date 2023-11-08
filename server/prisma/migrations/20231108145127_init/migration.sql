-- CreateTable
CREATE TABLE "Profile" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "middleName" TEXT,
    "lastName" TEXT NOT NULL,
    "email" TEXT,
    "username" TEXT,
    "loginCode" TEXT,
    "password" TEXT,
    "newPassword" TEXT,
    "confirmNewPassword" TEXT,
    "gender" TEXT,
    "birthdate" TIMESTAMP(3),
    "address" TEXT,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Profile_email_key" ON "Profile"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_username_key" ON "Profile"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_loginCode_key" ON "Profile"("loginCode");
