// import { prisma } from "@/lib/prisma";
// import { compare } from "bcryptjs";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

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
        const porter = credentials?.matric === "" ? false : true;

    
        const url: string =
          porter === true
            ? "https://hostelcomplaintsmanagementsystem.onrender.com/api/auth/porters/login/"
            : "https://hostelcomplaintsmanagementsystem.onrender.com/api/auth/students/login/";
        const userDetails = JSON.stringify({
          matric_number:credentials?.matric,
          password:credentials?.password,
        });
        const porterDetails = JSON.stringify({
          email:credentials?.email,
          matric_number:'null',
          password:credentials?.password,
        });
    
  
        try {
          const user = await fetch(url, {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: porter === true ? porterDetails : userDetails,
          });

          const data = await user.json();
          console.log(data);
          const {
            access,
            refresh,
            id,
            email,
            matric_number,
            hostel,
            first_name,
            last_name,
            is_student,
            is_porter,
            is_superuser,
            is_staff,
          } = data;
          if (user.status === 201 || user.status === 200) {
            return {
                access,
                id,
                email,
                matric_number,
                hostel,
                first_name,
                last_name,
                is_student,
                is_porter,
                is_superuser,
                is_staff,
                refresh
            };
          } else {
            return data.detail;
          }
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    session: ({ session, token }) => {
      return {
        ...session,
        user: {
          ...token
        },
      };
    },
    
    jwt: ({ token, user }) => {
      if (user) {
        return {
          ...token,
            ...user
        };
      }
      return token;
    },
  },
};
