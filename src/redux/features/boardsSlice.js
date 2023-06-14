import { createSlice } from "@reduxjs/toolkit";
import data from "../../../utils/boardData.json";
import { getOwnerNameById } from "../../../utils/users";
import { toast } from "react-toastify";

const boardsSlice = createSlice({
  name: "boards",
  initialState: data.boards,
  reducers: {
    addTask: (state, action) => {
      const {
        title,
        status,
        description,
        storyPoint,
        owner,
        priority,
        taskId,
        newColIndex,
      } = action.payload;
      const task = {
        title,
        status,
        description,
        storyPoint,
        priority,
        owner: {
          id: owner.id,
          name: getOwnerNameById(owner.id),
        },
        taskId,
      };
      const board = state[0];
      const column = board.columns.find((col, index) => index === newColIndex);
      column.tasks.push(task);
    },
    dragTask: (state, action) => {
      const { colIndex, prevColIndex, taskIndex } = action.payload;
      const board = state[0];
      const prevCol = board.columns.find((col, i) => i === prevColIndex);
      const task = prevCol.tasks.splice(taskIndex, 1)[0];
      const targetCol = board.columns.find((col, i) => i === colIndex);
      targetCol.tasks.push(task);

      if (targetCol.name === "Done") {
        task.status = "Done";
        toast.success("Task moved to Done!");
      } else if (targetCol.name === "Todo") {
        task.status = "Todo";
        toast.info("Task moved to Todo!");
      }
    },
  },
});

export const { addTask, dragTask } = boardsSlice.actions;

export default boardsSlice;
