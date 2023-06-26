import Filter from "@/app/filter";
import { Metadata } from "next";
import cn from "classnames";

import styles from "./page.module.css";
import helpers from "@/styles/helpers.module.css";
import FilmList from "@/app/filmList";
import { BASE_URL } from "@/store/features/cart/filmsApi";
import { Cinema } from "@/models/Cinema";

export const metadata: Metadata = {
  title: "Билетопоиск",
};

export default async function Home() {
  const cinemaRequest = await fetch(`${BASE_URL}/cinemas`)
  const cinemas: Cinema[] = await cinemaRequest.json()

  return (
    <div className={cn(helpers.container, styles.pageContainer)}>
      <h1 className={helpers.visuallyHidden}>Главная</h1>
      <aside className={styles.pageAside}>
        <Filter cinemas={cinemas}/>
      </aside>
      <article className={styles.pageMain}>
        <FilmList />
      </article>
    </div>
  );
}
