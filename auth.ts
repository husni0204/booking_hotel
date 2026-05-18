import NextAuth from "next-auth";
import { prisma } from "@/lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: PrismaAdapter(prisma),
<<<<<<< HEAD
    providers: [Google],
    // session: { strategy: "jwt" },
    // secret: process.env.AUTH_SECRET,
    // pages: {
    //     signIn: "/signin",
    // },
=======
    providers: [
        Google({
            clientId: process.env.AUTH_GOOGLE_ID!,
            clientSecret: process.env.AUTH_GOOGLE_SECRET!,
        }),
    ],
    secret: process.env.AUTH_SECRET,
    pages: {
        signIn: "/signin",
    },
    session: { strategy: "jwt" },
>>>>>>> f560fe8db39d3cd7a8eba3363cc7302f8d5eed20
    debug: true,
});


// 1:59:46
