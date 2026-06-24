"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const projects = [
  { src: "/images/Casa en las Rozas.jpg", label: "Casa en Las Rozas" },
  { src: "/images/Vivienda en Valdemorillo.jpg", label: "Vivienda en Valdemorillo" },
  { src: "/images/Piso en Chamberí.jpg", label: "Piso en Chamberí" },
];

export default function ProjectsCarousel() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemProgress, setItemProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrollable = el.offsetHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const scrolled = Math.max(0, Math.min(scrollable, -rect.top));
      const raw = scrolled / scrollable;
      const n = projects.length;
      const scaled = raw * n;
      const idx = Math.min(Math.floor(scaled), n - 1);
      const local = scaled - idx;
      setActiveIndex(idx);
      setItemProgress(local);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={sectionRef} style={{ height: `${projects.length * 100}vh` }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        {projects.map(({ src, label }, i) => {
          const isActive = i === activeIndex;
          const isPrev = i === activeIndex - 1;

          let opacity = 0;
          let scale = 1.04;

          if (isActive) {
            opacity = 1;
            scale = 1 + itemProgress * 0.04;
          } else if (isPrev) {
            opacity = Math.max(0, 1 - itemProgress * 4);
            scale = 1.04;
          }

          return (
            <div
              key={src}
              className="absolute inset-0"
              style={{
                opacity,
                transition: isActive || isPrev ? "opacity 0.6s ease" : "none",
                pointerEvents: isActive ? "auto" : "none",
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  transform: `scale(${scale})`,
                  transition: "transform 0.1s linear",
                  willChange: "transform",
                }}
              >
                <Image
                  src={src}
                  alt={label}
                  fill
                  className="object-cover"
                  priority={i === 0}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D14]/70 via-transparent to-transparent" />

              {/* Label */}
              <div className="absolute bottom-10 left-4 md:left-8">
                <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-white/50 mb-2">
                  {String(i + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                </p>
                <h2 className="text-[clamp(24px,3vw,42px)] font-bold text-white leading-tight">
                  {label}
                </h2>
              </div>

              {/* Dots */}
              <div className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 flex flex-col gap-2">
                {projects.map((_, di) => (
                  <span
                    key={di}
                    className="block rounded-full transition-all duration-300"
                    style={{
                      width: 4,
                      height: di === activeIndex ? 20 : 4,
                      backgroundColor:
                        di === activeIndex
                          ? "#FFFFFF"
                          : "rgba(255,255,255,0.3)",
                    }}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
