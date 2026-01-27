import * as z from "zod";


export const userSchema = z.object({
  username: z.string().min(1, "Username is required"),
  email: z.string().email("Invalid email address"),
});

export const dbUserSchema = userSchema.extend({
  userId: z.string(),
  createdAt: z.string(),
});

export type UserFormValues = z.infer<typeof userSchema>;
export type User = z.infer<typeof dbUserSchema>;
