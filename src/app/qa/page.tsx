import helpers from "@/styles/helpers.module.css";
import Accordion, { AccordionItem } from "@/components/Accordion/Accordion";
import cn from "classnames";
import textVariants from "@/styles/textVariants.module.css";
import React from "react";
import BoxWrapper from "@/components/Box/Box";

import styles from "./page.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Вопрос-ответ",
};

export default function QA() {
  return (
    <div className={helpers.container}>
      <BoxWrapper className={styles.qa__heading}>
        <h3 className={cn(textVariants.text, textVariants.textHeading)}>
          Вопросы-ответы
        </h3>
      </BoxWrapper>

      <Accordion>
        <AccordionItem header="Что такое Билетопоиск?" index={0}>
          Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть
          фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных
          видео и интересные факты, поставить фильмам оценки, написать рецензии
          и дополнить описание фильмов.
        </AccordionItem>
        <AccordionItem
          header="Какой компании принадлежит Билетопоиск?"
          index={1}
        >
          Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть
          фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных
          видео и интересные факты, поставить фильмам оценки, написать рецензии
          и дополнить описание фильмов.
        </AccordionItem>
        <AccordionItem header="Как купить билет на Билетопоиск?" index={2}>
          Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть
          фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных
          видео и интересные факты, поставить фильмам оценки, написать рецензии
          и дополнить описание фильмов.
        </AccordionItem>
        <AccordionItem header="Как оставить отзыв на Билетопоиск?" index={3}>
          Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть
          фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных
          видео и интересные факты, поставить фильмам оценки, написать рецензии
          и дополнить описание фильмов.
        </AccordionItem>
      </Accordion>
    </div>
  );
}
