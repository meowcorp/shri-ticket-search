import { FilmGenre, GenreLocalization } from "@/models/Film";
import Link from "next/link";
import BoxWrapper from "@/components/Box/Box";
import Image from "next/image";

import styles from "./FilmCard.module.css";
import textVariants from "@/styles/textVariants.module.css";
import cs from "classnames";

export enum FILM_QUANTITY_CHANGE {
  DELETE = "delete",
  ADD = "add",
}

export interface Props {
  title: string;
  href: string;
  posterUrl: string;
  genre: FilmGenre;
  quantity: number;
  canDelete: boolean;
  onChangeQuantity?: (type: FILM_QUANTITY_CHANGE) => void;
}

export default function FilmCard({
  title,
  href,
  posterUrl,
  quantity,
  genre,
}: Props) {
  return (
    <BoxWrapper>
      <div className={styles.filmCard}>
        <div className={styles.filmCard__img}>
          <Image fill src={posterUrl} alt={title} />
        </div>
        <div className={styles.filmCard__content}>
          <h3 className={cs(textVariants.text, styles.filmCard__title)}>
            <Link href={href}>{title}</Link>
          </h3>
          <i className={cs(textVariants.text, styles.filmCard__subTitle)}>
            {GenreLocalization[genre] ?? ""}
          </i>
        </div>
        <div className={styles.filmCard__controls}>
          <button className="btn btn-control btn-disabled">-</button>
          <span className="film-card-quantity">{quantity}</span>
          <button className="btn btn-control">-</button>
        </div>
      </div>
    </BoxWrapper>
  );
}
