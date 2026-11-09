import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { PageShell } from "@/components/site/page-shell";
import { demoOrders, getOrderById } from "@/lib/data/orders";
import { formatToman } from "@/lib/format";

type PageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return demoOrders.map((o) => ({ id: o.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const order = getOrderById(decodeURIComponent(id));
  return { title: order ? `سفارش ${order.id}` : "سفارش یافت نشد" };
}

export default async function OrderDetailPage({ params }: PageProps) {
  const { id } = await params;
  const order = getOrderById(decodeURIComponent(id));
  if (!order) notFound();

  return (
    <PageShell tight>
      <Breadcrumbs
        className="hidden sm:block"
        items={[
          { label: "خانه", href: "/" },
          { label: "سفارش‌ها", href: "/orders" },
          { label: order.id },
        ]}
      />
      <h1 className="mt-2 text-xl font-bold sm:text-2xl">{order.id}</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        ثبت: {order.placedAt} · {order.statusLabel}
      </p>
      {order.trackingCode ? (
        <p className="mt-2 text-sm">
          کد رهگیری: <span className="font-mono font-semibold">{order.trackingCode}</span>
        </p>
      ) : null}

      <section className="mt-6 rounded-2xl border border-border bg-card">
        <h2 className="border-b border-border px-4 py-3 text-sm font-bold">اقلام سفارش</h2>
        <ul className="divide-y divide-border">
          {order.items.map((item) => (
            <li key={item.productSlug} className="flex flex-col gap-2 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <Link href={`/products/${item.productSlug}`} className="font-semibold text-primary">
                  {item.productName}
                </Link>
                <p className="text-xs text-muted-foreground">تعداد: {item.quantity.toLocaleString("fa-IR")}</p>
              </div>
              <p className="font-bold tabular-nums">{formatToman(item.quantity * item.unitPriceToman)}</p>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between border-t border-border px-4 py-3">
          <span className="text-sm font-medium text-muted-foreground">جمع کل (نمایشی)</span>
          <span className="text-lg font-extrabold tabular-nums">{formatToman(order.totalToman)}</span>
        </div>
      </section>
    </PageShell>
  );
}
