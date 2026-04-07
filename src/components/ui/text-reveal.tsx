import { useRef, useEffect, useState } from "react";
import { cn } from "../../lib/utils";

interface TextRevealProps {
  text: string;
  className?: string;
}

export function TextReveal({ text, className }: TextRevealProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);
  const words = text.split(" ");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "-100px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <span ref={ref} className={cn("inline", className)}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block mr-[0.25em]"
          style={{
            opacity: visible ? 1 : 0.15,
            transition: `opacity 0.3s ease-out ${i * 0.04}s`,
          }}
        >
          {word}
        </span>
      ))}
    </span>
  );
}
