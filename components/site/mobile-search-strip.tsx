import Link from "next/link";
import { Search } from "lucide-react";

export function MobileSearchStrip() {
  return (
    <Link
      href="/products"
      className="flex h-11 w-full items-center gap-3 rounded-full border border-border/80 bg-card px-4 text-sm text-muted-foreground shadow-sm transition-colors hover:border-primary/30"
    >
      <Search className="size-4 shrink-0 opacity-70" aria-hidden />
      <span>جستجو در محصولات…</span>
    </Link>
  );
}
