"use client";
import { Aleo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import StoreProvider from "./StoreProvider";

const aleo = Aleo({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={aleo.className}>
        <StoreProvider>
          <Navbar />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
