import { getProductBySlug } from "./catalog";
import { formatToman } from "@/lib/format";

export type OrderStatus = "processing" | "shipped" | "delivered" | "cancelled";

export type OrderItem = {
  productSlug: string;
  productName: string;
  quantity: number;
  unitPriceToman: number;
};

export type Order = {
  id: string;
  placedAt: string;
  status: OrderStatus;
  statusLabel: string;
  items: OrderItem[];
  totalToman: number;
  trackingCode?: string;
};

export const demoCustomer = {
  displayName: "[نام کاربر]",
  phone: "[شماره موبایل]",
  email: "[ایمیل کاربر]",
};

const statusLabels: Record<OrderStatus, string> = {
  processing: "در حال پردازش",
  shipped: "ارسال شده",
  delivered: "تحویل شده",
  cancelled: "لغو شده",
};

function itemFromSlug(slug: string, qty: number): OrderItem {
  const p = getProductBySlug(slug);
  return {
    productSlug: slug,
    productName: p?.name ?? slug,
    quantity: qty,
    unitPriceToman: p?.demoPriceToman ?? 0,
  };
}

function total(items: OrderItem[]): number {
  return items.reduce((sum, i) => sum + i.quantity * i.unitPriceToman, 0);
}

const demoOrdersDraft = [
  {
    id: "ORD-1403-1001",
    placedAt: "۱۴۰۳/۰۸/۱۲",
    status: "shipped" as const,
    statusLabel: statusLabels.shipped,
    trackingCode: "TRK-DEMO-88421",
    items: [itemFromSlug("phone-alpha-x", 1), itemFromSlug("cable-braided-2m", 2)],
    totalToman: 0,
  },
  {
    id: "ORD-1403-0974",
    placedAt: "۱۴۰۳/۰۷/۲۸",
    status: "delivered" as const,
    statusLabel: statusLabels.delivered,
    items: [itemFromSlug("headphones-air-sound", 1)],
    totalToman: 0,
  },
  {
    id: "ORD-1403-0911",
    placedAt: "۱۴۰۳/۰۷/۰۵",
    status: "processing" as const,
    statusLabel: statusLabels.processing,
    items: [itemFromSlug("laptop-pro-14", 1)],
    totalToman: 0,
  },
] as const;

export const demoOrders: Order[] = demoOrdersDraft.map((order) => ({
  ...order,
  items: [...order.items],
  totalToman: total([...order.items]),
}));

export function getOrderById(id: string): Order | undefined {
  return demoOrders.find((o) => o.id === id);
}
