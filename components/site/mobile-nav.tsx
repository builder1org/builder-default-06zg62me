"use client";

import * as React from "react";
import Link from "next/link";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { categories } from "@/lib/data/catalog";

type MobileNavProps = {
  trigger: React.ReactNode;
};

export function MobileNav({ trigger }: MobileNavProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-md">
        <DialogHeader>
          <DialogTitle>منوی فروشگاه</DialogTitle>
        </DialogHeader>
        <nav className="flex flex-col gap-1 pt-2">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="rounded-md px-3 py-2.5 text-sm font-medium hover:bg-muted"
          >
            صفحه اصلی
          </Link>
          <Link
            href="/categories"
            onClick={() => setOpen(false)}
            className="rounded-md px-3 py-2.5 text-sm font-medium hover:bg-muted"
          >
            همه دسته‌ها
          </Link>
          <Link
            href="/products"
            onClick={() => setOpen(false)}
            className="rounded-md px-3 py-2.5 text-sm font-medium hover:bg-muted"
          >
            همه محصولات
          </Link>
          <div className="my-2 border-t border-border" />
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/categories/${cat.slug}`}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              {cat.name}
            </Link>
          ))}
        </nav>
      </DialogContent>
    </Dialog>
  );
}
