"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookie_consent")) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    window.gtag?.("consent", "update", {
      ad_storage: "granted",
      analytics_storage: "granted",
      ad_user_data: "granted",
      ad_personalization: "granted",
    });
    localStorage.setItem("cookie_consent", "granted");
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem("cookie_consent", "denied");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      className="fixed bottom-0 left-0 right-0 z-[90] bg-[#0D0D14] border-t border-white/8 px-4 md:px-8 py-4"
    >
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 max-w-screen-xl mx-auto">
        <p className="text-[13px] text-white/55 leading-relaxed flex-1">
          Usamos cookies propias y de terceros para analizar el tráfico y mostrarte publicidad relevante.
          Puedes aceptarlas o rechazarlas.{" "}
          <a href="/privacidad" className="text-white/75 underline hover:text-white transition-colors">
            Política de cookies
          </a>
        </p>
        <div className="flex gap-2 shrink-0">
          <button
            onClick={reject}
            className="px-5 py-2.5 text-[13px] font-semibold text-white/60 border border-white/12 rounded-sm hover:border-white/30 hover:text-white transition-colors cursor-pointer"
          >
            Rechazar
          </button>
          <button
            onClick={accept}
            className="px-5 py-2.5 text-[13px] font-semibold text-white bg-[#184690] rounded-sm hover:bg-[#0F2D5E] transition-colors cursor-pointer"
          >
            Aceptar todas
          </button>
        </div>
      </div>
    </div>
  );
}
