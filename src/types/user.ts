import * as z from "zod";

export const localAuthSchema = z.object({
    provider: z.literal("local"),
    password: z.string().min(3, "password must be 3 characters long"),
    googleId: z.string().optional().default("").nullable(),
});

export const googleAuthSchema = z.object({
    provider: z.literal("google"),
    password: z.string().optional().default("").nullable(),
    googleId: z.string().min(3, "password must be 3 characters long"),
});

export const authProviderSchema = z.discriminatedUnion("provider", [localAuthSchema, googleAuthSchema]);

export const userSchema = z.object({
    username: z.string().min(1, "Username is required"),
    email: z.string().email("Invalid email address"),
    auth: authProviderSchema,
});

export type User = z.infer<typeof userSchema>;