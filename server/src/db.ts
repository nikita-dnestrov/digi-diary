import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const Student = prisma.student;
export const Manager = prisma.manager;
export const Teacher = prisma.teacher;
export const School = prisma.school;
