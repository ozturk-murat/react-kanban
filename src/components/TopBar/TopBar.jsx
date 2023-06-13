import React, { useState } from "react";
import styles from "./topbar.module.scss";
import { HiOutlineViewBoards, HiOutlineSearch } from "react-icons/hi";
import ProducterIcon from "../../../public/icons/producter";
import { SlEqualizer } from "react-icons/sl";
import { BiFilterAlt } from "react-icons/bi";
import { CiFilter, CiSquarePlus } from "react-icons/ci";
import AddTaskCard from "../AddTaskCard/AddTaskCard";

function TopBar() {
  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);

  const handleAddTaskToggle = () => {
    setIsAddTaskOpen(!isAddTaskOpen);
  };

  const handleAddTaskSubmit = () => {
    setIsAddTaskOpen(false);
  };

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
            <button
              type="button"
              className={
                styles.topbar__header__left_side__icon__controls__control
              }
            >
              <SlEqualizer size={18}/>
            </button>

            <button
              type="button"
              className={
                styles.topbar__header__left_side__icon__controls__filter
              }
            >
              <BiFilterAlt size={18} />
            </button>
          </div>
        </div>

        {/* RIGHT SIDE OF TOP BAR*/}
        <div className={styles.topbar__header__right_side}>
          <div
            className={styles.topbar__header__right_side__add_task}
            onClick={handleAddTaskToggle}
          >
            <CiSquarePlus />
          </div>
        </div>
      </div>
      {isAddTaskOpen && <AddTaskCard onClose={handleAddTaskSubmit} />}
    </nav>
  );
}

export default TopBar;
