import Link from "next/link";
import { Menu, ShoppingBag, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";
import { categories } from "@/lib/data/catalog";
import { cn } from "@/lib/utils";

import { MobileNav } from "./mobile-nav";
import { STORE_NAME } from "./store-brand";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6 lg:gap-8">
        <MobileNav
          trigger={
            <Button
              variant="ghost"
              size="icon"
              className="shrink-0 lg:hidden"
              aria-label="منوی اصلی"
            >
              <Menu className="size-5" />
            </Button>
          }
        />

        <Link
          href="/"
          className="flex min-w-0 items-center gap-2 font-bold tracking-tight text-foreground"
        >
          <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Zap className="size-5" aria-hidden />
          </span>
          <span className="truncate text-base sm:text-lg">{STORE_NAME}</span>
        </Link>

        <nav
          className="hidden flex-1 items-center justify-center gap-1 lg:flex"
          aria-label="دسته‌بندی‌ها"
        >
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/categories/${cat.slug}`}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors",
                "hover:bg-accent hover:text-accent-foreground"
              )}
            >
              {cat.name}
            </Link>
          ))}
        </nav>

        <div className="ms-auto flex items-center gap-2">
          <Button variant="outline" size="sm" className="hidden sm:inline-flex" asChild>
            <Link href="/products">همه محصولات</Link>
          </Button>
          <Button variant="secondary" size="icon" disabled aria-label="سبد خرید (به‌زودی)">
            <ShoppingBag className="size-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}
