const steps = [
  {
    n: "01",
    title: "Visita y análisis",
    desc: "Visitamos tu espacio, escuchamos tus necesidades y elaboramos una propuesta personalizada sin compromiso.",
  },
  {
    n: "02",
    title: "Diseño y presupuesto",
    desc: "Creamos el diseño con planos y renders 3D. Te presentamos un presupuesto cerrado y detallado.",
  },
  {
    n: "03",
    title: "Ejecución de obra",
    desc: "Coordinamos todos los gremios y supervisamos cada detalle. Visitas concertadas para seguimiento.",
  },
  {
    n: "04",
    title: "Entrega llave en mano",
    desc: "Limpieza final y entrega lista para estrenar. Garantía por escrito y servicio post-obra incluidos.",
  },
];

export default function Process() {
  return (
    <section id="proceso" className="bg-[#FFFFFF] py-24">
      <div className="px-4 md:px-8">

        <h2
          className="text-[clamp(22px,2.8vw,40px)] font-bold leading-[1.1] tracking-[-0.02em] text-[#0D0D14] text-center mb-16 whitespace-nowrap"
        >
          Nuestro proceso de trabajo
        </h2>

        {/* Timeline */}
        <div className="relative max-w-[560px] mx-auto">
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-[#0D0D14]/10" />

          <div className="space-y-12">
            {steps.map(({ n, title, desc }) => (
              <div key={n} className="relative flex gap-8">
                <div className="relative flex-shrink-0 w-10 flex justify-center">
                  <div className="w-[9px] h-[9px] rounded-full bg-[#184690] ring-4 ring-white mt-1.5" />
                </div>
                <div className="pb-2">
                  <span className="text-[11px] font-bold text-[#184690] tracking-[0.14em] block mb-2">
                    {n}
                  </span>
                  <h3 className="text-[clamp(24px,2.5vw,36px)] font-bold text-[#0D0D14] mb-2 leading-snug">
                    {title}
                  </h3>
                  <p className="text-[14px] text-[#4A4A52] leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
