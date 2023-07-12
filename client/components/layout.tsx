"use client";
import Sidebar from "./sidebar";
import Script from "next/script";
import { usePathname } from "next/navigation";
import { SnackbarProvider } from "notistack";
import { NextAuthProvider } from "@/app/providers";
export const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return (
    <SnackbarProvider
      classes={{ containerRoot: "z-alert" }}
      anchorOrigin={{ horizontal: "left", vertical: "top" }}
    >
      <NextAuthProvider>
        <div className="container">
          {pathname == "/login" || pathname == "/register" ? (
            <></>
          ) : (
            <Sidebar />
          )}
          {children}
          <>
            <Script
              src="https://kit.fontawesome.com/4ef8c63dd7.js"
              crossOrigin="anonymous"
            ></Script>
          </>
        </div>
      </NextAuthProvider>
    </SnackbarProvider>
  );
};
