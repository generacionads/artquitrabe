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
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-[95] bg-black/60 backdrop-blur-sm" />

      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Aviso de cookies"
        className="fixed inset-0 z-[96] flex items-center justify-center px-4"
      >
        <div className="bg-[#0D0D14] border border-white/10 rounded-sm w-full max-w-[480px] p-8 shadow-2xl">
          {/* Icon */}
          <div className="w-10 h-10 rounded-full bg-[#184690]/15 border border-[#184690]/25 flex items-center justify-center mb-5">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#184690" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          </div>

          <h2 className="text-[18px] font-bold text-[#FFFFFF] mb-2">
            Usamos cookies
          </h2>
          <p className="text-[13px] text-white/55 leading-relaxed mb-6">
            Usamos cookies propias y de terceros para analizar el tráfico y mostrarte publicidad relevante. Puedes aceptarlas todas o rechazarlas.{" "}
            <a href="/privacidad" className="text-white/75 underline hover:text-white transition-colors">
              Política de cookies
            </a>
          </p>

          <div className="flex flex-col sm:flex-row gap-2">
            <button
              onClick={reject}
              className="flex-1 py-3 text-[13px] font-semibold text-white/60 border border-white/12 rounded-sm hover:border-white/30 hover:text-white transition-colors cursor-pointer"
            >
              Rechazar
            </button>
            <button
              onClick={accept}
              className="flex-1 py-3 text-[13px] font-semibold text-white bg-[#184690] rounded-sm hover:bg-[#0F2D5E] transition-colors cursor-pointer"
            >
              Aceptar todas
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
