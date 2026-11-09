import Link from "next/link";
import { ChevronLeft, Package } from "lucide-react";

import type { Order } from "@/lib/data/orders";
import { formatToman } from "@/lib/format";
import { cn } from "@/lib/utils";

type OrderCardProps = {
  order: Order;
  className?: string;
};

const statusStyles: Record<Order["status"], string> = {
  processing: "bg-amber-500/15 text-amber-300 border-amber-500/30",
  shipped: "bg-sky-500/15 text-sky-300 border-sky-500/30",
  delivered: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  cancelled: "bg-muted text-muted-foreground border-border",
};

export function OrderCard({ order, className }: OrderCardProps) {
  const preview = order.items.slice(0, 2).map((i) => i.productName).join("، ");

  return (
    <article
      className={cn(
        "rounded-2xl border border-border/80 bg-card p-4 shadow-sm transition-colors hover:border-primary/30",
        className
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-muted">
            <Package className="size-5 text-primary" aria-hidden />
          </span>
          <div>
            <p className="text-sm font-bold">{order.id}</p>
            <p className="mt-0.5 text-xs text-muted-foreground">تاریخ: {order.placedAt}</p>
          </div>
        </div>
        <span
          className={cn(
            "shrink-0 rounded-full border px-2.5 py-0.5 text-[11px] font-semibold",
            statusStyles[order.status]
          )}
        >
          {order.statusLabel}
        </span>
      </div>

      <p className="mt-3 line-clamp-2 text-sm text-muted-foreground">{preview}</p>
      <p className="mt-2 text-base font-extrabold tabular-nums">{formatToman(order.totalToman)}</p>

      <Link
        href={`/orders/${encodeURIComponent(order.id)}`}
        className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary"
      >
        جزئیات سفارش
        <ChevronLeft className="size-3.5" />
      </Link>
    </article>
  );
}
