"use client";

import BoxWrapper from "@/components/Box/Box";

import styles from './page.module.css'
import { useTotal } from "@/store/features/cart/cartSlice";

export default function Total () {
    const total = useTotal()

    return (
      <BoxWrapper className={styles.cart__total}>
        <span>Итого билетов:</span>
        <span>{total}</span>
      </BoxWrapper>
    )
}