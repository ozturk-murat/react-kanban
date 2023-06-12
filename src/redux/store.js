import { configureStore } from '@reduxjs/toolkit';
import activePageReducer from './features/slice';
import boardsSlice from './features/boardsSlice';

const store = configureStore({
  reducer: {
    activePage: activePageReducer,
    boards: boardsSlice.reducer
  },
});

export default store;
