import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/store/features/cart/cartSlice";
import { filmsApi } from "./features/cart/filmsApi";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [filmsApi.reducerPath]: filmsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(filmsApi.middleware),
});
