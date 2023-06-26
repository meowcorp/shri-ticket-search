"use client";

import { useSelector } from "react-redux";
import { useGetFilmsQuery } from "@/store/features/cart/filmsApi";
import { CartState, CartSlice } from "@/store/features/cart/cartSlice";
import FilmEntity from "./components/FilmEntity";

export default function FilmList() {
  const filter = useSelector<CartSlice, CartState["filter"]>(
    ({ cart }) => cart.filter
  );

  const { data, error, isLoading } = useGetFilmsQuery(filter.cinemaId, {
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
        }),
      ...rest,
    }),
  });

  const renderFilms = () => {
    if (!data) return null;

    if (data.length === 0) return <div>Билетов нет :(</div>;

    return data.map((film) => <FilmEntity key={film.id} film={film} />);
  };

  if (error) return <div>Ошибка</div>;

  return <>{isLoading ? <div>Загрузка...</div> : renderFilms()}</>;
}
