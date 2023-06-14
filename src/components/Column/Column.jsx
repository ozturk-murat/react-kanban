import React from "react";
import styles from "./column.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { dragTask } from "../../redux/features/boardsSlice";
import TaskCard from "../TaskCard/TaskCard";
import { FaDotCircle, FaCheckCircle } from "react-icons/fa";

function Column({ colIndex }) {
  const dispatch = useDispatch();
  const boards = useSelector((state) => state.boards);
  const col = boards[0].columns.find((column, index) => index === colIndex);

  const handleOnDrop = (e) => {
    const { prevColIndex, taskIndex } = JSON.parse(
      e.dataTransfer.getData("text")
    );

    if (colIndex !== prevColIndex) {
      dispatch(dragTask({ colIndex, prevColIndex, taskIndex }));
    }
  };

  const handleOnDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className={styles.column}
      onDrop={handleOnDrop}
      onDragOver={handleOnDragOver}
    >
      <div className={styles.column__header}>
        <div className={styles.column__header__board_name}>
          {col.name === "Done" ? (
            <FaCheckCircle color="green" />
          ) : (
            <FaDotCircle color="red" />
          )}
          <span>{col.name}</span>
        </div>
        <div className={styles.column__header__total}>
          <span>{col.tasks.length}</span>
        </div>
      </div>
      <div className={styles.column__divider}></div>
      <div className={styles.column__cards}>
        {col.tasks.map((index) => (
          <TaskCard key={index} taskIndex={index} colIndex={colIndex} />
        ))}
      </div>
    </div>
  );
}

export default Column;
