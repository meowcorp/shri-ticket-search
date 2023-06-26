import { ReviewId } from "@/models/Review";

export enum FilmGenre {
  FANTASY = "FANTASY",
  HORROR = "HORROR",
  ACTION = "ACTION",
  COMEDY = "COMEDY",
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

export const GenreLocalization: Record<string, string> = {
  [FilmGenre.FANTASY]: "Фэнтези",
  [FilmGenre.HORROR]: "Хоррор",
  [FilmGenre.ACTION]: "Экшен",
  [FilmGenre.COMEDY]: "Комедия",
};
