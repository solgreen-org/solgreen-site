import { cn } from "../../lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  duration?: number;
}

export function Marquee({
  children,
  className,
  reverse = false,
  pauseOnHover = true,
  duration = 30,
}: MarqueeProps) {
  return (
    <div
      className={cn("group flex overflow-hidden [--gap:1rem] gap-[var(--gap)]", className)}
    >
      {Array.from({ length: 2 }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "flex shrink-0 gap-[var(--gap)]",
            pauseOnHover && "group-hover:[animation-play-state:paused]"
          )}
          style={{
            animation: `marquee ${duration}s linear infinite`,
            animationDirection: reverse ? "reverse" : "normal",
          }}
        >
          {children}
        </div>
      ))}
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-100% - var(--gap))); }
        }
      `}</style>
    </div>
  );
}
