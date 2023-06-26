import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { FilmEntry } from "@/models/Film";
import type { Cinema } from "@/models/Cinema";

export const BASE_URL = "http://localhost:3001/api";

export const filmsApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getFilms: builder.query<FilmEntry[], Cinema["id"] | undefined | null>({
      query: (id) => ({
        url: "movies",
        params: {
          cinemaId: id,
        },
      }),
    }),
  }),
});

export const { useGetFilmsQuery } = filmsApi;
