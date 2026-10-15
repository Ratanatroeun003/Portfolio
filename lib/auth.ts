import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import Credentials from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import { signinSchema } from "@/features/auth/auth.schema";
import authConfig from "@/auth.config";
import bcrypt from 'bcryptjs'
export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt",
    maxAge:8 * 60 * 60,
    updateAge:60 * 60
   },
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const validated = signinSchema.safeParse(credentials)
        if(!validated.success) {
          return null;
        }
        const user = await prisma.user.findUnique({ where: { email:validated.data.email } });
        if (!user || !user.password) return null;
        const isValid = await bcrypt.compare(validated.data.password,user.password);
        if (!isValid) return null;
        return {
          id: user.id,
          email: user.email,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token }) {   
      return token; 
    },
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }
      return session;
    },
  },
});