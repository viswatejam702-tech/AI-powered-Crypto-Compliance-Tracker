import { cn } from "@/lib/cn";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-brand-muted px-3 py-1 text-caption font-medium text-brand",
        className
      )}
    >
      {children}
    </span>
  );
}
