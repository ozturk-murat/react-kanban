import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./taskcard.module.scss";
import { FaTasks } from "react-icons/fa";
import { users } from "../../../utils/users";
import {
  PriorityFirst,
  PrioritySecond,
  PriorityThird,
} from "./../../../public/icons/priorities";
import jane from "../../../public/images/jane.png";
import alex from "../../../public/images/alex.png";
import neil from "../../../public/images/neil.png";

function TaskCard({ task, taskIndex, colIndex }) {
  const boards = useSelector((state) => state.boards);
  const tasks = boards[0].columns.find((column, index) => index === colIndex);
  const taskDetails = tasks.tasks.find((task, i) => i === taskIndex);
  const [priorityIcon, setPriorityIcon] = useState(null);
  
  const ownerImage = (() => {
    if (taskDetails.owner && taskDetails.owner.id === "jane") {
      return jane;
    } else if (taskDetails.owner && taskDetails.owner.id === "alex") {
      return alex;
    } else if (taskDetails.owner && taskDetails.owner.id === "neil") {
      return neil;
    } else {
      return "";
    }
  })();

  useEffect(() => {
    if (taskDetails.priority === "low") {
      setPriorityIcon(<PriorityFirst />);
    } else if (taskDetails.priority === "medium") {
      setPriorityIcon(<PrioritySecond />);
    } else if (taskDetails.priority === "high") {
      setPriorityIcon(<PriorityThird />);
    }
  }, [taskDetails.priority]);

  const handleOnDrag = (e) => {
    e.dataTransfer.setData(
      "text",
      JSON.stringify({ taskIndex, prevColIndex: colIndex })
    );
  };

  return (
    <div>
      <div draggable onDragStart={handleOnDrag} className={styles.card}>
        <div className={styles.card__top}>
          <p>{taskDetails.description}</p>
        </div>
        <div className={styles.card__bottom}>
          <div className={styles.card__bottom__left}>
            <div className={styles.card__bottom__left__icon}>
              <FaTasks color="white" />
            </div>
            <span>{taskDetails.taskId}</span>
          </div>
          <div className={styles.card__bottom__right}>
            <div className={styles.card__bottom__right__icon}>
              {priorityIcon}
            </div>
            <div className={styles.card__bottom__right__story_point}>
              {taskDetails.storyPoint}
            </div>
            <div className={styles.card__bottom__right__user_image}>
            <img src={ownerImage} alt="User" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
