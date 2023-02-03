import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  score: 0,
};

export const counterSlice = createSlice({
  name: "score",
  initialState,
  reducers: {
    increment: (state) => {
      state.score += 1;
    },
    reset: (state) => {
      state.score = 0;
    },
  },
});

export const { increment, reset } = scoreSlice.actions;

export default scoreSlice.reducer;
