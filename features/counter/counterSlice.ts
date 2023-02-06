import { RootState } from "@/store";
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  initialState: { count: 0 },
  name: "counter",
  reducers: {
    increment: (state) => {
      return { ...state, count: state.count + 1 };
    },
    decrement: (state, action) => {
      console.log(action);
      return { ...state, count: state.count - 1 };
    },
    increaseByFive: (state, action) => {
      state.count = state.count + action.payload;
    },
  },
});

// selectors
export const selectCount = (state: RootState) => state.counter.count;

// actions
export const { decrement, increment, increaseByFive } = counterSlice.actions;
export default counterSlice.reducer;
