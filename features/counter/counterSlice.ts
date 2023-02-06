import { RootState } from "@/store";
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  initialState: { count: 0 },
  name: "counter",
  reducers: {
    increment: (state) => {
      return { ...state, count: state.count + 1 };
    },
    decrement: (state) => {
      return { ...state, count: state.count - 1 };
    },
  },
});

// selector functions
export const selectCount = (state: RootState) => state.counter.count;

// actions
const { decrement, increment } = counterSlice.actions;
export default counterSlice.reducer;
