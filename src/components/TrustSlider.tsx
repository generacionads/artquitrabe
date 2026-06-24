"use client";

import { useEffect, useRef, useState } from "react";

const items = [
  "Precio fijo garantizado",
  "Plazos en contrato",
  "Primera visita sin coste",
];

export default function TrustSlider() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrollable = el.offsetHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const scrolled = Math.max(0, Math.min(scrollable, -rect.top));
      setProgress(scrolled / scrollable);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const itemStyle = (i: number): React.CSSProperties => {
    const n = items.length;
    const start = i / n;
    const end = (i + 1) / n;
    const t = Math.max(0, Math.min(1, (progress - start) / (end - start)));

    let opacity: number;
    let y: number;

    if (t < 0.2) {
      const p = t / 0.2;
      opacity = p;
      y = (1 - p) * 56;
    } else if (t < 0.8) {
      opacity = 1;
      y = 0;
    } else {
      const p = (t - 0.8) / 0.2;
      opacity = 1 - p;
      y = -p * 56;
    }

    return {
      opacity,
      transform: `translateY(${y}px)`,
      willChange: "transform, opacity",
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    };
  };

  return (
    <div ref={sectionRef} style={{ height: `${items.length * 100}vh` }}>
      <div className="sticky top-0 h-screen bg-[#FFFFFF] flex items-center justify-center overflow-hidden">
        <div className="relative w-full" style={{ height: 120 }}>
          {items.map((item, i) => (
            <div key={item} style={itemStyle(i)}>
              <h2 className="text-[clamp(36px,6vw,96px)] font-bold text-[#0D0D14] text-center px-6 leading-tight tracking-[-0.02em]">
                {item}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
