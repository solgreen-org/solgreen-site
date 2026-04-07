import { cn } from "../../lib/utils";

interface ShimmerButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
}

export function ShimmerButton({ children, className, href }: ShimmerButtonProps) {
  const Comp = href ? "a" : "button";
  return (
    <Comp
      href={href}
      className={cn(
        "group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-neutral-800",
        className
      )}
    >
      <span className="relative z-10">{children}</span>
      <svg className="relative z-10 w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <style>{`@keyframes shimmer { 100% { transform: translateX(100%); } }`}</style>
    </Comp>
  );
}
