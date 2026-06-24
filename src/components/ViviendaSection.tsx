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
    title: "Reforma de cocinas",
    desc: "Diseño, mobiliario, electrodomésticos, encimeras",
  },
  {
    title: "Reforma de baños",
    desc: "Sanitarios, duchas, bañeras, muebles, alicatados",
  },
  {
    title: "Revestimientos",
    desc: "Suelos (parquet, porcelánico, vinilo), azulejos",
  },
  {
    title: "Carpintería",
    desc: "Puertas interiores, armarios empotrados, ventanas",
  },
  {
    title: "Pintura y acabados",
    desc: "Preparación de paredes, pintado profesional, molduras",
  },
  {
    title: "Gestión de licencias",
    desc: "Tramitación de permisos con el ayuntamiento",
  },
];

export default function ViviendaSection() {
  return (
    <section id="viviendas" className="bg-[#0D0D14] py-24">
      <div className="px-4 md:px-8">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <div>
            <h2
              className="text-[clamp(32px,3vw,48px)] font-bold leading-[1.1] tracking-[-0.02em] text-[#FFFFFF]"
              style={{ textWrap: "balance" } as React.CSSProperties}
            >
              Reforma Integral
              <br />
              de Vivienda
            </h2>
          </div>
          <div className="flex flex-col justify-end gap-5">
            <p className="text-[16px] text-white/55 leading-relaxed">
              Desde la redistribución de espacios hasta los acabados finales,
              nos encargamos de todo. Precio cerrado, plazos garantizados y
              diseño a medida.
            </p>
            <a
              href="#contacto"
              className="self-start inline-flex items-center gap-2 px-7 py-3.5 bg-[#184690] text-[#FFFFFF] text-[13px] font-semibold rounded-sm hover:bg-[#0F2D5E] transition-colors no-underline"
            >
              Solicitar presupuesto
            </a>
          </div>
        </div>

        {/* Includes */}
        <div>
          <p className="text-[13px] font-medium text-white/40 mb-7">
            ¿Qué incluye nuestra reforma?
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {includes.map(({ title, desc }) => (
              <div
                key={title}
                className="p-5 border border-white/8 rounded-sm hover:border-[#184690]/40 transition-colors"
              >
                <h4 className="text-[14px] font-semibold text-[#FFFFFF] mb-1.5 leading-snug">
                  {title}
                </h4>
                <p className="text-[13px] text-white/55">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
