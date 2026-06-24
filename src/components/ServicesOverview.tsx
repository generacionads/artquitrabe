import Image from "next/image";
import Link from "next/link";

const services = [
  {
    tag: "Para propietarios",
    title: "Reforma de Vivienda",
    desc: "Apartamentos, pisos y chalets con diseño personalizado y plazos garantizados.",
    href: "#viviendas",
    image: "/images/project1.jpg",
    imageAlt: "Reforma de viviendas en Madrid",
  },
  {
    tag: "Para negocios",
    title: "Reforma de Locales",
    desc: "Restaurantes, oficinas y tiendas. Mínimo tiempo de cierre del negocio.",
    href: "#locales",
    image: "/images/project2.jpg",
    imageAlt: "Reforma de locales comerciales en Madrid",
  },
];

export default function ServicesOverview() {
  return (
    <section className="grid md:grid-cols-2">
      {services.map(({ tag, title, desc, href, image, imageAlt }) => (
        <div key={title} className="relative h-[480px] overflow-hidden group">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D14]/92 via-transparent to-[#0D0D14]/30" />
          <div className="absolute bottom-0 left-0 p-10">
            <span className="text-[10px] tracking-[0.16em] uppercase text-[#184690] font-semibold mb-3 block">
              {tag}
            </span>
            <h3 className="text-[28px] font-bold text-[#FFFFFF] mb-2 leading-tight">
              {title}
            </h3>
            <p className="text-[#FFFFFF]/60 text-[14px] mb-5 leading-relaxed">
              {desc}
            </p>
            <Link
              href={href}
              className="inline-flex items-center gap-1.5 text-[#184690] text-[13px] font-semibold no-underline hover:gap-3 transition-all duration-200"
            >
              Descubrir servicio <span>→</span>
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}
