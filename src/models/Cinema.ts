type MovieId = string;

interface Cinema {
  id: string;
  name: string;
  movieIds: MovieId[];
}

export type { Cinema, MovieId };
