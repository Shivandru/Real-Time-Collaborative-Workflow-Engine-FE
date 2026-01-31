import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from "next-auth/providers/credentials";
import { generalFunction } from '@/src/lib/generalFuntion';

const handler = NextAuth({
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
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
            session.user.email = token.email;
            session.user.name = token.name;
            session.user.image = token.picture;

            session.user.userId = token.userId as string;
            session.accessToken = token.accessToken as string; 
            return session
          },
        async redirect() {
            return "/home"
        },
          async jwt({ token, user, account }) {
            if (user) {
                token.userId = (user as any).id;
                token.name = user.name;
                token.email = user.email;
                token.picture = user.image;
            }
            if (account) {
                token.accessToken = account.id_token || account.access_token;
            }
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
            }
                return token
          },
    },
    pages:{
        signIn: '/signup',
    },
    session:{
        strategy: 'jwt',
    }
})

export { handler as GET, handler as POST };
