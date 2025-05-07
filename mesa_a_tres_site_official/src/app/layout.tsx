import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfairDisplay = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair-display", weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Mesa a Três - Eventos e Celebrações",
  description: "Criamos decorações e experiências únicas para cada celebração. Foco em transformar momentos especiais através de decoração personalizada, papelaria exclusiva e curadoria de materiais.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfairDisplay.variable}`}>
      <body className="font-sans flex flex-col min-h-screen bg-[#F5F5DC] text-mesa-text">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

