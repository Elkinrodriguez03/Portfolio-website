import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Elkin Rodriguez",
  description: "Personal portfolio of Elkin Rodriguez, Software Developer.",
  icons: {
    icon: "/images/artificial-intelligence.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="dark:bg-stone-900">
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

