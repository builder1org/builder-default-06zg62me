"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Grid3x3, Home, ShoppingBag, Tag } from "lucide-react";

import { cn } from "@/lib/utils";

const tabs = [
  { href: "/", label: "خانه", icon: Home },
  { href: "/categories", label: "دسته‌ها", icon: Grid3x3 },
  { href: "/products", label: "محصولات", icon: Tag },
] as const;

export function MobileTabBar() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border/80 bg-background/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-8px_24px_-12px_rgba(0,0,0,0.12)] backdrop-blur-md md:hidden"
      aria-label="ناوبری اصلی موبایل"
    >
      <ul className="mx-auto flex max-w-lg items-stretch justify-around px-2 pt-1">
        {tabs.map((tab) => {
          const active =
            tab.href === "/"
              ? pathname === "/"
              : pathname === tab.href || pathname.startsWith(`${tab.href}/`);
          const Icon = tab.icon;
          return (
            <li key={tab.href} className="flex-1">
              <Link
                href={tab.href}
                className={cn(
                  "flex flex-col items-center gap-0.5 rounded-lg px-2 py-2 text-[10px] font-semibold transition-colors",
                  active ? "text-primary" : "text-muted-foreground"
                )}
              >
                <Icon className={cn("size-5", active && "fill-primary/15")} strokeWidth={active ? 2.25 : 1.75} />
                {tab.label}
              </Link>
            </li>
          );
        })}
        <li className="flex-1">
          <span
            className="flex flex-col items-center gap-0.5 rounded-lg px-2 py-2 text-[10px] font-semibold text-muted-foreground/60"
            aria-disabled
          >
            <ShoppingBag className="size-5" strokeWidth={1.75} />
            سبد
          </span>
        </li>
      </ul>
    </nav>
  );
}
