import { z } from "zod";

export const signUpSchema = z.object({
	phone: z.string(),
	password: z.string(),
});

export const signInSchema = z.object({
	phone: z.string(),
	password: z.string(),
});
