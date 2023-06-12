import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Column from "../../components/Column/Column";
import styles from "./task.module.scss";

function Task() {
  const boards = useSelector((state) => state.boards);
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    if (boards.length > 0) {
      const columnsData = boards[0].columns.map((column) => column.name);
      setColumns(columnsData);
    }
  }, [boards]);

  return (
    <div className={styles.wrapper}>
      {columns.map((col, index) => (
        <Column key={index} colIndex={index} />
      ))}
    </div>
  );
}

export default Task;
