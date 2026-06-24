const zones = [
  "Chamberí",
  "Salamanca",
  "Chamartín",
  "Retiro",
  "Arganzuela",
  "Moncloa-Aravaca",
  "Centro",
  "Tetuán",
  "Pozuelo",
  "Boadilla del Monte",
  "Majadahonda",
  "Las Rozas",
  "Alcobendas",
  "San Sebastián de los Reyes",
  "Tres Cantos",
];

export default function Coverage() {
  return (
    <section className="bg-[#0D0D14] py-24">
      <div className="px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <h2 className="text-[clamp(28px,2.5vw,40px)] font-bold leading-[1.1] tracking-[-0.02em] text-[#FFFFFF]">
            Toda la Comunidad de Madrid
          </h2>
          <p className="text-white/55 text-[14px] max-w-[280px] leading-relaxed">
            ¿No ves tu zona? Contáctanos, también trabajamos en otras
            localidades.
          </p>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {zones.map((zone) => (
            <span
              key={zone}
              className="px-4 py-2 border border-white/10 text-[#FFFFFF]/65 text-[13px] font-medium rounded-sm hover:border-[#184690]/50 hover:text-[#FFFFFF] transition-colors cursor-default"
            >
              {zone}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
