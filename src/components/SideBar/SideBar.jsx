import React, { useEffect } from "react";
import styles from "./sidebar.module.scss";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setActivePage } from "../../redux/features/slice";

//Icons
import { RxDotFilled } from "react-icons/rx";
import UserImg from "./../../../public/images/neil.png";
import TeamImg from "./../../../public/images/team.png";

//Utils
import { sidebarTopData, sidebarBottomData } from "../../../utils/sideBarData";

function SideBar() {
  const activePage = useSelector((state) => state.activePage);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedActivePage = sessionStorage.getItem("activePage");
    if (savedActivePage) {
      dispatch(setActivePage(savedActivePage));
    }
  }, [dispatch]);

  const handleSetActivePage = (page) => {
    dispatch(setActivePage(page));
    sessionStorage.setItem("activePage", page);
  };

  return (
    <div id="sidebar" className={styles.sidebar}>
      <div className={styles.sidebar__inside}>
        <div className={styles.sidebar__inside__top}>
          <div className={styles.sidebar__inside__top__list}>
            <ul>
              {sidebarTopData.map((item) => {
                const IconComponent = item.icon;
                return (
                  <li
                    key={item.id}
                    className={
                      activePage === item.path
                        ? `${styles.sidebar__inside__top__list__active}`
                        : null
                    }
                  >
                    <Link
                      onClick={() => handleSetActivePage(item.path)}
                      to={item.path}
                      className={
                        activePage === item.path
                          ? `${styles.sidebar__inside__top__list__active__link}`
                          : `${styles.sidebar__inside__top__list__link}`
                      }
                    >
                      <div
                        className={
                          styles.sidebar__inside__top__list__link__icon
                        }
                      >
                        <IconComponent
                          fontSize={20}
                          color={activePage === item.path ? "white" : "#405175"}
                        />
                        <span>{item.name}</span>
                      </div>
                      {activePage === item.path && (
                        <div
                          className={
                            styles.sidebar__inside__top__list__link__icon
                          }
                        >
                          <RxDotFilled color="#FFF" />
                        </div>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className={styles.sidebar__inside__bottom}>
          <div className={styles.sidebar__inside__bottom__list}>
            <ul>
              {sidebarBottomData.map((item) => {
                const IconComponent = item.icon;
                return (
                  <li
                    key={item.id}
                    className={
                      activePage === item.path
                        ? `${styles.sidebar__inside__bottom__list__active}`
                        : null
                    }
                  >
                    <Link
                      onClick={() => handleSetActivePage(item.path)}
                      to={item.path}
                      className={
                        activePage === item.path
                          ? `${styles.sidebar__inside__bottom__list__active__link}`
                          : `${styles.sidebar__inside__bottom__list__link}`
                      }
                    >
                      <div
                        className={
                          styles.sidebar__inside__bottom__list__link__icon
                        }
                      >
                        <IconComponent
                          fontSize={20}
                          color={activePage === item.path ? "white" : "#405175"}
                        />
                        <span>{item.name}</span>
                      </div>
                      {activePage === item.path && (
                        <div
                          className={
                            styles.sidebar__inside__bottom__list__link__icon
                          }
                        >
                          <RxDotFilled color="#FFF" />
                        </div>
                      )}
                    </Link>
                  </li>
                );
              })}

              <div
                className={styles.sidebar__inside__bottom__list__divider}
              ></div>

              <li>
                <a href="#">
                  <img src={UserImg} />
                  <span>Neil Larkins</span>
                </a>
              </li>

              <div
                className={styles.sidebar__inside__bottom__list__divider}
              ></div>

              <li>
                <a href="#">
                  <img src={TeamImg} />
                  <span>Epodbay Inc.</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
