import { useState } from "react";
import { BlurFade } from "../ui/blur-fade";
import { estados } from "../../lib/data";

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  showConsumption?: boolean;
}

export function ContactForm({
  title = "Envie uma mensagem",
  subtitle,
  showConsumption = false,
}: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-12 h-12 rounded-xl bg-green/10 flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-heading font-semibold text-neutral-900 mb-1">Mensagem enviada!</h3>
        <p className="text-sm text-neutral-400">Nossa equipe entrará em contato em breve.</p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-lg border border-neutral-200 bg-white px-3.5 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-green/20 focus:border-green transition-all";

  return (
    <BlurFade>
      <div>
        {title && (
          <div className="mb-6">
            <h3 className="font-heading font-semibold text-neutral-900 text-lg">{title}</h3>
            {subtitle && <p className="text-sm text-neutral-400 mt-1">{subtitle}</p>}
          </div>
        )}
        <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <input type="text" name="nome" placeholder="Nome *" required className={inputClass} />
          <input type="text" name="empresa" placeholder="Empresa" className={inputClass} />
          <input type="tel" name="telefone" placeholder="Telefone *" required className={inputClass} />
          <input type="email" name="email" placeholder="E-mail *" required className={inputClass} />
          <select name="estado" className={inputClass}>
            <option value="">Estado</option>
            {estados.map((e) => <option key={e} value={e}>{e}</option>)}
          </select>
          <input type="text" name="cidade" placeholder="Cidade" className={inputClass} />
          {showConsumption && (
            <>
              <input type="text" name="consumo" placeholder="Consumo médio mensal (kWh)" className={inputClass} />
              <select name="orientacao" className={inputClass}>
                <option value="">Orientação solar do telhado</option>
                <option value="Norte">Norte</option>
                <option value="Leste">Leste</option>
                <option value="Oeste">Oeste</option>
                <option value="Sul">Sul</option>
              </select>
            </>
          )}
          <textarea name="mensagem" placeholder="Mensagem *" required rows={4} className={`md:col-span-2 resize-none ${inputClass}`} />
          <div className="md:col-span-2">
            <button type="submit" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 transition-colors">
              Enviar mensagem
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </BlurFade>
  );
}
