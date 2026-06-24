const features = [
  {
    title: "Reforma integral completa",
    desc: "De la concepción a la entrega: redistribución, instalaciones, revestimientos, cocinas y baños.",
  },
  {
    title: "Diseño de interiores profesional",
    desc: "Arquitectos y diseñadores propios. Planos y renders 3D para visualizar tu espacio antes de ejecutar.",
  },
  {
    title: "Presupuesto cerrado",
    desc: "Precio fijo desde el inicio. Sin sorpresas ni costes ocultos. Cualquier cambio, documentado y aprobado.",
  },
  {
    title: "Plazos garantizados",
    desc: "Cumplimos los tiempos del contrato. Tu reforma estará lista cuando te lo prometemos: 2–4 meses.",
  },
  {
    title: "Servicio llave en mano",
    desc: "Gestionamos permisos, coordinamos todos los gremios y realizamos la limpieza final.",
  },
  {
    title: "Garantía de 2 años",
    desc: "Todos los trabajos incluyen garantía por escrito. Compromiso real con la calidad y tu tranquilidad.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-[#FFFFFF] py-24">
      <div className="px-4 md:px-8">
        {/* Header */}
        <div className="mb-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2
              className="text-[clamp(32px,3vw,44px)] font-bold leading-[1.1] tracking-[-0.02em] text-[#0D0D14]"
              style={{ textWrap: "balance" } as React.CSSProperties}
            >
              ¿Por qué elegir
              <br />
              Art-Quitrabe?
            </h2>
            <p className="text-[#4A4A52] text-[15px] leading-relaxed max-w-[380px]">
              Especialistas en arquitectura de interiores: diseño profesional y
              calidad constructiva en un mismo equipo.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map(({ title, desc }) => (
            <div
              key={title}
              className="p-6 border border-[#0D0D14]/10 rounded-sm hover:border-[#184690]/40 transition-colors"
            >
              <div className="w-6 h-px bg-[#184690] mb-5" />
              <h3 className="text-[16px] font-semibold text-[#0D0D14] mb-2.5">
                {title}
              </h3>
              <p className="text-[14px] text-[#4A4A52] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
