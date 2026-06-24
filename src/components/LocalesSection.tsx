import Image from "next/image";
import Link from "next/link";

const includes = [
  {
    title: "Redistribución de espacios",
    desc: "Tabiquería, ampliaciones, eliminación de barreras",
  },
  {
    title: "Instalaciones completas",
    desc: "Electricidad, fontanería, calefacción, climatización",
  },
  {
    title: "Revestimientos",
    desc: "Suelos (porcelánico, vinilo), azulejos, materiales especiales",
  },
  {
    title: "Carpintería y compartimentación",
    desc: "Puertas, mamparas, ventanas, aislamiento acústico",
  },
  {
    title: "Pintura y acabados",
    desc: "Paredes, pintado profesional, elementos decorativos",
  },
  {
    title: "Gestión de licencias",
    desc: "Proyecto técnico, licencia de obras, licencia de actividad",
  },
];

const highlights = [
  {
    title: "Turnos nocturnos",
    desc: "Planificamos la obra en horarios especiales para que no cierres tu negocio ni un día.",
  },
  {
    title: "Licencia de actividad",
    desc: "Redactamos el proyecto técnico y tramitamos la apertura ante el Ayuntamiento.",
  },
  {
    title: "Normativa de accesibilidad",
    desc: "Diseñamos eliminando barreras desde el inicio: rampas, anchos PMR, aseos adaptados.",
  },
];

export default function LocalesSection() {
  return (
    <section id="locales" className="bg-[#FFFFFF]">
      {/* Hero image banner */}
      <div className="relative h-[440px] overflow-hidden">
        <Image
          src="/images/locales-bg.jpg"
          alt="Reforma de locales comerciales en Madrid"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D14]/92 via-[#0D0D14]/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0">
          <div className="px-4 md:px-8 pb-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-5 h-px bg-[#184690] block" />
              <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#184690]">
                Para negocios
              </span>
            </div>
            <h2
              className="text-[clamp(32px,3vw,48px)] font-bold leading-[1.1] tracking-[-0.02em] text-[#FFFFFF] mb-4"
              style={{ textWrap: "balance" } as React.CSSProperties}
            >
              Reforma de Locales
              <br />
              Comerciales
            </h2>
            <p className="text-[#FFFFFF]/65 text-[16px] max-w-[460px] mb-7 leading-relaxed">
              Restaurantes, oficinas, tiendas y espacios de trabajo. Mínimo
              tiempo de cierre, máximo impacto en el resultado.
            </p>
            <Link
              href="#contacto"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#184690] text-[#FFFFFF] text-[13px] font-semibold rounded-sm hover:bg-[#0F2D5E] transition-colors no-underline outline outline-1 outline-white/15"
            >
              Solicitar presupuesto
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 md:px-8 py-16">
        {/* Includes */}
        <p className="text-[13px] font-medium text-[#4A4A52] mb-7">
          ¿Qué incluye la reforma?
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-14">
          {includes.map(({ title, desc }) => (
            <div
              key={title}
              className="p-5 border border-[#0D0D14]/10 rounded-sm bg-[#FFFFFF] hover:border-[#184690]/40 transition-colors"
            >
              <h4 className="text-[14px] font-semibold text-[#0D0D14] mb-1.5 leading-snug">
                {title}
              </h4>
              <p className="text-[13px] text-[#4A4A52]">{desc}</p>
            </div>
          ))}
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {highlights.map(({ title, desc }) => (
            <div key={title} className="p-6 bg-[#0D0D14] rounded-sm">
              <div className="w-5 h-px bg-[#184690] mb-4" />
              <h4 className="text-[15px] font-semibold text-[#FFFFFF] mb-2">
                {title}
              </h4>
              <p className="text-[13px] text-white/55 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
