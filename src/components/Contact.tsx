"use client";

export default function Contact() {
  return (
    <section id="contacto" className="bg-[#0D0D14] py-24">
      <div className="px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left: Contact info */}
          <div>
            <h2 className="text-[clamp(32px,3.5vw,52px)] font-bold leading-[1.1] tracking-[-0.02em] text-[#FFFFFF] mb-4">
              ¿Hablamos?
            </h2>
            <p className="text-white/55 text-[15px] leading-relaxed mb-12 max-w-[360px]">
              Cuéntanos tu proyecto y preparamos un presupuesto personalizado
              sin coste. Primera visita gratuita.
            </p>

            <div className="space-y-7">
              <div>
                <div className="text-[10px] font-semibold tracking-[0.15em] uppercase text-white/35 mb-1.5">
                  Teléfono
                </div>
                <a
                  href="tel:+34684794705"
                  className="text-[#FFFFFF] text-[18px] font-semibold no-underline hover:text-[#184690] transition-colors"
                >
                  +34 684 794 705
                </a>
              </div>
              <div>
                <div className="text-[10px] font-semibold tracking-[0.15em] uppercase text-white/35 mb-1.5">
                  Email
                </div>
                <a
                  href="mailto:hola@artquitrabe.com"
                  className="text-[#FFFFFF] text-[16px] no-underline hover:text-[#184690] transition-colors"
                >
                  hola@artquitrabe.com
                </a>
              </div>
              <div>
                <div className="text-[10px] font-semibold tracking-[0.15em] uppercase text-white/35 mb-1.5">
                  Oficina
                </div>
                <address className="text-[#FFFFFF]/75 text-[15px] not-italic leading-relaxed">
                  C/ Playa de Marbella, 2
                  <br />
                  Boadilla del Monte, Madrid
                </address>
              </div>
            </div>

            <a
              href="https://wa.me/34684794705"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 mt-10 px-6 py-3 border border-white/15 text-[#FFFFFF] text-[13px] font-semibold rounded-sm hover:border-white/40 transition-colors no-underline"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-[#184690]"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp directo
            </a>
          </div>

          {/* Right: Form */}
          <form
            className="space-y-4"
            action="https://formsubmit.co/mzornoza@generacionads.com"
            method="POST"
          >
            <input type="hidden" name="_cc" value="hola@artquitrabe.com,porgaz@generacionads.com,ivilloria@generacionads.com" />
            <input type="hidden" name="_subject" value="Nueva solicitud de presupuesto - Art-Quitrabe" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value="https://reformaintegral.artquitrabe.com/gracias" />
            <div>
              <label className="block text-[11px] font-semibold tracking-[0.12em] uppercase text-white/35 mb-1.5">
                Nombre *
              </label>
              <input
                type="text"
                name="nombre"
                required
                className="w-full bg-white/5 border border-white/10 text-[#FFFFFF] placeholder-white/25 px-4 py-3 text-[14px] rounded-sm focus:outline-none focus:border-[#184690]/60 transition-colors"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label className="block text-[11px] font-semibold tracking-[0.12em] uppercase text-white/35 mb-1.5">
                Email *
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full bg-white/5 border border-white/10 text-[#FFFFFF] placeholder-white/25 px-4 py-3 text-[14px] rounded-sm focus:outline-none focus:border-[#184690]/60 transition-colors"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label className="block text-[11px] font-semibold tracking-[0.12em] uppercase text-white/35 mb-1.5">
                Teléfono *
              </label>
              <input
                type="tel"
                name="telefono"
                required
                className="w-full bg-white/5 border border-white/10 text-[#FFFFFF] placeholder-white/25 px-4 py-3 text-[14px] rounded-sm focus:outline-none focus:border-[#184690]/60 transition-colors"
                placeholder="+34 600 000 000"
              />
            </div>

            <div>
              <label className="block text-[11px] font-semibold tracking-[0.12em] uppercase text-white/35 mb-1.5">
                Mensaje
              </label>
              <textarea
                rows={4}
                name="mensaje"
                className="w-full bg-white/5 border border-white/10 text-[#FFFFFF] placeholder-white/25 px-4 py-3 text-[14px] rounded-sm focus:outline-none focus:border-[#184690]/60 transition-colors resize-none"
                placeholder="Cuéntanos lo que tienes en mente — sin tecnicismos"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-[#184690] text-[#FFFFFF] font-semibold text-[14px] rounded-sm hover:bg-[#0F2D5E] transition-colors tracking-wide cursor-pointer"
            >
              Solicitar presupuesto gratuito →
            </button>

            <p className="text-center text-[12px] text-white/35">
              Sin compromiso · Respondemos en menos de 24h
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
