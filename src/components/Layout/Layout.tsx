import React from "react";
import Link from "next/link";
import cs from "classnames";

import styles from "./Layout.module.css";
import helpers from "@/styles/helpers.module.css";
import textVariants from "@/styles/textVariants.module.css";
import Icon from "@/components/Icon/Icon";

interface Props {
  children: React.ReactNode;
  cartBadge?: React.ReactNode;
}

const Layout = ({ children, cartBadge }: Props) => {
  return (
    <>
      <header className={styles.pageHeader}>
        <div className={cs(helpers.container, styles.pageHeader__container)}>
          <h2 className={cs(textVariants.text, textVariants.textTitle)}>
            <Link href="/" className="link">
              Билетопоиск
            </Link>
          </h2>
          <div className={styles.pageHeader__cartContainer}>
            {cartBadge}
            <Link href="/cart" aria-label="Список покупок">
              <Icon.ShoppingCart />
            </Link>
          </div>
        </div>
      </header>
      <main className={styles.pageMain}>
        <div className={styles.pageMain__wrapper}>{children}</div>
      </main>
      <footer className={styles.pageFooter}>
        <div className={cs(helpers.container, styles.pageFooter__container)}>
          <Link href="/qa">Вопросы-ответы</Link>
          <Link href="/about">О нас</Link>
        </div>
      </footer>
    </>
  );
};

export default Layout;
