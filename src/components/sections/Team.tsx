import { BlurFade } from "../ui/blur-fade";
import { team } from "../../lib/data";

export function Team() {
  return (
    <section className="py-24 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6">
        <BlurFade>
          <div className="text-center mb-16">
            <p className="text-xs font-semibold text-green uppercase tracking-widest mb-3">
              Equipe
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900">
              Quem faz a SolGreen acontecer
            </h2>
          </div>
        </BlurFade>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <BlurFade key={member.name} delay={i * 0.08}>
              <div className="group text-center">
                <div className="aspect-[3/4] rounded-xl overflow-hidden bg-neutral-200 mb-4">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>
                <p className="font-heading font-semibold text-neutral-900 text-sm">{member.name}</p>
                <p className="text-xs text-neutral-400 mt-0.5">{member.role}</p>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
