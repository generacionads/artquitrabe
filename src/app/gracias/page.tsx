import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gracias por contactar | Art-Quitrabe",
  robots: { index: false },
};

export default function GraciasPage() {
  return (
    <main className="min-h-screen bg-[#0D0D14] flex items-center justify-center px-4">
      <div className="text-center max-w-[480px]">
        <div className="w-14 h-14 rounded-full bg-[#184690]/15 border border-[#184690]/30 flex items-center justify-center mx-auto mb-8">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#184690" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        <h1 className="text-[clamp(28px,4vw,42px)] font-bold text-[#FFFFFF] leading-[1.1] tracking-[-0.02em] mb-4">
          ¡Gracias por contactar!
        </h1>

        <p className="text-[16px] text-white/55 leading-relaxed mb-10">
          Hemos recibido tu solicitud. Nos ponemos en contacto contigo en menos de 24 horas para hablar de tu proyecto.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#184690] text-[#FFFFFF] text-[14px] font-semibold rounded-sm hover:bg-[#0F2D5E] transition-colors no-underline"
        >
          ← Volver al inicio
        </Link>
      </div>
    </main>
  );
}
