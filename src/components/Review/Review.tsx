import React from "react";

import BoxWrapper from "@/components/Box/Box";
import Icon from "@/components/Icon/Icon";
import cn from "classnames";
import { Review } from "@/models/Review";

import styles from "./Review.module.css";
import textVariants from "@/styles/textVariants.module.css";

interface Props {
  review: Review;
  className?: string;
  style?: React.CSSProperties;
}

export default function Review({ review, className, ...rest }: Props) {
  return (
    <BoxWrapper className={cn(styles.review, className)} {...rest}>
      <div className={styles.emptyAvatar}>
        <Icon.Image />
      </div>
      <div className={styles.review__content}>
        <div className={styles.review__heading}>
          <h3 className={cn(textVariants.text, styles.review__author)}>
            {review.name}
          </h3>
          <span className={styles.rateText}>
            <span className={styles.rateText__label}>Оценка:</span>
            <span className={styles.rateText__number}>{review.rating}</span>
          </span>
        </div>
        <p className={styles.review__description}>{review.text}</p>
      </div>
    </BoxWrapper>
  );
}
