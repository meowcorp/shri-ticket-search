import { createSelector } from "reselect";
import { FilmEntry } from "@/models/Film";
import { CartState } from "@/store/features/cart/cartSlice";

export const selectFilterFilms = createSelector(
  [(state) => state.cart.items, (state) => state.cart.filter],
  (cart, filter): FilmEntry[] => {
    const { name, cinemaName, genre } = filter;

    return cart;
  }
);
