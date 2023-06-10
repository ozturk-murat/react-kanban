import React from "react";
import styles from "./topbar.module.scss";
import { HiOutlineViewBoards, HiOutlineSearch } from "react-icons/hi";
import ProducterIcon from "../../../public/producter";
import { SlEqualizer } from "react-icons/sl";

import { CiFilter, CiSquarePlus } from "react-icons/ci";

function TopBar() {
  return (
    <nav className={styles.topbar}>
      <div className={styles.topbar__header}>
        {/* LEFT SIDE OF TOP BAR*/}
        <div className={styles.topbar__header__left_side}>
          <a href={"/"} className={styles.topbar__header__left_side__icon}>
            <ProducterIcon
              className={styles.topbar__header__left_side__icon__icon}
              alt="Producter Logo"
            />
            <span className={styles.topbar__header__left_side__icon__brand}>
              Producter
            </span>
          </a>
          <div
            className={styles.topbar__header__left_side__icon__divider}
          ></div>
          <form
            action="#"
            method="GET"
            className={styles.topbar__header__left_side__icon__form}
          >
            <div
              className={styles.topbar__header__left_side__icon__form__search}
            >
              <div
                className={
                  styles.topbar__header__left_side__icon__form__search__icon
                }
              >
                <HiOutlineSearch />
              </div>
              <input
                type="text"
                name="email"
                id="topbar-search"
                className={
                  styles.topbar__header__left_side__icon__form__search__input
                }
                placeholder="Search"
              />
            </div>
          </form>
          <div className={styles.topbar__header__left_side__icon__controls}>
          <button type="button" className={styles.topbar__header__left_side__icon__controls__control}>
            <SlEqualizer/>
          </button>

          <button type="button" className={styles.topbar__header__left_side__icon__controls__filter}>
            <CiFilter/>
          </button>
          </div>
        </div>

        {/* RIGHT SIDE OF TOP BAR*/}
        <div className={styles.topbar__header__right_side}>
          <div className={styles.topbar__header__right_side__add_task}>
            <CiSquarePlus/>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default TopBar;
