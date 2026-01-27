import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from "next-auth/providers/credentials";
import { generalFunction } from '@/src/lib/generalFuntion';

const handler = NextAuth({
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            authorization: {
                params: {
                  prompt: "select_account",
                },
              },
          }),
          CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { type: "text" },
                email: { type: "email" },
            },
            async authorize(credentials) {
              if (!credentials) return null;
              console.log({ credentials });
              const url = generalFunction.createUrl("/user/signup");
              const res = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-type" : "application/json"
                },
                body: JSON.stringify({
                    username: credentials.username,
                    email: credentials.email,
                })
              })
              const data = await res.json();
              const user = data.data;
              return {
                id: user.userId,
                name: user.username,
                email: user.email,
              }
            },
          }),
    ],
    callbacks:{
        async session({ session, token }) {
            return session
          },
          async jwt({ token, user, account }) {
              if ( account?.provider === "google" && user && !token.userId ) {
                const url = generalFunction.createUrl("/user/signup");
                const res = await fetch(url, {
                    method: "POST",
                    headers: {
                        "Content-type" : "application/json"
                    },
                    body: JSON.stringify({
                        username: user.name,
                        email: user.email,
                    })
                })
                const data = await res.json();
                token.userId = data.data.userId;
                console.log("data from google signup", data);
            }
                return token
          },
    },
    pages:{
        signIn: '/dashboard',
    },
    session:{
        strategy: 'jwt',
    }
})

export { handler as GET, handler as POST };
