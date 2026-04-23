import { BlurFade } from "../ui/blur-fade";
import { BorderBeam } from "../ui/border-beam";
import { url } from "../../lib/base";
import { contact } from "../../lib/data";

export function CTA() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <BlurFade>
          <div className="relative rounded-2xl overflow-hidden">
            <BorderBeam size={300} duration={15} colorFrom="#22c55e" colorTo="#1933c5" />
            <div className="relative min-h-[380px] md:min-h-[340px]">
              <img
                src={url("/img/cta-bg.jpg")} loading="lazy" decoding="async"
                alt="Instalação de usina solar"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/95 via-50% to-transparent" />

              <div className="relative p-10 md:p-14 flex flex-col justify-center h-full max-w-lg">
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-white leading-tight mb-4">
                  Sua operação não pode parar.
                  <br />
                  <span className="text-green">Sua energia também não.</span>
                </h2>
                <p className="text-neutral-400 mb-8 leading-relaxed">
                  Entre em contato com nossa equipe de engenharia. Dimensionamos o sistema, orçamos e instalamos.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a href={url("/contato")} className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-green text-white text-sm font-medium hover:bg-green-dark transition-colors">
                    Falar com engenheiro
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  <a
                    href={contact.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-green text-green text-sm font-medium hover:bg-green hover:text-white transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp
                  </a>
                  <a href={url("/simulador")} className="inline-flex items-center px-6 py-3 rounded-lg border border-neutral-600 text-neutral-300 text-sm font-medium hover:bg-neutral-800 transition-colors">
                    Simular risco energético
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
