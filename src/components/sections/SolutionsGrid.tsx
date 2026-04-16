import { BlurFade } from "../ui/blur-fade";
import { Marquee } from "../ui/marquee";
import { TextReveal } from "../ui/text-reveal";
import { credentialClients } from "../../lib/data";
import { url } from "../../lib/base";

export function SolutionsGrid() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <BlurFade>
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-green uppercase tracking-widest mb-3">
              Credenciais
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900">
              Quem confia na nossa engenharia
            </h2>
          </div>
        </BlurFade>

        <BlurFade delay={0.15}>
          <div className="rounded-xl border border-neutral-200 bg-neutral-50 py-10 overflow-hidden">
            <Marquee duration={25} pauseOnHover className="[--gap:3rem]">
              {credentialClients.map((client) => (
                <div
                  key={client.name}
                  className="flex items-center justify-center h-10 px-6 shrink-0 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                >
                  <img
                    src={url(client.logo)} loading="eager"
                    alt={client.name}
                    className="max-h-10 w-auto object-contain"
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
