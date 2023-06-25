"use client";

import React, { createContext, useCallback, useContext, useState } from "react";
import cn from "classnames";
import BoxWrapper from "@/components/Box/Box";
import Icon from "@/components/Icon/Icon";

import textVariants from "@/styles/textVariants.module.css";
import styles from "./Accordion.module.css";

interface AccordionItemProps {
  header: string;
  index: number;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

interface AccordionProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

type changeIndexFn = (newIndex: number) => void;

const AccordionContext = createContext<number>(-1);
const AccordionChangeContext = createContext<changeIndexFn>(null);

const Accordion = ({ children }: AccordionProps) => {
  const [currentIndex, setCurrentIndex] = useState(-1);

  const changeIndex: changeIndexFn = useCallback((newIndex) => {
    setCurrentIndex((index) => {
      return newIndex === index ? -1 : newIndex;
    });
  }, []);

  return (
    <AccordionContext.Provider value={currentIndex}>
      <AccordionChangeContext.Provider value={changeIndex}>
        <ul className={styles.accordion__list}>{children}</ul>
      </AccordionChangeContext.Provider>
    </AccordionContext.Provider>
  );
};

export function AccordionItem({
  header,
  children,
  className,
  style,
  index,
}: AccordionItemProps) {
  const currentIndex = useContext(AccordionContext);
  const setCurrentIndex = useContext(AccordionChangeContext);

  const isOpen = currentIndex === index;

  const onHeadingClick = () => {
    setCurrentIndex(index);
  };

  return (
    <li style={style} className={className}>
      <BoxWrapper>
        <button
          className={cn(styles.accordion__heading)}
          onClick={onHeadingClick}
        >
          <h3 className={cn(textVariants.text, styles.accordion__title)}>
            {header}
          </h3>
          {isOpen ? (
            <Icon.DropdownTop
              className={styles.accordion__icon}
              width={32}
              height={32}
            />
          ) : (
            <Icon.DropdownBottom
              className={styles.accordion__icon}
              width={32}
              height={32}
            />
          )}
        </button>
        <div
          className={cn(styles.accordion__content, {
            [styles.accordion__content_open]: isOpen,
          })}
        >
          <p className={cn(textVariants.text, styles.accordion__text)}>
            {children}
          </p>
        </div>
      </BoxWrapper>
    </li>
  );
}

export default Accordion;
