"use client";

import Badge from "@/components/Badge/Badge";
import { useTotal } from "@/store/features/cart/cartSlice";

export default function TotalBadge() {
  const total = useTotal();

  if (total === 0) return null;

  return <Badge value={total} />;
}
