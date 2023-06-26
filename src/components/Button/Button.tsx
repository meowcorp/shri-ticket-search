import React from "react";
import cn from "classnames";

import styles from "./Button.module.css";

type ButtonVariants = "outline" | "icon";
type ButtonSizes = "default" | "small";

interface Props extends React.ComponentPropsWithoutRef<"button"> {
  variant?: ButtonVariants;
  size?: ButtonSizes;
  children: React.ReactNode;
}

const buttonVariantsClasses: Record<ButtonVariants, string> = {
  outline: styles.button_outline,
  icon: styles.button_icon,
};

const buttonSizesClasses: Record<ButtonSizes, string> = {
  default: styles.button_default_size,
  small: styles.button_small_size,
};

export default function Button({
  children,
  className,
  variant,
  size = "default",
  disabled,
  ...rest
}: Props) {
  return (
    <button
      className={cn(
        styles.button,
        variant && buttonVariantsClasses[variant],
        buttonSizesClasses[size],
        { [styles.button_disabled]: disabled },
        className
      )}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
}
