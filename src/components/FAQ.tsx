"use client";

import { useState } from "react";

const faqs = [
  {
    q: "¿Cuánto cuesta una reforma integral de vivienda en Madrid?",
    a: "El coste varía según el tamaño, calidad de materiales y complejidad. Como referencia, una reforma integral puede oscilar entre 600€ y 1.200€ por metro cuadrado. Te ofrecemos un presupuesto personalizado gratuito tras la visita inicial.",
  },
  {
    q: "¿Cuánto tiempo dura una reforma de vivienda?",
    a: "Una reforma integral de 80-100 m² suele durar entre 2 y 4 meses. El plazo exacto se establece en el contrato según las características del proyecto. Nos comprometemos a cumplir los plazos acordados.",
  },
  {
    q: "¿Puedo vivir en la vivienda durante la reforma?",
    a: "Generalmente no es recomendable durante una reforma integral. Sin embargo, en reformas parciales podemos planificar la obra por fases para minimizar molestias y permitirte seguir en el inmueble.",
  },
  {
    q: "¿Necesito licencia para reformar mi vivienda?",
    a: "Depende del alcance. Las obras menores requieren comunicación previa; las mayores, licencia de obras. Nos encargamos de toda la gestión de permisos con el Ayuntamiento de Madrid, incluido en nuestro servicio.",
  },
  {
    q: "¿Qué diferencia a Art-Quitrabe de otras empresas?",
    a: "Somos especialistas en arquitectura de interiores, no solo ejecutamos obras. Combinamos diseño propio con calidad constructiva. Presupuesto cerrado, plazos garantizados y trato personalizado.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-[#FFFFFF] py-24">
      <div className="px-4 md:px-8">
        <h2
          className="text-[clamp(32px,3vw,44px)] font-bold leading-[1.1] tracking-[-0.02em] text-[#0D0D14] mb-14"
          style={{ textWrap: "balance" } as React.CSSProperties}
        >
          Todo lo que
          <br />
          necesitas saber
        </h2>

        <div className="divide-y divide-[#0D0D14]/10">
          {faqs.map(({ q, a }, i) => (
            <div key={q}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
                className="w-full flex items-center justify-between py-5 gap-8 text-left cursor-pointer"
              >
                <span className="text-[16px] font-semibold text-[#0D0D14] leading-snug">
                  {q}
                </span>
                <span
                  className={`text-[22px] font-light text-[#184690] flex-shrink-0 transition-transform duration-200 ${
                    openIndex === i ? "rotate-45" : ""
                  }`}
                  aria-hidden
                >
                  +
                </span>
              </button>
              {openIndex === i && (
                <p className="pb-5 text-[15px] text-[#4A4A52] leading-relaxed max-w-[640px]">
                  {a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
