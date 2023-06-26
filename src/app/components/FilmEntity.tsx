import type { FilmEntry } from "@/models/Film"
import { useFilmQuantity } from "@/store/features/cart/cartSlice"
import FilmCard from "@/components/FilmCard/FilmCard"
import { FILM_QUANTITY_CHANGE } from "@/components/QuantityPicker/QuantityPicker"

function FilmEntity({film}: {film: FilmEntry}) {
    const {quantity,incQuantity,decQuantity} = useFilmQuantity(film)
  
    const onChangeQuantity = (type: FILM_QUANTITY_CHANGE) => {
        if (type === FILM_QUANTITY_CHANGE.ADD) {
            incQuantity()
        } else if (type === FILM_QUANTITY_CHANGE.DELETE) {
            decQuantity()
        }
    }

    return (
      <FilmCard
          key={film.id}
          href={`film/${film.id}`}
          quantity={quantity}
          onChangeQuantity={onChangeQuantity}
          {...film}
        />
    )
  }


export default FilmEntity