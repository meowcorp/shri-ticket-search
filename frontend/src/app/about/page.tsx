import { Metadata } from "next";
import BoxWrapper from "@/components/Box/Box";
import cn from "classnames";

import textVariants from "@/styles/textVariants.module.css";
import styles from "./page.module.css";
import helpers from "@/styles/helpers.module.css";

export const metadata: Metadata = {
  title: "О нас",
};

export default function AboutPage() {
  return (
    <div className={helpers.container}>
      <BoxWrapper className={styles.aboutPage}>
        <h2 className={cn(textVariants.text, textVariants.textTitle)}>О нас</h2>
        <p className={cn(textVariants.text, styles.aboutPage__text)}>
          Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть
          фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных
          видео и интересные факты, поставить фильмам оценки, написать рецензии
          и дополнить описание фильмов.
        </p>
        <p className={cn(textVariants.text, styles.aboutPage__text)}>
          был запущен в 2003 году. Портал предоставляет пользователям информацию
          о фильмах и их создателях, новости кино, интервью с актерами и другими
          знаменитостями, рецензии пользователей, расписание сеансов в
          кинотеатрах, ТВ-программу и другие разделы.
        </p>
        <p className={cn(textVariants.text, styles.aboutPage__text)}>
          Сайт был создан 7 ноября 2003 года, его основатели — Виталий Таций и
          Дмитрий Суханов. Владельцем проекта являлась компания ООО
          «Билетопоиск», которой принадлежало 60 % акций проекта, 40 % акций
          принадлежало её совладельцу — французской компании ООО AlloCiné. 15
          октября 2013 года сервис купила компания «Яндекс» (размер сделки — $80
          млн, около 2,6 млрд рублей на то время).
        </p>
      </BoxWrapper>
    </div>
  );
}
