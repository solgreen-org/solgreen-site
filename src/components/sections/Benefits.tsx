import { BlurFade } from "../ui/blur-fade";
import { sectors } from "../../lib/data";

export function Benefits() {
  return (
    <section className="py-24 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6">
        <BlurFade>
          <div className="text-center mb-16">
            <p className="text-xs font-semibold text-green uppercase tracking-widest mb-3">
              Setores
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900">
              Soluções por segmento
            </h2>
            <p className="text-neutral-400 mt-4 max-w-xl mx-auto">
              Cada operação tem uma dor diferente. Entendemos a sua e dimensionamos a solução certa.
            </p>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {sectors.slice(0, 5).map((s, i) => (
            <BlurFade key={s.slug} delay={i * 0.08}>
              <a
                href={`/setores/${s.slug}`}
                className="group block bg-white rounded-xl border border-neutral-200 p-6 h-full hover:border-green/30 hover:shadow-sm transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-green/10 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={s.icon} />
                  </svg>
                </div>
                <h3 className="font-heading font-semibold text-neutral-900 text-sm mb-1.5 group-hover:text-green transition-colors">
                  {s.title}
                </h3>
                <p className="text-xs text-red-500/80 font-medium mb-2">{s.pain}</p>
                <p className="text-sm text-neutral-400 leading-relaxed mb-3">
                  {s.description}
                </p>
                {s.stats.investment && (
                  <p className="text-xs text-neutral-500">
                    Investimento a partir de <span className="font-semibold text-neutral-700">{s.stats.investment}</span>
                  </p>
                )}
                <span className="inline-flex items-center gap-1.5 mt-4 text-xs font-medium text-neutral-400 group-hover:text-green transition-colors">
                  Ver soluções para este setor
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>
            </BlurFade>
          ))}

          <BlurFade delay={0.4}>
            <a
              href="/setores"
              className="group flex flex-col items-center justify-center bg-white rounded-xl border border-dashed border-neutral-300 p-6 h-full hover:border-green/50 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center mb-3 group-hover:bg-green/10 transition-colors">
                <svg className="w-5 h-5 text-neutral-400 group-hover:text-green transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
              <p className="text-sm font-medium text-neutral-500 group-hover:text-green transition-colors">Ver todos os setores</p>
            </a>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
