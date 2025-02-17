import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import Header from "@/components/layout-components/header-component/Header-component";
import Footer from "../components/layout-components/footer/Footer";
import "./globals.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-source-sans",
});

export const metadata: Metadata = {
  title: "Unimed",
  description: "Seu site de compras de produtos de saúde",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={sourceSans.variable}>
        <div className="app-container">
          <Header />
          <main className="main-content">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}