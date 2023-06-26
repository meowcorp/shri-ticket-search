"use client";

import { FilmEntry } from "@/models/Film"
import { FILM_QUANTITY_CHANGE } from "@/components/QuantityPicker/QuantityPicker"
import FilmCard from "@/components/FilmCard/FilmCard"
import { deleteAllQuantityFromCart, removeFromCart, useFilmQuantity } from "@/store/features/cart/cartSlice"
import { useCallback, useRef, useState } from "react";
import { createPortal } from "react-dom";
import ConfirmModal from "@/components/ConfirmModal/ConfirmModal";
import { useDispatch } from "react-redux";

import styles from './cartFilmEntity.module.css'

export default function CartFilmEntity({film}: {film: FilmEntry}) {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const {quantity,incQuantity,decQuantity} = useFilmQuantity(film)

    const dispatch = useDispatch();
  
    const onChangeQuantity = (type: FILM_QUANTITY_CHANGE) => {
        if (type === FILM_QUANTITY_CHANGE.ADD) {
            incQuantity()
        } else if (type === FILM_QUANTITY_CHANGE.DELETE && quantity <= 1) { 
            setIsModalOpen(true)
        } else if (type === FILM_QUANTITY_CHANGE.DELETE) {
            decQuantity()
        }
    }

    const confirmDelete = () => {
        dispatch(deleteAllQuantityFromCart(film))
        setIsModalOpen(false)
    }

    const closeModal = () => setIsModalOpen(false)

    const onDelete = () => {
        setIsModalOpen(true);
    }

    const onBackgroundClose = (e: React.MouseEvent) => {
        if (e.target !== e.currentTarget) return;
        closeModal();
    }


    const renderDropdown = () => {
        return (
            <div className={styles.modalContainer} onClick={onBackgroundClose}>
                <ConfirmModal 
                    title="Удаление билета" 
                    description="Вы уверены, что хотите удалить билет?" 
                    onConfirm={confirmDelete} 
                    onCancel={closeModal}
                />
            </div>
        )
    }

    return (
        <>
            <FilmCard
                key={film.id}
                href={`film/${film.id}`}
                quantity={quantity}
                onChangeQuantity={onChangeQuantity}
                onDelete={onDelete}
                {...film}
            />
            {isModalOpen && createPortal(renderDropdown(), document.querySelector<HTMLDivElement>("#reactPortalModal")!)}
        </>
    )
  }