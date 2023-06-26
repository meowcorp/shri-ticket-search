"use client";

import QuantityPicker, { FILM_QUANTITY_CHANGE } from "@/components/QuantityPicker/QuantityPicker";
import { CartSlice, removeFromCart } from "@/store/features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/store/features/cart/cartSlice";
import { FilmEntry } from "@/models/Film";

export default function FilmCartQuantity ({film} : {film: FilmEntry}) {
    const quantity = useSelector<CartSlice, number>((state) => {
        const cartItem = state.cart.cartItems.find(({id}) => id === film.id)
        return cartItem ? cartItem.quantity : 0;
    })

    const dispatch = useDispatch();

    const onChangeQuantity = (type: FILM_QUANTITY_CHANGE) => {
        if (type === FILM_QUANTITY_CHANGE.ADD) {
            dispatch(addToCart(film))
        } else if (type === FILM_QUANTITY_CHANGE.DELETE) {
            dispatch(removeFromCart(film))
        }
    }

    return (
        <QuantityPicker quantity={quantity} onChangeQuantity={onChangeQuantity}/>
    )
}