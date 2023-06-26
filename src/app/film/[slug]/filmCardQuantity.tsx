"use client";

import QuantityPicker, { FILM_QUANTITY_CHANGE } from "@/components/QuantityPicker/QuantityPicker";
import { CartSlice, removeFromCart, useFilmQuantity } from "@/store/features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/store/features/cart/cartSlice";
import { FilmEntry } from "@/models/Film";

export default function FilmCartQuantity ({film} : {film: FilmEntry}) {
    const {quantity, incQuantity, decQuantity} = useFilmQuantity(film)

    const onChangeQuantity = (type: FILM_QUANTITY_CHANGE) => {
        if (type === FILM_QUANTITY_CHANGE.ADD) {
            incQuantity()
        } else if (type === FILM_QUANTITY_CHANGE.DELETE) {
            decQuantity()
        }
    }

    return (
        <QuantityPicker quantity={quantity} onChangeQuantity={onChangeQuantity}/>
    )
}