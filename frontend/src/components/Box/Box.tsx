import React from "react";
import styles from "./Box.module.css";
import cs from "classnames";

export default function BoxWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cs(styles.boxWrapper, className)}>{children}</div>;
}
