import React from 'react'
import { useSelector } from 'react-redux';

function TaskCard({task, taskIndex, colIndex}) {
  const boards = useSelector((state) => state.boards);
  const tasks = boards[0].columns.find((column, index) => index === colIndex);
  const taskDetails = tasks.tasks.find((task, i) => i === taskIndex);

  const handleOnDrag = (e) => {
    e.dataTransfer.setData(
      "text",
      JSON.stringify({ taskIndex, prevColIndex: colIndex })
    );
  };


  return (
    <div>
      <div
        draggable
        onDragStart={handleOnDrag}
      >
        <p className=" font-bold tracking-wide ">{taskDetails.title}</p>
      </div>
    </div>
  )
}

export default TaskCard