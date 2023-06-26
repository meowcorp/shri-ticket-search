import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { FilmEntry } from "@/models/Film";

export interface CartState {
  cart: FilmEntry[];
  filteredCart: FilmEntry[];
}

const initialState: CartState = {
  cart: [],
  filteredCart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state: CartState, action: PayloadAction<FilmEntry>) => {
      state.cart.push(action.payload);
    },

    removeFromCart(state: CartState, action: PayloadAction<FilmEntry>) {
      state.cart = state.cart.filter(({ id }) => action.payload.id !== id);
    },
  },
});
