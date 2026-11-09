import { Barcode, ShieldCheck, Sparkles } from "lucide-react";

import type { ProductExtended } from "@/lib/data/product-details";
import { cn } from "@/lib/utils";

type ProductMetaChipsProps = {
  product: ProductExtended;
  className?: string;
};

export function ProductMetaChips({ product, className }: ProductMetaChipsProps) {
  return (
    <ul className={cn("mt-3 flex flex-wrap gap-2", className)}>
      <li>
        <Chip icon={Barcode} label={`کد: ${product.sku}`} />
      </li>
      <li>
        <Chip
          icon={Sparkles}
          label={product.stockLabel}
          variant={product.stockStatus === "available" ? "success" : "muted"}
        />
      </li>
      <li>
        <Chip icon={ShieldCheck} label="گارانتی نمونه" />
      </li>
      {product.badge ? (
        <li>
          <Chip label={product.badge} variant="accent" />
        </li>
      ) : null}
    </ul>
  );
}

function Chip({
  icon: Icon,
  label,
  variant = "muted",
}: {
  icon?: typeof Barcode;
  label: string;
  variant?: "muted" | "success" | "accent";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold sm:text-xs",
        variant === "success" && "border-emerald-500/40 bg-emerald-500/10 text-emerald-300",
        variant === "accent" && "border-primary/50 bg-primary/15 text-primary",
        variant === "muted" && "border-border bg-muted/50 text-muted-foreground"
      )}
    >
      {Icon ? <Icon className="size-3.5 opacity-80" aria-hidden /> : null}
      {label}
    </span>
  );
}
