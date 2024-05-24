import { z } from "zod";

export const accountSchema = z.object({
  id: z.string(),
  balance: z.number(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export type Account = z.infer<typeof accountSchema>;

export const createAccountSchema = accountSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export type CreateAccount = z.infer<typeof createAccountSchema>;
