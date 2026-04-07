import { BlurFade } from "../ui/blur-fade";
import { BorderBeam } from "../ui/border-beam";

export function CTA() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <BlurFade>
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-neutral-900" />
            <img src="/img/cta-bg.png" alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
            <BorderBeam size={300} duration={15} colorFrom="#22c55e" colorTo="#1933c5" />
            <div className="relative p-12 md:p-16">
              <div className="max-w-lg">
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-white leading-tight mb-4">
                  Sua operação não pode parar.
                  <br />
                  <span className="text-green">Sua energia também não.</span>
                </h2>
                <p className="text-neutral-400 mb-8 leading-relaxed">
                  Fale com nossa equipe de engenharia e descubra a solução certa para o seu negócio. Do dimensionamento à instalação.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a href="/contato" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-green text-white text-sm font-medium hover:bg-green-dark transition-colors">
                    Falar com engenheiro
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  <a href="/simulador" className="inline-flex items-center px-6 py-3 rounded-lg border border-neutral-600 text-neutral-300 text-sm font-medium hover:bg-neutral-800 transition-colors">
                    Calcular risco energético
                  </a>
                </div>
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
