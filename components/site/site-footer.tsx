import Link from "next/link";

import { categories } from "@/lib/data/catalog";

import { STORE_NAME, STORE_TAGLINE } from "./store-brand";

export function SiteFooter() {
  return (
    <footer className="mt-10 hidden border-t border-border bg-muted/40 sm:block md:mt-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="text-lg font-bold">{STORE_NAME}</p>
          <p className="mt-2 text-sm text-muted-foreground">{STORE_TAGLINE}</p>
          <p className="mt-4 text-sm text-muted-foreground">
            تماس: <span className="text-foreground">[شماره تماس فروشگاه]</span>
          </p>
        </div>
        <div>
          <p className="font-semibold">دسترسی سریع</p>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link href="/categories" className="hover:text-foreground">
                دسته‌بندی‌ها
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-foreground">
                محصولات
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">دسته‌های محبوب</p>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {categories.slice(0, 4).map((c) => (
              <li key={c.slug}>
                <Link href={`/categories/${c.slug}`} className="hover:text-foreground">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
        قیمت‌های این نسخه نمایشی هستند — نسخه اولیه سایت
      </div>
    </footer>
  );
}
