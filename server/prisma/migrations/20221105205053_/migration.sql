/*
  Warnings:

  - You are about to drop the column `user_id` on the `Manager` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `Teacher` table. All the data in the column will be lost.
  - Added the required column `userId` to the `Manager` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Teacher` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Manager" DROP COLUMN "user_id",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Student" DROP COLUMN "user_id",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Teacher" DROP COLUMN "user_id",
ADD COLUMN     "userId" INTEGER NOT NULL;
