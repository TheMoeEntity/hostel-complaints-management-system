import "./globals.css";
import { Poppins } from "next/font/google";
import { Layout } from "@/components/layout";

const inter = Poppins({ subsets: ["latin"], weight: ["400", "500"] });

export const metadata = {
  title: "Crawford University Hostel Management",
  description: "A hostel management service fro complaints",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
