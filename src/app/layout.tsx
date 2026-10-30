import type { Metadata } from "next";
import localFont from "next/font/local";
import { LocaleProvider } from "@/lib/i18n/locale-context";
import "./globals.css";

const display = localFont({
  src: "./fonts/BricolageGrotesque-latin.woff2",
  variable: "--font-display",
  weight: "500 800",
  display: "swap",
});

const body = localFont({
  src: "./fonts/Figtree-latin.woff2",
  variable: "--font-body",
  weight: "400 700",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kromo Atlas — EdgeOfColor",
  description:
    "Promotional site for Marcello Basani (Kromo Atlas / EdgeOfColor). Schema-free, irreverent, oneiric paintings. Ships internationally.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} antialiased`}>
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
