import { useEffect, useRef, useState } from "react";
import { cn } from "../../lib/utils";

interface NumberTickerProps {
  value: number;
  direction?: "up" | "down";
  className?: string;
  delay?: number;
  duration?: number;
  suffix?: string;
  decimalPlaces?: number;
}

export function NumberTicker({
  value,
  direction = "up",
  className,
  delay = 0,
  duration = 2000,
  suffix = "",
  decimalPlaces = 0,
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [displayValue, setDisplayValue] = useState(direction === "up" ? 0 : value);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { rootMargin: "-100px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    const startTime = Date.now() + delay * 1000;
    const startValue = direction === "up" ? 0 : value;
    const endValue = direction === "up" ? value : 0;

    const tick = () => {
      const now = Date.now();
      if (now < startTime) {
        requestAnimationFrame(tick);
        return;
      }
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = startValue + (endValue - startValue) * eased;
      setDisplayValue(current);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [started, value, direction, delay, duration]);

  return (
    <span ref={ref} className={cn("tabular-nums tracking-tight", className)}>
      {decimalPlaces > 0
        ? displayValue.toFixed(decimalPlaces).replace(".", ",")
        : Math.round(displayValue).toLocaleString("pt-BR")}
      {suffix}
    </span>
  );
}
