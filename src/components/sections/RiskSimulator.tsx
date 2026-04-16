import { useState } from "react";
import { url } from "../../lib/base";

const businessTypes = [
  {
    id: "avicultura",
    label: "Avicultura (granja de frangos/suínos)",
    defaultLoss: 80000,
    lossLabel: "Valor médio da perda por lote (R$)",
    criticalMinutes: 60,
    suggestedKwh: 15,
  },
  {
    id: "camara-fria",
    label: "Câmara fria / Frigorífico / Sorveteria",
    defaultLoss: 30000,
    lossLabel: "Valor do estoque perecível (R$)",
    criticalMinutes: 240,
    suggestedKwh: 10,
  },
  {
    id: "ordenha",
    label: "Ordenha automatizada / Laticínio",
    defaultLoss: 15000,
    lossLabel: "Perda por ciclo de ordenha perdido (R$)",
    criticalMinutes: 120,
    suggestedKwh: 10,
  },
  {
    id: "armazem",
    label: "Armazém de grãos / Secador",
    defaultLoss: 50000,
    lossLabel: "Valor dos grãos em risco (R$)",
    criticalMinutes: 360,
    suggestedKwh: 20,
  },
  {
    id: "supermercado",
    label: "Supermercado / Varejo alimentar",
    defaultLoss: 40000,
    lossLabel: "Valor do estoque refrigerado (R$)",
    criticalMinutes: 240,
    suggestedKwh: 20,
  },
  {
    id: "comercio",
    label: "Comércio / Escritório / Servidor",
    defaultLoss: 10000,
    lossLabel: "Perda estimada por hora parado (R$)",
    criticalMinutes: 60,
    suggestedKwh: 5,
  },
];

function estimateSystemCost(kwh: number): { min: number; max: number } {
  if (kwh <= 5) return { min: 12000, max: 15000 };
  if (kwh <= 10) return { min: 21000, max: 27000 };
  if (kwh <= 20) return { min: 40000, max: 49000 };
  return { min: 55000, max: 72000 };
}

function formatCurrency(value: number): string {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
}

export function RiskSimulator() {
  const [selectedType, setSelectedType] = useState("");
  const [lossValue, setLossValue] = useState(0);
  const [outagesPerYear, setOutagesPerYear] = useState(4);
  const [hasGenerator, setHasGenerator] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const business = businessTypes.find((b) => b.id === selectedType);

  function handleTypeChange(id: string) {
    const biz = businessTypes.find((b) => b.id === id);
    setSelectedType(id);
    if (biz) setLossValue(biz.defaultLoss);
    setShowResult(false);
  }

  function calculate() {
    setShowResult(true);
  }

  const annualRisk = lossValue * outagesPerYear;
  const systemKwh = hasGenerator ? Math.ceil((business?.suggestedKwh || 10) / 2) : (business?.suggestedKwh || 10);
  const cost = estimateSystemCost(systemKwh);
  const paybackEvents = cost.min / lossValue;

  return (
    <section className="py-16">
      <div className="max-w-3xl mx-auto px-6">
        <div className="rounded-2xl border border-neutral-200 bg-white p-8 md:p-10">
          <div className="mb-8">
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              Tipo de operação
            </label>
            <select
              className="w-full rounded-lg border border-neutral-200 px-4 py-3 text-sm text-neutral-700 bg-white focus:outline-none focus:ring-2 focus:ring-green/30 focus:border-green"
              value={selectedType}
              onChange={(e) => handleTypeChange(e.target.value)}
            >
              <option value="">Selecione...</option>
              {businessTypes.map((b) => (
                <option key={b.id} value={b.id}>{b.label}</option>
              ))}
            </select>
          </div>

          {business && (
            <>
              <div className="mb-6">
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  {business.lossLabel}
                </label>
                <input
                  type="number"
                  className="w-full rounded-lg border border-neutral-200 px-4 py-3 text-sm text-neutral-700 focus:outline-none focus:ring-2 focus:ring-green/30 focus:border-green"
                  value={lossValue}
                  onChange={(e) => { setLossValue(Number(e.target.value)); setShowResult(false); }}
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Quantas quedas de energia por ano?
                </label>
                <input
                  type="range"
                  min={1}
                  max={24}
                  value={outagesPerYear}
                  onChange={(e) => { setOutagesPerYear(Number(e.target.value)); setShowResult(false); }}
                  className="w-full accent-green"
                />
                <p className="text-sm text-neutral-500 mt-1">{outagesPerYear}x por ano</p>
              </div>

              <div className="mb-8">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={hasGenerator}
                    onChange={(e) => { setHasGenerator(e.target.checked); setShowResult(false); }}
                    className="w-4 h-4 accent-green rounded"
                  />
                  <span className="text-sm text-neutral-700">Já tenho gerador diesel</span>
                </label>
              </div>

              <button
                onClick={calculate}
                className="w-full py-3 rounded-lg bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 transition-colors"
              >
                Calcular meu risco
              </button>
            </>
          )}

          {showResult && business && (
            <div className="mt-8 pt-8 border-t border-neutral-200">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="p-4 rounded-xl bg-red-50 border border-red-100 text-center">
                  <p className="text-xs text-red-400 uppercase tracking-widest mb-1">Risco anual</p>
                  <p className="text-xl font-heading font-bold text-red-600">{formatCurrency(annualRisk)}</p>
                </div>
                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 text-center">
                  <p className="text-xs text-neutral-400 uppercase tracking-widest mb-1">Janela crítica</p>
                  <p className="text-xl font-heading font-bold text-neutral-900">{business.criticalMinutes < 60 ? `${business.criticalMinutes} min` : `${business.criticalMinutes / 60}h`}</p>
                </div>
                <div className="p-4 rounded-xl bg-green/5 border border-green/20 text-center">
                  <p className="text-xs text-green uppercase tracking-widest mb-1">Investimento</p>
                  <p className="text-xl font-heading font-bold text-green">{formatCurrency(cost.min)} - {formatCurrency(cost.max)}</p>
                </div>
              </div>

              <div className="rounded-xl bg-neutral-50 border border-neutral-200 p-6 mb-6">
                <h3 className="font-heading font-semibold text-neutral-900 text-sm mb-3">
                  {hasGenerator ? "Recomendação: Bateria + Gerador existente" : "Recomendação: Sistema de bateria de lítio"}
                </h3>
                <p className="text-sm text-neutral-500 mb-3">
                  {hasGenerator
                    ? `Um sistema de ${systemKwh} kWh na frente do seu gerador elimina o gap de transição (10-30 segundos) e serve como backup se o gerador falhar. Investimento estimado: ${formatCurrency(cost.min)} a ${formatCurrency(cost.max)}.`
                    : `Um sistema de ${systemKwh} kWh com bateria de lítio e inversor híbrido substitui o gerador diesel com resposta instantânea, zero manutenção e 10+ anos de vida útil. Investimento estimado: ${formatCurrency(cost.min)} a ${formatCurrency(cost.max)}.`
                  }
                </p>
                <p className="text-sm text-neutral-700 font-medium">
                  Payback: {paybackEvents < 1 ? "menos de 1 evento" : `${paybackEvents.toFixed(1)} eventos`} de perda evitados.
                </p>
              </div>

              <a
                href={url("/contato")}
                className="block w-full text-center py-3 rounded-lg bg-green text-white text-sm font-medium hover:bg-green-dark transition-colors"
              >
                Falar com engenheiro sobre esta solução
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
