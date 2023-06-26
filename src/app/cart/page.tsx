import { Metadata } from "next";
import helpers from "@/styles/helpers.module.css";
import Films from "./films";
import BoxWrapper from "@/components/Box/Box";
import styles from "./page.module.css";
import cn from "classnames";

import Total from "./total";

export const metadata: Metadata = {
  title: "О нас",
};

export default function Cart() {
  return (
    <div className={cn(helpers.container, styles.cart)}>
      <div className={styles.cart__films}>
        <Films />
      </div>
      <Total />
    </div>
  );
}
