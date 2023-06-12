import { createSlice } from "@reduxjs/toolkit";
import data from "../../../utils/boardData.json";

const boardsSlice = createSlice({
  name: "boards",
  initialState: data.boards,
  reducers: {
    addTask: (state, action) => {
      const { title, status, description, scrumPoint, owner, taskId, newColIndex } =
        action.payload;
      const task = { title, status, description, scrumPoint, owner, taskId };
      const board = state[0]; // İlk board'u seçmek için
      const column = board.columns.find((col, index) => index === newColIndex);
      column.tasks.push(task);
    },
  },
  dragTask: (state, action) => {
    const { colIndex, prevColIndex, taskIndex } = action.payload;
    const prevCol = board.columns.find((col, i) => i === prevColIndex);
    const task = prevCol.tasks.splice(taskIndex, 1)[0];
    board.columns.find((col, i) => i === colIndex).tasks.push(task);
  },
});

export const { addTask, dragTask } = boardsSlice.actions;

export default boardsSlice;
