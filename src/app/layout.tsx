import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const surgena = localFont({
  src: "../../public/fonts/surgenapersonaluseonlysembd-q2qwd.ttf",
  variable: "--font-surgena",
  display: "swap",
  weight: "600",
});

export const metadata: Metadata = {
  title: "Reforma Integral de Vivienda en Madrid | Art-Quitrabe",
  description:
    "Especialistas en reforma integral de vivienda en Madrid. Arquitectos de interiores y constructores propios. Precio cerrado, plazos garantizados.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="antialiased">
      <body className={`${jakarta.className} ${surgena.variable}`}>{children}</body>
    </html>
  );
}
