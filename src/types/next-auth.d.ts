import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
    interface Session {
      accessToken?: string
      user: {
        userId?: string
        email?: string | null
        name?: string | null
        image?: string | null
      }
    }
  }