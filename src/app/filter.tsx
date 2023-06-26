"use client";

import cs from "classnames";
import Input from "@/components/Input/Input";

import styles from "./filter.module.css";
import textVariants from "@/styles/textVariants.module.css";
import Dropdown from "@/components/Dropdown/Dropdown";
import BoxWrapper from "@/components/Box/Box";
import type { Cinema } from "@/models/Cinema";
import { useDispatch, useSelector } from "react-redux";
import {
  changeCinemaFilter,
  type CartState,
  CartSlice,
  changeGenreFilter,
  changeNameFilter,
} from "@/store/features/cart/cartSlice";
import { FilmGenre, GenreLocalization } from "@/models/Film";
import { DropdownItem } from "@/components/Dropdown/Dropdown";
import { useMemo, useState } from "react";
import { useDebouncedEffect } from "@/hooks/useDebounceEffect";

export default function Filter({ cinemas }: { cinemas?: Cinema[] }) {
  const filter = useSelector<CartSlice, CartState["filter"]>(
    ({ cart }) => cart.filter
  );

  const dispatch = useDispatch();

  const [nameFilter, setNameFilter] = useState(filter.name);

  useDebouncedEffect(() => {
    dispatch(changeNameFilter(nameFilter));
  }, [nameFilter]);

  const cinemasDropdown: DropdownItem[] = useMemo(() => {
    return cinemas
      ? cinemas.map(
          ({ id, name }): DropdownItem => ({ label: name, value: id })
        )
      : [];
  }, [cinemas]);

  const genres = Object.keys(FilmGenre).map(
    (ganre): DropdownItem => ({
      label: GenreLocalization[ganre as keyof typeof FilmGenre],
      value: ganre.toLowerCase(),
    })
  );

  return (
    <BoxWrapper className={styles.filterWrapper}>
      <h3 className={cs(textVariants.textSubtitle, styles.filterHeading)}>
        Фильтр поиска
      </h3>
      <form className={styles.filterGroup}>
        <Input
          placeholder="Введите название"
          label="Название"
          value={nameFilter ?? ""}
          onInput={(e) => setNameFilter((e.target as HTMLInputElement).value)}
        />
        <Dropdown
          selectedValue={filter.genre}
          placeholder="Введите название"
          label="Жанр"
          items={genres}
          onSelect={(item) => dispatch(changeGenreFilter(item.value))}
        />
        <Dropdown
          selectedValue={filter.cinemaId}
          placeholder="Введите название"
          label="Кинотеатр"
          items={cinemasDropdown}
          onSelect={(item) => dispatch(changeCinemaFilter(item.value))}
        />
      </form>
    </BoxWrapper>
  );
}
