import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { generalFunction } from '@/src/lib/generalFuntion';

const handler = NextAuth({
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
          }),
    ],
    callbacks:{
        async session({ session, token }) {
            session.user.email = token.email;
            session.user.name = token.name;
            session.user.image = token.picture;

            session.user.userId = token.userId as string;
            session.accessToken = token.backendAccessToken as string; 
            return session
          },
        async redirect() {
            return "/home"
        },
          async jwt({ token }) {
                const url = generalFunction.createUrl("/user/signup");
                const res = await fetch(url, {
                    method: "POST",
                    credentials: 'include',
                    mode: 'cors',
                    headers: {
                        "Content-type" : "application/json"
                    },
                    body: JSON.stringify({
                        username: token.name,
                        email: token.email,
                    })
                })
                const data = await res.json();
                token.userId = data.data.user.userId;
                token.backendAccessToken = data.data.token;
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
