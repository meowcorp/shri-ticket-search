import { HTMLAttributes } from "react";
import BoxWrapper from "../Box/Box";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";

import styles from "./ConfirmModal.module.css";

interface Props extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ConfirmModal({
  title,
  description,
  onConfirm,
  onCancel,
  confirmLabel = "Да",
  cancelLabel = "Нет",
  style,
  ...rest
}: Props) {
  return (
    <BoxWrapper {...rest}>
      <div className={styles.modal__header}>
        <h2 className={styles.modal__title}>{title}</h2>
        <button onClick={onCancel} className={styles.modal__close}>
          <Icon.Remove />
        </button>
      </div>
      <p className={styles.modal__description}>{description}</p>
      <div className={styles.modal__buttons}>
        <Button onClick={onConfirm}>{confirmLabel}</Button>
        <Button variant="outline" onClick={onCancel}>
          {cancelLabel}
        </Button>
      </div>
    </BoxWrapper>
  );
}
