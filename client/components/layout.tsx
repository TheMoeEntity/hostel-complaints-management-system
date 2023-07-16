"use client";
import Sidebar from "./sidebar";
import Script from "next/script";
import { usePathname } from "next/navigation";
import { SnackbarProvider } from "notistack";
import { NextAuthProvider } from "@/app/providers";
export const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const validRoutes: string[] = [
    "/localhost:3000",
    "/hostelcomplaints.netlify.app",
    "/crawfordcomplaints.vercel.app",
    "/account",
    "/dashboard",
    "/complaints",
    "/details" + pathname.slice(8, pathname.length),
    "/lodge-complaint",
    "/porters",
    "/students",
  ];
  console.log(pathname);
  const checkValid = (pathname: string): boolean => {
    return validRoutes.includes(pathname);
  };
  return (
    <SnackbarProvider
      classes={{ containerRoot: "z-alert" }}
      anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
    >
      <NextAuthProvider>
        <div className="container">
          {pathname == "/login" ||
          pathname == "/register" ||
          !checkValid(pathname) ? (
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
