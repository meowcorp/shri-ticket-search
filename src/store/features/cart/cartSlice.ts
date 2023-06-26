import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { FilmEntry, FilmGenre } from "@/models/Film";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";

export interface Filter {
  name: string | null;
  cinemaId: string | null;
  genre: FilmGenre | null;
}

export interface CartItem extends FilmEntry {
  quantity: number;
}

export interface CartState {
  items: FilmEntry[];
  cartItems: CartItem[];
  filter: Filter;
  total: number;
}

const initialState: CartState = {
  items: [],
  cartItems: [],
  total: 0,
  filter: {
    genre: null,
    name: null,
    cinemaId: null,
  },
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state: CartState, action: PayloadAction<FilmEntry>) => {
      const cartEntity = state.cartItems.find(
        ({ id }) => action.payload.id === id
      );

      if (cartEntity) {
        cartEntity.quantity += 1;
      } else {
        state.cartItems.push({
          quantity: 1,
          ...action.payload,
        });
      }

      state.total += 1;
    },

    removeFromCart(state: CartState, action: PayloadAction<FilmEntry>) {
      const cartEntity = state.cartItems.find(
        ({ id }) => action.payload.id === id
      );

      if (!cartEntity) return;

      if (cartEntity.quantity === 1) {
        state.cartItems = state.cartItems.filter((film) => film !== cartEntity);
      } else {
        cartEntity.quantity -= 1;
      }

      state.total -= 1;
    },

    deleteAllQuantityFromCart(
      state: CartState,
      action: PayloadAction<FilmEntry>
    ) {
      const cartEntity = state.cartItems.find(
        ({ id }) => action.payload.id === id
      );

      state.total -= cartEntity ? cartEntity.quantity : 0;
      state.cartItems = state.cartItems.filter((item) => item !== cartEntity);
    },

    changeCinemaFilter(
      state: CartState,
      action: PayloadAction<Filter["cinemaId"]>
    ) {
      state.filter.cinemaId = action.payload;
    },

    changeNameFilter(state: CartState, action: PayloadAction<Filter["name"]>) {
      state.filter.name = action.payload;
    },

    changeGenreFilter(
      state: CartState,
      action: PayloadAction<Filter["genre"]>
    ) {
      state.filter.genre = action.payload;
    },
  },
});

export const useFilmQuantity = (film: FilmEntry) => {
  const quantity = useSelector<CartSlice, number>((state) => {
    const cartItem = state.cart.cartItems.find(({ id }) => id === film.id);
    return cartItem ? cartItem.quantity : 0;
  });

  const dispatch = useDispatch();

  const incQuantity = useCallback(
    () => dispatch(addToCart(film)),
    [film, dispatch]
  );
  const decQuantity = useCallback(
    () => dispatch(removeFromCart(film)),
    [film, dispatch]
  );

  return { quantity, incQuantity, decQuantity };
};

export const useTotal = () => {
  const total = useSelector<CartSlice, number>((state) => state.cart.total);

  return total;
};

export const {
  addToCart,
  removeFromCart,
  changeCinemaFilter,
  changeNameFilter,
  changeGenreFilter,
  deleteAllQuantityFromCart,
} = cartSlice.actions;

export type CartSlice = {
  cart: CartState;
};

export default cartSlice.reducer;
