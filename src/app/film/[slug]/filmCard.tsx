"use client";

import Image from "next/image";
import cn from "classnames";

import BoxWrapper from "@/components/Box/Box";
import { FilmEntry, GenreLocalization } from "@/models/Film";
import QuantityPicker from "@/components/QuantityPicker/QuantityPicker";

import textVariants from "@/styles/textVariants.module.css";
import styles from "./filmCard.module.css";

interface Props {
  film: FilmEntry;
  quantity: number;
}

export default function FilmCard({ film, quantity }: Props) {
  return (
    <BoxWrapper className={styles.filmCard}>
      <Image
        src={film.posterUrl}
        alt={film.title}
        width={400}
        height={500}
        className={styles.filmCard__image}
      />
      <div>
        <div className={styles.filmCard__heading}>
          <h2 className={cn(textVariants.text, textVariants.textHeading)}>
            {film.title}
          </h2>
          <QuantityPicker quantity={quantity} />
        </div>
        <dl className={styles.filmCard__fields}>
          <div className={styles.filmCard__field}>
            <dt>Жанр:</dt>
            <dd>{GenreLocalization[film.genre]}</dd>
          </div>
          <div className={styles.filmCard__field}>
            <dt>Год выпуска:</dt>
            <dd>{film.releaseYear}</dd>
          </div>
          <div className={styles.filmCard__field}>
            <dt>Рейтинг:</dt>
            <dd>{film.rating}</dd>
          </div>
          <div className={styles.filmCard__field}>
            <dt>Режиссер:</dt>
            <dd>{film.director}</dd>
          </div>
        </dl>
        <div>
          <h3 className={cn(textVariants.text, styles.filmCard__subtitle)}>
            Описание
          </h3>
          <p className={cn(textVariants.text, styles.filmCard__description)}>
            {film.description}
          </p>
        </div>
      </div>
    </BoxWrapper>
  );
}
