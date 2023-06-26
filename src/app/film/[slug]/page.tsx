import { FilmEntry, GenreLocalization } from "@/models/Film";

import { BASE_URL } from "@/store/features/cart/filmsApi";

import { Review as ReviewModel, Review } from "@/models/Review";
import ReviewBlock from "@/components/Review/Review";
import cn from "classnames";

import helpers from "@/styles/helpers.module.css";
import styles from "./page.module.css";

import Image from "next/image";

import BoxWrapper from "@/components/Box/Box";

import textVariants from "@/styles/textVariants.module.css";
import FilmCardQuantity from "./filmCardQuantity";

interface Props {
  params: { slug: string };
}

async function getFilm(slug: string): Promise<FilmEntry> {
  const film = await fetch(`${BASE_URL}/movie?movieId=${slug}`);
  return film.json();
}

async function getReview(slug: string): Promise<Review[]> {
  const film = await fetch(`${BASE_URL}/reviews?movieId=${slug}`);
  return film.json();
}

export default async function Film({ params }: Props) {
  const filmData = getFilm(params.slug);
  const reviewData = getReview(params.slug);

  const [film, reviews] = await Promise.all([filmData, reviewData]);

  const renderReviews = () => {
    return reviews.map((review) => (
      <ReviewBlock key={review.id} review={review} />
    ));
  };

  return (
    <div className={cn(helpers.container, styles.film)}>
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
            <FilmCardQuantity film={film} />
          </div>
          <dl className={styles.filmCard__fields}>
            <div className={styles.filmCard__field}>
              <dt>Жанр:</dt>
              <dd>{GenreLocalization[film.genre.toUpperCase()]}</dd>
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
      {renderReviews()}
    </div>
  );
}
