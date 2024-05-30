import { z } from "zod";

export const sessionSchema = z.object({
  id: z.string(),
  accountId: z.string(),
  credit: z.number(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export type Session = z.infer<typeof sessionSchema>;

export const nullableSessionSchema = sessionSchema.nullable();

export type NullableSession = z.infer<typeof nullableSessionSchema>;

