"use client";

import { FilmGenre, GenreLocalization } from "@/models/Film";
import Link from "next/link";
import BoxWrapper from "@/components/Box/Box";
import Image from "next/image";

import styles from "./FilmCard.module.css";
import textVariants from "@/styles/textVariants.module.css";
import cn from "classnames";
import Icon from "@/components/Icon/Icon";
import QuantityPicker, {
  QuantityChangeProps,
} from "@/components/QuantityPicker/QuantityPicker";

export interface Props extends QuantityChangeProps {
  title: string;
  href: string;
  posterUrl: string;
  genre: FilmGenre;
  onDelete?: () => void;
}

export default function FilmCard({
  title,
  href,
  posterUrl,
  quantity = 0,
  genre,
  onChangeQuantity,
  onDelete,
}: Props) {
  return (
    <BoxWrapper>
      <div className={styles.filmCard}>
        <div className={styles.filmCard__img}>
          <Image fill src={posterUrl} alt={title} />
        </div>
        <div className={styles.filmCard__content}>
          <h3 className={cn(textVariants.text, styles.filmCard__title)}>
            <Link href={href}>{title}</Link>
          </h3>
          <i className={cn(textVariants.text, styles.filmCard__subTitle)}>
            {GenreLocalization[genre] ?? ""}
          </i>
        </div>
        <div className={styles.filmCard__controls}>
          <QuantityPicker
            quantity={quantity}
            onChangeQuantity={onChangeQuantity}
          />
          {onDelete && (
            <button
              className={styles.filmCard__deleteButton}
              onClick={onDelete}
            >
              <Icon.Remove />
            </button>
          )}
        </div>
      </div>
    </BoxWrapper>
  );
}
