import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0D0D14] py-8">
      <div className="px-4 md:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-[12px] text-[#4A4A52]">
          © 2025 Art-Quitrabe. Todos los derechos reservados.
        </p>
        <a
          href="https://artquitrabe.com/politica-de-privacidad/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[12px] text-[#4A4A52] hover:text-[#FFFFFF] transition-colors no-underline"
        >
          Política de privacidad
        </a>
      </div>
    </footer>
  );
}
