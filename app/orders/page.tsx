import type { Metadata } from "next";

import { OrderCard } from "@/components/site/order-card";
import { PageShell } from "@/components/site/page-shell";
import { demoCustomer, demoOrders } from "@/lib/data/orders";

export const metadata: Metadata = {
  title: "سفارش‌های من",
  description: "پیگیری و مشاهده سفارش‌های نمایشی",
};

export default function OrdersPage() {
  return (
    <PageShell tight>
      <h1 className="text-xl font-bold sm:text-2xl">سفارش‌های من</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        حساب: {demoCustomer.displayName} — داده نمایشی تا اتصال ورود واقعی
      </p>
      <ul className="mt-6 space-y-3">
        {demoOrders.map((order) => (
          <li key={order.id}>
            <OrderCard order={order} />
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
