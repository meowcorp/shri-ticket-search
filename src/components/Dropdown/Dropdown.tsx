"use client";

import React, { forwardRef, useEffect, useRef, useState } from "react";
import { mergeRefs } from "react-merge-refs";
import { createPortal } from "react-dom";
import cs from "classnames";
import { SFProText } from "@/fonts";

import styles from "./Dropdown.module.css";
import Icon from "@/components/Icon/Icon";

interface DropdownItem {
  value: string | number;
  label: string;
}

interface Props {
  items: DropdownItem[];
  onSelect: (element: DropdownItem) => void;
  placeholder?: string;
  label?: string;
  selectedValue?: DropdownItem["value"] | null;
}

const Dropdown = forwardRef<HTMLDivElement, Props>(function Dropdown(
  { items, onSelect, selectedValue, label, placeholder = "Placeholder" },
  ref
) {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const dropdownListRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) setIsOpen(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.addEventListener("scroll", handleScroll);
  }, [isOpen]);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!isOpen || !dropdownListRef.current || !dropdownRef.current) return;

      const element = event.target as HTMLElement;

      if (dropdownListRef.current.contains(element)) return;

      event.stopPropagation();
      event.preventDefault();

      setIsOpen(false);
    };

    document.body.addEventListener("click", handleOutsideClick);

    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);

  const handleSelect = (selectedItem: DropdownItem) => {
    onSelect(selectedItem);
    setIsOpen(false);
  };

  const renderDropdown = () => {
    if (!dropdownRef.current) return null;

    const pos = dropdownRef.current.getBoundingClientRect();

    return (
      <ul
        ref={dropdownListRef}
        className={cs(SFProText.className, styles.dropdownList)}
        style={{
          top: window.scrollY + (pos.y + pos.height + 4),
          left: pos.x,
          width: pos.width,
        }}
      >
        {items.map(({ value, label }) => (
          <li key={value}>
            <button
              className={styles.dropdownList__item}
              onClick={() => handleSelect({ value, label })}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    );
  };

  const renderDropdownIcon = () => {
    return isOpen ? <Icon.DropdownTop /> : <Icon.DropdownBottom />;
  };

  const onToggleDropdown = (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    console.log(1);

    setIsOpen((open) => !open);
  };

  const getSelectedLabel = () => {
    const element = items.find(({ value }) => selectedValue === value);

    return element?.label || placeholder;
  };

  return (
    <div ref={mergeRefs([ref, dropdownRef])} className={styles.dropdown}>
      {Boolean(label) && (
        <span className={cs(SFProText.className, styles.dropdown__label)}>
          {label}
        </span>
      )}
      <button
        onClick={onToggleDropdown}
        className={cs(styles.dropdown__input, {
          [styles.dropdown__input_selected]: !!selectedValue,
          [styles.dropdown__input_open]: isOpen,
        })}
      >
        <span className={styles.dropdown__value}>{getSelectedLabel()}</span>
        {renderDropdownIcon()}
      </button>
      {isOpen &&
        createPortal(
          renderDropdown(),
          document.body.querySelector<HTMLDivElement>("#reactPortalDropdown")!
        )}
    </div>
  );
});

export default Dropdown;
