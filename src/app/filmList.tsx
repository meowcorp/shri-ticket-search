"use client";

import FilmCard from "@/components/FilmCard/FilmCard";

import { FilmEntry, FilmGenre } from "@/models/Film";
import { useSelector } from "react-redux";
import { useGetFilmsQuery } from "@/store/features/cart/filmsApi";
import { CartState, CartSlice } from "@/store/features/cart/cartSlice";
import { useGetCinemaQuery } from "@/store/features/cart/filmsApi";
import FilmEntity from "./components/FilmEntity";

export default function FilmList() {
  const filter = useSelector<CartSlice, CartState["filter"]>(
    ({ cart }) => cart.filter
  );

  const {data: cinemaData} = useGetCinemaQuery()

  const { data, error, isLoading } = useGetFilmsQuery(undefined, {
    selectFromResult: ({ data, ...rest }) => ({
      data: data
        ?.filter(({ title }) => {
          if (!filter.name || filter.name.trim().length < 1) return true;

          return title
            .toLowerCase()
            .startsWith(filter.name.toLowerCase().trim());
        })
        .filter(({ genre }) => {
          if (!filter.genre) return true;

          return genre === filter.genre;
        })
        .filter(({id}) => {
          if (!filter.cinemaId) return true;

          const cinema = cinemaData?.find(({id}) => filter.cinemaId === id)
          if (!cinema) return true;

          return cinema.movieIds.includes(id)
        }),
      ...rest,
    }),
  });



  const renderFilms = () => {
    if (!data) return null;

    return data.map((film) => (
      <FilmEntity key={film.id} film={film} />
    ));
  };

  if (error) return <div>Ошибка</div>;

  return <>{isLoading ? <div>Загрузка...</div> : renderFilms()}</>;
}
