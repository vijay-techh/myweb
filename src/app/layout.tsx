import "./globals.css";
import type { ReactNode } from "react";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "VRM Group",
  description: "Media. Data. Intelligence."
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {children}
        <Footer />
      </body>
    </html>
  );
}
