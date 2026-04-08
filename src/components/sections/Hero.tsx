import { useEffect, useState } from "react";
import { NumberTicker } from "../ui/number-ticker";
import { ShimmerButton } from "../ui/shimmer-button";
import { Particles } from "../ui/particles";
import { url } from "../../lib/base";

export function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    requestAnimationFrame(() => setMounted(true));
  }, []);

  const fade = (delay: number) => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? "translateY(0)" : "translateY(16px)",
    transition: `all 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
  });

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e5e5_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]" />
      <Particles quantity={30} color="#22c55e" size={1.2} />

      <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-36">
        <div className="max-w-2xl">
          <div style={fade(0)}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-200 bg-white text-xs text-neutral-500 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
              Usinas solares, baterias e automação energética
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-neutral-900 leading-[1.1] tracking-tight mb-6" style={fade(100)}>
            Energia inteligente para{" "}
            <span className="text-green">operações</span> que não podem{" "}
            <span className="text-green">errar</span>
          </h1>

          <p className="text-base md:text-lg text-neutral-500 max-w-lg leading-relaxed mb-10" style={fade(200)}>
            17 anos projetando subestações e instalações industriais
            para Bunge, Kepler Weber e AGCO. Mais de 7 MWp em usinas
            entregues para a CRELUZ. Agora, baterias de lítio e automação
            para quem depende de energia 24h.
          </p>

          <div className="flex flex-wrap items-center gap-3" style={fade(300)}>
            <ShimmerButton href={url("/solucoes")}>
              Conheça nossas soluções
            </ShimmerButton>
            <a href={url("/simulador")} className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors">
              Calcule seu risco energético
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-neutral-200" style={fade(400)}>
          <div>
            <p className="text-xl md:text-2xl font-heading font-bold text-neutral-900">
              <NumberTicker value={17} suffix="+" delay={0.3} />
            </p>
            <p className="text-xs text-neutral-400 mt-1">Anos de engenharia elétrica</p>
          </div>
          <div>
            <p className="text-xl md:text-2xl font-heading font-bold text-neutral-900">
              <NumberTicker value={7} suffix="+ MWp" delay={0.5} />
            </p>
            <p className="text-xs text-neutral-400 mt-1">Em usinas construídas</p>
          </div>
          <div>
            <p className="text-xl md:text-2xl font-heading font-bold text-neutral-900">
              R$ <NumberTicker value={43} suffix="M+" delay={0.7} />
            </p>
            <p className="text-xs text-neutral-400 mt-1">Em projetos entregues</p>
          </div>
          <div>
            <p className="text-xl md:text-2xl font-heading font-bold text-neutral-900">
              <NumberTicker value={600} suffix="+" delay={0.9} />
            </p>
            <p className="text-xs text-neutral-400 mt-1">Sistemas instalados</p>
          </div>
        </div>
      </div>
    </section>
  );
}
