import { createSlice } from '@reduxjs/toolkit';

const initialState = 'dashboard';

const activePageSlice = createSlice({
    name: "activePage",
    initialState,
    reducers: {
        setActivePage: (state, action) => {
          return action.payload;
        },
      },
  });
  
export default activePageSlice.reducer;

export const { setActivePage } = activePageSlice.actions;
