-- AlterTable
ALTER TABLE "Manager" ADD COLUMN     "fullname" TEXT;

-- AlterTable
ALTER TABLE "Student" ADD COLUMN     "fullname" TEXT,
ADD COLUMN     "schoolId" INTEGER;

-- AlterTable
ALTER TABLE "Teacher" ADD COLUMN     "fullname" TEXT;

-- CreateTable
CREATE TABLE "School" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "managerId" INTEGER NOT NULL,

    CONSTRAINT "School_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "School"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "School" ADD CONSTRAINT "School_managerId_fkey" FOREIGN KEY ("managerId") REFERENCES "Manager"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
