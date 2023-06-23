import React from "react";
import Link from "next/link";
import cs from "classnames";

import styles from "./Layout.module.css";
import helpers from "@/styles/helpers.module.css";
import textVariants from "@/styles/textVariants.module.css";
import Icon from "@/components/Icon/Icon";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header className={styles.pageHeader}>
        <div className={cs(helpers.container, styles.pageHeader__container)}>
          <h2 className={cs(textVariants.text, textVariants.textTitle)}>
            <Link href="/" className="link">
              Билетопоиск
            </Link>
          </h2>
          <Link href="/" aria-label="Список покупок">
            <Icon.ShoppingCart />
          </Link>
        </div>
      </header>
      <main className={styles.pageMain}>
        <div className={cs(helpers.container, styles.pageMain__container)}>
          {children}
        </div>
      </main>
      <footer className={styles.pageFooter}>
        <div className={cs(helpers.container, styles.pageFooter__container)}>
          <a href="">Вопросы-ответы</a>
          <a href="">О нас</a>
        </div>
      </footer>
    </>
  );
};

export default Layout;
