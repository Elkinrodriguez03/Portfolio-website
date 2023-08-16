"use client"
import React from "react";
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import Head from "./head";
import { ThemeProvider } from 'next-themes'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head />
      <body className="dark:bg-stone-900">
        <ThemeProvider enableSystem={true} attribute='class'>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
