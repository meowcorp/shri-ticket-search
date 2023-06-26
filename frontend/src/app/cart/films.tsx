"use client";

import { useSelector } from "react-redux";
import { CartItem, CartSlice } from "@/store/features/cart/cartSlice";
import CartFilmEntity from "./cartFilmEntity";

import styles from "./cartFilmEntity.module.css";

export default function Films() {
  const cart = useSelector<CartSlice, CartItem[]>(
    (state) => state.cart.cartItems
  );

  if (cart.length === 0)
    return <h2 className={styles.cartEmpty}>В корзине пусто</h2>;

  const renderFilmCards = () => {
    return cart.map((film) => <CartFilmEntity key={film.id} film={film} />);
  };

  return <>{renderFilmCards()}</>;
}
