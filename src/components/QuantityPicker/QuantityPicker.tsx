"use client";

import Button from "@/components/Button/Button";
import Icon from "@/components/Icon/Icon";
import React from "react";

import styles from "./QuantityPicker.module.css";

export enum FILM_QUANTITY_CHANGE {
  DELETE = "delete",
  ADD = "add",
}

export interface QuantityChangeProps {
  quantity: number;
  onChangeQuantity?: ((type: FILM_QUANTITY_CHANGE) => void) | undefined;
}

interface Props extends QuantityChangeProps {
  className?: string;
  style?: React.CSSProperties;
}

export default function QuantityPicker({
  quantity = 0,
  onChangeQuantity,
}: Props) {
  return (
    <div className={styles.quantityPicker}>
      <Button
        variant="icon"
        size="small"
        disabled={quantity <= 0}
        onClick={() => onChangeQuantity?.(FILM_QUANTITY_CHANGE.DELETE)}
      >
        <Icon.Minus />
      </Button>
      <span className={styles.quantityPicker__quantity}>{quantity}</span>
      <Button
        variant="icon"
        size="small"
        onClick={() => onChangeQuantity?.(FILM_QUANTITY_CHANGE.ADD)}
      >
        <Icon.Plus />
      </Button>
    </div>
  );
}
