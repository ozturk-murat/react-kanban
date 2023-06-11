import React from "react";
import styles from "./sidebar.module.scss";
import { FiHome } from "react-icons/fi";
import { BsChat, BsCardChecklist, BsPlusLg, BsChatLeftText } from "react-icons/bs";
import { SlCompass } from "react-icons/sl";
import { IoIosRepeat } from "react-icons/io";
import { VscBell } from "react-icons/vsc"
import UserImg from "./../../../public/images/pp.png"; 
import TeamImg from "./../../../public/images/team.png"; 



function SideBar() {
  return (
    <div id="sidebar" className={styles.sidebar}>
      <div className={styles.sidebar__inside}>
        <div className={styles.sidebar__inside__top}>
          <div className={styles.sidebar__inside__top__list}>
            <ul>
              <li>
                <a href="#">
                  <FiHome fontSize={20} color="#405175" />
                  <span >Dashboard</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <BsChat fontSize={20} color="#405175" />
                  <span >Feedback</span>
                </a>
              </li>

              <li>
                <a href="#">
                  <BsCardChecklist fontSize={20} color="#405175" />
                  <span >Task</span>
                </a>
              </li>

              <li>
                <a href="#">
                  <SlCompass fontSize={20} color="#405175" />
                  <span >Roadmap</span>
                </a>
              </li>

              <li>
                <a href="#">
                  <IoIosRepeat fontSize={20} color="#405175" />
                  <span >Changelog</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.sidebar__inside__bottom}>
          <div className={styles.sidebar__inside__bottom__list}>
            <ul>
              <li>
                <a href="#">
                  <BsPlusLg fontSize={20} color="#405175" />
                  <span >Invite People</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <BsChatLeftText fontSize={20} color="#405175" />
                  <span >Help & Community</span>
                </a>
              </li>

              <li>
                <a href="#">
                  <VscBell fontSize={20} color="#405175" />
                  <span >Notifications</span>
                </a>
              </li>

              <div className={styles.sidebar__inside__bottom__list__divider}></div>

              <li>
                <a href="#">
                  <img src={UserImg} />
                  <span >Neil Larkins</span>
                </a>
              </li>

              <div className={styles.sidebar__inside__bottom__list__divider}></div>

              <li>
                <a href="#">
                  <img src={TeamImg} />
                  <span >Neil Larkins</span>
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
