import database from "@/app/(server)/database/database";
import { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import NextAuth from "next-auth/next";
import { JWT } from "next-auth/jwt";
import jwt from "jsonwebtoken";
import { PrismaAdapter } from "@auth/prisma-adapter";

const authOption: AuthOptions = {
  session: {
    strategy: "jwt",
    maxAge: 3000,
  },
  adapter: PrismaAdapter(database) as any,
  jwt: {
    async encode({ token }) {
      return jwt.sign(token as {}, process.env.JWT_SECRET!);
    },
    async decode({ token }) {
      return jwt.verify(token!, process.env.JWT_SECRET!) as JWT;
    },
  },
  secret: process.env.AUTH_SECRET,
  providers: [
    Credentials({
      type: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        const getUser = await database.user.findUnique({
          where: {
            email,
          },
          select: {
            id: true,
            uuid: true,
            email: true,
            name: true,
            role: true,
            password: true,
          },
        });
        if (!getUser) {
          return null;
        }
        const passwordValid = bcrypt.compare(password, getUser.password);
        if (!passwordValid) {
          return null;
        }
        const user: any = {
          id: getUser.id,
          email: getUser.email,
          name: getUser.name,
          role: getUser.role.name,
          uuid: getUser.uuid,
        };
        return user;
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    async jwt({ token, account, user }: any) {
      return { ...token, ...account, ...user };
    },

    async session({ session, token }: any) {
      session.user = token;
      return session;
    },
  },

  pages: {
    signIn: "/login",
  },
};

const handdle = NextAuth(authOption);

export { handdle as GET, handdle as POST };
