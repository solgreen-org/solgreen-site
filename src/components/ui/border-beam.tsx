import { cn } from "../../lib/utils";

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  colorFrom?: string;
  colorTo?: string;
}

export function BorderBeam({
  className,
  size = 200,
  duration = 12,
  colorFrom = "#5EB651",
  colorTo = "#2C5489",
}: BorderBeamProps) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 rounded-[inherit]", className)}>
      <div
        className="absolute inset-0 rounded-[inherit]"
        style={{
          background: `conic-gradient(from calc(var(--beam-angle, 0) * 1deg), transparent 80%, ${colorFrom}, ${colorTo}, transparent 100%)`,
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          padding: "1.5px",
          animation: `beam-spin ${duration}s linear infinite`,
        }}
      />
      <style>{`
        @keyframes beam-spin {
          from { --beam-angle: 0; }
          to { --beam-angle: 360; }
        }
        @property --beam-angle {
          syntax: "<number>";
          inherits: false;
          initial-value: 0;
        }
      `}</style>
    </div>
  );
}
