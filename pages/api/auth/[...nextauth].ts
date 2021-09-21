import NextAuth from "next-auth";
import EmailProvider from "next-auth/dist/providers/email";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "../../../prisma";

export default NextAuth({
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
  adapter: PrismaAdapter(prisma),
});
