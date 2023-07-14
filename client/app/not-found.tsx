"use client";
import Link from "next/link";
import Script from "next/script";
import { usePathname } from "next/navigation";

const NotFound = () => {
  const pathName = usePathname();

  return (
    <>
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>Oops!</h1>
            <h2>
              404 - The Requested Page {pathName} {`can't`} be found
            </h2>
          </div>
          <Link href={`/`}>Go To Homepage</Link>
        </div>
        <Script
          src="https://kit.fontawesome.com/4ef8c63dd7.js"
          crossOrigin="anonymous"
        ></Script>
      </div>
    </>
  );
};

export default NotFound;
