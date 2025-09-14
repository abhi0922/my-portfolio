import type { Metadata } from "next";
import { VT323 } from "next/font/google"; // Retro-style font
import "./globals.css";
import Navbar from "./components/Navbar";

// Configure the font
const vt323 = VT323({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Abhilasha Arora | Portfolio",
  description: "My personal web developer portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${vt323.className} grid-background`}>
        <Navbar/>
        <div className="content-container">{children}</div>
      </body>
    </html>
  );
}