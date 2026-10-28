import type { Metadata } from "next";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import { LocaleProvider } from "@/lib/i18n/locale-context";
import "./globals.css";

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const body = Figtree({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "MarcyArt — Marcello Basani | EdgeOfColor",
  description:
    "Promotional site for Marcello Basani (MarcyArt / EdgeOfColor). Schema-free, irreverent, oneiric paintings. Ships internationally.",
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
