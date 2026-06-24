"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/a-contemporary-white-kitchen-with-extended-drawers-2024-10-18-07-55-40-utc.webp"
          alt="Reforma de vivienda en Madrid"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D14]/45 via-[#0D0D14]/65 to-[#0D0D14]/88" />
      </div>

      <div className="relative z-10 px-4 md:px-8 pt-28 pb-16 w-full">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* Left: copy */}
          <div>
            <h1
              className="text-[clamp(40px,5.5vw,80px)] font-extrabold leading-[0.97] tracking-[-0.02em] text-[#FFFFFF] mb-6"
              style={{ textWrap: "balance" } as React.CSSProperties}
            >
              Transformamos tu hogar
              con diseño, calidad
              y garantía
            </h1>
            <p className="text-[17px] text-[#FFFFFF]/60 leading-relaxed max-w-[460px]">
              Arquitectos de interiores y constructores propios en toda la
              Comunidad de Madrid. Sin intermediarios, sin sorpresas de precio.
            </p>
          </div>

          {/* Right: form */}
          <div className="bg-white/8 backdrop-blur-sm border border-white/10 rounded-sm p-8">
            <p className="text-[13px] font-semibold text-[#FFFFFF] mb-1">
              Visita gratuita sin compromiso
            </p>
            <p className="text-[13px] text-white/45 mb-6">
              Te llamamos en menos de 24h
            </p>

            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                required
                placeholder="Tu nombre"
                className="w-full bg-white/6 border border-white/12 text-[#FFFFFF] placeholder-white/30 px-4 py-3 text-[14px] rounded-sm focus:outline-none focus:border-[#184690]/70 transition-colors"
              />
              <input
                type="tel"
                required
                placeholder="Teléfono"
                className="w-full bg-white/6 border border-white/12 text-[#FFFFFF] placeholder-white/30 px-4 py-3 text-[14px] rounded-sm focus:outline-none focus:border-[#184690]/70 transition-colors"
              />
              <input
                type="email"
                placeholder="Email (opcional)"
                className="w-full bg-white/6 border border-white/12 text-[#FFFFFF] placeholder-white/30 px-4 py-3 text-[14px] rounded-sm focus:outline-none focus:border-[#184690]/70 transition-colors"
              />
              <textarea
                rows={3}
                placeholder="Cuéntanos tu proyecto"
                className="w-full bg-white/6 border border-white/12 text-[#FFFFFF] placeholder-white/30 px-4 py-3 text-[14px] rounded-sm focus:outline-none focus:border-[#184690]/70 transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full py-3.5 bg-[#184690] text-[#FFFFFF] font-semibold text-[14px] rounded-sm hover:bg-[#0F2D5E] transition-colors cursor-pointer"
              >
                Solicitar visita gratuita →
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
