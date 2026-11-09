import Link from "next/link";
import { Menu, ShoppingBag, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";
import { categories } from "@/lib/data/catalog";
import { cn } from "@/lib/utils";

import { MobileNav } from "./mobile-nav";
import { MobileSearchStrip } from "./mobile-search-strip";
import { UserAccountTrigger } from "./user-account-trigger";
import { STORE_NAME } from "./store-brand";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-3 py-2.5 sm:px-6 sm:py-3">
        <div className="flex items-center gap-2 sm:gap-4">
          <MobileNav
            trigger={
              <Button
                variant="ghost"
                size="icon"
                className="size-10 shrink-0 md:hidden"
                aria-label="منوی اصلی"
              >
                <Menu className="size-5" />
              </Button>
            }
          />

          <Link
            href="/"
            className="flex min-w-0 flex-1 items-center gap-2 font-bold tracking-tight text-foreground sm:flex-none"
          >
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm">
              <Zap className="size-4" aria-hidden />
            </span>
            <span className="truncate text-sm sm:text-base">{STORE_NAME}</span>
          </Link>

          <nav
            className="hidden flex-1 items-center justify-center gap-0.5 lg:flex"
            aria-label="دسته‌بندی‌ها"
          >
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/categories/${cat.slug}`}
                className={cn(
                  "rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors",
                  "hover:bg-accent hover:text-accent-foreground"
                )}
              >
                {cat.name}
              </Link>
            ))}
          </nav>

          <div className="ms-auto flex items-center gap-1.5">
            <Button
              variant="outline"
              size="sm"
              className="hidden rounded-full sm:inline-flex"
              asChild
            >
              <Link href="/products">همه محصولات</Link>
            </Button>
            <Button
              variant="secondary"
              size="icon"
              className="size-10 rounded-full"
              disabled
              aria-label="سبد خرید (به‌زودی)"
            >
              <ShoppingBag className="size-4" />
            </Button>
            <UserAccountTrigger />
          </div>
        </div>
        <div className="mt-2.5 md:hidden">
          <MobileSearchStrip />
        </div>
      </div>
    </header>
  );
}
