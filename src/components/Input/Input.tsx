import { forwardRef, InputHTMLAttributes } from "react";
import { SFProText } from "@/fonts";
import cs from "classnames";
import styles from "./Input.module.css";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  containerClassName?: string;
}

const Input = forwardRef<HTMLInputElement, Props>(function Input(
  { label, containerClassName, className, ...rest },
  ref
) {
  return (
    <label className={cs(styles.input, containerClassName)}>
      {Boolean(label) && (
        <span className={cs(styles.input__label, SFProText.className)}>
          {label}
        </span>
      )}
      <input
        ref={ref}
        className={cs(styles.input__nativeInput, className)}
        {...rest}
      />
    </label>
  );
});

export default Input;
