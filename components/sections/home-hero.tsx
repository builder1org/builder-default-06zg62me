import Link from "next/link";
import { Cpu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { STORE_TAGLINE } from "@/components/site/store-brand";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-border bg-card px-6 py-12 sm:px-10 sm:py-16 lg:py-20">
      <div
        className="pointer-events-none absolute -start-24 top-0 size-72 rounded-full blur-3xl"
        style={{ background: "var(--hero-glow)" }}
        aria-hidden
      />
      <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/60 px-3 py-1 text-xs font-medium text-muted-foreground">
            <Cpu className="size-3.5" aria-hidden />
            نسخه اولیه — آماده سفارشی‌سازی
          </p>
          <h1 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            تکنولوژی که می‌خواهید،{" "}
            <span className="text-primary">در یک ویترین منظم</span>
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {STORE_TAGLINE}. دسته‌بندی شفاف، کارت محصول و صفحه جزئیات برای شروع فروش آنلاین.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" asChild>
              <Link href="/products">مشاهده محصولات</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/categories">انتخاب دسته</Link>
            </Button>
          </div>
        </div>
        <HeroVisualPanel />
      </div>
    </section>
  );
}

function HeroVisualPanel() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4" aria-hidden>
      {["موبایل", "لپ‌تاپ", "صوتی", "گجت"].map((label, i) => (
        <div
          key={label}
          className="flex aspect-[4/3] flex-col justify-end rounded-xl border border-border/80 bg-gradient-to-br from-primary/10 to-accent/30 p-4"
          style={{ transform: i % 2 === 0 ? "translateY(0)" : "translateY(0.5rem)" }}
        >
          <span className="text-sm font-semibold text-foreground/90">{label}</span>
          <span className="text-xs text-muted-foreground">دسته نمونه</span>
        </div>
      ))}
    </div>
  );
}
