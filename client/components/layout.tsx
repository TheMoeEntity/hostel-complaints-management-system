"use client";
import Sidebar from "./sidebar";
import Script from "next/script";
import { usePathname } from "next/navigation";
export const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return (
    <div className="container">
      {pathname == "/login" || pathname == "/register" ? <></> : <Sidebar />}
      {children}
      <>
        <Script
          src="https://kit.fontawesome.com/4ef8c63dd7.js"
          crossOrigin="anonymous"
        ></Script>
      </>
    </div>
  );
};
