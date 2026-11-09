import { getCategoryBySlug } from "@/lib/data/catalog";
import { cn } from "@/lib/utils";

type ProductVisualProps = {
  categorySlug: string;
  badge?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
};

export function ProductVisual({
  categorySlug,
  badge,
  className,
  size = "md",
}: ProductVisualProps) {
  const category = getCategoryBySlug(categorySlug);
  const Icon = category?.icon;

  const sizeClass =
    size === "lg" ? "aspect-[4/3] min-h-48" : size === "sm" ? "aspect-square" : "aspect-[5/4]";

  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-primary/25 via-card to-muted/80 ring-1 ring-white/5",
        sizeClass,
        className
      )}
    >
      {badge ? (
        <span className="absolute start-3 top-3 rounded-full bg-primary px-2.5 py-0.5 text-xs font-medium text-primary-foreground">
          {badge}
        </span>
      ) : null}
      {Icon ? (
        <Icon
          className={cn(
            "text-primary/70",
            size === "lg" ? "size-24" : size === "sm" ? "size-12" : "size-16"
          )}
          strokeWidth={1.25}
          aria-hidden
        />
      ) : null}
    </div>
  );
}
