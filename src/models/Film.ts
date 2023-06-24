import { ReviewId } from "@/models/Review";

export enum FilmGenre {
  FANTASY = "fantasy",
  HORROR = "horror",
  ACTION = "action",
  COMEDY = "comedy",
}

export interface FilmEntry {
  title: string;
  posterUrl: string;
  releaseYear: number;
  description: string;
  genre: FilmGenre;
  id: string;
  rating: number;
  director: string;
  reviewIds: ReviewId[];
}

export const GenreLocalization = {
  [FilmGenre.FANTASY]: "Фэнтези",
  [FilmGenre.HORROR]: "Хоррор",
  [FilmGenre.ACTION]: "Экшен",
  [FilmGenre.COMEDY]: "Комедия",
};
