import { BlurFade } from "../ui/blur-fade";
import { MagicCard } from "../ui/magic-card";
import { pillars } from "../../lib/data";

export function About() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <BlurFade>
          <div className="text-center mb-16">
            <p className="text-xs font-semibold text-green uppercase tracking-widest mb-3">
              O que fazemos
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 leading-tight">
              Geramos, armazenamos e controlamos energia
            </h2>
            <p className="text-neutral-400 mt-4 max-w-xl mx-auto">
              Três pilares de tecnologia para que sua operação tenha a energia certa, na hora certa, sem falhas.
            </p>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <BlurFade key={p.slug} delay={i * 0.1}>
              <a href={`/solucoes/${p.slug}`} className="block h-full">
                <MagicCard className="p-8 h-full group hover:border-green/30 transition-colors duration-300">
                  <div className="w-12 h-12 rounded-xl bg-green/10 flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={p.icon} />
                    </svg>
                  </div>

                  <h3 className="font-heading font-bold text-neutral-900 text-lg mb-2 group-hover:text-green transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                    {p.description}
                  </p>

                  <ul className="flex flex-col gap-2">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-neutral-500">
                        <svg className="w-4 h-4 text-green shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {h}
                      </li>
                    ))}
                  </ul>

                  <span className="inline-flex items-center gap-1.5 mt-6 text-xs font-medium text-neutral-400 group-hover:text-green transition-colors">
                    Saiba mais
                    <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </MagicCard>
              </a>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
