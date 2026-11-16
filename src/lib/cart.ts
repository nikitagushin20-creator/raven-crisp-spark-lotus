import { useEffect, useState } from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CartItem = { slug: string; qty: number };

type CartState = {
  items: CartItem[];
  add: (slug: string, qty?: number) => void;
  setQty: (slug: string, qty: number) => void;
  remove: (slug: string) => void;
  clear: () => void;
};

export const useCart = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      add: (slug, qty = 1) =>
        set((state) => {
          const found = state.items.find((item) => item.slug === slug);
          if (!found) return { items: [...state.items, { slug, qty }] };
          return {
            items: state.items.map((item) =>
              item.slug === slug ? { ...item, qty: item.qty + qty } : item,
            ),
          };
        }),
      setQty: (slug, qty) =>
        set((state) => ({
          items:
            qty <= 0
              ? state.items.filter((item) => item.slug !== slug)
              : state.items.map((item) => (item.slug === slug ? { ...item, qty } : item)),
        })),
      remove: (slug) =>
        set((state) => ({ items: state.items.filter((item) => item.slug !== slug) })),
      clear: () => set({ items: [] }),
    }),
    { name: "pso-cart" },
  ),
);

export function useCartReady() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    if (useCart.persist.hasHydrated()) {
      setReady(true);
      return;
    }
    const unsub = useCart.persist.onFinishHydration(() => setReady(true));
    return unsub;
  }, []);
  return ready;
}

export type LocalLead = {
  kind: string;
  at: string;
  fields: Record<string, string>;
};

export function saveLocalLead(lead: LocalLead) {
  const current = readLocalLeads();
  current.unshift(lead);
  localStorage.setItem("pso-leads", JSON.stringify(current.slice(0, 40)));
}

export function readLocalLeads(): LocalLead[] {
  try {
    const raw = localStorage.getItem("pso-leads");
    if (!raw) return [];
    const parsed = JSON.parse(raw) as LocalLead[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export type LocalOrder = {
  id: string;
  at: string;
  city: string;
  name: string;
  phone: string;
  items: { slug: string; title: string; qty: number; price: number }[];
  total: number;
};

export function saveLocalOrder(order: LocalOrder) {
  const current = readLocalOrders();
  current.unshift(order);
  localStorage.setItem("pso-orders", JSON.stringify(current.slice(0, 30)));
}

export function readLocalOrders(): LocalOrder[] {
  try {
    const raw = localStorage.getItem("pso-orders");
    if (!raw) return [];
    const parsed = JSON.parse(raw) as LocalOrder[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}
