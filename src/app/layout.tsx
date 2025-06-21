import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Faseeh Ahmad || Portfolio",
  keywords: [
    "FIMUN",
    "fimun",
    "Fazaia Inter College",
    "Fazaia Inter College Fimun",
    "fimun website",
    "fimun 2025",
    "FIMUN 25",
    "Model United Nations",
    "Faseeh Ahmad",
  ],
  description: "This is the official Website of FIMUN 2025, All the information of Fimen is Given Website",
  authors: [
    {
      name: "Faseeh Ahmad",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
