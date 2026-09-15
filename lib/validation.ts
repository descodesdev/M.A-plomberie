import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(120),
  message: z.string().trim().min(10).max(2000),
  consent: z.literal(true),
  company: z.string().max(0).optional().or(z.literal("")),
  ts: z.coerce.number(),
});

export type ContactInput = z.infer<typeof contactSchema>;
