// import { prisma } from "@/lib/prisma";
// import { compare } from "bcryptjs";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        matric: {
          label: "Matric",
          type: "text",
          placeholder: "Your Matric number",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null;
        }
        const porter = credentials?.matric === "null" ? true : false;

        const url: string =
          porter === true
            ? "https://hostelcomplaintsmanagementsystem.onrender.com/api/auth/porters/login/"
            : "https://hostelcomplaintsmanagementsystem.onrender.com/api/auth/students/login/";

        let responseData: any;
        const { user, jwtz } = await axios
          .post(
            url,
            porter
              ? {
                  email: credentials?.email,
                  matric_number: "null",
                  password: credentials?.password,
                }
              : {
                  matric_number: credentials?.matric,
                  password: credentials?.password,
                }
          )
          .then(({ data }) => {
            responseData = data;
            return data;
          })
          .catch((error) => {
            console.log(error);
            throw new Error(JSON.stringify(error.response.data));
          });
        if (responseData) {
          return { jwtz, ...user, ...responseData };
        } else {
          console.log("user", user);
          console.log("other,", jwtz);
        }
        console.log("user", user);
        console.log("other,", jwtz);
      },
    }),
  ],
  callbacks: {
    session: ({ session, token }) => {
      return {
        ...session,
        user: {
          ...token,
        },
      };
    },

    jwt: ({ token, user }) => {
      if (user) {
        return {
          ...token,
          ...user,
        };
      }
      return token;
    },
  },
};
