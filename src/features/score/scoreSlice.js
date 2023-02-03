import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  score: 0,
};

export const scoreSlice = createSlice({
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
