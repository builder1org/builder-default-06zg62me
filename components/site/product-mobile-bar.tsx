import { ShoppingCart } from "lucide-react";

import { Button } from "@/components/ui/button";
import { formatToman } from "@/lib/format";

type ProductMobileBarProps = {
  price: number;
};

export function ProductMobileBar({ price }: ProductMobileBarProps) {
  return (
    <div className="fixed inset-x-0 bottom-[calc(3.25rem+env(safe-area-inset-bottom))] z-40 border-t border-border bg-background/95 px-3 py-2.5 shadow-[0_-6px_20px_-10px_rgba(0,0,0,0.15)] backdrop-blur-md md:hidden">
      <div className="mx-auto flex max-w-lg items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[10px] text-muted-foreground">قیمت نمایشی</p>
          <p className="truncate text-base font-extrabold tabular-nums">{formatToman(price)}</p>
        </div>
        <Button size="lg" disabled className="h-11 flex-1 gap-2 rounded-full font-bold">
          <ShoppingCart className="size-4" />
          افزودن به سبد
        </Button>
      </div>
    </div>
  );
}
