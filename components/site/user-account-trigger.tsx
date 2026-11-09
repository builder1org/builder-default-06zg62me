"use client";

import Link from "next/link";
import { ChevronLeft, Package, UserRound } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { demoCustomer, demoOrders } from "@/lib/data/orders";

export function UserAccountTrigger() {
  const recent = demoOrders.slice(0, 2);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="size-10 shrink-0 rounded-full border border-border/70 bg-card/80"
          aria-label="حساب کاربری و اطلاعات"
        >
          <UserRound className="size-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-md">
        <DialogHeader>
          <DialogTitle>حساب کاربری</DialogTitle>
        </DialogHeader>
        <section className="rounded-2xl border border-border bg-muted/40 p-4">
          <div className="flex items-center gap-3">
            <span className="flex size-12 items-center justify-center rounded-full bg-primary/20 text-primary">
              <UserRound className="size-6" aria-hidden />
            </span>
            <div className="min-w-0 text-sm">
              <p className="font-bold">{demoCustomer.displayName}</p>
              <p className="mt-1 text-muted-foreground">{demoCustomer.phone}</p>
              <p className="text-muted-foreground">{demoCustomer.email}</p>
            </div>
          </div>
        </section>

        <section className="mt-4">
          <h3 className="text-sm font-bold">آخرین سفارش‌ها (نمایشی)</h3>
          <ul className="mt-2 space-y-2">
            {recent.map((order) => (
              <li
                key={order.id}
                className="flex items-center justify-between gap-2 rounded-xl border border-border/80 px-3 py-2.5 text-sm"
              >
                <div className="min-w-0">
                  <p className="truncate font-semibold">{order.id}</p>
                  <p className="text-xs text-muted-foreground">{order.statusLabel}</p>
                </div>
                <Package className="size-4 shrink-0 text-muted-foreground" aria-hidden />
              </li>
            ))}
          </ul>
          <Button variant="outline" className="mt-3 w-full rounded-full" asChild>
            <Link href="/orders">
              همه سفارش‌ها
              <ChevronLeft className="size-4" />
            </Link>
          </Button>
        </section>
      </DialogContent>
    </Dialog>
  );
}
